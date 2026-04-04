type LeadPayload = {
  fullName: string;
  contact: string;
  email: string;
  package: "adventure" | "resort";
};

const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`Missing ${key}`);
  return value;
};

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = payload.fullName?.trim() ?? "";
  const contact = payload.contact?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const pkg = payload.package === "resort" ? "Resort" : "Adventure";

  if (!fullName || !contact || !email) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  let apiKey: string;
  let baseId: string;
  let tableCandidates: string[];
  try {
    apiKey = getEnv("AIRTABLE_API_KEY");
    baseId = getEnv("AIRTABLE_BASE_ID");
    const candidates = [
      process.env.AIRTABLE_TABLE_ID?.trim(),
      process.env.AIRTABLE_TABLE_NAME?.trim(),
      process.env.AIRTABLE_TABLE_ID,
    ]
      .map((v) => v?.trim())
      .filter((v): v is string => Boolean(v));

    tableCandidates = Array.from(new Set(candidates));
    if (tableCandidates.length === 0) {
      tableCandidates = [getEnv("AIRTABLE_TABLE_ID")];
    }
  } catch (e) {
    const message = e instanceof Error ? e.message : "Server misconfigured";
    return Response.json({ error: message }, { status: 500 });
  }

  const fieldMappings = [
    { fullName: "FullName", contact: "Mobile", email: "EmailID", package: "Package" },
    { fullName: "Full Name", contact: "Mobile No", email: "Email ID", package: "Package" },
    { fullName: "FullName", contact: "Mobile No", email: "EmailID", package: "Package" },
    { fullName: "Full Name", contact: "Mobile", email: "Email ID", package: "Package" },
  ] as const;

  let lastFailure:
    | {
        status: number;
        error: string;
        details: string;
        table: string;
        type?: string;
        fieldMapping?: typeof fieldMappings[number];
      }
    | undefined;

  for (const tableIdOrName of tableCandidates) {
    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableIdOrName)}`;

    let shouldTryNextTable = false;

    for (const mapping of fieldMappings) {
      const body = JSON.stringify({
        records: [
          {
            fields: {
              [mapping.fullName]: fullName,
              [mapping.contact]: contact,
              [mapping.email]: email,
              [mapping.package]: pkg,
            },
          },
        ],
      });

      let res: Response;
      try {
        res = await fetch(airtableUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body,
          signal: AbortSignal.timeout(25000),
        });
      } catch (e) {
        const message = e instanceof Error ? e.message : "Fetch failed";
        lastFailure = {
          status: 504,
          error: "Could not reach Airtable. Please try again.",
          details: message,
          table: tableIdOrName,
          type: "FETCH_FAILED",
          fieldMapping: mapping,
        };
        shouldTryNextTable = false;
        break;
      }

      if (res.ok) {
        return Response.json({ ok: true });
      }

      const text = await res.text().catch(() => "");
      let message = "Airtable request failed";
      let type: string | undefined;
      try {
        const parsed = JSON.parse(text) as { error?: { message?: string; type?: string } } | null;
        const parsedMessage = parsed?.error?.message?.trim();
        if (parsedMessage) message = parsedMessage;
        const parsedType = parsed?.error?.type?.trim();
        if (parsedType) type = parsedType;
      } catch {}

      lastFailure = {
        status: res.status,
        error: message,
        details: text.slice(0, 800),
        table: tableIdOrName,
        type,
        fieldMapping: mapping,
      };

      if (type === "UNKNOWN_FIELD_NAME") {
        continue;
      }

      if (type === "INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND" || res.status === 404) {
        shouldTryNextTable = true;
      }

      break;
    }

    const canRetry =
      shouldTryNextTable &&
      tableCandidates.length > 1 &&
      tableCandidates[tableCandidates.length - 1] !== tableIdOrName;

    if (!canRetry) break;
  }

  if (!lastFailure) {
    return Response.json({ error: "Airtable request failed" }, { status: 502 });
  }

  const responseStatus = lastFailure.status >= 400 && lastFailure.status < 500 ? lastFailure.status : 502;
  return Response.json(lastFailure, { status: responseStatus });
}

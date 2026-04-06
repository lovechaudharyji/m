const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`Missing ${key}`);
  return value;
};

type AirtableRecord = {
  id: string;
  fields?: Record<string, unknown>;
  createdTime?: string;
};

type AirtableAttachment = {
  id?: string;
  url?: string;
  filename?: string;
  type?: string;
  thumbnails?: unknown;
};

const readStringField = (fields: Record<string, unknown> | undefined, candidates: readonly string[]) => {
  if (!fields) return undefined;
  for (const key of candidates) {
    const value = fields[key];
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed) return trimmed;
    }
    if (typeof value === "number") {
      return String(value);
    }
  }
  return undefined;
};

const readAttachmentField = (
  fields: Record<string, unknown> | undefined,
  candidates: readonly string[],
): { url: string; filename?: string; thumbnailUrl?: string } | undefined => {
  if (!fields) return undefined;
  for (const key of candidates) {
    const value = fields[key];
    if (!Array.isArray(value) || value.length === 0) continue;
    const first = value[0] as AirtableAttachment | undefined;
    const url = typeof first?.url === "string" ? first.url.trim() : "";
    if (!url) continue;
    const filename = typeof first?.filename === "string" ? first.filename.trim() : undefined;
    const thumbnails = first?.thumbnails as Record<string, unknown> | undefined;
    const small = thumbnails?.small as Record<string, unknown> | undefined;
    const large = thumbnails?.large as Record<string, unknown> | undefined;
    const thumbnailUrl =
      (typeof small?.url === "string" ? small.url.trim() : "") || (typeof large?.url === "string" ? large.url.trim() : "") || undefined;
    return { url, filename, thumbnailUrl };
  }
  return undefined;
};

const normalizePhone = (raw: string) => raw.replace(/[^\d]/g, "");

export async function GET() {
  let apiKey: string;
  let baseId: string;
  let table: string;

  try {
    apiKey = getEnv("AIRTABLE_API_KEY");
    baseId = getEnv("AIRTABLE_BASE_ID");
    table =
      process.env.AIRTABLE_2TABLE_NAME?.trim() ||
      process.env.AIRTABLE_2TABLE_ID?.trim() ||
      getEnv("AIRTABLE_2TABLE_NAME");
  } catch (e) {
    const message = e instanceof Error ? e.message : "Server misconfigured";
    return Response.json({ error: message }, { status: 500 });
  }

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}?pageSize=25`;

  let res: Response;
  try {
    res = await fetch(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
      signal: AbortSignal.timeout(25000),
      cache: "no-store",
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Fetch failed";
    return Response.json({ error: "Could not reach Airtable", details: message }, { status: 504 });
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return Response.json({ error: "Airtable request failed", status: res.status, details: text.slice(0, 800) }, { status: 502 });
  }

  const data = (await res.json()) as { records?: AirtableRecord[] } | null;
  const records = data?.records ?? [];

  const contacts = records
    .map((r) => {
      const numberRaw = readStringField(r.fields, ["Number", "number", "Phone", "phone", "Mobile", "Mobile No"]);
      const email = readStringField(r.fields, ["Email", "email", "EmailID", "Email ID"]);
      const number = numberRaw ? normalizePhone(numberRaw) : undefined;
      return { number: number && number.length >= 8 ? number : undefined, email };
    })
    .filter((c) => Boolean(c.number || c.email));

  const pdfs = records
    .map((r) => {
      const attachment = readAttachmentField(r.fields, ["Pdf", "PDF", "pdf", "Itinerary PDF", "Itinerary"]);
      if (!attachment) return undefined;
      const title = readStringField(r.fields, ["Record Name", "Name", "Title"]) ?? "Itinerary";
      const filename = attachment.filename;
      const thumbnailUrl = attachment.thumbnailUrl;
      if (filename && thumbnailUrl) return { title, url: attachment.url, filename, thumbnailUrl };
      if (filename) return { title, url: attachment.url, filename };
      if (thumbnailUrl) return { title, url: attachment.url, thumbnailUrl };
      return { title, url: attachment.url };
    })
    .filter((p): p is { title: string; url: string; filename?: string; thumbnailUrl?: string } => Boolean(p?.url));

  const seen = new Set<string>();
  const uniquePdfs = pdfs.filter((p) => {
    if (seen.has(p.url)) return false;
    seen.add(p.url);
    return true;
  });

  return Response.json({ contacts, pdfs: uniquePdfs });
}

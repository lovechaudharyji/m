export default function Loading() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-5 py-10">
        <div className="grid gap-6">
          <div className="h-12 w-3/4 animate-pulse rounded-2xl bg-foreground/10" />
          <div className="h-5 w-2/3 animate-pulse rounded-2xl bg-foreground/10" />
          <div className="h-5 w-1/2 animate-pulse rounded-2xl bg-foreground/10" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="h-44 animate-pulse rounded-3xl bg-foreground/10" />
            <div className="h-44 animate-pulse rounded-3xl bg-foreground/10" />
          </div>
          <div className="mt-2 grid gap-4 sm:grid-cols-3">
            <div className="h-40 animate-pulse rounded-3xl bg-foreground/10" />
            <div className="h-40 animate-pulse rounded-3xl bg-foreground/10" />
            <div className="h-40 animate-pulse rounded-3xl bg-foreground/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

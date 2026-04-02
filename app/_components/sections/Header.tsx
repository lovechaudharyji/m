type HeaderProps = {
  brandName: string;
};

export default function Header({ brandName }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 backdrop-blur">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-white text-navy shadow-sm">
            WE
          </span>
          <div className="leading-tight">
            <div className="font-heading text-sm font-bold tracking-wide text-navy">{brandName}</div>
            <div className="text-xs text-foreground/70">Leave Friday. Return Sunday.</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-foreground/80 md:flex">
          <a href="#experience" className="hover:text-foreground">
            Experience
          </a>
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
          <a href="#itinerary" className="hover:text-foreground">
            Itinerary
          </a>
          <a href="#gallery" className="hover:text-foreground">
            Gallery
          </a>
          <a href="#booking" className="hover:text-foreground">
            Reserve
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="we-button hidden rounded-full border border-border bg-white/50 px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white md:inline-flex"
          >
            View Plans
          </a>
          <a
            href="#booking"
            className="we-button inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition duration-300 hover:bg-brand-hover"
          >
            Book Your Weekend
          </a>
        </div>
      </div>
    </header>
  );
}

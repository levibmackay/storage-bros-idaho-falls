import { PHONE_DISPLAY, PHONE_TEL } from "../data";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-concrete-300/15 bg-charcoal-950/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-sans text-lg font-bold tracking-tight text-paper sm:text-xl">
            STORAGE <span className="text-amber">BROS</span>
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.15em] text-concrete-500 sm:inline">
            Idaho Falls, ID
          </span>
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="border border-amber/70 px-3 py-1.5 font-mono text-xs text-amber transition-colors hover:bg-amber hover:text-charcoal-950 sm:text-sm sm:px-4"
        >
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

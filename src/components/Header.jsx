import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { PHONE_DISPLAY, PHONE_TEL } from "../data";

const NAV_LINKS = [
  { index: "01", label: "Datasheet", href: "#datasheet" },
  { index: "02", label: "Security", href: "#security" },
  { index: "03", label: "Access", href: "#access" },
  { index: "04", label: "Local Area", href: "#local-area" },
  { index: "05", label: "Contact", href: "#contact" },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const handleChange = (event) => setReduced(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });
  const progress = reducedMotion ? scrollYProgress : smoothProgress;

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

        <nav
          aria-label="Section index"
          className="hidden items-center gap-3 lg:flex xl:gap-5"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-11 items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-concrete-300 transition-colors hover:text-amber focus-visible:text-amber"
            >
              <span className="text-amber">{link.index}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex min-h-11 items-center border border-amber/70 px-3 py-1.5 font-mono text-xs text-amber transition-colors hover:bg-amber hover:text-charcoal-950 sm:text-sm sm:px-4"
          >
            {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-concrete-300/30 text-paper lg:hidden"
          >
            <span className="sr-only">
              {menuOpen ? "Close section menu" : "Open section menu"}
            </span>
            <span
              aria-hidden="true"
              className={`block h-px w-5 bg-paper transition-transform ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              aria-hidden="true"
              className={`block h-px w-5 bg-paper transition-transform ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Section index"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-concrete-300/15 bg-charcoal-950 lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-11 items-center gap-3 border-b border-concrete-300/10 font-mono text-sm uppercase tracking-[0.12em] text-concrete-300 last:border-0 hover:text-amber"
                  >
                    <span className="text-amber">{link.index}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="h-[2px] w-full origin-left bg-amber"
      />
    </header>
  );
}

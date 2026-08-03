import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SpecPlate from "../components/SpecPlate";
import { ADDRESS_LINE1, ADDRESS_LINE2, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "../data";

export default function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-charcoal-900 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading
            index="05"
            title="Call, email, or stop by the office."
            note="Reserve your unit"
          />
        </Reveal>

        <div className="grid min-w-0 gap-12 sm:grid-cols-[1.3fr_1fr] sm:gap-16">
          <Reveal className="min-w-0">
            <div className="space-y-4 font-mono text-sm sm:text-base">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex min-h-11 w-fit items-center border-b border-transparent text-paper transition-colors hover:border-amber hover:text-amber"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex min-h-11 w-fit max-w-full items-center break-all border-b border-transparent text-paper transition-colors hover:border-amber hover:text-amber"
              >
                {EMAIL}
              </a>
              <p className="text-concrete-300">
                {ADDRESS_LINE1}
                <br />
                {ADDRESS_LINE2}
              </p>
            </div>

            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-8 flex min-h-11 w-fit items-center bg-amber px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-charcoal-950 transition-transform hover:scale-[1.02]"
            >
              Call for a unit
            </a>
          </Reveal>

          <Reveal delay={0.06} className="min-w-0 sm:justify-self-end">
            <SpecPlate compact />
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-concrete-300/15 pt-6 text-xs text-concrete-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Storage Bros — Idaho Falls, ID</p>
          <p className="font-mono">Mockup pitch site — not for search indexing</p>
        </div>
      </div>
    </footer>
  );
}

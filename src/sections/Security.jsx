import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { SECURITY_SPECS } from "../data";

export default function Security() {
  return (
    <section className="border-t border-concrete-300/15">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading index="02" title="Security &amp; Access Specs" note="Verified on site" />
        </Reveal>

        <div className="grid gap-x-8 sm:grid-cols-2">
          {SECURITY_SPECS.map((spec, i) => (
            <Reveal
              key={spec.label}
              delay={(i % 5) * 0.03}
              className="flex items-baseline justify-between gap-4 border-b border-concrete-300/10 py-4"
            >
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-concrete-500">
                {spec.label}
              </span>
              <span className="text-right font-sans text-sm text-paper sm:text-base">
                {spec.value}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

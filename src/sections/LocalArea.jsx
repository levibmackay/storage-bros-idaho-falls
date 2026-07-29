import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { NEARBY_AREAS } from "../data";

export default function LocalArea() {
  return (
    <section className="relative overflow-hidden border-t border-concrete-300/15">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--concrete-300) 0, var(--concrete-300) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading index="04" title="Serving East Idaho" />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-[1fr_1fr] sm:gap-12">
          <Reveal>
            <p className="max-w-md text-base leading-relaxed text-concrete-300 sm:text-lg">
              Sitting just off US-26 at Iona Rd, Storage Bros is a straight shot for
              anyone moving in or out of Idaho Falls and the surrounding communities —
              no downtown traffic, no confusing turns, just a gated lot on the highway.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-concrete-500">
              Nearby areas served
            </p>
            <ul className="flex flex-wrap gap-2">
              {NEARBY_AREAS.map((area) => (
                <li
                  key={area}
                  className="border border-concrete-300/25 px-3 py-1.5 font-mono text-sm text-paper"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-xs text-concrete-500">
              US-26 &amp; E Iona Rd — Idaho Falls, ID 83401
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

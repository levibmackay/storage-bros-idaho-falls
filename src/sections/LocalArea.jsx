import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { NEARBY_AREAS } from "../data";

// Stylized radial layout for the schematic — angles only, not distances.
// Purely decorative positioning, no invented mileage or drive times.
const SCHEMATIC_ANGLES = [-90, -34, 34, 90, 146, 214];

export default function LocalArea() {
  return (
    <section id="local-area" className="relative scroll-mt-20 overflow-hidden sm:scroll-mt-24">
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
          <SectionHeading
            index="04"
            title="Serving East Idaho"
            note="US-26 &amp; E Iona Rd"
          />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-[1fr_1fr] sm:gap-12 lg:gap-16">
          <Reveal>
            <p className="max-w-md text-base leading-relaxed text-concrete-300 sm:text-lg">
              Sitting just off US-26 at Iona Rd, Storage Bros is a straight shot for
              anyone moving in or out of Idaho Falls and the surrounding communities —
              no downtown traffic, no confusing turns, just a gated lot on the highway.
            </p>

            {/* Decorative schematic — explicitly stylized, not a real map. */}
            <div className="relative mx-auto mt-10 aspect-square w-full max-w-sm">
              <svg
                viewBox="0 0 300 300"
                className="h-full w-full"
                role="img"
                aria-label="Stylized schematic diagram, not to scale, showing Storage Bros at the center of its East Idaho service area"
              >
                <circle
                  cx="150"
                  cy="150"
                  r="120"
                  fill="none"
                  stroke="var(--color-concrete-300)"
                  strokeOpacity="0.15"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="80"
                  fill="none"
                  stroke="var(--color-concrete-300)"
                  strokeOpacity="0.12"
                />

                {NEARBY_AREAS.map((area, i) => {
                  const angle = (SCHEMATIC_ANGLES[i % SCHEMATIC_ANGLES.length] * Math.PI) / 180;
                  const r = 118;
                  const x = 150 + r * Math.cos(angle);
                  const y = 150 + r * Math.sin(angle);
                  const labelX = 150 + (r + 14) * Math.cos(angle);
                  const labelY = 150 + (r + 14) * Math.sin(angle);
                  const anchor =
                    Math.cos(angle) > 0.3 ? "start" : Math.cos(angle) < -0.3 ? "end" : "middle";
                  return (
                    <g key={area}>
                      <line
                        x1="150"
                        y1="150"
                        x2={x}
                        y2={y}
                        stroke="var(--color-concrete-300)"
                        strokeOpacity="0.35"
                        strokeDasharray="3 4"
                      />
                      <circle cx={x} cy={y} r="4" fill="var(--color-amber)" />
                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor={anchor}
                        dominantBaseline="middle"
                        fontFamily="var(--font-mono)"
                        fontSize="11"
                        fill="var(--color-concrete-300)"
                      >
                        {area}
                      </text>
                    </g>
                  );
                })}

                {/* Center marker — Storage Bros */}
                <g>
                  <circle cx="150" cy="150" r="10" fill="none" stroke="var(--color-amber)" strokeWidth="1.5" />
                  <line x1="140" y1="150" x2="160" y2="150" stroke="var(--color-amber)" strokeWidth="1.5" />
                  <line x1="150" y1="140" x2="150" y2="160" stroke="var(--color-amber)" strokeWidth="1.5" />
                </g>

                {/* Compass mark */}
                <text
                  x="150"
                  y="24"
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="11"
                  fill="var(--color-concrete-500)"
                >
                  N
                </text>
                <line x1="150" y1="30" x2="150" y2="10" stroke="var(--color-concrete-500)" strokeOpacity="0.5" />
              </svg>
              <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-concrete-500">
                Schematic diagram — not to scale
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-concrete-500">
              Coverage — Nearby Areas Served
            </p>
            <ul className="border-y border-concrete-300/20">
              {NEARBY_AREAS.map((area, i) => (
                <Reveal
                  as="li"
                  key={area}
                  delay={i * 0.03}
                  className="flex items-center justify-between gap-4 border-b border-concrete-300/10 py-3 last:border-0"
                >
                  <span className="font-mono text-xs text-concrete-500">
                    {String(i).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-sans text-sm text-paper sm:text-base">{area}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-amber">
                    Served
                  </span>
                </Reveal>
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

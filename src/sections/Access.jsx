import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import facility2 from "../assets/photos/facility-2.jpeg";
import { GATE_HOURS, OFFICE_HOURS } from "../data";

export default function Access() {
  return (
    <section className="border-t border-concrete-300/15 bg-charcoal-900">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading index="03" title="Access &amp; Hours" />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-[1fr_1fr] sm:gap-12">
          <Reveal>
            <div className="border border-concrete-300/20 p-6 sm:p-8">
              <p className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-concrete-500">
                Gate access
              </p>
              <p className="mb-6 font-mono text-2xl text-amber sm:text-3xl">{GATE_HOURS}</p>

              <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-concrete-500">
                Office hours
              </p>
              <table className="w-full border-collapse">
                <tbody>
                  {OFFICE_HOURS.map((row) => (
                    <tr key={row.day} className="border-b border-concrete-300/10 last:border-0">
                      <td className="py-2 pr-4 text-sm text-concrete-300 sm:text-base">
                        {row.day}
                      </td>
                      <td className="py-2 text-right font-mono text-sm text-paper sm:text-base">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="relative aspect-[3/4] w-full overflow-hidden border border-concrete-300/20 sm:aspect-auto">
            <img
              src={facility2}
              alt="Storage Bros office entrance with gated facility and keypad access at the Idaho Falls location"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

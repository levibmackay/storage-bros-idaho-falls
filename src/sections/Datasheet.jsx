import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { UNITS } from "../data";

export default function Datasheet() {
  return (
    <section id="datasheet" className="scroll-mt-20 bg-charcoal-900 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading index="01" title="Unit Datasheet" note="Idaho Falls · 2268 E Iona Rd" />
        </Reveal>

        {/* Below sm: stacked cards so nothing scrolls horizontally on narrow screens. */}
        <div className="flex flex-col gap-3 sm:hidden">
          {UNITS.map((unit, i) => (
            <Reveal
              key={unit.size}
              delay={Math.min(i, 4) * 0.03}
              className="border border-concrete-300/20 p-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-xl text-paper">{unit.size}</span>
                <span className="font-mono text-xl text-amber">{unit.price}</span>
              </div>
              <p className="mt-2 text-sm text-concrete-300">{unit.fits}</p>
            </Reveal>
          ))}
        </div>

        {/* sm and up: full datasheet table, scrolls only within its own container. */}
        <Reveal delay={0.05} className="hidden overflow-x-auto sm:block">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-concrete-300/25 text-xs uppercase tracking-[0.15em] text-concrete-500">
                <th className="py-3 pr-4 font-mono font-medium">Size</th>
                <th className="py-3 pr-4 font-sans font-medium">What Fits</th>
                <th className="py-3 pl-4 text-right font-mono font-medium">Monthly</th>
              </tr>
            </thead>
            <tbody>
              {UNITS.map((unit) => (
                <tr
                  key={unit.size}
                  className="border-b border-concrete-300/10 transition-colors hover:bg-charcoal-950/50"
                >
                  <td className="whitespace-nowrap py-4 pr-4 font-mono text-lg text-paper sm:text-xl">
                    {unit.size}
                  </td>
                  <td className="py-4 pr-4 text-sm text-concrete-300 sm:text-base">
                    {unit.fits}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 text-right font-mono text-lg text-amber sm:text-xl">
                    {unit.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 font-mono text-xs text-concrete-500">
            * Rates are approximate and subject to change — call {" "}
            <a href="tel:+12087156747" className="text-concrete-300 underline decoration-concrete-500 underline-offset-2 hover:text-amber">
              (208) 715-6747
            </a>{" "}
            for current availability and pricing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

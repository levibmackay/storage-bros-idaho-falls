import { ADDRESS_LINE1, ADDRESS_LINE2, GATE_HOURS, PHONE_DISPLAY, PHONE_TEL } from "../data";

export default function SpecPlate({ compact = false }) {
  return (
    <div
      className={`border border-concrete-300/40 bg-charcoal-950/80 backdrop-blur-[2px] font-mono text-paper ${
        compact ? "text-[11px] p-3 sm:text-xs sm:p-4" : "text-xs p-4 sm:text-sm sm:p-5"
      }`}
    >
      <div className="mb-2 flex items-center justify-between gap-3 border-b border-concrete-300/30 pb-2">
        <span className="tracking-[0.2em] text-amber uppercase">Facility Spec</span>
        <span className="text-concrete-500">ID-83401</span>
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
        <dt className="text-concrete-500">ADDR</dt>
        <dd>{ADDRESS_LINE1}, {ADDRESS_LINE2}</dd>
        <dt className="text-concrete-500">GATE</dt>
        <dd>{GATE_HOURS}</dd>
        <dt className="text-concrete-500">TEL</dt>
        <dd>
          <a href={`tel:${PHONE_TEL}`} className="hover:text-amber transition-colors">
            {PHONE_DISPLAY}
          </a>
        </dd>
      </dl>
    </div>
  );
}

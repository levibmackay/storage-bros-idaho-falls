export default function SectionHeading({ index, title, note }) {
  return (
    <div className="mb-8 flex flex-col gap-3 border-b border-concrete-300/15 pb-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-amber">{index}</span>
        <h2 className="font-sans text-2xl font-bold tracking-tight text-paper sm:text-3xl">
          {title}
        </h2>
      </div>
      {note && (
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-concrete-500">
          {note}
        </p>
      )}
    </div>
  );
}

/**
 * Blueprint/print-spec-sheet corner registration marks.
 * Purely decorative — reinforces the "datasheet" identity on framed
 * photos and cards. Always aria-hidden.
 */
export default function CornerMarks({ inset = "inset-2 sm:inset-3" }) {
  const corners = [
    { pos: "top-0 left-0", border: "border-t border-l" },
    { pos: "top-0 right-0", border: "border-t border-r" },
    { pos: "bottom-0 left-0", border: "border-b border-l" },
    { pos: "bottom-0 right-0", border: "border-b border-r" },
  ];

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${inset} z-10`}>
      {corners.map(({ pos, border }) => (
        <span
          key={pos}
          className={`absolute h-3 w-3 border-amber/80 sm:h-4 sm:w-4 ${pos} ${border}`}
        />
      ))}
    </div>
  );
}

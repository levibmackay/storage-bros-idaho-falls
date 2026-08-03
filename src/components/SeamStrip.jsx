/**
 * Recurring section-seam motif: a tape-measure tick strip.
 * Pure decorative connective tissue between sections — replaces flat
 * border-t seams with a motif drawn from the storage/moving domain.
 */
export default function SeamStrip() {
  return (
    <div
      aria-hidden="true"
      className="relative h-3 w-full overflow-hidden bg-charcoal-950 sm:h-4"
    >
      <span
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-concrete-300) 0 1px, transparent 1px 10px)",
          backgroundSize: "100% 45%",
          backgroundPosition: "bottom",
          backgroundRepeat: "repeat-x",
          opacity: 0.3,
        }}
      />
      <span
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-amber) 0 2px, transparent 2px 50px)",
          backgroundSize: "100% 80%",
          backgroundPosition: "bottom",
          backgroundRepeat: "repeat-x",
          opacity: 0.85,
        }}
      />
    </div>
  );
}

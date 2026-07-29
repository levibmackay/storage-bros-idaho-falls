import { motion } from "framer-motion";
import facility1 from "../assets/photos/facility-1.jpeg";
import SpecPlate from "../components/SpecPlate";
import { PHONE_TEL } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden">
      <img
        src={facility1}
        alt="Storage Bros gated self storage facility at 2268 E Iona Rd, Idaho Falls, Idaho"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr] sm:items-end sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-amber">
              Iona Rd &amp; US-26 · Idaho Falls, ID
            </p>
            <h1 className="max-w-xl font-sans text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl md:text-6xl">
              Drive-up self storage, built for Idaho Falls.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-concrete-300 sm:text-lg">
              Gated, fenced, and camera-monitored at 2268 E Iona Rd — month-to-month,
              no long-term contract, and units big enough to actually fit your load.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="bg-amber px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-charcoal-950 transition-transform hover:scale-[1.02]"
              >
                Call for a unit
              </a>
              <a
                href="#datasheet"
                className="border border-concrete-300/40 px-6 py-3 font-mono text-sm uppercase tracking-wide text-paper transition-colors hover:border-amber hover:text-amber"
              >
                See pricing
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut", delay: 0.08 }}
            className="sm:justify-self-end"
          >
            <SpecPlate />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

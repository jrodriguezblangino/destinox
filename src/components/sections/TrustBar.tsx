import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STATS = [
  { num: "+500", label: "Grupos atendidos" },
  { num: "RNAV", label: "Legajo N° 20904" },
  { num: "7", label: "Excursiones locales" },
  { num: "100%", label: "Atención personalizada" },
];

export default function TrustBar() {
  return (
    <section className="bg-surface border-y border-border py-20 md:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
      >
        {STATS.map((s) => (
          <motion.div key={s.label} variants={fadeUp} className="text-center lg:text-left">
            <div className="font-display italic font-semibold text-accent text-5xl md:text-6xl leading-none">
              {s.num}
            </div>
            <div className="mt-4 text-[11px] tracking-[0.25em] uppercase text-text-muted">
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

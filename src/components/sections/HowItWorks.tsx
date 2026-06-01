import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STEPS = [
  {
    n: "01",
    title: "Contactanos",
    desc: "Escribinos por WhatsApp o email contándonos qué tipo de grupo tienen, fechas y destino de interés.",
  },
  {
    n: "02",
    title: "Te armamos una propuesta",
    desc: "En 24hs te enviamos un presupuesto detallado con transporte, alojamiento y actividades.",
  },
  {
    n: "03",
    title: "Ajustamos juntos",
    desc: "Modificamos el itinerario hasta que quede perfecto para tu grupo.",
  },
  {
    n: "04",
    title: "¡A viajar!",
    desc: "Nos encargamos de todo. Vos y tu grupo solo tienen que disfrutar.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-20 max-w-2xl"
        >
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
            Cómo trabajamos
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display italic font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Cuatro pasos, una sola conversación.
          </motion.h2>
        </motion.div>

        <div className="relative">
          <div
            className="hidden md:block absolute top-12 left-[8%] right-[8%] border-t border-dashed border-accent/30"
            aria-hidden
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative"
          >
            {STEPS.map((s) => (
              <motion.div key={s.n} variants={fadeUp} className="relative">
                <div className="font-display italic text-accent/15 text-[7rem] md:text-[8rem] leading-none -mb-12 md:-mb-16 select-none pointer-events-none">
                  {s.n}
                </div>
                <div className="relative">
                  <div className="hidden md:block w-3 h-3 rounded-full bg-accent mb-6 relative z-10" />
                  <h3 className="text-[13px] tracking-[0.2em] uppercase font-medium text-text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-text-muted text-sm leading-relaxed font-light max-w-[260px]">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

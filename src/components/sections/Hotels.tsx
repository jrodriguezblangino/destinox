import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const HOTELS = [
  {
    label: "Hotel 01",
    category: "Estándar",
    desc: "Cómodos, bien ubicados, con todo lo necesario para disfrutar.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
  },
  {
    label: "Hotel 02",
    category: "Estándar",
    desc: "Ideal para grupos: habitaciones amplias, desayuno incluido y muy cerca del centro.",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
  },
  {
    label: "Hotel 03",
    category: "Superior",
    desc: "Más comodidades, mejores vistas, atención premium.",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
  },
  {
    label: "Hotel 04",
    category: "Superior",
    desc: "Vista al lago, piscina y servicios pensados para una estadía sin preocupaciones.",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
  },
];

export default function Hotels() {
  return (
    <section id="hoteles" className="bg-surface py-28 md:py-36 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
            Alojamientos en Villa Carlos Paz
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display italic font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Donde descansar importa tanto como el destino.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 text-text-muted text-base md:text-lg leading-relaxed font-light"
          >
            Trabajamos con una selección de hoteles, cabañas y departamentos turísticos en Villa Carlos Paz y alrededores. Categorías estándar y superior, siempre con la atención directa de nuestro equipo.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {HOTELS.map((h) => (
            <motion.div
              key={h.label}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-sm border border-border bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={h.img}
                  alt={h.label}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span
                  className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border ${
                    h.category === "Superior"
                      ? "border-accent text-accent bg-bg/70"
                      : "border-border text-text-muted bg-bg/70"
                  }`}
                >
                  {h.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display italic text-xl text-text-primary">{h.label}</h3>
                <p className="mt-2 text-text-muted text-sm leading-relaxed font-light">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

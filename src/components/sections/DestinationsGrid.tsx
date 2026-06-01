import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const CATEGORIES = ["Todas", "Sierras", "Aventura", "Historia", "Compras", "Estudiantiles"] as const;
type Category = (typeof CATEGORIES)[number];

const EXCURSIONS: { name: string; area: string; tags: Exclude<Category, "Todas">[]; img: string }[] = [
  {
    name: "Villa General Belgrano",
    area: "Calamuchita · Córdoba",
    tags: ["Historia", "Sierras"],
    img: "https://images.unsplash.com/photo-1601976748707-78c8e3fe70c6?w=1200&q=80",
  },
  {
    name: "7 Cascadas",
    area: "Punilla · Córdoba",
    tags: ["Aventura", "Sierras"],
    img: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200&q=80",
  },
  {
    name: "Tren de las Sierras",
    area: "Valle de Punilla",
    tags: ["Historia", "Sierras"],
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80",
  },
  {
    name: "La Cumbrecita",
    area: "Calamuchita · Córdoba",
    tags: ["Sierras", "Aventura"],
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80",
  },
  {
    name: "Capilla del Monte",
    area: "Sierras de Córdoba",
    tags: ["Sierras", "Historia"],
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
  },
  {
    name: "Mina Clavero",
    area: "Traslasierra · Córdoba",
    tags: ["Sierras", "Aventura"],
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80",
  },
  {
    name: "Travesía 4x4",
    area: "Sierras de Córdoba",
    tags: ["Aventura"],
    img: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=1200&q=80",
  },
];

export default function DestinationsGrid() {
  const [filter, setFilter] = useState<Category>("Todas");
  const filtered =
    filter === "Todas" ? EXCURSIONS : EXCURSIONS.filter((d) => d.tags.includes(filter as never));

  return (
    <section id="excursiones" className="bg-surface py-28 md:py-36 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
            Excursiones
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display italic font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Los rincones de Córdoba que conocemos a fondo.
          </motion.h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-4">
          {CATEGORIES.map((r) => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`text-[11px] tracking-[0.2em] uppercase px-4 py-2.5 rounded-full transition-colors duration-300 ${
                filter === r ? "bg-accent text-bg" : "text-text-muted hover:text-accent"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((d) => (
              <a
                key={d.name}
                href="#contacto"
                className="group relative overflow-hidden rounded-sm border border-border block"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-accent">
                    {d.tags.join(" · ")}
                  </div>
                  <h3 className="font-display italic font-semibold text-2xl md:text-3xl mt-1">{d.name}</h3>
                  <div className="text-text-muted text-xs mt-1">{d.area}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

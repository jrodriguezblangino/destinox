import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const FEATURED = [
  {
    name: "Excursiones por Córdoba",
    tagline: "Sierras, ríos, pueblos históricos y sabores auténticos. Salidas programadas y privadas desde Villa Carlos Paz.",
    tags: "Grupos · Familias · Jubilados",
    cta: "Ver excursiones",
    href: "#excursiones",
    img: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1800&q=80",
    span: "lg:col-span-2 lg:row-span-2",
    h: "h-[420px] lg:h-[680px]",
  },
  {
    name: "Paquetes Estudiantiles",
    tagline: "El viaje de egresados que todos van a recordar. Organizamos todo para que solo tengan que disfrutar.",
    tags: "Egresados · Colegios · Grupos",
    cta: "Ver paquetes",
    href: "#estudiantiles",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
    span: "",
    h: "h-[320px]",
  },
  {
    name: "Tour de Compras",
    tagline: "Viajes organizados a los mejores destinos de compras. Traslado, guía y la mejor experiencia de shopping.",
    tags: "Chile · La Salada · Grupos",
    cta: "Consultar",
    href: "#compras",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
    span: "",
    h: "h-[320px]",
  },
];

export default function FeaturedExperiences() {
  return (
    <section className="bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
            Lo que hacemos
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display italic font-semibold text-text-primary leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Tres formas de descubrir Córdoba con nosotros.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {FEATURED.map((card) => (
            <motion.a
              key={card.name}
              href={card.href}
              variants={fadeUp}
              className={`relative group overflow-hidden rounded-sm border border-border ${card.span} ${card.h}`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
              <div className="absolute inset-0 border border-transparent group-hover:border-accent/60 transition-colors duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="text-[10px] tracking-[0.25em] uppercase text-accent/90 mb-3">{card.tags}</div>
                <h3
                  className="font-display italic font-semibold text-text-primary leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                  {card.name}
                </h3>
                <p className="mt-2 text-text-muted text-sm md:text-base font-light">{card.tagline}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-accent text-[11px] tracking-[0.25em] uppercase">
                  {card.cta}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

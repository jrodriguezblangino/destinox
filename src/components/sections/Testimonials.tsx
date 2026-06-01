import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const TESTIMONIALS = [
  {
    quote:
      "Organizamos el viaje de egresados de toda la promoción con Destino X. Todo impecable: transporte, hotel, excursiones. Los chicos volvieron felices y los papás tranquilos.",
    name: "Laura Giménez",
    destination: "Egresados · Colegio San Martín",
    initials: "LG",
  },
  {
    quote:
      "Fuimos con el centro de jubilados a Villa General Belgrano y 7 Cascadas. Atención de primera, todo coordinado, y la degustación fue un golazo. Volvemos seguro.",
    name: "Rubén Páez",
    destination: "Grupo de jubilados · Córdoba",
    initials: "RP",
  },
  {
    quote:
      "Hicimos la travesía 4x4 con un grupo de amigos. Los paisajes, la comida y la atención superaron todo lo que esperábamos. Un equipo que conoce Córdoba de verdad.",
    name: "Mariana Suárez",
    destination: "Travesía 4x4 · Sierras de Córdoba",
    initials: "MS",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-surface py-28 md:py-36 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
            Testimonios
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display italic font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Las palabras de quienes ya viajaron con nosotros.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="bg-card border border-border border-l-2 border-l-accent p-8 md:p-10 min-w-[85%] sm:min-w-[60%] lg:min-w-0 snap-start flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="font-display italic text-text-primary text-xl md:text-2xl leading-snug flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-11 h-11 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent text-xs tracking-widest">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm text-text-primary">{t.name}</div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-text-muted mt-1">
                    {t.destination}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

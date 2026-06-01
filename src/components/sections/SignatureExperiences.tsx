import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const WHATSAPP_URL = "https://wa.me/543541663238";

const SIGNATURE = [
  {
    name: "Villa General Belgrano",
    title: "Un recorrido por el corazón de Córdoba",
    tags: ["Historia", "Gastronomía", "Sierras"],
    desc: "Alta Gracia, la Estancia Jesuítica, el Dique los Molinos y el encanto europeo de Villa General Belgrano. Degustación de quesos y salames incluida.",
    detail: "Salida desde Villa Carlos Paz",
    extra: "Traslado puerta a puerta",
    img: "https://images.unsplash.com/photo-1601976748707-78c8e3fe70c6?w=1600&q=80",
  },
  {
    name: "7 Cascadas",
    title: "Aguas del Río Grande, toboganes y naturaleza",
    tags: ["Naturaleza", "Aventura", "Agua"],
    desc: "Aguas provenientes del Río Grande de Punilla, natatorios, toboganes y confitería. De regreso, visita a fábrica de alfajores y chocolates.",
    detail: "Entrada al complejo incluida",
    extra: "Salida desde Villa Carlos Paz",
    img: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1600&q=80",
  },
  {
    name: "Travesía 4x4",
    title: "Off road por las sierras, gastronomía serrana",
    tags: ["Aventura", "Off Road", "Gastronomía"],
    desc: "Experiencia off road por las sierras de Córdoba. Aventura, naturaleza y adrenalina combinadas con gastronomía serrana: picada, asado criollo y platos gourmet al disco. Ideal para grupos.",
    detail: "En tu propia camioneta o como acompañante",
    extra: "Bebida incluida",
    img: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=1600&q=80",
  },
];

export default function SignatureExperiences() {
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
            Experiencias destacadas
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display italic font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Tres salidas, infinitas historias para contar.
          </motion.h2>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {SIGNATURE.map((exp, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={exp.name}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  reversed ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <motion.div variants={fadeUp} className="lg:col-span-7 relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
                    <img
                      src={exp.img}
                      alt={exp.title}
                      className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1200ms]"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 font-display italic text-accent/30 text-7xl lg:text-9xl leading-none pointer-events-none select-none">
                    0{i + 1}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="lg:col-span-5">
                  <div className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                    {exp.name}
                  </div>
                  <h3
                    className="font-display italic font-semibold leading-[1.1] tracking-tight"
                    style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                  >
                    {exp.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-[0.2em] uppercase text-text-muted border border-border px-3 py-1.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-text-muted text-base leading-relaxed font-light">{exp.desc}</p>

                  <div className="mt-8 flex flex-col gap-2 pt-6 border-t border-border">
                    <div className="text-[11px] tracking-[0.15em] uppercase text-text-muted">
                      {exp.detail}
                    </div>
                    <div className="text-[11px] tracking-[0.15em] uppercase text-text-muted">
                      {exp.extra}
                    </div>
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-accent text-[12px] tracking-[0.2em] uppercase group"
                  >
                    Consultar disponibilidad
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

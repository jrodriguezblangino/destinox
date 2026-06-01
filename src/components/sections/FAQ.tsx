import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const FAQS = [
  {
    q: "¿Desde dónde salen las excursiones?",
    a: "Todas nuestras excursiones parten desde Villa Carlos Paz. También coordinamos puntos de encuentro alternativos para grupos que vienen de otras ciudades.",
  },
  {
    q: "¿Los paquetes incluyen transporte?",
    a: "Sí. Coordinamos traslados en bus de línea, chárter o vehículos privados según el tamaño del grupo y el destino.",
  },
  {
    q: "¿Tienen paquetes para grupos grandes?",
    a: "Sí, nos especializamos en grupos. Estudiantiles, deportivos, religiosos, jubilados, corporativos y más.",
  },
  {
    q: "¿Ofrecen financiación propia?",
    a: "Sí. Tenemos planes de pago flexibles y accesibles, sin necesidad de banco ni tarjeta. Consultanos por las opciones disponibles.",
  },
  {
    q: "¿Están habilitados como agencia de viajes?",
    a: "Sí. Somos una operadora habilitada con RNAV Legajo N° 20904.",
  },
  {
    q: "¿Cómo hago para reservar una excursión?",
    a: "Escribinos por WhatsApp al +54 3541 663238 o por email a infodestinoxturismo@gmail.com y te respondemos a la brevedad.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
            Preguntas frecuentes
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display italic font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            Todo lo que necesitás saber.
          </motion.h2>
        </motion.div>

        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-display italic text-text-primary text-xl md:text-2xl group-hover:text-accent transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-text-muted text-base leading-relaxed font-light">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

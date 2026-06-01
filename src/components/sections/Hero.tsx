import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/543541663238";

const MARQUEE_ITEMS = [
  "Villa General Belgrano",
  "7 Cascadas",
  "Tren de las Sierras",
  "La Cumbrecita",
  "Capilla del Monte",
  "Mina Clavero",
  "Tour de Compras",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 320]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y, scale: 1.15 }}>
        <img
          src="https://images.unsplash.com/photo-1568454537842-d933259bb258?w=2400&q=80"
          alt="Sierras de Córdoba, Argentina"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-bg/70 via-bg/50 to-bg" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg via-transparent to-bg/40" />

      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] tracking-[0.4em] text-accent uppercase mb-8"
        >
          Villa Carlos Paz · Córdoba · Argentina
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic font-semibold text-text-primary leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
        >
          Córdoba entera,
          <br />
          <span className="text-accent-light">en tus manos.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto font-light"
        >
          Operadora de turismo habilitada especializada en excursiones locales, paquetes estudiantiles y grupos. Con base en Villa Carlos Paz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#excursiones"
            className="inline-flex items-center justify-center bg-accent text-bg text-[12px] tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-accent-light transition-colors duration-300 min-w-[200px]"
          >
            Ver excursiones
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-text-primary/30 text-text-primary text-[12px] tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-colors duration-300 min-w-[200px]"
          >
            Hablanos por WhatsApp
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-y border-border/40 bg-bg/40 backdrop-blur-sm py-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-display italic text-2xl md:text-3xl text-accent mx-8 inline-flex items-center"
            >
              {item}
              <span className="ml-16 text-accent/40">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

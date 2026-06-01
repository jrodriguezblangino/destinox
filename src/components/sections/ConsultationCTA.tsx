import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const WHATSAPP_URL = "https://wa.me/543541663238";

export default function ConsultationCTA() {
  return (
    <section className="relative py-36 md:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2400&q=80"
          alt="Sierras de Córdoba al atardecer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.div variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-8">
          Hablemos
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-display italic font-semibold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Tu próxima aventura por Córdoba empieza con un mensaje.
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-8 text-text-muted text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto">
          Contanos qué tipo de grupo tenés, qué fechas manejan y qué experiencia buscan. Te respondemos en menos de 24hs.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-bg text-[12px] tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:bg-accent-light transition-colors duration-300"
          >
            Escribirnos por WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:infodestinoxturismo@gmail.com"
            className="inline-flex items-center gap-3 text-text-primary text-[12px] tracking-[0.2em] uppercase px-6 py-5 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            infodestinoxturismo@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

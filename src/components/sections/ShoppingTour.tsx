import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const WHATSAPP_URL = "https://wa.me/543541663238";

export default function ShoppingTour() {
  return (
    <section id="compras" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=2400&q=80"
          alt="Tour de compras"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/40" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-7">
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6 inline-flex items-center gap-3">
            <ShoppingBag className="w-4 h-4" /> Tour de Compras
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display italic font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Chile y La Salada,
            <br />
            <span className="text-accent-light">en grupo y sin vueltas.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 text-text-muted text-base md:text-lg leading-relaxed font-light max-w-xl"
          >
            Viajes organizados a los mejores destinos de compras del país y de la región. Transporte, guía y la mejor experiencia de shopping grupal.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-accent text-accent text-[12px] tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-accent hover:text-bg transition-colors duration-300"
            >
              Consultar próximas fechas
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="lg:col-span-5 grid grid-cols-2 gap-4">
          {[
            { place: "Chile", note: "Cruzando los Andes" },
            { place: "La Salada", note: "Buenos Aires" },
          ].map((d) => (
            <div key={d.place} className="border border-border bg-card/70 backdrop-blur-sm p-6 rounded-sm">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent">{d.note}</div>
              <div className="font-display italic text-3xl mt-2">{d.place}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

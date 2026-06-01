import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Bus, Hotel, Calendar } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const WHATSAPP_URL = "https://wa.me/543541663238";

const INCLUDES = [
  { icon: Bus, label: "Traslados coordinados" },
  { icon: Hotel, label: "Alojamiento seleccionado" },
  { icon: Calendar, label: "Itinerario completo" },
  { icon: GraduationCap, label: "Coordinación docente" },
];

export default function StudentPackages() {
  return (
    <section id="estudiantiles" className="relative bg-bg py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--color-accent) 0%, transparent 50%), radial-gradient(circle at 80% 70%, var(--color-accent-light) 0%, transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="lg:col-span-7"
        >
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
            Para colegios y grupos estudiantiles
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display italic font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            El viaje de egresados que todos van a recordar.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 text-text-muted text-base md:text-lg leading-relaxed font-light max-w-xl"
          >
            Diseñamos paquetes completos para grupos de estudiantes: traslado, alojamiento, excursiones y actividades. Todo coordinado para que los docentes y organizadores solo tengan que acompañar.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
            {INCLUDES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 border border-border bg-card/40 px-4 py-3 rounded-sm"
              >
                <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                <span className="text-text-primary text-[12px] tracking-wide">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-bg text-[12px] tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-accent-light transition-colors duration-300"
            >
              Pedir presupuesto para mi grupo
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
              alt="Grupo de estudiantes en viaje de egresados"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 font-display italic text-accent/30 text-7xl lg:text-9xl leading-none pointer-events-none select-none">
            ✦
          </div>
        </motion.div>
      </div>
    </section>
  );
}

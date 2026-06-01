import { motion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Wallet } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Operadora habilitada",
    desc: "Registro Nacional de Agencias de Viaje. Legajo N° 20904. Viajá con respaldo oficial.",
  },
  {
    icon: Users,
    title: "Especialistas en grupos",
    desc: "Estudiantiles, deportivos, religiosos, jubilados, corporativos. Tenemos experiencia con todo tipo de grupos.",
  },
  {
    icon: MapPin,
    title: "Base en Villa Carlos Paz",
    desc: "Conocemos Córdoba como nadie. Somos locales, con aliados en cada rincón de la provincia.",
  },
  {
    icon: Wallet,
    title: "Financiación propia",
    desc: "Planes de pago accesibles y flexibles. Reservá hoy y pagá en cuotas, sin bancos de por medio.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="bg-surface py-28 md:py-36 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
            Por qué elegirnos
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display italic font-semibold text-text-primary leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            No somos un intermediario más.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-8 text-text-muted text-base md:text-lg leading-relaxed font-light max-w-md">
            Somos una operadora local con base en Villa Carlos Paz, habilitada y con trayectoria real. Nos especializamos en turismo receptivo y en crear experiencias a medida para grupos de todo tipo.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 text-text-muted text-base md:text-lg leading-relaxed font-light max-w-md">
            Cada excursión, cada paquete, cada traslado está pensado para que vos y tu grupo solo tengan que disfrutar.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border"
        >
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="bg-surface p-8 md:p-10 hover:bg-card transition-colors duration-500"
            >
              <Icon className="w-7 h-7 text-accent" strokeWidth={1.25} />
              <h3 className="mt-6 text-text-primary text-[13px] tracking-[0.2em] uppercase font-medium">
                {title}
              </h3>
              <p className="mt-3 text-text-muted text-sm leading-relaxed font-light">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

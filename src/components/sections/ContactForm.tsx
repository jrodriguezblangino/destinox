import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

// IMPORTANT: Replace this with your real Formspree form ID.
// Sign up free at https://formspree.io, create a form, and paste the endpoint here.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

const GROUP_TYPES = [
  "Estudiantil / Egresados",
  "Jubilados",
  "Deportivo",
  "Religioso",
  "Familiar",
  "Corporativo",
  "Otro",
];

const SERVICES = [
  "Excursión local",
  "Paquete estudiantil",
  "Tour de compras",
  "Alojamiento",
  "Transporte",
  "Varios servicios",
];

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full bg-transparent border-b border-border text-text-primary text-base py-3 placeholder:text-text-muted/60 focus:outline-none focus:border-accent transition-colors duration-300";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
            Contanos tu idea
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display italic font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4rem)" }}
          >
            Pedí tu presupuesto. Te respondemos en 24 horas.
          </motion.h2>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          onSubmit={onSubmit}
          className="bg-card border border-border p-8 md:p-12 rounded-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <motion.div variants={fadeUp}>
              <label className="text-[10px] tracking-[0.25em] uppercase text-text-muted block mb-2">
                Nombre completo
              </label>
              <input required type="text" name="nombre" className={inputClasses} placeholder="Tu nombre" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="text-[10px] tracking-[0.25em] uppercase text-text-muted block mb-2">
                Email
              </label>
              <input required type="email" name="email" className={inputClasses} placeholder="tucorreo@ejemplo.com" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="text-[10px] tracking-[0.25em] uppercase text-text-muted block mb-2">
                Teléfono / WhatsApp
              </label>
              <input type="tel" name="telefono" className={inputClasses} placeholder="+54 3541 000000" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="text-[10px] tracking-[0.25em] uppercase text-text-muted block mb-2">
                Cantidad de personas
              </label>
              <input type="number" min={1} name="personas" className={inputClasses} placeholder="Ej. 25" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="text-[10px] tracking-[0.25em] uppercase text-text-muted block mb-2">
                Tipo de grupo
              </label>
              <select required name="grupo" className={`${inputClasses} appearance-none cursor-pointer`}>
                <option value="" className="bg-card">Seleccioná una opción</option>
                {GROUP_TYPES.map((d) => (
                  <option key={d} value={d} className="bg-card">
                    {d}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="text-[10px] tracking-[0.25em] uppercase text-text-muted block mb-2">
                Servicio de interés
              </label>
              <select required name="servicio" className={`${inputClasses} appearance-none cursor-pointer`}>
                <option value="" className="bg-card">Seleccioná un servicio</option>
                {SERVICES.map((d) => (
                  <option key={d} value={d} className="bg-card">
                    {d}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2">
              <label className="text-[10px] tracking-[0.25em] uppercase text-text-muted block mb-2">
                Fecha tentativa
              </label>
              <input type="text" name="fecha" className={inputClasses} placeholder="Ej. Octubre 2026 · Fin de semana largo" />
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2">
              <label className="text-[10px] tracking-[0.25em] uppercase text-text-muted block mb-2">
                Mensaje adicional
              </label>
              <textarea
                name="mensaje"
                rows={4}
                className={`${inputClasses} resize-none`}
                placeholder="Contanos un poco más sobre tu grupo y lo que buscan…"
              />
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-text-muted text-xs leading-relaxed max-w-sm">
              Al enviar, aceptás que nuestro equipo se ponga en contacto con vos para asesorarte sin
              compromiso.
            </p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-3 bg-accent text-bg text-[12px] tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-accent-light transition-colors duration-300 disabled:opacity-50"
            >
              {status === "loading" ? "Enviando…" : "Enviar solicitud"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {status === "success" && (
            <div className="mt-8 flex items-start gap-3 p-5 border border-accent/40 bg-accent/5 rounded-sm">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-text-primary text-sm">¡Gracias por tu mensaje!</div>
                <div className="text-text-muted text-xs mt-1">
                  Te respondemos en menos de 24 horas con los próximos pasos.
                </div>
              </div>
            </div>
          )}
          {status === "error" && (
            <div className="mt-8 flex items-start gap-3 p-5 border border-red-500/40 bg-red-500/5 rounded-sm">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-text-primary text-sm">No pudimos enviar tu mensaje.</div>
                <div className="text-text-muted text-xs mt-1">
                  Probá nuevamente o escribinos directamente a infodestinoxturismo@gmail.com o por WhatsApp al +54 3541 663238.
                </div>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

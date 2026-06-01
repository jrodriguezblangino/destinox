import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/543541663238";

const NAV_LINKS = [
  { label: "Inicio", href: "#" },
  { label: "Excursiones", href: "#excursiones" },
  { label: "Paquetes Estudiantiles", href: "#estudiantiles" },
  { label: "Hoteles", href: "#hoteles" },
  { label: "Tour de Compras", href: "#compras" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.92]);
  const borderOpacity = useTransform(scrollY, [0, 200], [0, 1]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: useTransform(bgOpacity, (o) => `rgba(13, 12, 10, ${o})`),
          borderBottom: "1px solid",
          borderColor: useTransform(borderOpacity, (o) => `rgba(44, 40, 32, ${o})`),
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className="font-display italic text-2xl tracking-wide">Destino X</span>
            <span className="font-sans text-[10px] tracking-[0.3em] text-accent mt-0.5 uppercase">
              Turismo
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] tracking-wide text-text-primary/80 hover:text-accent transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 border border-accent text-accent text-[12px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full hover:bg-accent hover:text-bg transition-colors duration-300"
          >
            Consultá por WhatsApp <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            className="lg:hidden text-text-primary p-2"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-bg lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <span className="font-display italic text-2xl">Destino X</span>
              <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="font-display italic text-4xl text-text-primary hover:text-accent transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex w-fit items-center gap-2 border border-accent text-accent text-sm tracking-[0.15em] uppercase px-6 py-3 rounded-full"
              >
                Consultá por WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

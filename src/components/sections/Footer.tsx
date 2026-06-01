import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const COLS = [
  {
    title: "Servicios",
    links: [
      "Excursiones Locales",
      "Paquetes Estudiantiles",
      "Tour de Compras",
      "Alojamientos",
      "Transporte",
      "Actividades",
      "Indumentaria",
    ],
  },
  {
    title: "Excursiones",
    links: [
      "Villa General Belgrano",
      "7 Cascadas",
      "Tren de las Sierras",
      "La Cumbrecita",
      "Capilla del Monte",
      "Mina Clavero",
      "Travesía 4x4",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-accent/40 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col leading-none">
              <span className="font-display italic text-3xl tracking-wide">Destino X</span>
              <span className="text-[10px] tracking-[0.3em] text-accent mt-1 uppercase">Turismo</span>
            </div>
            <p className="mt-6 text-text-muted text-sm leading-relaxed font-light max-w-xs">
              Operadora de turismo habilitada con base en Villa Carlos Paz, Córdoba, Argentina.
            </p>
            <p className="mt-3 text-text-muted text-xs tracking-[0.2em] uppercase">
              RNAV · Legajo N° 20904
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/turismodestinox"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:infodestinoxturismo@gmail.com"
                className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-[11px] tracking-[0.25em] uppercase text-accent">{c.title}</h4>
              <ul className="mt-6 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-text-muted hover:text-text-primary text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-accent">Contacto</h4>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="https://wa.me/543541663238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-text-muted hover:text-accent text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  +54 3541 663238
                </a>
              </li>
              <li>
                <a
                  href="mailto:infodestinoxturismo@gmail.com"
                  className="flex items-start gap-3 text-text-muted hover:text-accent text-sm transition-colors break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  infodestinoxturismo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Villa Carlos Paz, Córdoba
              </li>
              <li>
                <a
                  href="https://instagram.com/turismodestinox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-text-muted hover:text-accent text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  @turismodestinox
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-text-muted">
          <div>© 2025 Destino X Turismo · Todos los derechos reservados</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-accent transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

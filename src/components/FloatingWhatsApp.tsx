import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/543541663238";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-[70] flex items-center gap-3"
    >
      <span className="hidden sm:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bg border border-accent/50 text-text-primary text-xs tracking-wide px-3 py-2 rounded-full shadow-lg">
        ¡Hablanos!
      </span>
      <span
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.143-.342.146-.677.085-.974-.07-.34-.213-.502-.515-.673-.343-.214-.687-.343-1.06-.515ZM16.04 4.39c-6.43 0-11.65 5.22-11.65 11.65 0 2.05.547 4.07 1.59 5.853L4.286 26.5l4.795-1.575a11.61 11.61 0 0 0 5.55 1.418H16c6.43 0 11.652-5.22 11.652-11.65 0-3.118-1.21-6.046-3.418-8.255A11.658 11.658 0 0 0 16.04 4.39Zm9.55 11.65c0 5.27-4.286 9.557-9.55 9.557-1.748 0-3.46-.48-4.965-1.39l-.355-.214-3.69 1.212 1.232-3.61-.232-.37a9.51 9.51 0 0 1-1.46-5.085c0-5.27 4.285-9.554 9.554-9.554 2.55 0 4.948.994 6.75 2.798a9.482 9.482 0 0 1 2.793 6.756Z"/>
        </svg>
      </span>
    </motion.a>
  );
}

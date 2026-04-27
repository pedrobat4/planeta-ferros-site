import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { site } from "../config/site";
import { whatsappLink } from "../lib/whatsapp";
import { img } from "../lib/image";

export default function Hero() {
  const isCatalogo = site.modo === "catalogo";
  const primaryHref = isCatalogo ? "#produtos" : whatsappLink();
  const secondaryHref = isCatalogo ? whatsappLink() : "#servicos";
  const secondaryLabel = isCatalogo ? "Fale conosco" : "Ver Serviços";

  return (
    <section
      className="relative w-full min-h-screen h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${img(site.hero.imagemBg, site.empresa.nome)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay em gradiente mais rico */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/60" />
      {/* Camada inferior mais escura */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-6 pt-24 md:pt-0"
      >
        {/* Badges */}
        {site.hero.badges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-7"
          >
            {site.hero.badges.map((b, i) => (
              <span
                key={i}
                className="bg-white/15 backdrop-blur-sm text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full border border-white/25"
              >
                {b}
              </span>
            ))}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          {site.hero.titulo}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {site.hero.subtitulo}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={primaryHref}
            {...(!isCatalogo && { target: "_blank", rel: "noopener" })}
            className="inline-flex items-center gap-2.5 bg-accent text-white font-bold px-8 py-4 rounded-full text-base md:text-lg hover:scale-105 hover:bg-accent/90 transition-all shadow-2xl shadow-accent/30"
          >
            {site.hero.ctaTexto}
            <ArrowRight size={20} />
          </a>
          <a
            href={secondaryHref}
            {...(isCatalogo && { target: "_blank", rel: "noopener" })}
            className="inline-flex items-center gap-2 text-white/80 font-medium text-base hover:text-white transition-colors border border-white/30 hover:border-white/60 px-6 py-4 rounded-full backdrop-blur-sm"
          >
            {secondaryLabel}
          </a>
        </motion.div>
      </motion.div>

      {/* Seta scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} className="text-white/40" />
        </motion.div>
      </div>
    </section>
  );
}

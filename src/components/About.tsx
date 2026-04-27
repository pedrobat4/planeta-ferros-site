import Section from "./Section";
import { site } from "../config/site";
import { getIcon } from "../lib/icons";

export default function About() {
  return (
    <Section id="sobre" className="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {site.sobre.imagem && (
          <div className="relative">
            <img
              src={site.sobre.imagem}
              alt={site.sobre.titulo}
              className="w-full h-auto rounded-3xl shadow-xl object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-5 -right-5 bg-accent text-white rounded-2xl px-5 py-4 shadow-xl shadow-accent/20">
              <div className="font-display text-2xl font-bold leading-none">6+</div>
              <div className="text-xs text-white/80 mt-0.5">anos no mercado</div>
            </div>
          </div>
        )}
        <div>
          <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3">
            Sobre Nós
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {site.sobre.titulo}
          </h2>
          <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 whitespace-pre-line">
            {site.sobre.texto}
          </p>
          {site.sobre.diferenciais.length > 0 && (
            <div className="space-y-3">
              {site.sobre.diferenciais.map((d, i) => {
                const Icon = getIcon(d.icone);
                return (
                  <div
                    key={i}
                    className="flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm">{d.titulo}</h4>
                      <p className="text-secondary text-sm mt-0.5 leading-relaxed">{d.descricao}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

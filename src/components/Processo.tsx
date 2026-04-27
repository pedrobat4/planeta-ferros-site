import Section from "./Section";
import { site } from "../config/site";
import { getIcon } from "../lib/icons";

export default function Processo() {
  if (!site.processo.length) return null;
  return (
    <Section id="processo" className="bg-white">
      <div className="text-center mb-12 md:mb-16">
        <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
          Processo
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
          Como Funciona
        </h2>
        <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
          Simples e transparente do início ao fim.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {site.processo.map((p, i) => {
          const Icon = getIcon(p.icone);
          return (
            <div
              key={i}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-xs
                         flex flex-col items-center text-center
                         bg-gray-50 rounded-2xl p-8 border border-gray-100
                         hover:border-accent/30 hover:shadow-lg hover:-translate-y-1.5
                         transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center
                                group-hover:bg-accent group-hover:text-primary transition-colors duration-300 shadow-sm">
                  <Icon size={28} />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white
                                 text-xs font-bold flex items-center justify-center shadow">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-3">
                {p.titulo}
              </h3>
              <p className="text-secondary leading-relaxed text-sm">
                {p.descricao}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

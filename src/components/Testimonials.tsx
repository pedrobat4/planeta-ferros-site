import Section from "./Section";
import { site } from "../config/site";
import type { Depoimento } from "../config/site";

export default function Testimonials() {
  if (!site.depoimentos.length) return null;
  return (
    <Section id="depoimentos" className="bg-primary text-white">
      <div className="text-center mb-12 md:mb-16">
        <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
          Depoimentos
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          O que dizem sobre nós
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {site.depoimentos.map((d, i) => (
          <div
            key={i}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm
                       bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10
                       hover:border-accent/40 hover:bg-white/10 transition-all duration-300
                       flex flex-col"
          >
            <div className="text-accent text-5xl font-serif leading-none mb-4 select-none">"</div>
            <p className="text-white/85 leading-relaxed flex-1 italic text-sm">
              {d.texto}
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
              {(d as Depoimento).foto ? (
                <img
                  src={(d as Depoimento).foto}
                  alt={d.nome}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-accent/40 flex-shrink-0"
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center
                                text-accent font-bold text-base flex-shrink-0">
                  {d.nome.charAt(0)}
                </div>
              )}
              <div className="font-semibold text-white text-sm">{d.nome}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

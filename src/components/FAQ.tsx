import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Section from "./Section";
import { site } from "../config/site";

export default function FAQ() {
  if (!site.faq.length) return null;
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-white">
      <div className="text-center mb-12">
        <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3">
          FAQ
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
          Tire suas dúvidas antes de falar com a gente.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {site.faq.map((q, i) => {
          const ativo = aberto === i;
          return (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                ativo
                  ? "border-accent/30 shadow-md shadow-accent/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => setAberto(ativo ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="w-7 h-7 rounded-lg bg-accent/10 text-accent text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-primary text-sm md:text-base leading-snug">
                    {q.pergunta}
                  </span>
                </div>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  ativo ? "bg-accent text-white" : "bg-gray-100 text-gray-500"
                }`}>
                  {ativo ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>
              {ativo && (
                <div className="px-6 pb-5 pl-[4.25rem] text-secondary text-sm leading-relaxed">
                  {q.resposta}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

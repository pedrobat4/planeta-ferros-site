import Section from "./Section";
import { MapPinned } from "lucide-react";
import { site } from "../config/site";

export default function Areas() {
  if (!site.areas.length) return null;
  return (
    <Section id="areas" className="bg-primary text-white">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Onde Atendemos
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
          Levamos nosso serviço até você.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {site.areas.map((a, i) => (
          <div
            key={i}
            className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] max-w-[200px]
                       bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10
                       hover:border-accent/60 hover:bg-white/10 hover:-translate-y-1
                       transition-all duration-300 text-center flex flex-col items-center"
          >
            <MapPinned className="text-accent mb-2" size={22} />
            <h4 className="font-semibold text-white text-base">{a.nome}</h4>
            {a.descricao && (
              <p className="text-white/60 text-xs mt-1">{a.descricao}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

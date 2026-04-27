import Section from "./Section";
import { site } from "../config/site";
import { getIcon } from "../lib/icons";
import { whatsappLink } from "../lib/whatsapp";

export default function Services() {
  if (!site.servicos.length) return null;
  return (
    <Section id="servicos" className="bg-gray-50">
      <div className="text-center mb-12 md:mb-16">
        <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
          Serviços
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
          Nossos Serviços
        </h2>
        <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
          Soluções sob medida para o que você precisa.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {site.servicos.map((servico, i) => {
          const Icon = getIcon(servico.icone);
          return (
            <div
              key={i}
              className="w-full sm:w-[calc(50%-12px)] max-w-lg
                         bg-white rounded-2xl border-t-4 border-accent shadow-sm
                         hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300
                         overflow-hidden flex flex-col"
            >
              {servico.imagem && (
                <img
                  src={servico.imagem}
                  alt={servico.titulo}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-8 flex flex-col flex-1 text-center items-center">
                <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                  <Icon size={26} />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {servico.titulo}
                </h3>
                <p className="text-secondary leading-relaxed flex-1 text-sm">
                  {servico.descricao}
                </p>
                <a
                  href={whatsappLink(`Olá! Tenho interesse no serviço: ${servico.titulo}`)}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4
                             rounded-xl bg-accent/10 text-accent font-semibold text-sm
                             hover:bg-accent hover:text-white transition-colors duration-200"
                >
                  Saiba mais →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

import Section from "./Section";
import { site } from "../config/site";
import { whatsappLink } from "../lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function Catalogo() {
  if (!site.produtos.length) return null;
  return (
    <Section id="produtos" className="bg-gray-50">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
          Nossos Produtos
        </h2>
        <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
          Confira nosso catálogo. Clique em qualquer item para pedir pelo WhatsApp.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {site.produtos.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col group">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img src={p.imagem} alt={p.nome} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-1 text-center items-center">
              {p.categoria && (
                <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{p.categoria}</span>
              )}
              <h3 className="font-display text-xl font-bold text-primary mb-2">{p.nome}</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4 flex-1">{p.descricao}</p>
              {p.preco && (
                <div className="text-primary font-bold text-lg mb-4">{p.preco}</div>
              )}
              <a
                href={whatsappLink(`Olá! Tenho interesse no produto: ${p.nome}`)}
                target="_blank"
                rel="noopener"
                className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> Pedir no WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

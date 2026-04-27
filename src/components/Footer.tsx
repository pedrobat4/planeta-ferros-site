import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "../config/site";
import { whatsappLink } from "../lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Marca */}
        <div>
          {site.empresa.logo ? (
            <img src={site.empresa.logo} alt={site.empresa.nome} className="h-10 w-auto mb-4" />
          ) : (
            <h3 className="font-display font-bold text-primary text-xl mb-4">{site.empresa.nome}</h3>
          )}
          <p className="text-sm text-gray-500 leading-relaxed mb-5">{site.empresa.descricao}</p>
          <div className="flex gap-2">
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-accent/10 text-gray-500 hover:text-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-semibold text-primary text-xs uppercase tracking-widest mb-5">Contato</h4>
          <div className="space-y-3.5">
            <a
              href={`tel:${site.contato.telefone}`}
              className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-accent transition-colors"
            >
              <Phone size={13} className="text-accent flex-shrink-0" />
              {site.contato.telefone}
            </a>
            <a
              href={`mailto:${site.contato.email}`}
              className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-accent transition-colors break-all"
            >
              <Mail size={13} className="text-accent flex-shrink-0" />
              {site.contato.email}
            </a>
            {site.contato.endereco && (
              <div className="flex items-start gap-2.5 text-sm text-gray-600">
                <MapPin size={13} className="text-accent flex-shrink-0 mt-0.5" />
                {site.contato.endereco}
              </div>
            )}
            {site.contato.horario && (
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <Clock size={13} className="text-accent flex-shrink-0" />
                {site.contato.horario}
              </div>
            )}
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="font-semibold text-primary text-xs uppercase tracking-widest mb-5">Navegação</h4>
          <nav className="flex flex-col gap-2.5">
            {[
              { href: "#servicos", label: "Nossos Serviços" },
              { href: "#sobre", label: "Quem Somos" },
              { href: "#processo", label: "Como Funciona" },
              { href: "#faq", label: "Perguntas Frequentes" },
              { href: "#contato", label: "Entre em Contato" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-600 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Área de entrega + CTA */}
        <div>
          <h4 className="font-semibold text-primary text-xs uppercase tracking-widest mb-5">Área de Entrega</h4>
          <div className="flex flex-col gap-2.5 mb-6">
            {site.areas.map((a, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {a.nome}
              </div>
            ))}
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center w-full bg-accent text-white font-semibold py-3 px-4 rounded-xl text-sm hover:bg-accent/90 transition-colors"
          >
            Pedir Orçamento
          </a>
        </div>
      </div>

      <div className="border-t border-gray-100 py-5 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {site.empresa.nome}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400">
            Luzimangues, Porto Nacional — Tocantins
          </p>
        </div>
      </div>
    </footer>
  );
}

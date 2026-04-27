import { Phone, Clock } from "lucide-react";
import { site } from "../config/site";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-primary text-white/75 text-xs border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href={`tel:${site.contato.telefone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={11} />
            {site.contato.telefone}
          </a>
          <span className="flex items-center gap-1.5">
            <Clock size={11} />
            {site.contato.horario}
          </span>
        </div>
        <div className="flex items-center gap-4">
          {site.social.instagram && (
            <a href={site.social.instagram} target="_blank" rel="noopener" className="hover:text-accent transition-colors">
              Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

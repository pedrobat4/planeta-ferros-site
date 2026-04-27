import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "../config/site";
import { whatsappLink } from "../lib/whatsapp";
import TopBar from "./TopBar";

const mainLink = site.modo === "catalogo"
  ? { href: "#produtos", label: "Produtos" }
  : { href: "#servicos", label: "Serviços" };

const links = [
  mainLink,
  { href: "#processo", label: "Como Funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar />
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 top-0 md:top-8 bg-white border-b border-gray-100 ${
          scrolled ? "shadow-lg shadow-gray-200/60" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            {site.empresa.logo ? (
              <img src={site.empresa.logo} alt={site.empresa.nome} className="h-10 w-auto" />
            ) : (
              <span className="font-display font-bold text-xl text-primary">{site.empresa.nome}</span>
            )}
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${site.contato.telefone}`}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-accent transition-colors"
            >
              <Phone size={14} />
              {site.contato.telefone}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="bg-accent text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-accent/90 transition-colors shadow-sm"
            >
              Orçamento grátis
            </a>
          </div>

          <button
            className="md:hidden text-primary p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
            <nav className="flex flex-col p-3 gap-0.5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-accent hover:bg-accent/5 px-4 py-3 rounded-lg transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                className="mt-2 bg-accent text-white font-semibold px-4 py-3.5 rounded-xl text-sm text-center hover:bg-accent/90 transition-colors"
              >
                Pedir Orçamento Grátis
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

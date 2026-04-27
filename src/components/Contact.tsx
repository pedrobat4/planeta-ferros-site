import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Section from "./Section";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { site } from "../config/site";
import { whatsappLink } from "../lib/whatsapp";

function InfoItem({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex gap-4 items-start">
      <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-primary font-medium text-sm leading-snug">{value}</p>
      </div>
    </div>
  );
  if (href) return <a href={href} className="hover:opacity-80 transition-opacity block">{content}</a>;
  return <div>{content}</div>;
}

export default function Contact() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    window.open(whatsappLink(texto), "_blank");
  }

  return (
    <Section id="contato" className="bg-gray-50">
      <div className="text-center mb-12">
        <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3">
          Contato
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
          {site.cta_final.titulo}
        </h2>
        <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
          {site.cta_final.texto}
        </p>
      </div>

      {/* WhatsApp CTA destaque */}
      <div className="max-w-2xl mx-auto mb-10">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-lg shadow-green-500/25 transition-all hover:scale-[1.01]"
        >
          <MessageCircle size={22} />
          Chamar no WhatsApp agora
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          <InfoItem
            icon={<Phone size={20} />}
            label="Telefone"
            value={site.contato.telefone}
            href={`tel:${site.contato.telefone}`}
          />
          <InfoItem
            icon={<Mail size={20} />}
            label="E-mail"
            value={site.contato.email}
            href={`mailto:${site.contato.email}`}
          />
          {site.contato.endereco && (
            <InfoItem icon={<MapPin size={20} />} label="Endereço" value={site.contato.endereco} />
          )}
          {site.contato.horario && (
            <InfoItem icon={<Clock size={20} />} label="Horário de Atendimento" value={site.contato.horario} />
          )}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Seu nome
            </label>
            <input
              required
              placeholder="Como posso te chamar?"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Mensagem
            </label>
            <textarea
              required
              placeholder="Descreva o produto e quantidade que precisa..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition resize-none placeholder:text-gray-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-white font-semibold py-3.5 rounded-xl hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <MessageCircle size={17} /> {site.cta_final.botao}
          </button>
        </form>
      </div>

      {site.contato.mapaEmbed && (
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-72">
          <iframe
            src={site.contato.mapaEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização"
          />
        </div>
      )}
    </Section>
  );
}

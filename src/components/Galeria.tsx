import Section from "./Section";
import { site } from "../config/site";

export default function Galeria() {
  if (!site.galeria.length) return null;
  return (
    <Section id="galeria" className="bg-gray-50">
      <div className="text-center mb-12">
        <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3">
          Galeria
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
          Nossos Trabalhos
        </h2>
        <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
          Veja um pouco do nosso dia a dia.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {site.galeria.map((f, i) => (
          <figure
            key={i}
            className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square
                       w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] max-w-xs"
          >
            <img
              src={f.src}
              alt={f.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {f.legenda && (
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {f.legenda}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Section>
  );
}

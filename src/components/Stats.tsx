import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { site } from "../config/site";

function AnimatedNumber({ value }: { value: string }) {
  const parsed = useMemo(() => {
    const m = value.match(/^(\d+)(.*)$/);
    return m ? { target: parseInt(m[1], 10), suffix: m[2] } : null;
  }, [value]);

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || !parsed) return;
    const controls = animate(0, parsed.target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, parsed]);

  if (!parsed) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {display}
      {parsed.suffix}
    </span>
  );
}

export default function Stats() {
  if (!site.stats.length) return null;
  return (
    <div className="relative z-10 -mt-16 md:-mt-20 px-4 md:px-6 pb-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/80 border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {site.stats.map((s, i) => (
              <div
                key={i}
                className={`text-center p-6 md:p-10 ${
                  i < site.stats.length - 1 ? "border-r border-gray-100" : ""
                } ${i >= 2 ? "border-t border-gray-100 lg:border-t-0" : ""}`}
              >
                <div className="font-display text-3xl md:text-5xl font-bold text-accent mb-2">
                  <AnimatedNumber value={s.valor} />
                </div>
                <div className="text-primary text-xs md:text-sm font-medium leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

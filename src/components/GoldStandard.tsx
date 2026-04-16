import { motion } from "framer-motion";
import { Check } from "lucide-react";

const values = [
  { title: "Strategic Defence", desc: "Every case is approached with a bespoke strategy designed for maximum impact." },
  { title: "Absolute Confidentiality", desc: "Your trust is sacred. Every detail is handled with the utmost discretion." },
  { title: "Unmatched Dedication", desc: "Relentless in pursuit, committed to achieving the best possible outcome." },
];

const GoldStandard = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3">Our Promise</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            The Gold Standard of Service
          </h2>
        </motion.div>

        <div className="space-y-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-5"
            >
              <div className="mt-1 w-6 h-6 rounded-full border border-gold flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-1">{v.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldStandard;

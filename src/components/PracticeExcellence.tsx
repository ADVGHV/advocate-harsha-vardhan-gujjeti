import { motion } from "framer-motion";
import { Scale, Shield, Briefcase, BookOpen, Users } from "lucide-react";

const practices = [
  { icon: Scale, title: "Civil Litigation", desc: "Strategic representation in complex civil disputes with a proven track record." },
  { icon: Shield, title: "Criminal Law", desc: "Vigorous defence ensuring your rights are protected at every stage." },
  { icon: Briefcase, title: "Corporate Advisory", desc: "Comprehensive counsel for businesses navigating regulatory landscapes." },
  { icon: BookOpen, title: "Constitutional Law", desc: "Championing fundamental rights through landmark constitutional matters." },
  { icon: Users, title: "Consumer Matters", desc: "Protecting consumer interests with decisive and effective advocacy." },
];

const PracticeExcellence = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3">Areas of Expertise</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            Practice Excellence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gold-glow-border bg-card p-8 group cursor-default"
            >
              <p.icon className="w-8 h-8 text-gold mb-5 stroke-[1.2]" />
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeExcellence;

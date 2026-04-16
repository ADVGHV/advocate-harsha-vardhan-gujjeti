import { motion } from "framer-motion";
import portraitImg from "@/assets/portrait.jpg";
const ProfessionalProfile = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Portrait placeholder with gold frame */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <img src={portraitImg} alt="Harsha Vardhan Gujjeti, Advocate" className="w-80 h-[28rem] object-cover object-center border-2 border-gold/40" />
            {/* Gold corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold" />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3">Professional Profile</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Harsha Vardhan Gujjeti
          </h2>
          <div className="w-16 h-px bg-gold mb-6" />
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            Harsha Vardhan Gujjeti is a distinguished advocate with extensive experience in civil, criminal, corporate, constitutional, and consumer law. Practising before Trial Courts, High Courts, and the Supreme Court of India, Harsha brings strategic insight and unwavering dedication to every case.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            With a commitment to excellence and a track record of successful outcomes, he represents clients with the highest standards of professional ethics and legal acumen.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            <span className="text-gold font-medium">Education:</span> BA.LLB from University College of Law, Osmania University · LLM at NALSAR University of Law.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalProfile;

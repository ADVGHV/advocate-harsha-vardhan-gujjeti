import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(43_76%_52%_/_0.04)_0%,_transparent_60%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 h-px bg-gold mx-auto mb-8"
        />
        
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight tracking-tight">
          Precision in Law.
          <br />
          <span className="text-gold">Excellence in Advocacy.</span>
        </h1>

        <p className="mt-6 text-muted-foreground text-lg md:text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
          Delivering authoritative legal counsel with unwavering commitment to justice, integrity, and results that speak for themselves.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <a
            href={`https://wa.me/917893838748?text=${encodeURIComponent("Hello! I am interested in booking a legal consultation.\n\nName: \nNature of Matter: (e.g., Civil, Criminal, Corporate) \nPreferred Date/Time: \nPlease let me know the next steps. Thank you.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gold text-primary-foreground font-body font-semibold text-sm uppercase tracking-[0.2em] px-10 py-4 hover:shadow-[0_0_30px_hsl(43_76%_52%_/_0.3)] transition-all duration-500"
          >
            Book a Consultation
          </a>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-px bg-gold mx-auto mt-12"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

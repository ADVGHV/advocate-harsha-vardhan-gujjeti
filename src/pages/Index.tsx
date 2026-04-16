import HeroSection from "@/components/HeroSection";
import PracticeExcellence from "@/components/PracticeExcellence";
import ProfessionalProfile from "@/components/ProfessionalProfile";
import GoldStandard from "@/components/GoldStandard";
import ContactPortal from "@/components/ContactPortal";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-heading text-xl md:text-2xl font-semibold text-gold tracking-wide">
            Harsha Vardhan Gujjeti
          </h1>
          <span className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground hidden sm:block">
            Advocate
          </span>
        </div>
      </header>

      <HeroSection />
      <SectionDivider />
      <PracticeExcellence />
      <SectionDivider />
      <ProfessionalProfile />
      <SectionDivider />
      <GoldStandard />
      <SectionDivider />
      <ContactPortal />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-body text-xs uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Harsha Vardhan Gujjeti, Advocate. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

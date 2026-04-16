import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917893838748";
const WHATSAPP_MESSAGE = `Hello! I am interested in booking a legal consultation.

Name: 
Nature of Matter: (e.g., Civil, Criminal, Corporate) 
Preferred Date/Time: 
Please let me know the next steps. Thank you.`;

export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const contactInfo = [
  { icon: Mail, label: "Email", value: "advharshavardhangujjeti@gmail.com", href: "mailto:advharshavardhangujjeti@gmail.com" },
  { icon: Phone, label: "Mobile", value: "+91 7893838748", href: "tel:+917893838748" },
  { icon: MapPin, label: "Address", value: "H. No: 3-45, RC Reddy Colony, BHEL, Ramachandrapuram, Hyderabad, Telangana 502032", href: undefined },
  { icon: () => <svg className="w-4 h-4 text-gold fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, label: "LinkedIn", value: "Harsha Vardhan Gujjeti", href: "https://www.linkedin.com/in/harsha-vardhan-gujjeti-a20a90218" },
];

const ContactPortal = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3">Get in Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
            Contact Portal
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 max-w-2xl mx-auto mb-16"
        >
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                <item.icon className="w-4 h-4 text-gold stroke-[1.5]" />
              </div>
              <div>
                <p className="text-muted-foreground font-body text-xs uppercase tracking-[0.2em] mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-foreground font-body text-sm hover:text-gold transition-colors duration-300 break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground font-body text-sm leading-relaxed">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-primary-foreground font-body font-semibold text-sm uppercase tracking-[0.2em] px-10 py-4 hover:shadow-[0_0_30px_hsl(43_76%_52%_/_0.3)] transition-all duration-500"
          >
            <MessageCircle className="w-4 h-4" />
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPortal;

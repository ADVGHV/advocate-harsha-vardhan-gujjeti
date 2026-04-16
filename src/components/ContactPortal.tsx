import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "advharshavardhangujjeti@gmail.com", href: "mailto:advharshavardhangujjeti@gmail.com" },
  { icon: Phone, label: "Mobile", value: "+91 7893838748", href: "tel:+917893838748" },
  { icon: MapPin, label: "Address", value: "H. No: 3-45, RC Reddy Colony, BHEL, Ramachandrapuram, Hyderabad, Telangana 502032", href: undefined },
];

const ContactPortal = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-gold stroke-[1.5]" />
                </div>
                <div>
                  <p className="text-muted-foreground font-body text-xs uppercase tracking-[0.2em] mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-foreground font-body text-sm hover:text-gold transition-colors duration-300 break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-body text-sm leading-relaxed">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "email", label: "Email Address", type: "email" },
              { name: "phone", label: "Phone Number", type: "tel" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm text-muted-foreground font-body uppercase tracking-[0.15em] mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-input focus:border-gold px-4 py-3 text-foreground font-body text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground/50"
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm text-muted-foreground font-body uppercase tracking-[0.15em] mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border border-input focus:border-gold px-4 py-3 text-foreground font-body text-sm outline-none transition-colors duration-300 resize-none placeholder:text-muted-foreground/50"
                placeholder="Describe your legal matter..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-primary-foreground font-body font-semibold text-sm uppercase tracking-[0.2em] py-4 hover:shadow-[0_0_30px_hsl(43_76%_52%_/_0.3)] transition-all duration-500"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactPortal;

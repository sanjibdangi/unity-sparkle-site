import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const ContactSection = () => (
  <section id="contact" className="relative py-20 bg-gradient-to-br from-danger-dark via-secondary to-background overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-black mb-4">Get <span className="text-primary">Protected</span> Today</h2>
        <p className="text-muted-foreground text-xl">Contact us for a free security assessment</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="text-xs text-primary uppercase tracking-wider mb-3">Contact Information</div>
            <h3 className="text-3xl font-bold mb-2">General Security & Response Services</h3>
            <p className="text-muted-foreground">Nevada's Premier Security Provider</p>
          </div>

          <div className="space-y-6">
            <a href="tel:+17025551234" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Call Us</div>
                <div className="text-xl font-bold">(702) 555-1234</div>
              </div>
            </a>

            <a href="mailto:info@gsrs-security.com" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email Us</div>
                <div className="text-xl font-bold">info@gsrs-security.com</div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="text-xl font-bold">Las Vegas, Nevada</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          className="bg-gradient-to-br from-primary to-danger-dark rounded-3xl p-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4 text-primary-foreground">Ready for Elite Protection?</h3>
          <p className="text-primary-foreground/80 mb-8 text-lg">Partner with Nevada's most trusted security force. Licensed, insured, and committed to your safety 24/7.</p>

          <div className="space-y-4 mb-8">
            {['Free Security Assessment', 'Custom Protection Plans', 'Licensed & Insured Officers'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-primary-foreground">
                <CheckCircle className="w-6 h-6 text-primary-foreground/70" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="w-full bg-foreground text-background px-10 py-5 rounded-full font-black text-lg hover:opacity-90 transition-all shadow-2xl"
          >
            REQUEST A QUOTE
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

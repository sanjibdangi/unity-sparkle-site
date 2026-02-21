import { Phone, Mail, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const CorporateSection = () => (
  <section id="corporate" className="relative py-20 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Corporate <span className="text-primary">Data</span>
          </h2>
          <div className="relative rounded-3xl overflow-hidden border-4 border-glass-border shadow-2xl">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800" alt="Security Operations" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="bg-gradient-to-br from-primary to-danger-dark rounded-3xl p-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">CAGE / UEI</div>
              <div className="text-2xl font-bold text-primary-foreground">9KEW7 / X9HMZ5V4FXL1</div>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6">
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">Socio-Economic Status</div>
              <div className="text-lg font-semibold text-primary-foreground">WOSB, MBE, WBE, DBE, SBE, ESB</div>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6">
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">Point of Contact</div>
              <div className="text-lg font-semibold text-primary-foreground">Corinthia M Yancey</div>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6">
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">NAICS Codes</div>
              <div className="text-sm leading-relaxed text-primary-foreground">
                <div className="mb-2"><span className="font-bold">561612</span> – Security Guards and Patrol Services (Primary)</div>
                <div><span className="font-bold">611519</span> – Security Guard Training</div>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6">
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">PSC Codes</div>
              <div className="text-sm leading-relaxed text-primary-foreground">
                <div className="mb-1"><span className="font-bold">S206</span> - Housekeeping Guard</div>
                <div className="mb-1"><span className="font-bold">R430</span> – Support—Professional: Physical Security and Badging</div>
                <div><span className="font-bold">R799</span> - Support: Management: Other</div>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6 space-y-3 text-primary-foreground">
              <a href="tel:+14142081997" className="flex items-center gap-3 hover:opacity-80 transition-colors">
                <Phone className="w-5 h-5" /><span className="font-semibold">(414) 208-1997</span>
              </a>
              <a href="mailto:cyancey@gsrsteams.com" className="flex items-center gap-3 hover:opacity-80 transition-colors">
                <Mail className="w-5 h-5" /><span className="font-semibold">cyancey@gsrsteams.com</span>
              </a>
              <a href="http://www.gsrsteams.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-colors">
                <Award className="w-5 h-5" /><span className="font-semibold">www.gsrsteams.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

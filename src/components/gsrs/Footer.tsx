import { Shield } from 'lucide-react';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const Footer = () => (
  <footer className="bg-background border-t border-glass-border py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-danger-dark rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <div className="text-2xl font-black">GSRS</div>
              <div className="text-xs text-muted-foreground">Security & Response Services</div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">Professional security solutions. Licensed, insured, and trusted throughout Nevada since 2015.</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Our Services</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            {['Armed Security', 'Unarmed Security', 'Surveillance Systems', 'Rapid Response'].map((s) => (
              <div key={s} onClick={() => scrollTo('services')} className="hover:text-foreground cursor-pointer transition-colors">{s}</div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div onClick={() => scrollTo('about')} className="hover:text-foreground cursor-pointer transition-colors">About GSRS</div>
            <div onClick={() => scrollTo('contact')} className="hover:text-foreground cursor-pointer transition-colors">Get a Quote</div>
            <a href="tel:+17025551234" className="block hover:text-foreground transition-colors">(702) 555-1234</a>
            <a href="mailto:info@gsrs-security.com" className="block hover:text-foreground transition-colors">info@gsrs-security.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© 2024 General Security & Response Services, LLC. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <span>Nevada Licensed</span>
          <span>•</span>
          <span>Fully Insured</span>
          <span>•</span>
          <span>24/7 Service</span>
        </div>
      </div>
    </div>
  </footer>
);

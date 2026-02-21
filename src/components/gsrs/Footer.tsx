const scrollTo = (id: string) => {
document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const Footer = () => (

  <footer className="bg-background border-t border-glass-border py-14">
    <div className="max-w-7xl mx-auto px-6">

```
  {/* TOP GRID */}
  <div className="grid md:grid-cols-3 gap-10 mb-10">

    {/* LEFT — TEXT LOGO */}
    <div className="md:col-span-1">

      {/* 🔥 BRAND NAME (NO PNG) */}
      <div className="mb-5 leading-none">
        <div className="text-3xl md:text-4xl font-extrabold tracking-wide">
          <span className="text-white">GSRS</span>{' '}
          <span className="text-red-600">SECURITY</span>
        </div>

        <div className="text-xs text-muted-foreground mt-1 tracking-wider">
          & Response Services
        </div>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
        Professional security solutions. Licensed, insured, and trusted
        throughout Nevada since 2015.
      </p>
    </div>

    {/* SERVICES */}
    <div>
      <h4 className="font-bold mb-4 text-foreground">Our Services</h4>
      <div className="space-y-2 text-sm text-muted-foreground">
        {[
          'Armed Security',
          'Unarmed Security',
          'Surveillance Systems',
          'Rapid Response'
        ].map((s) => (
          <div
            key={s}
            onClick={() => scrollTo('services')}
            className="hover:text-foreground cursor-pointer transition-colors"
          >
            {s}
          </div>
        ))}
      </div>
    </div>

    {/* CONTACT */}
    <div>
      <h4 className="font-bold mb-4 text-foreground">Contact</h4>
      <div className="space-y-2 text-sm text-muted-foreground">
        <div
          onClick={() => scrollTo('about')}
          className="hover:text-foreground cursor-pointer transition-colors"
        >
          About GSRS
        </div>

        <div
          onClick={() => scrollTo('contact')}
          className="hover:text-foreground cursor-pointer transition-colors"
        >
          Get a Quote
        </div>

        <a
          href="tel:+17025551234"
          className="block hover:text-foreground transition-colors"
        >
          (702) 555-1234
        </a>

        <a
          href="mailto:info@gsrs-security.com"
          className="block hover:text-foreground transition-colors"
        >
          info@gsrs-security.com
        </a>
      </div>
    </div>
  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
    <div>
      © 2024 General Security & Response Services, LLC. All rights reserved.
    </div>

    <div className="flex items-center gap-4">
      <span>Nevada Licensed</span>
      <span>•</span>
      <span>Fully Insured</span>
      <span>•</span>
      <span>24/7 Service</span>
    </div>
  </div>

</div>
```

  </footer>
);

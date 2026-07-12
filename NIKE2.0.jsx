import { useState, useEffect, useRef } from "react";
import { ShoppingBag, Search, Menu, X, ArrowRight, ChevronRight, Play, Star, Zap, Wind, Shield } from "lucide-react";

const NAV_LINKS = ["Men", "Women", "Kids", "Sale", "SNKRS"];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Air Max Pulse",
    category: "Lifestyle Shoes",
    price: 150,
    tag: "Just In",
    color: "Electric Crimson",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=700&fit=crop&auto=format",
    bg: "#1a1a1a",
  },
  {
    id: 2,
    name: "Pegasus 41",
    category: "Running Shoes",
    price: 135,
    tag: "Best Seller",
    color: "Phantom / Black",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=700&fit=crop&auto=format",
    bg: "#111827",
  },
  {
    id: 3,
    name: "React Infinity 4",
    category: "Road Running",
    price: 160,
    tag: "Member Exclusive",
    color: "Midnight Navy",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=700&fit=crop&auto=format",
    bg: "#0f172a",
  },
  {
    id: 4,
    name: "Dunk Low Retro",
    category: "Skateboarding",
    price: 110,
    tag: "Limited",
    color: "Panda White / Black",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=700&fit=crop&auto=format",
    bg: "#1c1917",
  },
];

const CATEGORIES = [
  {
    label: "Running",
    sub: "Push your limits",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&h=600&fit=crop&auto=format",
  },
  {
    label: "Training",
    sub: "Built for reps",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&auto=format",
  },
  {
    label: "Basketball",
    sub: "Own the court",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop&auto=format",
  },
];

const TESTIMONIALS = [
  { name: "Marcus R.", sport: "Marathon Runner", quote: "The Pegasus changed how I approach long-distance. Every stride feels engineered.", stars: 5 },
  { name: "Aisha T.", sport: "CrossFit Athlete", quote: "React Infinity is genuinely different. The energy return is unlike anything I've worn.", stars: 5 },
  { name: "Devon K.", sport: "Street Hoopers", quote: "Dunks on court, Dunks off court. Wherever I go, people notice.", stars: 5 },
];

const STATS = [
  { value: "55+", label: "Years of Innovation" },
  { value: "1.2B", label: "Athletes Worldwide" },
  { value: "40K+", label: "Products in Lineup" },
  { value: "170+", label: "Countries Reached" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const addToCart = () => setCartCount((c) => c + 1);

  return (
    <div className="min-h-screen bg-background text-foreground font-['Barlow',sans-serif] overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
          <span
            className="font-['Barlow_Condensed',sans-serif] font-black text-3xl tracking-tighter text-foreground select-none"
            style={{ letterSpacing: "-0.04em" }}
          >
            NIKE
          </span>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Search size={20} />
            </button>
            <button
              className="relative text-muted-foreground hover:text-foreground transition-colors"
              onClick={addToCart}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black border-t border-border px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="font-['Barlow_Condensed',sans-serif] font-bold text-2xl uppercase tracking-wider text-foreground"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-end overflow-hidden bg-black"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1800&h=1200&fit=crop&auto=format"
            alt="Athlete sprinting in Nike gear"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 pb-24 pt-32 w-full">
          <div className="max-w-2xl">
            <p className="font-['DM_Mono',monospace] text-accent text-xs tracking-[0.3em] uppercase mb-6">
              Summer 2026 Collection
            </p>
            <h1
              className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-none mb-8 text-foreground"
              style={{ fontSize: "clamp(4rem, 12vw, 10rem)", letterSpacing: "-0.03em", lineHeight: 0.9 }}
            >
              Just
              <br />
              <span className="text-accent italic">Do</span>
              <br />
              It.
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-md leading-relaxed mb-10">
              Every champion was once a contender who refused to give up. Your next move starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={addToCart}
                className="group bg-foreground text-background px-8 py-4 font-['Barlow_Condensed',sans-serif] font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-accent hover:text-white transition-all duration-300"
              >
                Shop Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border border-white/30 text-foreground px-8 py-4 font-['Barlow_Condensed',sans-serif] font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:border-white/80 transition-all duration-300 backdrop-blur-sm">
                <Play size={14} fill="currentColor" />
                Watch Film
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-white animate-pulse" />
          <span className="font-['DM_Mono',monospace] text-[10px] tracking-widest uppercase rotate-90 origin-center mt-4">
            Scroll
          </span>
        </div>
      </section>

      {/* STATS TICKER */}
      <section className="bg-accent py-6 overflow-hidden">
        <div className="flex gap-16 animate-none">
          <div className="flex gap-16 min-w-max px-8">
            {[...STATS, ...STATS].map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                <div>
                  <span className="font-['Barlow_Condensed',sans-serif] font-black text-3xl text-white">
                    {s.value}
                  </span>
                  <span className="ml-3 font-['Barlow',sans-serif] text-white/80 text-sm uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
                <span className="text-white/40 text-2xl font-thin">|</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 max-w-screen-xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-['DM_Mono',monospace] text-accent text-xs tracking-[0.3em] uppercase mb-3">
              Featured
            </p>
            <h2
              className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-none text-foreground"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              New Arrivals
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors group"
          >
            View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
          {FEATURED_PRODUCTS.map((p) => (
            <div key={p.id} className="group relative overflow-hidden bg-card cursor-pointer">
              <div
                className="relative overflow-hidden aspect-[3/4]"
                style={{ backgroundColor: p.bg }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white font-['DM_Mono',monospace] text-[10px] tracking-wider uppercase px-2 py-1">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-4">
                  <button
                    onClick={addToCart}
                    className="w-full bg-foreground text-background py-2.5 font-['Barlow_Condensed',sans-serif] font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-colors duration-200"
                  >
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="p-4 border-t border-border">
                <p className="font-['DM_Mono',monospace] text-muted-foreground text-[10px] tracking-widest uppercase mb-1">
                  {p.category}
                </p>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-['Barlow_Condensed',sans-serif] font-bold text-xl uppercase tracking-tight text-foreground">
                      {p.name}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{p.color}</p>
                  </div>
                  <span className="font-['Barlow_Condensed',sans-serif] font-bold text-xl text-foreground">
                    ${p.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 bg-secondary">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-10">
            <p className="font-['DM_Mono',monospace] text-accent text-xs tracking-[0.3em] uppercase mb-3">
              Explore
            </p>
            <h2
              className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-none text-foreground"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em" }}
            >
              Shop by Sport
            </h2>
          </div>

          <div className="flex gap-0 mb-0.5">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActiveCategory(i)}
                className={`px-6 py-3 font-['Barlow_Condensed',sans-serif] font-bold uppercase tracking-wider text-sm transition-all duration-200 ${
                  activeCategory === i
                    ? "bg-accent text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative aspect-[16/7] overflow-hidden bg-muted">
            <img
              src={CATEGORIES[activeCategory].image}
              alt={CATEGORIES[activeCategory].label}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <p className="font-['DM_Mono',monospace] text-white/60 text-xs tracking-widest uppercase mb-2">
                {CATEGORIES[activeCategory].sub}
              </p>
              <h3
                className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-white mb-6"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}
              >
                {CATEGORIES[activeCategory].label}
              </h3>
              <button className="group inline-flex items-center gap-3 bg-white text-black px-6 py-3 font-['Barlow_Condensed',sans-serif] font-bold uppercase tracking-widest text-sm w-fit hover:bg-accent hover:text-white transition-colors duration-300">
                Shop {CATEGORIES[activeCategory].label}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="py-28 max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="font-['DM_Mono',monospace] text-accent text-xs tracking-[0.3em] uppercase mb-5">
              Innovation
            </p>
            <h2
              className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-none text-foreground mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.03em" }}
            >
              Built on
              <br />
              Science.
              <br />
              <span className="text-accent italic">Worn</span> by
              <br />
              Athletes.
            </h2>
            <div className="space-y-6">
              {[
                { icon: Zap, title: "React Foam", desc: "Ultra-responsive cushioning that springs back 80% of energy with every stride." },
                { icon: Wind, title: "Flyknit Upper", desc: "Engineered mesh wraps the foot precisely — lighter than air, stronger than fabric." },
                { icon: Shield, title: "Nike Air Units", desc: "Pressurized air cushioning absorbs impact across the full length of the sole." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-5 items-start">
                  <div className="shrink-0 w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-['Barlow_Condensed',sans-serif] font-bold uppercase tracking-wider text-sm text-foreground mb-1">
                      {title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="group mt-10 inline-flex items-center gap-3 border border-foreground/30 text-foreground px-6 py-3 font-['Barlow_Condensed',sans-serif] font-bold uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-all duration-300">
              Explore Technology
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=1000&fit=crop&auto=format"
                alt="Nike shoe technology detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent p-5 max-w-[200px]">
              <p className="font-['Barlow_Condensed',sans-serif] font-black text-white text-2xl uppercase leading-tight">
                React Technology
              </p>
              <p className="font-['DM_Mono',monospace] text-white/70 text-xs mt-1">Patent Pending</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="font-['DM_Mono',monospace] text-accent text-xs tracking-[0.3em] uppercase mb-3">
              Community
            </p>
            <h2
              className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-none text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
            >
              Athletes Speak
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-card p-8 border-l-2 border-accent/0 hover:border-accent transition-all duration-300 group">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={12} fill="#ff3000" className="text-accent" />
                  ))}
                </div>
                <blockquote className="font-['Barlow',sans-serif] text-foreground text-base leading-relaxed mb-6 font-light">
                  "{t.quote}"
                </blockquote>
                <div>
                  <p className="font-['Barlow_Condensed',sans-serif] font-bold text-foreground uppercase tracking-wider text-sm">
                    {t.name}
                  </p>
                  <p className="font-['DM_Mono',monospace] text-muted-foreground text-xs mt-0.5">
                    {t.sport}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section className="relative overflow-hidden bg-black py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1800&h=800&fit=crop&auto=format"
            alt="Athlete training"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-white/[0.03]"
            style={{ fontSize: "clamp(8rem, 25vw, 22rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            MEMBER
          </span>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="font-['DM_Mono',monospace] text-accent text-xs tracking-[0.3em] uppercase mb-5">
            Nike Membership
          </p>
          <h2
            className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-none text-foreground mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.03em" }}
          >
            Move with
            <br />
            <span className="text-accent italic">Us.</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-10 font-light max-w-md mx-auto">
            Join millions of members for free access to exclusive drops, personalized recommendations, and early sale events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-foreground text-background px-10 py-4 font-['Barlow_Condensed',sans-serif] font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-accent hover:text-white transition-all duration-300">
              Join Free
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-muted-foreground font-['Barlow_Condensed',sans-serif] font-bold uppercase tracking-widest text-sm hover:text-foreground transition-colors underline underline-offset-4">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-border pt-16 pb-8">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {[
              { heading: "Find a Store", links: ["Store Locator", "Nike By You", "Events", "Nike Journal"] },
              { heading: "Get Help", links: ["Order Status", "Shipping", "Returns", "Payment Options"] },
              { heading: "About Nike", links: ["News", "Careers", "Investors", "Sustainability"] },
              { heading: "Stay Connected", links: ["Nike App", "SNKRS App", "Nike Run Club", "Nike Training Club"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p className="font-['Barlow_Condensed',sans-serif] font-bold uppercase tracking-wider text-xs text-foreground mb-5">
                  {heading}
                </p>
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span
              className="font-['Barlow_Condensed',sans-serif] font-black text-2xl text-foreground tracking-tighter"
              style={{ letterSpacing: "-0.04em" }}
            >
              NIKE
            </span>
            <p className="font-['DM_Mono',monospace] text-muted-foreground text-xs">
              © 2026 Nike, Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Sale", "Terms of Use", "Cookie Settings"].map((l) => (
                <a key={l} href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
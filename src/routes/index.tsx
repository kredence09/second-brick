import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Leaf, ShieldCheck, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Counter } from "@/components/Counter";
import { HorizontalProjects } from "@/components/HorizontalProjects";
import { MagneticButton } from "@/components/MagneticButton";
import hero from "@/assets/hero-home.jpg";
import responsibility from "@/assets/responsibility.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Second Brick — Why Invest in Alibaug, The Next Coastal Growth Market" },
      { name: "description", content: "Discover premium coastal, residential and infrastructure developments by Second Brick — a partnership between PRO-DEV and Nawander Group with 30+ years of proven delivery." },
    ],
  }),
  component: Home,
});

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      {/* HERO — layered cinematic */}
      <section className="relative min-h-[100svh] overflow-hidden bg-cocoa grain">
        {/* Parallax image */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.25}px) scale(1.08)` }}
        >
          <img src={hero} alt="Alibaug coastline" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa via-cocoa/40 to-cocoa/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-cocoa/70 via-transparent to-cocoa/50" />
        </div>

        {/* Architectural grid overlay */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage:
            "linear-gradient(to right, #FBF1E9 1px, transparent 1px), linear-gradient(to bottom, #FBF1E9 1px, transparent 1px)",
          backgroundSize: "12vw 12vw",
        }} />

        {/* Corner marks */}
        <div className="absolute top-24 left-6 md:left-10 text-cream/70 flex items-center gap-3 z-10">
          <span className="w-8 h-px bg-cream/60" />
          <span className="text-[10px] tracking-[0.35em] uppercase">01 / Coastal Growth</span>
        </div>
        <div className="absolute top-24 right-6 md:right-10 text-cream/70 z-10 text-right">
          <div className="text-[10px] tracking-[0.35em] uppercase">18.6414° N</div>
          <div className="text-[10px] tracking-[0.35em] uppercase mt-1">72.8722° E</div>
        </div>

        {/* Vertical label */}
        <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 text-cream/60 v-text z-10">
          Second Brick · Est. Legacy
        </div>

        {/* Slow rotating compass */}
        <div className="absolute right-6 md:right-16 bottom-32 z-10 opacity-70">
          <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-32 md:h-32 text-cream/80 rotate-slow">
            <circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 3" />
            <line x1="60" y1="4" x2="60" y2="18" stroke="currentColor" />
            <line x1="60" y1="102" x2="60" y2="116" stroke="currentColor" />
            <line x1="4" y1="60" x2="18" y2="60" stroke="currentColor" />
            <line x1="102" y1="60" x2="116" y2="60" stroke="currentColor" />
            <polygon points="60,20 55,60 60,54 65,60" fill="#FBF1E9" opacity="0.8" />
            <text x="60" y="30" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="Jost">N</text>
          </svg>
        </div>

        {/* Content */}
        <div className="container-x relative z-10 min-h-[100svh] flex flex-col justify-end pb-32 pt-40">
          <div className="max-w-3xl reveal-x">
            <h1 className="text-cream font-serif leading-[0.95]" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              Why Invest in
              <br />
              <em className="italic text-cream/95">Alibaug</em>
            </h1>
            <div className="mt-8 flex items-center gap-4 text-cream/80">
              <span className="w-12 h-px bg-cream/60" />
              <span className="text-[11px] tracking-[0.32em] uppercase">The Next Coastal Growth Market</span>
            </div>
            <div className="mt-12 flex flex-wrap gap-5">
              <MagneticButton as="a" href="/portfolio" className="btn-primary">
                Explore Projects <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton as="a" href="/inquire" className="btn-ghost">
                Inquire Now
              </MagneticButton>
            </div>
          </div>

          {/* Floating stats strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/15 max-w-4xl">
            {[
              { n: "30+", l: "Years" },
              { n: "10M+", l: "Sq Ft" },
              { n: "40+", l: "Projects" },
              { n: "10K+", l: "Families" },
            ].map((s) => (
              <div key={s.l} className="bg-cocoa/50 backdrop-blur-md px-6 py-5">
                <div className="font-serif text-2xl md:text-3xl text-cream">{s.n}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-cream/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 text-cream/60 text-[10px] tracking-[0.4em] uppercase z-10">
          <span className="w-8 h-px bg-cream/40 animate-pulse" />
          <span>Scroll to explore</span>
          <span className="w-8 h-px bg-cream/40 animate-pulse" />
        </div>
      </section>

      {/* ABOUT — overlapping typography */}
      <AboutSplit />

      {/* STATS — architectural composition */}
      <StatsComposition />

      {/* FEATURED PROJECTS — horizontal luxury gallery */}
      <section className="section-y bg-cream">
        <div className="container-x mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] tracking-[0.35em] uppercase text-brick">— 03 / Portfolio</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}>
              Landmark <em className="italic text-brick">developments</em>,
              <br />built to endure.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A curated selection reflecting our commitment to quality construction, thoughtful
            planning and long-term value creation.
          </p>
        </div>
        <HorizontalProjects />
        <div className="container-x mt-16 text-center">
          <MagneticButton as="a" href="/portfolio" className="btn-outline">
            View Full Portfolio
          </MagneticButton>
        </div>
      </section>

      {/* RESPONSIBILITY — split composition */}
      <section className="section-y bg-secondary/60 relative overflow-hidden">
        <div className="absolute top-10 right-10 v-text text-cocoa/40">— 04 / Responsibility</div>
        <div className="container-x grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={responsibility}
                alt="Hands planting near construction"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-4 border border-cream/70" />
            </div>
            {/* Floating annotation */}
            <div className="absolute -bottom-6 -right-2 md:-right-10 bg-cream border border-brick/20 p-5 max-w-[220px] shadow-[var(--shadow-card)]">
              <div className="text-[10px] tracking-[0.28em] uppercase text-brick">Fig. 01</div>
              <div className="mt-2 font-serif text-lg text-cocoa leading-tight">
                Landscape returned to the land.
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-8">
            <SectionHeading
              eyebrow="— 04 / Responsibility"
              title={<>Building responsibly<br /> for <em className="italic text-brick">tomorrow</em>.</>}
              description="Second Brick balances innovation with sustainability. Through responsible planning, quality construction and customer-first practices, we build spaces that give back to the communities and landscapes that host them."
            />
            <div className="mt-10 grid sm:grid-cols-3 gap-8">
              {[
                { i: Leaf, l: "Sustainable Design", n: "01" },
                { i: ShieldCheck, l: "Quality Assurance", n: "02" },
                { i: Users, l: "Community First", n: "03" },
              ].map(({ i: Icon, l, n }) => (
                <div key={l} className="border-t border-brick/30 pt-4">
                  <div className="flex items-center justify-between">
                    <Icon className="w-5 h-5 text-brick" strokeWidth={1.4} />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-brick/60">{n}</span>
                  </div>
                  <div className="mt-4 text-sm font-medium text-cocoa">{l}</div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <MagneticButton as="a" href="/about" className="btn-outline">Know More</MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 bg-cocoa text-cream overflow-hidden grain">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="font-serif text-[28vw] md:text-[16vw] text-cream/[0.03] leading-none select-none">
            Invest
          </div>
        </div>
        <div className="container-x relative text-center max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-cream/60" />
            <span className="text-[11px] tracking-[0.32em] uppercase text-cream/80">— Next Step</span>
            <span className="w-10 h-px bg-cream/60" />
          </div>
          <h2 className="font-serif text-cream" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.05 }}>
            Ready to invest with <em className="italic">confidence</em>?
          </h2>
          <p className="mt-8 text-cream/75 text-lg max-w-2xl mx-auto">
            Whether you're buying your first property, expanding your portfolio, or seeking
            expert guidance, our team is here to help you make informed decisions.
          </p>
          <div className="mt-12">
            <MagneticButton as="a" href="/inquire" className="btn-ghost">
              Begin the Conversation <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutSplit() {
  const { ref, shown } = useReveal();
  return (
    <section
      ref={ref}
      className={`relative py-28 md:py-40 overflow-hidden transition-all duration-1000 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Giant background type */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="font-serif italic text-[24vw] md:text-[18vw] text-brick/[0.05] leading-none select-none">
          Legacy
        </div>
      </div>

      <div className="container-x relative grid lg:grid-cols-12 gap-14 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="text-[10px] tracking-[0.35em] uppercase text-brick mb-6">— 02 / About</div>
          <h2 className="font-serif" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", lineHeight: 1.05 }}>
            A partnership built on
            <br />
            <em className="italic text-brick">experience</em> & excellence.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-8">
          <p className="text-xl md:text-2xl font-serif italic text-cocoa leading-relaxed">
            "Second Brick is a strategic partnership between PRO-DEV and Nawander Group,
            bringing together decades of collective experience across residential, commercial
            and infrastructure development."
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Our shared commitment to quality, transparency and timely execution enables us
            to deliver projects that create lasting value for investors and homeowners alike.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-brick/20 max-w-lg">
            <div>
              <div className="eyebrow">Est. 1994</div>
              <div className="mt-2 font-serif text-2xl text-cocoa">PRO-DEV</div>
              <p className="text-sm text-muted-foreground mt-1">Mumbai · Goa</p>
            </div>
            <div>
              <div className="eyebrow">Est. 2005</div>
              <div className="mt-2 font-serif text-2xl text-cocoa">Nawander Group</div>
              <p className="text-sm text-muted-foreground mt-1">Pune · Latur</p>
            </div>
          </div>
          <Link to="/about" className="btn-outline inline-flex mt-4">Learn About Us</Link>
        </div>
      </div>
    </section>
  );
}

function StatsComposition() {
  const items = [
    { n: 30, s: "+", l: "Years of Experience", coord: "A" },
    { n: 10, s: "M+", l: "Sq. Ft. Delivered", coord: "B" },
    { n: 40, s: "+", l: "Projects Completed", coord: "C" },
    { n: 10, s: "K+", l: "Families Served", coord: "D" },
  ];
  return (
    <section className="relative bg-cocoa text-cream py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-10 left-6 md:left-10 v-text text-cream/50">— 03 / Legacy in Numbers</div>

      <div className="container-x relative">
        <div className="max-w-2xl mb-20">
          <div className="text-[10px] tracking-[0.35em] uppercase text-cream/60 mb-6">— Legacy in Numbers</div>
          <h2 className="font-serif text-cream" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.05 }}>
            Three decades.
            <br />
            <em className="italic">Countless</em> homes.
          </h2>
        </div>

        <div className="relative">
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="12" y1="30" x2="88" y2="30" stroke="#FBF1E9" strokeOpacity="0.15" strokeDasharray="1 2" />
            <line x1="12" y1="70" x2="88" y2="70" stroke="#FBF1E9" strokeOpacity="0.15" strokeDasharray="1 2" />
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 relative">
            {items.map((it, i) => (
              <div key={it.l} className={`${i % 2 === 1 ? "md:mt-16" : ""}`}>
                <div className="text-[10px] tracking-[0.3em] uppercase text-brick mb-4">Fig. {it.coord}</div>
                <div className="font-serif text-cream leading-none" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
                  <Counter to={it.n} />
                  <span className="text-brick">{it.s}</span>
                </div>
                <div className="mt-4 h-px bg-cream/30 w-full" />
                <div className="mt-3 text-[11px] tracking-[0.28em] uppercase text-cream/70">{it.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

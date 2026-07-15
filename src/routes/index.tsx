import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Leaf, ShieldCheck, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import hero from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
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

const stats = [
  { n: "30+", l: "Years of Experience" },
  { n: "10M+", l: "Sq. Ft. Delivered" },
  { n: "40+", l: "Projects Completed" },
  { n: "10K+", l: "Families Served" },
];

const featured = [
  { img: project1, name: "Coastal Retreat", location: "Alibaug, Maharashtra", status: "Upcoming" },
  { img: project2, name: "Urban Skyline Residences", location: "Mumbai", status: "Ongoing" },
  { img: project3, name: "Nawander Township", location: "Pune", status: "Completed" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Aerial view of Alibaug coastline"
          width={1920}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/30 to-cocoa/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa/60 via-transparent to-transparent" />

        <div className="container-x relative z-10 pb-24 pt-32 md:pb-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="rule-line" style={{ background: "var(--cream)" }} />
              <span className="eyebrow text-cream">The Second Brick</span>
            </div>
            <h1 className="text-cream font-serif" style={{ fontSize: "clamp(2.6rem, 6vw, 4.4rem)" }}>
              Why Invest in <em className="italic text-cream/95">Alibaug</em>
            </h1>
            <p className="mt-6 text-lg text-cream/85 max-w-xl">
              The Next Coastal Growth Market — where legacy meets opportunity, and the sea
              writes the return on every square foot.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/portfolio" className="btn-primary">
                Explore Projects <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/inquire" className="btn-ghost">Inquire Now</Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 text-cream/70 text-[11px] tracking-[0.3em] uppercase">
          <span>Scroll</span>
          <span className="w-10 h-px bg-cream/40" />
        </div>
      </section>

      {/* ABOUT */}
      <AboutSection />

      {/* STATS */}
      <section className="section-y bg-cocoa text-cream">
        <div className="container-x">
          <SectionHeading eyebrow="Our Legacy in Numbers" title="Three decades. Countless homes." invert />
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
            {stats.map((s) => (
              <div key={s.l} className="bg-cocoa p-10 text-center">
                <div className="font-serif text-5xl md:text-6xl text-cream">{s.n}</div>
                <div className="mt-3 text-[11px] tracking-[0.24em] uppercase text-cream/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <SectionHeading
              eyebrow="Featured Projects"
              title={<>Landmark developments,<br /> built to endure.</>}
            />
            <p className="text-muted-foreground max-w-md">
              Explore some of our developments that reflect our commitment to quality
              construction, thoughtful planning, and long-term value creation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ProjectCard key={p.name} p={p} index={i} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/portfolio" className="btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITY */}
      <section className="section-y bg-secondary/60">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={responsibility}
              alt="Hands planting a sapling near a construction site"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-brick/20" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Responsibility"
              title={<>Building responsibly<br /> for tomorrow.</>}
              description="Second Brick is dedicated to creating developments that balance innovation with sustainability. Through responsible planning, quality construction, and customer-first practices, we strive to build spaces that contribute positively to communities while delivering long-term value."
            />
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { i: Leaf, l: "Sustainable Design" },
                { i: ShieldCheck, l: "Quality Assurance" },
                { i: Users, l: "Community First" },
              ].map(({ i: Icon, l }) => (
                <div key={l} className="border-t border-brick/20 pt-4">
                  <Icon className="w-5 h-5 text-brick" />
                  <div className="mt-3 text-sm font-medium text-cocoa">{l}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline mt-10 inline-flex">Know More</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-y bg-brick text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, var(--cream) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--cream) 0, transparent 40%)"
        }} />
        <div className="container-x relative text-center max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="rule-line" style={{ background: "var(--cream)" }} />
            <span className="eyebrow" style={{ color: "var(--cream)" }}>Next Step</span>
            <span className="rule-line" style={{ background: "var(--cream)" }} />
          </div>
          <h2 className="text-cream font-serif" style={{ color: "var(--cream)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Ready to invest with confidence?
          </h2>
          <p className="mt-6 text-cream/80 text-lg">
            Whether you're buying your first property, expanding your portfolio, or seeking
            expert guidance, our team is here to help you make informed decisions every
            step of the way.
          </p>
          <Link to="/inquire" className="btn-ghost mt-10 inline-flex">Inquire Now</Link>
        </div>
      </section>
    </>
  );
}

function AboutSection() {
  const { ref, shown } = useReveal();
  return (
    <section
      ref={ref}
      className={`section-y transition-all duration-1000 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="container-x grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-brick/90 via-brick to-cocoa flex items-center justify-center">
                <div className="text-cream text-center px-8">
                  <div className="font-serif text-7xl md:text-8xl leading-none">SB</div>
                  <div className="mt-6 rule-line" style={{ background: "var(--cream)" }} />
                  <div className="mt-6 eyebrow text-cream">Est. Partnership</div>
                  <div className="mt-2 font-serif text-2xl">PRO-DEV × Nawander</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-cream border border-border p-6 shadow-[var(--shadow-card)] max-w-[220px]">
              <div className="eyebrow">Since 1994</div>
              <div className="font-serif text-lg text-cocoa mt-2 leading-tight">
                A partnership built on excellence.
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About Second Brick"
            title={<>A partnership built on <em className="italic text-brick">experience</em> & excellence.</>}
          />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Second Brick is a strategic partnership between PRO-DEV and Nawander Group,
            bringing together decades of collective experience across residential,
            commercial, and infrastructure development.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our shared commitment to quality, transparency, and timely execution enables us
            to deliver projects that create lasting value for investors and homeowners alike.
          </p>
          <Link to="/about" className="btn-outline mt-10 inline-flex">Learn About Us</Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  p,
  index,
}: {
  p: { img: string; name: string; location: string; status: string };
  index: number;
}) {
  const statusColor =
    p.status === "Ongoing" ? "bg-brick text-cream" :
    p.status === "Completed" ? "bg-cocoa text-cream" :
    "bg-cream text-brick border border-brick";

  return (
    <Link
      to="/portfolio"
      className="group block bg-cream border border-border overflow-hidden transition-all duration-500 hover:shadow-[var(--shadow-card)] hover:-translate-y-1"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.img}
          alt={p.name}
          width={1200}
          height={900}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className={`absolute top-4 left-4 text-[10px] tracking-[0.24em] uppercase px-3 py-1.5 ${statusColor}`}>
          {p.status}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl text-cocoa">{p.name}</h3>
            <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              {p.location}
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-brick transition-transform duration-300 group-hover:rotate-45" />
        </div>
        <div className="mt-5 pt-5 border-t border-border text-[11px] tracking-[0.24em] uppercase text-brick">
          Know More
        </div>
      </div>
    </Link>
  );
}

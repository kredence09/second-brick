import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, Heart, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import heroAbout from "@/assets/hero-about.jpg";
import presenceMap from "@/assets/presence-map.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Second Brick — Two Legacies. One Shared Vision." },
      { name: "description", content: "Second Brick combines the expertise of PRO-DEV and Nawander Group to deliver exceptional real estate through innovation, integrity and long-term commitment." },
      { property: "og:title", content: "About Second Brick" },
      { property: "og:description", content: "Two legacies. One shared vision — PRO-DEV & Nawander Group." },
    ],
  }),
  component: About,
});

const leaders = [
  {
    name: "Namrata Malu",
    group: "PRO-DEV",
    bio: "Brings nearly three decades of PRO-DEV's redevelopment experience — quality construction and dependable delivery across Mumbai and Goa.",
    initials: "NM",
  },
  {
    name: "Ar. Maheshkumar Nawander",
    group: "Nawander Group",
    bio: "Deep expertise in architectural planning and design, shaping Nawander Group's townships and institutional developments over 15+ years.",
    initials: "MN",
  },
  {
    name: "Nitinkumar Nawander",
    group: "Nawander Group",
    bio: "Grounds Nawander Group's design ambitions in practical, on-the-ground construction execution across Pune and Latur.",
    initials: "NN",
  },
];

const values = [
  { i: Award, t: "Excellence", d: "Uncompromising standards in every foundation we lay and every finish we deliver." },
  { i: Heart, t: "Integrity", d: "Transparent transactions, honest communication and lifelong customer relationships." },
  { i: Compass, t: "Vision", d: "Anticipating where growth will happen, and building for the market that's next." },
  { i: Sparkles, t: "Craft", d: "Architecturally considered spaces where design choices reveal themselves slowly." },
];

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <img
          src={heroAbout}
          alt="Elegant interior with arched windows"
          width={1920}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/85 to-cream" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="rule-line" />
              <span className="eyebrow">About Us</span>
            </div>
            <h1 className="font-serif">
              About <em className="italic text-brick">Second Brick</em>
            </h1>
            <div className="mt-6 font-serif text-2xl md:text-3xl text-cocoa/80 italic">
              Two Legacies. One Shared Vision.
            </div>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-2xl">
              Second Brick combines the expertise of PRO-DEV and Nawander Group to deliver
              exceptional real estate experiences through innovation, integrity, and
              long-term commitment.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="section-y bg-secondary/50">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Chapter One" title="Our Story" />
          </div>
          <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Founded through the partnership of PRO-DEV and Nawander Group, Second Brick was
              established with a vision to redefine the real estate experience.
            </p>
            <p>
              By combining technical expertise, strategic planning, and decades of industry
              knowledge, we create developments that are thoughtfully designed, efficiently
              executed, and built to stand the test of time.
            </p>
            <div className="pt-6 grid sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-brick pl-5">
                <div className="eyebrow">PRO-DEV</div>
                <p className="mt-2 text-base text-cocoa">Three decades of Mumbai & Goa redevelopment expertise.</p>
              </div>
              <div className="border-l-2 border-brick pl-5">
                <div className="eyebrow">Nawander Group</div>
                <p className="mt-2 text-base text-cocoa">Master-planned townships across Pune & Latur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind the promise."
            description="Our leadership team brings together experienced professionals with deep knowledge in development, construction, planning, and customer relations. Their collective vision ensures every project is delivered with transparency, quality, and excellence."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {leaders.map((l) => (
              <article key={l.name} className="group bg-cream border border-border p-8 transition-all duration-500 hover:border-brick hover:shadow-[var(--shadow-card)]">
                <div className="aspect-square w-full bg-gradient-to-br from-brick to-cocoa flex items-center justify-center mb-6">
                  <span className="font-serif text-6xl text-cream">{l.initials}</span>
                </div>
                <div className="eyebrow">{l.group}</div>
                <h3 className="mt-3 font-serif text-2xl text-cocoa">{l.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{l.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="section-y bg-cocoa text-cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values & Responsibility"
            title="Principles that shape every square foot."
            invert
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
            {values.map(({ i: Icon, t, d }) => (
              <div key={t} className="bg-cocoa p-8">
                <Icon className="w-7 h-7 text-brick" strokeWidth={1.5} />
                <h3 className="mt-6 font-serif text-2xl text-cream">{t}</h3>
                <p className="mt-3 text-sm text-cream/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESENCE */}
      <section id="presence" className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Presence"
              title="Rooted in cities that shape India's real estate story."
              description="From the coastal edge of Mumbai to the townships of Pune and the growing markets of Latur — our footprint is deliberate, community-first, and built for generational value."
            />
            <div className="mt-10 space-y-4">
              {["Mumbai", "Pune", "Latur"].map((city) => (
                <div key={city} className="flex items-center gap-5 border-b border-border pb-4">
                  <div className="font-serif text-4xl text-brick w-16">
                    {city.charAt(0)}
                  </div>
                  <div>
                    <div className="font-serif text-xl text-cocoa">{city}</div>
                    <div className="text-sm text-muted-foreground">
                      {city === "Mumbai" && "Coastal & redevelopment focus"}
                      {city === "Pune" && "Township & residential"}
                      {city === "Latur" && "Emerging growth market"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square bg-secondary/40 overflow-hidden">
            <img
              src={presenceMap}
              alt="Map of India showing Mumbai, Pune and Latur presence"
              width={1400}
              height={1100}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

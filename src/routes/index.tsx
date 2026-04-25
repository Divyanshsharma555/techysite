import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Video, Sparkles, Star, Rocket, Server, Calendar, ShoppingCart, Smartphone, Search, Wrench, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import heroBg from "@/assets/hero-gradient.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechySite — You Imagine. We Build." },
      { name: "description", content: "Premium websites, e-commerce stores, mobile apps and ready-to-post reels. Launch in 7 days with TechySite." },
      { property: "og:title", content: "TechySite — You Imagine. We Build." },
      { property: "og:description", content: "Websites, e-commerce, apps and content for ambitious businesses." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Globe, title: "Web Design & Development", desc: "Modern, fast, mobile-first websites tailored to your brand and built to convert visitors into customers." },
  { icon: ShoppingCart, title: "E-Commerce Websites", desc: "Custom online stores with payments, inventory, and dashboards that scale with your business." },
  { icon: Video, title: "Digital Marketing Content", desc: "Scroll-stopping reels and short-form videos that grow your reach and turn followers into buyers." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-feel iOS and Android apps connected to a powerful backend you fully control." },
  { icon: Search, title: "SEO & Growth Strategy", desc: "Get found on Google with on-page SEO, schema, performance and a clear content roadmap." },
  { icon: Wrench, title: "Free Starter Pack", desc: "Every website includes 3 free reels, 1 year of domain and 3 years of backend support." },
];

const offerPoints = [
  { icon: Globe, label: "Custom website", note: "Designed & built for you" },
  { icon: Video, label: "3 free reels", note: "Ready to post" },
  { icon: Calendar, label: "1 year domain", note: "On us" },
  { icon: Server, label: "3 yrs backend support", note: "Hosting & updates" },
];

const testimonials = [
  { name: "Rohan Sharma", role: "Founder, Spice Route Bistro — Mumbai, India", country: "🇮🇳", rating: 4.8, text: "TechySite delivered our restaurant website and reels in just 8 days. Online orders jumped 60% in the first month — the team genuinely understands Indian customers." },
  { name: "Priya Verma", role: "Director, Verma Textiles — Delhi, India", country: "🇮🇳", rating: 4.5, text: "From e-commerce store to UPI checkout and our brand reels, everything was handled end-to-end. Our wholesale enquiries from Tier-2 cities have tripled." },
  { name: "Aditya Khanna", role: "CEO, NoidaTech Solutions — Noida, India", country: "🇮🇳", rating: 4.0, text: "We needed a CRM and a corporate website fast. TechySite shipped both with Zoho integration. Sales follow-ups are now 3x faster." },
  { name: "Sara Whitman", role: "Owner, Bloom & Co. — London, United Kingdom", country: "🇬🇧", rating: 3.6, text: "Working across time zones felt seamless. The website looks like a luxury brand five times our size and the reels brought 12k new followers in two months." },
  { name: "Daniel Reyes", role: "CEO, Northwave Fitness — Toronto, Canada", country: "🇨🇦", rating: 4.2, text: "The launch package paid for itself in week one. Easily the best investment we've made — and support has been outstanding ever since." },
];

const projects = [
  { title: "Spice Route Bistro", category: "Restaurant Website + Reels", location: "Mumbai, India", result: "+60% online orders" },
  { title: "Verma Textiles", category: "E-Commerce Store", location: "Delhi, India", result: "3× wholesale leads" },
  { title: "NoidaTech Solutions", category: "Corporate Site + CRM", location: "Noida, India", result: "3× faster follow-ups" },
  { title: "Bloom & Co.", category: "Brand Site + Content", location: "London, UK", result: "12k new followers" },
  { title: "Northwave Fitness", category: "Mobile App + Website", location: "Toronto, Canada", result: "ROI in week 1" },
  { title: "Dunes Hospitality", category: "Multi-property Booking", location: "Dubai, UAE", result: "+45% direct bookings" },
];

function Home() {
  return (
    <>
      {/* Hero — vivid blue gradient like reference */}
      <section className="relative overflow-hidden -mt-16 pt-16">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.85 }} />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
        <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-16 md:pb-40 md:pt-24">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Rocket className="h-3.5 w-3.5" /> Trusted by businesses across 12+ countries
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              You Imagine.{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-2 text-[oklch(0.22_0.03_265)]">We Build.</span>
                <span className="absolute inset-0 -skew-y-2 rounded-md bg-accent-yellow" />
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/85 md:text-lg">
              TechySite builds premium websites, e-commerce stores, mobile apps and ready-to-post content
              that grow your business. Launch in 7 days — no tech headaches, no surprises.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-accent-yellow px-7 text-accent-yellow-foreground font-semibold hover:bg-accent-yellow/90 shadow-elegant">
                <Link to="/contact">Get Started <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full text-white hover:bg-white/10 hover:text-white">
                <Link to="/pricing">See pricing</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-white/75">
              ✓ 3 free reels  ·  ✓ 1 year domain  ·  ✓ 3 yrs backend support
            </p>
          </div>
        </div>
      </section>

      {/* Quick service cards floating over hero edge */}
      <section className="relative -mt-20 mx-auto max-w-7xl px-6 z-10">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[
            { icon: Globe, title: "Web Design & Development", desc: "Persuasive web designs that turn visitors into loyal customers." },
            { icon: ShoppingCart, title: "E-Commerce Websites", desc: "Custom online stores with great APIs and a smooth checkout." },
            { icon: Sparkles, title: "Cost-Effective Web Solutions", desc: "Affordable, custom-tailored builds that fit your budget and goals." },
          ].map((s, i) => (
            <div
              key={s.title}
              className="hover-lift relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 shadow-elegant animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-10 blur-2xl" />
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-soft">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to grow online"
          subtitle="One studio. Six pillars. Built for businesses that want results, not jargon."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="hover-lift rounded-2xl border border-border/70 bg-card p-7 shadow-soft animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-soft">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offer highlight */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-soft p-10 md:p-14">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-yellow opacity-30 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent-yellow px-3 py-1 text-xs font-semibold text-accent-yellow-foreground">
                Launch Offer
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Launch your business in <span className="text-gradient">7 days</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                One package. Everything included. Website, content and the backend that keeps it all running.
              </p>
              <Button asChild size="lg" className="mt-6 rounded-full bg-gradient-brand text-brand-foreground hover:opacity-95">
                <Link to="/contact">Claim the offer <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {offerPoints.map((p) => (
                <div key={p.label} className="rounded-2xl border border-border/70 bg-surface-elevated p-5 shadow-soft">
                  <p.icon className="h-5 w-5 text-brand" />
                  <p className="mt-3 text-sm font-medium">{p.label}</p>
                  <p className="text-xs text-muted-foreground">{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects we've shipped"
          subtitle="A snapshot of recent builds for clients across India and the world."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="hover-lift group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-soft animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand opacity-80" />
              <p className="text-xs font-medium uppercase tracking-wider text-brand">{p.category}</p>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
              <div className="mt-4 inline-flex items-center rounded-full bg-accent-yellow/30 px-3 py-1 text-xs font-semibold text-foreground">
                {p.result}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          🌍 Serving founders across India, UK, Canada, UAE, USA, Australia, Singapore and more.
        </p>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <SectionHeading eyebrow="Loved by founders worldwide" title="Real results, real stories" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="hover-lift rounded-2xl border border-border/70 bg-card p-7 shadow-soft animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative inline-flex">
                    <div className="flex gap-0.5 text-accent-yellow/35">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <div
                      className="absolute inset-0 flex overflow-hidden text-accent-yellow"
                      style={{ width: `${(Math.max(0, Math.min(5, t.rating)) / 5) * 100}%` }}
                    >
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 shrink-0 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{t.rating.toFixed(1)}/5</span>
                </div>
                <span className="text-xl" aria-hidden>{t.country}</span>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.text}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <p className="font-medium">{t.name}</p>
                <p className="text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-white md:px-16 md:py-20" style={{ background: "var(--gradient-brand)" }}>
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-yellow opacity-20 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Ready to launch your brand?</h2>
              <p className="mt-3 text-white/85">Tell us about your business — we'll send a tailored plan within 24 hours.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-accent-yellow text-accent-yellow-foreground font-semibold hover:bg-accent-yellow/90">
                <Link to="/contact">Let's build your brand <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full text-white hover:bg-white/10 hover:text-white">
                <a href="tel:+918619248937"><Phone className="mr-2 h-4 w-4" /> Call us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

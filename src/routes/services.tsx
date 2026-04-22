import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Video, Megaphone, Check, ArrowRight, ShoppingCart, Smartphone, Search, Wrench, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TechySite" },
      { name: "description", content: "Web design, e-commerce, mobile apps, reels, SEO, and 24/7 support — everything your business needs from TechySite." },
      { property: "og:title", content: "Services — TechySite" },
      { property: "og:description", content: "Websites, e-commerce, apps, reels and marketing built for growth." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    desc: "Persuasive, custom-designed websites that look beautiful on every device and turn visitors into loyal customers.",
    points: ["Custom design tailored to your brand", "Mobile-first & SEO ready", "Domain + hosting handled for you", "Lifetime backend support"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    desc: "Custom online stores with excellent APIs, smooth checkout and a dashboard built to scale your sales.",
    points: ["Payment gateway integration", "Inventory & order management", "Multi-vendor ready", "Auto invoice generator"],
  },
  {
    icon: Video,
    title: "Reel & Video Creation",
    desc: "Short-form, scroll-stopping reels crafted to make your brand impossible to ignore on Instagram, TikTok and YouTube.",
    points: ["3 free reels with every site", "Hooks & captions written for you", "Vertical, square and landscape", "Additional reel packs available"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native-feel iOS and Android apps connected to a powerful backend — perfect for stores, bookings and communities.",
    points: ["iOS + Android from one codebase", "Push notifications & auth", "Admin dashboard included", "App Store submission help"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Strategy",
    desc: "A clear, simple growth plan — not a buzzword salad. We tell you what to post, when and why.",
    points: ["Brand positioning & messaging", "Content calendar template", "Audience & competitor research", "Monthly performance review"],
  },
  {
    icon: Search,
    title: "SEO & Performance",
    desc: "Get found on Google with technical SEO, fast load times and content optimised for the keywords that bring buyers.",
    points: ["Keyword & competitor research", "On-page & technical SEO", "Schema & structured data", "Google Search Console setup"],
  },
  {
    icon: Wrench,
    title: "Cost-Effective Web Solutions",
    desc: "Custom web services that suit your budget without cutting corners — the same quality, a friendlier price.",
    points: ["Transparent fixed pricing", "No hidden renewal fees", "Pay-as-you-grow add-ons", "Free consultation"],
  },
  {
    icon: Headphones,
    title: "24/7 Free Technical Support",
    desc: "Phone, chat and email — our team is always one message away to keep your site running and growing.",
    points: ["Round-the-clock support", "Free fixes & updates", "Security monitoring", "Uptime guarantee"],
  },
];

function Services() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-20 text-center md:pt-28">
        <span className="inline-flex items-center rounded-full border border-border/70 glass px-3 py-1 text-xs font-medium text-muted-foreground">
          Services
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
          Everything your brand needs, <span className="text-gradient">under one roof</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
          Websites, e-commerce, apps, reels, SEO and 24/7 support — designed to launch fast and grow steadily.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="hover-lift rounded-2xl border border-border/70 bg-card p-7 shadow-soft animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-soft">
                <s.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-border/60 bg-gradient-soft p-10 text-center md:p-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Not sure which service fits?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Tell us where you are and where you want to go. We'll recommend the right path — and never upsell.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full bg-accent-yellow text-accent-yellow-foreground font-semibold hover:bg-accent-yellow/90">
            <Link to="/contact">Talk to us <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}

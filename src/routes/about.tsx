import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TechySite" },
      { name: "description", content: "TechySite helps businesses grow online by simplifying their digital presence — websites, e-commerce, apps and content under one roof." },
      { property: "og:title", content: "About — TechySite" },
      { property: "og:description", content: "Helping businesses launch and grow online." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-20 text-center md:pt-28">
        <span className="inline-flex items-center rounded-full border border-border/70 glass px-3 py-1 text-xs font-medium text-muted-foreground">
          About us
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
          A studio built for <span className="text-gradient">small businesses</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
          We pair beautiful websites with content that actually gets seen — so you can focus on running your business.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Mission", text: "Help small businesses grow online with websites and content that just work — quickly, beautifully, affordably." },
            { icon: Eye, title: "Vision", text: "A world where every founder can launch a digital presence in days, not months, without hiring a full team." },
            { icon: Heart, title: "Values", text: "Honest pricing, fast delivery, real craft, and zero jargon. We treat your brand like our own." },
          ].map((b, i) => (
            <div
              key={b.title}
              className="hover-lift rounded-2xl border border-border/70 bg-card p-7 shadow-soft animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-soft">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why we exist</h2>
            <p className="mt-4 text-muted-foreground">
              Most small businesses don't need another agency pitch deck. They need a website that loads fast,
              a few good videos, and someone reliable in their corner.
            </p>
            <p className="mt-4 text-muted-foreground">
              That's exactly what TechySite does. One simple package. One trusted team. Results you can measure.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "120+", v: "Brands launched" },
              { k: "7 days", v: "Average go-live" },
              { k: "98%", v: "Client retention" },
              { k: "3 yrs", v: "Backend support" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border/70 bg-surface-elevated p-6 text-center shadow-soft">
                <p className="text-3xl font-semibold tracking-tight text-gradient">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-border/60 bg-gradient-soft p-10 text-center md:p-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Let's build something you'll be proud of.</h2>
          <Button asChild size="lg" className="mt-6 rounded-full bg-gradient-brand text-brand-foreground hover:opacity-95">
            <Link to="/contact">Start a project <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}

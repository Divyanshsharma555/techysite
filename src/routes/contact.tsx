import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TechySite" },
      { name: "description", content: "Tell TechySite about your business — we'll send a tailored plan within 24 hours." },
      { property: "og:title", content: "Contact — TechySite" },
      { property: "og:description", content: "Let's build your brand." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll get back to you within 24 hours.");
    }, 700);
  };

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-20 text-center md:pt-28">
        <span className="inline-flex items-center rounded-full border border-border/70 glass px-3 py-1 text-xs font-medium text-muted-foreground">
          Contact
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
          Let's <span className="text-gradient">build your brand</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
          Tell us a little about your business. We'll get back within 24 hours with a tailored plan.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            {[
              { icon: Mail, label: "HR Email", value: "hr@techysite.software", href: "mailto:hr@techysite.software" },
              { icon: Phone, label: "Phone", value: "+91 86192 48937", href: "tel:+918619248937" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat on +91 86192 48937", href: "https://wa.me/918619248937" },
              { icon: MapPin, label: "Studio", value: "Vaishali Nagar, near Amrapali Circle, Jaipur" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href ?? undefined}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel={c.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-soft transition hover:border-brand/40 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground">
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</p>
                  <p className="mt-1 text-sm font-medium">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="rounded-2xl border border-border/60 bg-gradient-soft p-6">
              <p className="text-sm font-medium">Launch Offer</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Website + 3 reels + 1 year domain + 3 years backend support. Limited spots each month.
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-3 rounded-2xl border border-border/70 bg-card p-7 shadow-soft"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@business.com" />
              </div>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="business">Business name</Label>
                <Input id="business" name="business" placeholder="Acme Co." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget (₹)</Label>
                <Input id="budget" name="budget" placeholder="₹5,000 – ₹50,000+" />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Project details</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your business and what you'd like to build…" />
            </div>
            <Button
              type="submit"
              disabled={sending}
              size="lg"
              className="mt-6 w-full rounded-full bg-gradient-brand text-brand-foreground hover:opacity-95"
            >
              {sending ? "Sending…" : <>Send message <ArrowRight className="ml-1 h-4 w-4" /></>}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              We reply within 24 hours, Monday to Friday.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

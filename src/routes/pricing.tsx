import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Globe, ShoppingCart, Smartphone, Video, PenTool, FileText, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — TechySite (India)" },
      { name: "description", content: "Transparent INR pricing from TechySite — websites, e-commerce, mobile apps, logo design, content writing and CRM. Every plan includes 3 free reels, 1 year domain and 3 years backend support." },
      { property: "og:title", content: "Pricing — TechySite" },
      { property: "og:description", content: "Affordable Indian pricing for websites, e-commerce, apps, logos, content and CRM." },
    ],
  }),
  component: Pricing,
});

type Plan = {
  name: string;
  icon: typeof Globe;
  price: string;
  oldPrice?: string;
  gst?: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

const websitePlans: Plan[] = [
  {
    name: "Starter Website",
    icon: Globe,
    price: "₹7,999",
    oldPrice: "₹12,000",
    gst: "+ 18% GST",
    tagline: "For small businesses launching online.",
    description:
      "Perfect for shops, clinics and freelancers who need a clean, professional presence with everything taken care of.",
    features: [
      "5-page custom website",
      "1 year FREE domain (.com / .in / .org)",
      "1 year FREE cloud hosting",
      "Mobile-first responsive design",
      "Free SSL certificate",
      "5 business email IDs",
      "WhatsApp + call button integration",
      "Inquiry form & social links",
      "3 FREE promotional reels",
      "3 years backend support",
      "Annual hosting renewal: ₹4,000",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth Website",
    icon: Globe,
    price: "₹13,999",
    oldPrice: "₹22,000",
    gst: "+ 18% GST",
    tagline: "For brands ready to scale with content.",
    description:
      "A premium dynamic website with admin access, SEO and Google Search Console — built to grow with your business.",
    features: [
      "12-page dynamic website",
      "1 year FREE domain & cloud hosting",
      "Premium custom design",
      "Admin dashboard access",
      "Google Search Console setup",
      "10 business email IDs",
      "Live chat + payment gateway",
      "WhatsApp & call integration",
      "3 FREE reels + 6 extra reels",
      "Advanced SEO & analytics",
      "3 years backend support",
    ],
    featured: true,
    badge: "Most Popular",
    cta: "Choose Growth",
  },
  {
    name: "Custom Website",
    icon: Globe,
    price: "On request",
    tagline: "For unique products, portals or platforms.",
    description:
      "Bespoke architecture for SaaS, booking systems, learning portals or multi-tenant platforms — priced to your scope.",
    features: [
      "Pages as per requirement",
      "1 year FREE domain & hosting",
      "Bespoke design system",
      "Admin & user dashboards",
      "Custom APIs & integrations",
      "Premium SEO & schema",
      "Unlimited email IDs",
      "3 FREE reels included",
      "3 years backend support",
      "Dedicated project manager",
    ],
    cta: "Request a quote",
  },
];

const ecommercePlans: Plan[] = [
  {
    name: "Premium E-Commerce",
    icon: ShoppingCart,
    price: "₹21,999",
    oldPrice: "₹32,000",
    gst: "+ 18% GST",
    tagline: "Launch your online store with everything built in.",
    description:
      "A premium-design store with payments, inventory, OTP verification and an auto-invoice system — ready to take orders from day one.",
    features: [
      "30-page e-commerce website",
      "1 year FREE domain & hosting",
      "20 product categories",
      "30 product listings by us",
      "Premium theme & dynamic UI",
      "Payment gateway integration",
      "Auto invoice/bill generator",
      "Wallet & order notifications",
      "OTP verification flow",
      "10 business email IDs",
      "3 FREE reels + Logo design",
      "3 years backend support",
    ],
    badge: "Best Value",
    cta: "Launch my store",
  },
  {
    name: "Multi-Vendor E-Commerce",
    icon: ShoppingCart,
    price: "₹50,000",
    oldPrice: "₹70,000",
    gst: "+ 18% GST",
    tagline: "Build a marketplace like Amazon or Flipkart.",
    description:
      "A full multi-vendor platform with seller dashboards, commission management, and everything you need to scale a marketplace.",
    features: [
      "40-page marketplace site",
      "1 year FREE domain & hosting",
      "50 categories, 30 listings by us",
      "Dynamic multi-vendor system",
      "Seller onboarding & dashboard",
      "Commission & payout system",
      "Multi-level e-commerce features",
      "Product variations & wallet",
      "20 business email IDs",
      "3 FREE reels + Logo design",
      "3 years backend support",
    ],
    cta: "Build a marketplace",
  },
];

const addOnPlans: Plan[] = [
  {
    name: "Logo & Brand Identity",
    icon: PenTool,
    price: "₹2,499",
    oldPrice: "₹4,000",
    gst: "+ 18% GST",
    tagline: "A logo your customers will remember.",
    description:
      "Crafted by our designers — modern, versatile and ready for print, web and social. Perfect on its own or bundled with a website.",
    features: [
      "3 unique logo concepts",
      "Up to 4 revision rounds",
      "Final files: PNG, JPG, SVG, PDF",
      "Light + dark variations",
      "Favicon & social media kit",
      "Brand color palette",
      "Typography pairing guide",
      "Mini brand style guide",
      "100% ownership & copyright",
      "Free with E-Commerce plans",
    ],
    cta: "Design my logo",
  },
  {
    name: "Content Writing Plan",
    icon: FileText,
    price: "₹4,999",
    oldPrice: "₹7,500",
    gst: "+ 18% GST · per month",
    tagline: "SEO content that ranks and converts.",
    description:
      "Done-for-you blog posts, product descriptions and social captions written by humans, optimised for Google and your audience.",
    features: [
      "8 SEO blog posts / month (800+ words)",
      "Keyword research & topic planning",
      "On-page SEO (titles, meta, schema)",
      "20 product / service descriptions",
      "30 social media captions",
      "2 newsletter emails",
      "Plagiarism-free, AI-checked",
      "Hindi + English content available",
      "WordPress / CMS publishing",
      "Monthly performance report",
    ],
    badge: "New",
    cta: "Start content plan",
  },
  {
    name: "Reel & Video Pack",
    icon: Video,
    price: "₹3,999",
    oldPrice: "₹6,000",
    gst: "+ 18% GST · 6 reels",
    tagline: "Scroll-stopping reels, ready to post.",
    description:
      "Short-form videos crafted with hooks, captions and trending audio — formatted for Instagram, YouTube Shorts and TikTok.",
    features: [
      "6 promotional reels",
      "Scriptwriting & hooks",
      "Vertical, square & landscape",
      "Captions & on-screen text",
      "Trending audio suggestions",
      "Brand colors & logo applied",
      "1 round of revisions per reel",
      "Hashtag & posting strategy",
      "Source files included",
      "Bigger packs (12 / 24) available",
    ],
    cta: "Order reel pack",
  },
];

const crmPlans: Plan[] = [
  {
    name: "CRM Starter",
    icon: Users,
    price: "₹14,999",
    oldPrice: "₹25,000",
    gst: "+ 18% GST · one-time setup",
    tagline: "A simple CRM for small teams.",
    description:
      "A clean, custom CRM to capture leads, track deals and manage customers — hosted on your domain, owned by you.",
    features: [
      "Lead capture from website forms",
      "Contact & company database",
      "Deal pipeline (drag & drop)",
      "Tasks, notes & reminders",
      "Email & WhatsApp integration",
      "Up to 5 team members",
      "Role-based access control",
      "Daily auto backups",
      "1 year FREE hosting",
      "3 years backend support",
    ],
    cta: "Get CRM Starter",
  },
  {
    name: "CRM Business",
    icon: Users,
    price: "₹34,999",
    oldPrice: "₹55,000",
    gst: "+ 18% GST · one-time setup",
    tagline: "For growing sales & service teams.",
    description:
      "Everything in Starter plus automations, sales reports, invoicing and a customer portal — built around your workflow.",
    features: [
      "All CRM Starter features",
      "Up to 20 team members",
      "Sales automations & workflows",
      "Quotation & invoice generator",
      "Payment gateway integration",
      "Custom reports & dashboards",
      "Customer support ticket system",
      "WhatsApp Business API ready",
      "Mobile-friendly portal",
      "Priority 24/7 support",
    ],
    badge: "Most Popular",
    featured: true,
    cta: "Get CRM Business",
  },
  {
    name: "CRM Enterprise",
    icon: Users,
    price: "On request",
    tagline: "Custom CRM for large teams & multi-branch.",
    description:
      "A fully custom CRM with multi-branch support, custom modules, third-party integrations and dedicated infrastructure.",
    features: [
      "Unlimited users & branches",
      "Custom modules & fields",
      "API & ERP integrations",
      "Tally / Zoho / SAP sync",
      "Advanced analytics & BI",
      "SSO & audit logs",
      "Dedicated cloud server",
      "SLA-backed uptime",
      "Onsite training (India)",
      "Dedicated account manager",
    ],
    cta: "Talk to sales",
  },
];

const faqs = [
  { q: "Are prices in Indian Rupees (₹)?", a: "Yes — all prices are in INR and exclude 18% GST as per Indian tax rules. We accept UPI, net-banking, all major cards and bank transfer. International clients can request a USD quote." },
  { q: "What is included in the launch package?", a: "Every website client receives a custom-built website, 3 FREE promotional reels, 1 year of domain (.com / .in / .org), 1 year cloud hosting and 3 years of backend & technical support." },
  { q: "What happens after the 3 free reels?", a: "You can purchase additional reel packs anytime — 6, 12 and 24-reel bundles are available, or subscribe to a monthly content plan for consistent posting." },
  { q: "What does '3 years backend support' mean?", a: "We host your site on cloud, keep it secure, push updates, fix issues and provide 24/7 phone, chat and email support for 3 full years — at no extra cost. After that, annual renewal is just ₹4,000." },
  { q: "How fast can my website launch?", a: "Most websites go live within 7 business days of design approval. E-commerce and CRM builds take 2–4 weeks depending on scope. We'll always give a clear timeline upfront." },
  { q: "Can I get a logo and content writing without a website?", a: "Absolutely. Logo Design, Content Writing and Reel packs can be purchased standalone. They're also bundled free with select website and e-commerce plans." },
  { q: "Is the CRM hosted by you or by us?", a: "By default we host it on a secure Indian cloud and include 1 year free hosting. Enterprise clients can choose their own AWS / Azure / on-premise setup." },
  { q: "Do I own my website, content and CRM?", a: "Yes — 100%. You own the domain, the source code, every reel, every blog post and all CRM data. We provide full handover on request." },
];

function PlanCard({ p, i }: { p: Plan; i: number }) {
  const Icon = p.icon;
  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-7 shadow-soft animate-fade-up transition-all ${
        p.featured
          ? "border-transparent bg-foreground text-background shadow-elegant md:-translate-y-2"
          : "border-border/70 bg-card hover-lift"
      }`}
      style={{ animationDelay: `${i * 70}ms` }}
    >
      {p.badge && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold shadow-soft ${
            p.featured
              ? "bg-accent-yellow text-accent-yellow-foreground"
              : "bg-gradient-brand text-brand-foreground"
          }`}
        >
          {p.badge}
        </span>
      )}
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-soft ${
          p.featured ? "bg-accent-yellow text-accent-yellow-foreground" : "bg-gradient-brand text-brand-foreground"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
      <p className={`mt-1 text-sm ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
        {p.tagline}
      </p>

      <div className="mt-5 flex items-baseline gap-2">
        <p className="text-4xl font-semibold tracking-tight">{p.price}</p>
        {p.oldPrice && (
          <span className={`text-sm line-through ${p.featured ? "text-background/50" : "text-muted-foreground"}`}>
            {p.oldPrice}
          </span>
        )}
      </div>
      {p.gst && (
        <p className={`mt-1 text-xs ${p.featured ? "text-background/60" : "text-muted-foreground"}`}>{p.gst}</p>
      )}

      <p className={`mt-4 text-sm leading-relaxed ${p.featured ? "text-background/80" : "text-muted-foreground"}`}>
        {p.description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-accent-yellow" : "text-brand"}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={`mt-7 w-full rounded-full ${
          p.featured
            ? "bg-accent-yellow text-accent-yellow-foreground hover:bg-accent-yellow/90 font-semibold"
            : "bg-gradient-brand text-brand-foreground hover:opacity-95"
        }`}
      >
        <Link to="/contact">{p.cta}</Link>
      </Button>
    </article>
  );
}

function PlanGroup({ id, eyebrow, title, subtitle, plans }: { id: string; eyebrow: string; title: string; subtitle: string; plans: Plan[] }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-14 scroll-mt-20">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className={`mt-12 grid gap-6 ${plans.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
        {plans.map((p, i) => (
          <PlanCard key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-20 text-center md:pt-28">
        <span className="inline-flex items-center rounded-full border border-border/70 glass px-3 py-1 text-xs font-medium text-muted-foreground">
          Pricing · India 🇮🇳
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
          Honest Indian pricing, <span className="text-gradient">no hidden fees</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
          Websites, e-commerce, logos, content and CRM — all in INR with 18% GST. Every website plan includes 3 free reels, 1 year domain and 3 years of backend support.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs">
          {[
            { href: "#websites", label: "Websites" },
            { href: "#ecommerce", label: "E-Commerce" },
            { href: "#addons", label: "Logo · Content · Reels" },
            { href: "#crm", label: "CRM" },
            { href: "#faq", label: "FAQ" },
          ].map((t) => (
            <a key={t.href} href={t.href} className="rounded-full border border-border/70 bg-card px-3 py-1.5 font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
              {t.label}
            </a>
          ))}
        </div>
      </section>

      <PlanGroup
        id="websites"
        eyebrow="Websites"
        title="Website Development Plans"
        subtitle="From a clean 5-page launch to a fully custom platform — pick what fits your stage."
        plans={websitePlans}
      />

      <PlanGroup
        id="ecommerce"
        eyebrow="E-Commerce"
        title="Online Store Plans"
        subtitle="Sell online with payments, inventory and dashboards built in. Logo & 3 reels included free."
        plans={ecommercePlans}
      />

      <PlanGroup
        id="addons"
        eyebrow="Brand & Content"
        title="Logo Design, Content Writing & Reels"
        subtitle="Standalone plans you can add to any website — or buy on their own."
        plans={addOnPlans}
      />

      <PlanGroup
        id="crm"
        eyebrow="CRM Models"
        title="CRM Solutions for Indian Businesses"
        subtitle="Custom-built CRM with leads, deals, automations, invoicing and WhatsApp — hosted on your own domain."
        plans={crmPlans}
      />

      {/* Trust strip */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-border/60 bg-gradient-soft p-8 md:p-10">
          <div className="grid gap-6 text-center md:grid-cols-4">
            {[
              { k: "₹4,000", v: "Annual hosting renewal" },
              { k: "7 days", v: "Average website launch" },
              { k: "24/7", v: "Free technical support" },
              { k: "100%", v: "Code & data ownership" },
            ].map((s) => (
              <div key={s.v}>
                <p className="text-2xl font-semibold tracking-tight text-gradient">{s.k}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-20 md:py-28 scroll-mt-20">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white md:px-16" style={{ background: "var(--gradient-brand)" }}>
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent-yellow opacity-20 blur-3xl" />
          <div className="relative">
            <div className="flex justify-center gap-1 text-accent-yellow">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">Still deciding? Let's chat — it's free.</h2>
            <p className="mt-2 text-white/85">Tell us your goals and we'll recommend the right combo, with a clear quote in INR.</p>
            <Button asChild size="lg" className="mt-6 rounded-full bg-accent-yellow text-accent-yellow-foreground font-semibold hover:bg-accent-yellow/90">
              <Link to="/contact">Get a free recommendation <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

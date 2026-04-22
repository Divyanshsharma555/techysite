import { Link } from "@tanstack/react-router";
import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-gradient-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand">
              <Code2 className="h-4.5 w-4.5 text-brand-foreground" />
            </span>
            Techy<span className="text-brand">Site</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            You imagine, we build. Premium websites, e-commerce and content for ambitious businesses.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li>hr@techysite.is-local.org</li>
            <li>+91 86192 48937</li>
            <li>Vaishali Nagar, Jaipur</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium">Launch Offer</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Website + 3 free reels + 1 year domain + 3 years backend support.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} TechySite. All rights reserved.</p>
          <p>You imagine. We build.</p>
        </div>
      </div>
    </footer>
  );
}

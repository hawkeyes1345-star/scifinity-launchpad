import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, MapPin } from "lucide-react";

const quick = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "About the Mentor", to: "/about-mentor" },
  { label: "Success & Proof", to: "/success-proof" },
  { label: "Scholarship", to: "/scholarship" },
  { label: "Locations", to: "/locations" },
  { label: "Resources", to: "/resources" },
  { label: "Admission", to: "/admission" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gold-gradient grid place-items-center font-display font-bold text-navy">S</div>
              <span className="font-display font-bold text-xl">SCIFINITY</span>
            </div>
            <p className="mt-4 text-white/70 text-sm leading-relaxed italic">
              Where Ingenuity Meets Curiosity
            </p>
            <div className="flex gap-3 mt-5">
              <a aria-label="Facebook" href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy grid place-items-center transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a aria-label="YouTube" href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy grid place-items-center transition">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-gold uppercase tracking-wider text-xs mb-4">Locations</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span><strong className="text-white">Uttara</strong><br />Full address coming soon</span></li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span><strong className="text-white">Patuatuli</strong><br />Full address coming soon</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-gold uppercase tracking-wider text-xs mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {quick.map((q) => (
                <li key={q.to}><Link to={q.to} className="text-white/80 hover:text-gold transition-colors">{q.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-gold uppercase tracking-wider text-xs mb-4">Start Today</h3>
            <p className="text-sm text-white/70 mb-4">Strictly 15 seats per batch. Reserve yours before the next cohort closes.</p>
            <Link to="/admission" className="inline-flex items-center justify-center rounded-lg bg-gold-gradient text-navy font-semibold px-4 py-2.5 text-sm shadow-gold">
              Get Admission Now
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/60">
          © 2026 SCIFINITY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

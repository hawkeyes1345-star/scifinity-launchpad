import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";

const programs = [
  { label: "SSC", to: "/programs?tab=ssc" },
  { label: "HSC", to: "/programs?tab=hsc" },
  { label: "Admission", to: "/programs?tab=admission" },
];

const links = [
  { label: "Home", to: "/" },
  { label: "About the Mentor", to: "/about-mentor" },
  { label: "Success & Proof", to: "/success-proof" },
  { label: "Scholarship", to: "/scholarship" },
  { label: "Locations", to: "/locations" },
  { label: "Resources", to: "/resources" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [progOpen, setProgOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-lg bg-gold-gradient grid place-items-center font-display font-bold text-navy">S</div>
            <span className="font-display font-bold text-lg lg:text-xl text-navy tracking-tight">SCIFINITY</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-navy transition-colors" activeProps={{ className: "text-navy" }} activeOptions={{ exact: true }}>Home</Link>
            <div className="relative" onMouseEnter={() => setProgOpen(true)} onMouseLeave={() => setProgOpen(false)}>
              <Link to="/programs" className="text-sm font-medium text-foreground/80 hover:text-navy transition-colors inline-flex items-center gap-1">
                Programs <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              {progOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="bg-white rounded-xl shadow-card border border-border min-w-[200px] py-2">
                    {programs.map((p) => (
                      <Link key={p.label} to="/programs" className="block px-4 py-2 text-sm hover:bg-secondary hover:text-navy text-foreground/80">
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {links.slice(1).map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground/80 hover:text-navy transition-colors" activeProps={{ className: "text-navy" }}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/admission"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-gold-gradient text-navy font-semibold px-4 py-2.5 text-sm shadow-gold hover:opacity-95 transition"
            >
              Get Admission Now
            </Link>
            <button
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-md text-navy"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="py-2.5 px-3 rounded-md text-base font-medium text-foreground/85 hover:bg-secondary" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/programs" className="py-2.5 px-3 rounded-md text-base font-medium text-foreground/85 hover:bg-secondary" onClick={() => setOpen(false)}>
              Programs (SSC | HSC | Admission)
            </Link>
            <Link to="/admission" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center items-center rounded-lg bg-gold-gradient text-navy font-semibold px-4 py-3 text-sm shadow-gold">
              Get Admission Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

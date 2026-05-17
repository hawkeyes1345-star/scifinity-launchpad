import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useMemo, useState } from "react";
import { Search, Calendar, Quote } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "The Vault | SCIFINITY" },
      { name: "description", content: "Study routines, exam tips, physics shortcuts, and math tricks for smart learners." },
      { property: "og:title", content: "The Vault | SCIFINITY" },
      { property: "og:description", content: "Study routines, exam tips, physics shortcuts, and math tricks for smart learners." },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

const categories = ["All", "Study Routine", "Exam Tips", "Physics Shortcuts", "Math Tricks"] as const;

export const posts = [
  { slug: "smart-study-routine", category: "Study Routine", title: "How to Build a Smart Study Routine Before Exams", excerpt: "Learn how to structure revision with clarity, active recall, and focused problem-solving.", date: "Mar 12, 2026" },
  { slug: "physics-logic", category: "Physics Shortcuts", title: "Physics Becomes Easy When You See the Logic", excerpt: "Stop memorizing formulas blindly. Learn how to connect concepts to real-world patterns.", date: "Mar 05, 2026" },
  { slug: "10-minute-bridge", category: "Math Tricks", title: "The 10-Minute Bridge for Admission Math", excerpt: "A strategic way to move from board-level comfort to admission-level speed.", date: "Feb 26, 2026" },
  { slug: "studying-smart", category: "Exam Tips", title: "Why Studying Long Is Not Always Studying Smart", excerpt: "Learn how high-value practice beats passive reading.", date: "Feb 18, 2026" },
];

function Resources() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return posts.filter((p) => (cat === "All" || p.category === cat) && (p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase())));
  }, [q, cat]);

  return (
    <SiteLayout>
      <section className="bg-hero-gradient text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance">The Vault: <span className="text-gold">Resources for the Resilient</span></h1>
          <p className="mt-5 text-white/80 leading-relaxed">
            In the competitive landscape of Bangladesh, the problem isn't a lack of information — it's a lack of clarity. I have seen brilliant students lose their way because they were drowning in massive textbooks. This vault is your Equalizer to bridge the gap between "studying hard" and "studying smart."
          </p>
          <blockquote className="mt-8 inline-flex items-center gap-3 text-gold/90 italic">
            <Quote className="h-5 w-5" /> "Information is everywhere. Mastery starts here."
          </blockquote>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-8">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                aria-label="Search resources"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search the vault..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition ${cat === c ? "bg-navy text-white" : "bg-white border border-border text-foreground/70 hover:border-gold"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <article key={p.slug} className="bg-white rounded-2xl border border-border p-6 shadow-soft hover:shadow-card transition">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-navy bg-gold/20 px-3 py-1 rounded-full">{p.category}</span>
                  <span className="text-xs text-muted-foreground inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                </div>
                <h2 className="font-display text-xl font-bold text-navy text-balance">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <Link to="/resources/$slug" params={{ slug: p.slug }} className="mt-4 inline-flex items-center text-sm font-semibold text-gold hover:text-navy">
                  Read More →
                </Link>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="md:col-span-2 text-center text-muted-foreground py-12">No resources match your search.</p>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

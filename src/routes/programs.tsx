import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { useState } from "react";
import { BookOpen, FlaskConical, Calculator, CheckCircle2, XCircle, Brain, Rocket, Target } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs | SCIFINITY" },
      { name: "description", content: "Explore SSC, HSC, and Admission programs built on concept clarity, strategy, and small-batch mentorship." },
      { property: "og:title", content: "Programs | SCIFINITY" },
      { property: "og:description", content: "Explore SSC, HSC, and Admission programs built on concept clarity, strategy, and small-batch mentorship." },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

const tabs = [
  {
    id: "ssc", label: "SSC", icon: BookOpen,
    subjects: ["General Mathematics", "Higher Mathematics", "Physics", "Chemistry"],
    bestFor: "Students who want to build a logical foundation that pays back at HSC and admission.",
    approach: "Concept-first instruction, lesson-wise mastery checks, weekly remedial support, and full guardian transparency.",
  },
  {
    id: "hsc", label: "HSC", icon: FlaskConical,
    subjects: ["Higher Mathematics", "Physics", "Chemistry"],
    bestFor: "Students preparing for the boards while building the bridge to engineering and medical admissions.",
    approach: "Board-to-admission alignment, strategic problem sets, weekly diagnostic tests, and personalized growth tracking.",
  },
  {
    id: "admission", label: "Admission Test", icon: Calculator,
    subjects: ["Higher Mathematics", "Physics", "Chemistry"],
    bestFor: "Targeted aspirants for BUET, DU, and Medical admissions who want strategy over volume.",
    approach: "10-Minute Bridge sessions, exam-pattern engineering, intensive sprints, and individual mentor reviews.",
  },
];

const designedFor = [
  { title: "The Clarity Seekers", text: "Students tired of \"Memorizing without Meaning\" who want to understand the why behind physics and the logic behind math.", icon: Brain },
  { title: "The Admission Competitors", text: "Students ready to build the \"10-Minute Bridge\" toward BUET, DU, or Medical success today, not after their board exams.", icon: Rocket },
  { title: "The Strategic Learners", text: "Those who value \"Studying Smart\" over \"Studying Long\" and are ready to adopt an Engineer's mindset to solve the syllabus.", icon: Target },
];

const notFor = [
  { title: "The Memory Reciters", text: "If your goal is only to memorize suggestions to pass, our logic-based system will feel unnecessary to you." },
  { title: "The Passive Observers", text: "Students looking for a \"magic lecture\" without putting in the active recall required for mastery." },
  { title: "The Quantity-Over-Quality Believers", text: "If you measure success by how many hours you sit at a desk rather than the high-value problems you solve." },
];

const batches = [
  { timing: "Morning", long: "Dawn Legacy", sprint: "Dawn Sprint" },
  { timing: "Mid-Day", long: "Zenith Legacy", sprint: "Zenith Sprint" },
  { timing: "Afternoon", long: "Prime Legacy", sprint: "Prime Sprint" },
  { timing: "Evening", long: "Vesper Legacy", sprint: "Vesper Sprint" },
];

function Programs() {
  const [active, setActive] = useState("ssc");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <SiteLayout>
      <section className="bg-hero-gradient text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance">Programs Designed for <span className="text-gold">Logical Mastery</span></h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">Choose your academic stage and learn through a structured, engineering-backed system.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-10 bg-secondary/60 p-2 rounded-2xl">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${active === t.id ? "bg-gold-gradient text-navy shadow-gold" : "text-foreground/70 hover:text-navy"}`}
              >
                <t.icon className="h-4 w-4" /> {t.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-border shadow-soft p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">Program</div>
                <h2 className="font-display text-3xl font-bold text-navy">{tab.label}</h2>
                <div className="mt-5 text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">Subjects</div>
                <ul className="space-y-2">
                  {tab.subjects.map((s) => <li key={s} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-brand" /> {s}</li>)}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">Best For</div>
                <p className="text-foreground/85 leading-relaxed">{tab.bestFor}</p>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">Learning Approach</div>
                <p className="text-foreground/85 leading-relaxed">{tab.approach}</p>
                <div className="mt-6">
                  <CTAButton to="/admission" variant="gold">Apply for {tab.label}</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed For */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Philosophy" title="Designed For" />
          <div className="grid md:grid-cols-3 gap-6">
            {designedFor.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-7 border border-border shadow-soft">
                <div className="h-11 w-11 rounded-xl bg-gold/20 text-navy grid place-items-center mb-4"><c.icon className="h-5 w-5" /></div>
                <h3 className="font-display text-xl font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not For */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Honesty" title="Who Should Not Enroll" />
          <div className="grid md:grid-cols-3 gap-6">
            {notFor.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-7 border-l-4 border-destructive border-y border-r border-border shadow-soft">
                <div className="h-11 w-11 rounded-xl bg-destructive/10 text-destructive grid place-items-center mb-4"><XCircle className="h-5 w-5" /></div>
                <h3 className="font-display text-xl font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Naming */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Batches" title="Naming Structure" />

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-2xl border border-border shadow-soft overflow-hidden">
            <table className="w-full">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold">Timing</th>
                  <th className="text-left px-6 py-4 font-semibold">Full Course (Long-Term)</th>
                  <th className="text-left px-6 py-4 font-semibold">Fast-Track (Short-Term)</th>
                </tr>
              </thead>
              <tbody>
                {batches.map((b, i) => (
                  <tr key={b.timing} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                    <td className="px-6 py-4 font-semibold text-navy">{b.timing}</td>
                    <td className="px-6 py-4"><span className="text-gold font-semibold">{b.long}</span></td>
                    <td className="px-6 py-4"><span className="text-gold font-semibold">{b.sprint}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {batches.map((b) => (
              <div key={b.timing} className="bg-white rounded-xl border border-border p-5 shadow-soft">
                <div className="text-xs font-bold uppercase tracking-wider text-gold">{b.timing}</div>
                <div className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div><span className="text-muted-foreground">Long-Term:</span> <span className="font-semibold text-navy">{b.long}</span></div>
                  <div><span className="text-muted-foreground">Short-Term:</span> <span className="font-semibold text-navy">{b.sprint}</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            <CTAButton to="/admission" variant="gold" size="lg">Get Admission Now</CTAButton>
            <CTAButton to="/admission" variant="outline" size="lg">Book Personalized Session</CTAButton>
          </div>
        </div>
      </section>

      <Link to="/" className="sr-only">home</Link>
    </SiteLayout>
  );
}

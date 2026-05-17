import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import {
  CheckCircle2, Users, Award, GraduationCap, Sparkles,
  BookOpen, FlaskConical, Calculator, Target, Eye, HeartHandshake, ChevronRight, Quote
} from "lucide-react";
import { useEffect, useState } from "react";
import hero from "@/assets/hero-illustration.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SCIFINITY | Where Ingenuity Meets Curiosity" },
      { name: "description", content: "Logic-based SSC, HSC, and Admission mentorship in Bangladesh led by an EEE Engineer." },
      { property: "og:title", content: "SCIFINITY | Where Ingenuity Meets Curiosity" },
      { property: "og:description", content: "Logic-based SSC, HSC, and Admission mentorship in Bangladesh led by an EEE Engineer." },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: hero, fetchpriority: "high" } as never,
    ],
  }),
  component: Home,
});

const trustItems = [
  { icon: Award, label: "12+ Years Experience" },
  { icon: CheckCircle2, label: "Proven Student Success" },
  { icon: Users, label: "Small Batch: 15 Students" },
  { icon: GraduationCap, label: "Scholarship Available" },
];

const programs = [
  { title: "SSC", icon: BookOpen, subjects: ["General Mathematics", "Higher Mathematics", "Physics", "Chemistry"], desc: "Build unshakeable foundations through concept-led mastery." },
  { title: "HSC", icon: FlaskConical, subjects: ["Higher Mathematics", "Physics", "Chemistry"], desc: "Bridge board excellence with admission-level depth." },
  { title: "Admission Test", icon: Calculator, subjects: ["Higher Mathematics", "Physics", "Chemistry"], desc: "Engineered strategy for BUET, DU, and Medical aspirants." },
];

const system = [
  "Small Batch: 15 Only",
  "Lesson-wise Mastery Check",
  "Targeted Remedial Support",
  "Personalized Growth Monitoring",
  "Seamless Guardian Transparency",
];

const results = [
  { name: "Student Placeholder", result: "GPA 5.00", note: "HSC 2024 — Higher Math, Physics, Chemistry" },
  { name: "Student Placeholder", result: "BUET — EEE", note: "Admission 2024" },
  { name: "Student Placeholder", result: "GPA 5.00", note: "SSC 2023 — Full Mastery Track" },
  { name: "Student Placeholder", result: "DU — Science", note: "Admission 2023" },
  { name: "Student Placeholder", result: "Medical — MBBS", note: "Admission 2024" },
];

const testimonials = [
  { quote: "The way concepts are debugged like circuits — it finally made physics feel obvious. I stopped memorizing.", who: "Student Placeholder", role: "HSC '24" },
  { quote: "Weekly transparency reports gave us peace of mind. We always knew where our daughter stood.", who: "Guardian Placeholder", role: "SSC Guardian" },
  { quote: "The 10-minute bridge sessions completely changed how I approached admission math.", who: "Student Placeholder", role: "Admission '24" },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--color-gold)_1px,transparent_1px),linear-gradient(90deg,var(--color-gold)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Bangla Medium", "English Version", "SINCE 2014"].map((t) => (
                  <span key={t} className="inline-flex items-center text-[11px] tracking-wider font-semibold uppercase px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gold">
                    {t}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
                SCIFINITY: <span className="text-gold">Where Ingenuity</span> Meets Curiosity
              </h1>
              <p className="mt-5 text-lg lg:text-xl text-white/85 font-medium">
                SSC <span className="text-gold/80">|</span> HSC <span className="text-gold/80">|</span> Admission Test
              </p>
              <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
                Engineering-backed mentorship for students who choose to study smart, not long. Built on small batches, logical clarity, and personalized growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton to="/admission" variant="gold" size="lg">Enroll Now</CTAButton>
                <CTAButton to="/admission" variant="ghost-light" size="lg">Claim Your Free Strategy Session</CTAButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" />
              <img src={hero} alt="Engineering education abstract illustration with formulas and circuits" width={1280} height={1280} fetchPriority="high" decoding="async" className="relative w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/15 grid place-items-center shrink-0">
                  <Icon className="h-5 w-5 text-navy" />
                </div>
                <span className="text-sm font-semibold text-navy">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Snapshot */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy to-navy-deep relative overflow-hidden shadow-card">
                <div className="absolute inset-0 grid place-items-center text-white/40">
                  <div className="text-center px-6">
                    <div className="h-32 w-32 rounded-full bg-white/10 mx-auto mb-4 grid place-items-center">
                      <Users className="h-16 w-16" />
                    </div>
                    <p className="text-sm">Mentor photo placeholder</p>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gold-gradient text-navy font-display font-bold px-5 py-3 rounded-tl-2xl">
                  Since 2014
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">The Architect</div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-balance">
                Experienced mentor relaunching with a refined system.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                After 14 years of successful teaching, SCIFINITY returns with a structured, student-focused system. Tailored Mentorship, Proven Outcomes. Scaling Excellence to All.
              </p>
              <div className="mt-7">
                <CTAButton to="/about-mentor" variant="outline">Read the Full Story <ChevronRight className="h-4 w-4 ml-1" /></CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Programs" title="Three structured pathways. One engineering mindset." />
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7 shadow-soft hover:shadow-card transition-all border border-border group">
                <div className="h-12 w-12 rounded-xl bg-navy text-gold grid place-items-center mb-5 group-hover:bg-gold group-hover:text-navy transition-colors">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.subjects.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-green-brand shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
                <Link to="/programs" className="mt-5 inline-flex items-center text-sm font-semibold text-navy hover:text-gold">
                  Learn More <ChevronRight className="h-4 w-4 ml-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The System" title="A System Designed for Every Student." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {system.map((s, i) => (
              <div key={s} className="bg-white rounded-xl p-6 border border-border shadow-soft text-center">
                <div className="h-10 w-10 mx-auto rounded-full bg-gold-gradient grid place-items-center font-bold text-navy mb-3">{i + 1}</div>
                <p className="text-sm font-semibold text-navy leading-snug">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Seat */}
      <section className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(var(--color-gold)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> The Golden Seat
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                One Batch. <span className="text-gold">One Scholar.</span> 100% Free.
              </h2>
              <p className="mt-5 text-white/80 leading-relaxed text-lg">
                Talent should never be limited by circumstances.
              </p>
              <div className="mt-7">
                <CTAButton to="/scholarship" variant="gold" size="lg">Learn More</CTAButton>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gold/20 to-white/5 border border-gold/20 grid place-items-center">
              <div className="text-center text-white/50 px-6">
                <Sparkles className="h-16 w-16 mx-auto mb-3 text-gold/70" />
                <p className="text-sm">Inspirational student photo placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Proof" title="Results that speak for the system." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
            {results.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden shadow-soft">
                <div className="aspect-square bg-gradient-to-br from-navy/90 to-navy-deep grid place-items-center text-white/40">
                  <Users className="h-12 w-12" />
                </div>
                <div className="p-4">
                  <div className="text-xs font-bold text-gold tracking-wider uppercase">{r.result}</div>
                  <div className="mt-1 font-semibold text-navy text-sm">{r.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{r.note}</div>
                </div>
              </div>
            ))}
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-hero-gradient text-white p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(var(--color-gold)_1px,transparent_1px),linear-gradient(90deg,var(--color-gold)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative">
              <Target className="h-12 w-12 text-gold mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Limited Batch. Strictly <span className="text-gold">15 seats</span> per Batch.
              </h2>
              <p className="mt-4 text-white/80 text-lg">Supreme personalized excellence.</p>
              <div className="mt-8">
                <CTAButton to="/admission" variant="gold" size="lg">Get Admission Now</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function TestimonialSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const current = testimonials[i];
  return (
    <div className="bg-white rounded-2xl border border-border p-8 lg:p-12 shadow-soft max-w-3xl mx-auto">
      <Quote className="h-10 w-10 text-gold mb-4" />
      <p className="text-lg lg:text-xl text-foreground leading-relaxed italic">"{current.quote}"</p>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <div className="font-semibold text-navy">{current.who}</div>
          <div className="text-sm text-muted-foreground">{current.role}</div>
        </div>
        <div className="flex gap-1.5">
          {testimonials.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "bg-gold w-8" : "bg-border w-2"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

// suppress unused import warning if HeartHandshake/Eye not used
void HeartHandshake; void Eye;

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { Cpu, GraduationCap, Wrench, Quote, Users } from "lucide-react";

export const Route = createFileRoute("/about-mentor")({
  head: () => ({
    meta: [
      { title: "About the Mentor | SCIFINITY" },
      { name: "description", content: "Meet the EEE Engineer behind SCIFINITY's logic-based teaching system." },
      { property: "og:title", content: "About the Mentor | SCIFINITY" },
      { property: "og:description", content: "Meet the EEE Engineer behind SCIFINITY's logic-based teaching system." },
    ],
    links: [{ rel: "canonical", href: "/about-mentor" }],
  }),
  component: About,
});

const cards = [
  { title: "Concept Clarity", icon: Cpu, text: "I see a student's brain as a complex circuit puzzle. When a student is stuck, it's a \"short circuit\" in their logic. I debug their understanding and rewire it." },
  { title: "Student-Centric Excellence", icon: GraduationCap, text: "I took a student with an untouched SSC Higher Math syllabus and 3 months left to the exam, applied strategic \"Deep Work,\" and they secured a flawless A+." },
  { title: "Engineering-Backed Strategy", icon: Wrench, text: "Every lesson is designed like a system: identify the weak point, simplify the logic, test the understanding, and build mastery." },
];

function About() {
  return (
    <SiteLayout>
      <section className="bg-hero-gradient text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">About the Mentor</div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance">The Architect of Success: <span className="text-gold">Meet Your Mentor</span></h1>
              <p className="mt-5 text-white/85">[Insert Mentor Name] <span className="text-gold">|</span> EEE Engineer <span className="text-gold">|</span> Lead Strategist <span className="text-gold">|</span> Since 2014</p>
              <p className="mt-6 text-white/80 leading-relaxed">
                My background in Electrical and Electronic Engineering (EEE) isn't just a degree — it is the operating system for how I teach. I don't just deliver lectures; I design pathways to mastery.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-white/5 border border-white/10 grid place-items-center text-white/40 overflow-hidden">
                <div className="text-center px-6">
                  <div className="h-32 w-32 rounded-full bg-white/10 mx-auto mb-3 grid place-items-center"><Users className="h-16 w-16" /></div>
                  <p className="text-sm">Mentor photo placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why I Teach" title="A mission, not a profession." align="left" />
          <p className="text-foreground/85 leading-relaxed text-lg">
            In 2014, my journey began with simple tutoring. By 2020, facing the traditional corporate path, I felt a deep disconnect. I realized I wasn't built to sit in a cubicle — I was built to solve the "system failure" of the Bangladeshi education system. I chose teaching because I saw brilliant minds dimmed by a "problematic understanding," unable to link their lessons to real life.
          </p>

          <blockquote className="mt-10 rounded-2xl bg-navy text-white p-8 lg:p-10 relative overflow-hidden">
            <Quote className="absolute top-4 left-4 h-10 w-10 text-gold/40" />
            <p className="relative font-display text-xl lg:text-2xl leading-relaxed text-balance pl-12">
              "To glue study to the student's heart. I dream of an education system where learning is easy to understand, relevant to the real world, and accessible to the ambitious."
            </p>
          </blockquote>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Teaching Approach" title="Lessons engineered, not improvised." />
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-7 border border-border shadow-soft">
                <div className="h-12 w-12 rounded-xl bg-gold-gradient grid place-items-center text-navy mb-5"><c.icon className="h-6 w-6" /></div>
                <h3 className="font-display text-xl font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="font-display text-3xl text-navy/40 italic">— Signature placeholder —</div>
            <div className="mt-2 text-sm text-muted-foreground">Mentor's digital signature will appear here</div>
          </div>

          <div className="mt-12 text-center">
            <CTAButton to="/admission" variant="gold" size="lg">Get Admission Now</CTAButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

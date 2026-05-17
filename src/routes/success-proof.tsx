import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { useState } from "react";
import { Users, Quote } from "lucide-react";

export const Route = createFileRoute("/success-proof")({
  head: () => ({
    meta: [
      { title: "Success & Proof | SCIFINITY" },
      { name: "description", content: "View student outcomes, testimonials, and proof of SCIFINITY's structured learning system." },
      { property: "og:title", content: "Success & Proof | SCIFINITY" },
      { property: "og:description", content: "View student outcomes, testimonials, and proof of SCIFINITY's structured learning system." },
    ],
    links: [{ rel: "canonical", href: "/success-proof" }],
  }),
  component: Success,
});

const hsc = Array.from({ length: 6 }, (_, i) => ({ name: `Student Placeholder ${i + 1}`, gpa: "GPA 5.00", note: "HSC — Higher Math, Physics, Chemistry" }));
const adm = [
  { name: "Student Placeholder 1", uni: "BUET — EEE", note: "Admission 2024" },
  { name: "Student Placeholder 2", uni: "DU — Science", note: "Admission 2024" },
  { name: "Student Placeholder 3", uni: "Medical — MBBS", note: "Admission 2024" },
  { name: "Student Placeholder 4", uni: "BUET — Civil", note: "Admission 2023" },
  { name: "Student Placeholder 5", uni: "RUET — ME", note: "Admission 2023" },
  { name: "Student Placeholder 6", uni: "DMC", note: "Admission 2023" },
];

const studentQuotes = [
  { quote: "I stopped memorizing and started seeing patterns. Physics finally made sense.", who: "Student Placeholder", program: "HSC" },
  { quote: "The 10-minute bridge sessions completely changed how I solve admission math.", who: "Student Placeholder", program: "Admission" },
  { quote: "Small batch meant I never sat with an unanswered doubt.", who: "Student Placeholder", program: "SSC" },
];
const guardianQuotes = [
  { quote: "Weekly transparency reports gave us peace of mind. We always knew where our daughter stood.", who: "Guardian Placeholder", program: "SSC Guardian" },
  { quote: "A mentor who treats teaching like engineering — methodical, accountable, real.", who: "Guardian Placeholder", program: "HSC Guardian" },
];

function Success() {
  const [tab, setTab] = useState<"outcomes" | "stories">("outcomes");
  const [storyTab, setStoryTab] = useState<"students" | "guardians">("students");

  return (
    <SiteLayout>
      <section className="bg-hero-gradient text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold">Success & <span className="text-gold">Proof</span></h1>
          <p className="mt-4 text-xl text-white/80">The Evidence: Beyond the Numbers.</p>
          <p className="mt-6 text-white/75 leading-relaxed max-w-3xl mx-auto">
            In engineering, data is the only truth. While we are traditionally reluctant to publish results as "marketing," we understand that success needs a benchmark. View these outcomes as evidence of our system, but remember: the real proof of mastery will be your own performance once you join our ranks.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-secondary/60 p-2 rounded-2xl inline-flex">
              {(["outcomes", "stories"] as const).map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`px-6 py-2.5 rounded-xl text-sm font-semibold ${tab === t ? "bg-gold-gradient text-navy shadow-gold" : "text-foreground/70"}`}>
                  {t === "outcomes" ? "Proven Outcomes" : "Success Stories"}
                </button>
              ))}
            </div>
          </div>

          {tab === "outcomes" && (
            <div className="space-y-16">
              <div>
                <SectionHeading eyebrow="Boards" title="The HSC Legacy" align="left" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {hsc.map((s, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden shadow-soft">
                      <div className="aspect-[4/3] bg-gradient-to-br from-navy/90 to-navy-deep grid place-items-center text-white/40">
                        <Users className="h-14 w-14" />
                      </div>
                      <div className="p-5">
                        <div className="text-xs font-bold text-gold tracking-wider uppercase">{s.gpa}</div>
                        <div className="mt-1 font-semibold text-navy">{s.name}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{s.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading eyebrow="Admissions" title="The Admission Sprint" align="left" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {adm.map((s, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden shadow-soft">
                      <div className="aspect-[4/3] bg-gradient-to-br from-gold/30 to-navy grid place-items-center text-white/50">
                        <Users className="h-14 w-14" />
                      </div>
                      <div className="p-5">
                        <div className="text-xs font-bold text-gold tracking-wider uppercase">{s.uni}</div>
                        <div className="mt-1 font-semibold text-navy">{s.name}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{s.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "stories" && (
            <div>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h3 className="font-display text-2xl lg:text-3xl text-navy font-bold">A Shared Journey to Excellence.</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We believe true growth is felt in the classroom, not just seen on a screen. While we prefer to let our results speak for themselves, these reflections from our students and guardians offer a glimpse into the transformation and peace of mind we strive to provide. Read their stories — then come find your own proof in your first session.
                </p>
              </div>

              <div className="flex justify-center mb-10">
                <div className="bg-white border border-border rounded-xl p-1 inline-flex">
                  {(["students", "guardians"] as const).map((t) => (
                    <button key={t} onClick={() => setStoryTab(t)} className={`px-5 py-2 rounded-lg text-sm font-semibold ${storyTab === t ? "bg-navy text-white" : "text-foreground/70"}`}>
                      {t === "students" ? "From the Students" : "From the Guardians"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {(storyTab === "students" ? studentQuotes : guardianQuotes).map((q, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-border p-7 shadow-soft">
                    <Quote className="h-8 w-8 text-gold mb-3" />
                    <p className="text-foreground/85 italic leading-relaxed">"{q.quote}"</p>
                    <div className="mt-5 pt-5 border-t border-border">
                      <div className="font-semibold text-navy">{q.who}</div>
                      <div className="text-sm text-muted-foreground">{storyTab === "students" ? "Student" : "Guardian"} · {q.program}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 text-center">
            <CTAButton to="/admission" variant="gold" size="lg">Get Admission Now</CTAButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

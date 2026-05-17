import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { Sparkles, HandCoins, Flame, BookOpenCheck, HeartHandshake, Brain, ShieldCheck, UserCheck, Users } from "lucide-react";

export const Route = createFileRoute("/scholarship")({
  head: () => ({
    meta: [
      { title: "The Golden Seat Scholarship | SCIFINITY" },
      { name: "description", content: "Learn about SCIFINITY's 100% scholarship seat for deserving and ambitious students." },
      { property: "og:title", content: "The Golden Seat Scholarship | SCIFINITY" },
      { property: "og:description", content: "Learn about SCIFINITY's 100% scholarship seat for deserving and ambitious students." },
    ],
    links: [{ rel: "canonical", href: "/scholarship" }],
  }),
  component: Scholarship,
});

const criteria = [
  { title: "Financial Need", icon: HandCoins, text: "Demonstrated need where tuition would otherwise be a barrier to entry." },
  { title: "Unyielding Ambition", icon: Flame, text: "A clear, articulated goal — an academic target the student is willing to fight for." },
  { title: "Academic Discipline", icon: BookOpenCheck, text: "Consistency over brilliance: punctuality, completed work, honest effort." },
];

const process = [
  "Digital Application via the website",
  "Initial review of academic standing and financial context",
  "The Dialogue: one-on-one discussion",
  "The Accountability Clause: quarterly reviews to ensure attendance and performance",
];

const impact = [
  { title: "100% tuition coverage for the scholar", icon: Sparkles },
  { title: "A culture of empathy for the batch", icon: HeartHandshake },
  { title: "Peace of mind for the mission", icon: ShieldCheck },
];

function Scholarship() {
  return (
    <SiteLayout>
      <section className="bg-hero-gradient text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-12 w-12 text-gold mx-auto mb-4" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance">The Legacy Scholarship: <span className="text-gold">Investing in Potential</span></h1>
          <p className="mt-5 text-xl text-white/85">The Golden Seat — One Batch. One Scholar. 100% Free.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The Vision" title="Merit, not means." align="left" />
          <p className="text-foreground/85 leading-relaxed text-lg">
            Education should never be a privilege reserved only for the wealthy. As an engineer who navigated my own academic path without a well-off background, I understand that brilliance often exists where resources do not. This scholarship isn't just a "free seat" — it is a mission to ensure that financial barriers never silence a student's ambition. We call this the <span className="text-navy font-semibold">Golden Seat</span>, because it represents our highest value: <span className="text-gold font-semibold">merit-based trust</span>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Eligibility" title="Who Can Apply" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-border shadow-soft">
              <div className="h-11 w-11 rounded-xl bg-gold-gradient grid place-items-center text-navy mb-4"><UserCheck className="h-5 w-5" /></div>
              <h3 className="font-display text-xl font-bold text-navy">Self-Applicants</h3>
              <p className="mt-2 text-muted-foreground">Individual students who meet the merit and financial criteria.</p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-border shadow-soft">
              <div className="h-11 w-11 rounded-xl bg-gold-gradient grid place-items-center text-navy mb-4"><Users className="h-5 w-5" /></div>
              <h3 className="font-display text-xl font-bold text-navy">Peer Nominations</h3>
              <p className="mt-2 text-muted-foreground">Current students within a batch can nominate a classmate they believe is deserving of the 100% scholarship seat.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Criteria" title="The Merit Criteria" />
          <div className="grid md:grid-cols-3 gap-6">
            {criteria.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-7 border border-border shadow-soft">
                <div className="h-11 w-11 rounded-xl bg-navy text-gold grid place-items-center mb-4"><c.icon className="h-5 w-5" /></div>
                <h3 className="font-display text-xl font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Process" title="Selection Process" light />
          <ol className="space-y-4">
            {process.map((step, i) => (
              <li key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="h-10 w-10 rounded-full bg-gold-gradient text-navy font-display font-bold grid place-items-center shrink-0">{i + 1}</div>
                <p className="text-white/90 leading-relaxed pt-1.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Impact" title="What the Golden Seat creates" />
          <div className="grid md:grid-cols-3 gap-6">
            {impact.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-7 border border-border shadow-soft text-center">
                <div className="h-12 w-12 rounded-xl bg-gold-gradient grid place-items-center text-navy mb-4 mx-auto"><c.icon className="h-6 w-6" /></div>
                <h3 className="font-display text-lg font-bold text-navy">{c.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <CTAButton href="https://forms.gle/placeholder-self" variant="gold" size="lg">Apply for the Golden Seat</CTAButton>
            <CTAButton href="https://forms.gle/placeholder-nominate" variant="outline" size="lg">Nominate a Peer</CTAButton>
          </div>
        </div>
      </section>
      <span className="hidden"><Brain /></span>
    </SiteLayout>
  );
}

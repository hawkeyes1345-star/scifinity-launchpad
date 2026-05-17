import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CTAButton } from "@/components/CTAButton";
import { AdmissionForm } from "@/components/AdmissionForm";
import { InstantConnectBar } from "@/components/InstantConnectBar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, Cpu, Gauge, Activity, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Admission | SCIFINITY" },
      { name: "description", content: "Apply for SCIFINITY admission and connect instantly through WhatsApp, call, or SMS." },
      { property: "og:title", content: "Admission | SCIFINITY" },
      { property: "og:description", content: "Apply for SCIFINITY admission and connect instantly through WhatsApp, call, or SMS." },
    ],
    links: [{ rel: "canonical", href: "/admission" }],
  }),
  component: Admission,
});

const why = [
  { icon: Users, label: "Strictly 15-Student Batches" },
  { icon: Cpu, label: "Engineering-Backed Mentorship" },
  { icon: Gauge, label: 'The "10-Minute Bridge" for Admission Prep' },
  { icon: Activity, label: "Dedicated Performance Tracking" },
];

const faqs = [
  {
    q: "Which classes and programs does SCIFINITY teach?",
    a: "We run focused tracks for SSC (Class 9–10), HSC (Class 11–12), and University Admission (Engineering & Medical). Every track is built around concept clarity, weekly mastery checks, and personalised mentor reviews — not lecture marathons.",
  },
  {
    q: "How do I choose the right batch (Dawn, Zenith, Prime, Vesper)?",
    a: "Dawn (early morning) and Vesper (evening) suit school-college students. Zenith (mid-morning) is built for HSC repeat candidates and full-time admission seekers. Prime (afternoon) is our most popular general slot. After you submit the form, our mentor team will confirm which batch fits your routine and current level.",
  },
  {
    q: "How does the Golden Seat scholarship process work?",
    a: "The Golden Seat is a 100% scholarship awarded after a short eligibility test, an interview with the lead mentor, and a guardian conversation. You can apply directly on our scholarship page. Selected students keep the scholarship as long as they meet our monthly performance benchmark.",
  },
  {
    q: "How do I pick between Uttara and Patuatuli branches?",
    a: "Both branches follow the exact same curriculum, mentors and batch sizes. Choose the one closer to your home or college — commute time matters more than anything else for long-term consistency. You can also visit both campuses before confirming your seat.",
  },
  {
    q: "What happens after I submit the admission form?",
    a: "Within working hours, our admission team will reach out on WhatsApp or call to confirm your preferred batch and schedule a free orientation session. Seats are reserved on a first-come, first-served basis once your slot is confirmed.",
  },
];

function Admission() {
  return (
    <SiteLayout>
      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center text-[11px] tracking-wider font-semibold uppercase px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gold mb-4">Limited Seats</div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance">Admissions Open — <span className="text-gold">Limited Seats</span></h1>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto text-lg">
            Your Path to Mastery Starts Here. At SCIFINITY, we don't just "teach" for exams; we engineer success.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 order-1">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Why Join SCIFINITY</div>
            <h2 className="font-display text-3xl font-bold text-navy">Built for serious students.</h2>
            <ul className="mt-8 space-y-5">
              {why.map((w) => (
                <li key={w.label} className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gold-gradient grid place-items-center text-navy shrink-0"><w.icon className="h-5 w-5" /></div>
                  <div>
                    <p className="font-semibold text-navy">{w.label}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 rounded-xl bg-secondary/60 border border-border text-sm text-muted-foreground">
              <p>After submitting the form, you'll see a confirmation:</p>
              <p className="mt-2 italic text-foreground/80">"Your request is received. To speed up your enrollment, please click the WhatsApp button below to message us instantly."</p>
            </div>
          </div>

          <div className="lg:col-span-3 order-2">
            <AdmissionForm />

            <div className="mt-6">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Instant Connect</p>
              <InstantConnectBar source="admission_page" message="Hi SCIFINITY, I'd like to know more about admissions." />
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Looking for the Legacy Scholarship?{" "}
              <Link to="/scholarship" className="font-semibold text-gold hover:text-navy">Apply for the Golden Seat here.</Link>
            </p>
          </div>
        </div>

        {/* Admission FAQ */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              <HelpCircle className="h-4 w-4" /> Before You Submit
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">Admission FAQ</h2>
            <p className="mt-3 text-muted-foreground">Quick answers to the most common questions from students and guardians.</p>
          </div>

          <Accordion type="single" collapsible className="rounded-2xl bg-white border border-border shadow-card divide-y divide-border overflow-hidden">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-0 px-5 sm:px-6">
                <AccordionTrigger className="text-left font-display font-semibold text-navy hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Still unsure? <Link to="/programs" className="font-semibold text-gold hover:text-navy">Explore the programs</Link> or message us on WhatsApp above.
          </p>
        </div>

        <div className="mx-auto max-w-3xl px-4 mt-16 text-center">
          <CTAButton to="/programs" variant="outline">Explore Programs First</CTAButton>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CTAButton } from "@/components/CTAButton";
import { CheckCircle2, Users, Cpu, Gauge, Activity, MessageCircle, Phone, MessageSquare, FileText } from "lucide-react";

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
            <div className="rounded-3xl bg-white border border-border shadow-card overflow-hidden">
              <div className="bg-navy text-white px-6 py-5 flex items-center gap-3">
                <FileText className="h-5 w-5 text-gold" />
                <h3 className="font-display font-semibold">Admission Form</h3>
              </div>
              <div className="p-6 sm:p-10">
                <div className="rounded-2xl border-2 border-dashed border-border bg-secondary/30 p-8 sm:p-12 text-center">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-navy/40" />
                  <p className="font-display font-semibold text-navy text-lg">Google Form Embed Placeholder</p>
                  <p className="mt-2 text-sm text-muted-foreground">Replace with final SCIFINITY admission form link.</p>
                  <div className="mt-6 text-left max-w-md mx-auto bg-white border border-border rounded-xl p-5 text-sm">
                    <p className="font-semibold text-navy mb-3">Form will collect:</p>
                    <ul className="space-y-1.5 text-foreground/80">
                      {[
                        "Full Name",
                        "Current Class/Program: SSC / HSC / Admission",
                        "Target Subjects",
                        "Phone Number",
                        "Preferred Branch: Uttara / Patuatuli",
                        "Preferred Batch: Dawn / Zenith / Prime / Vesper",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-brand mt-0.5 shrink-0" /> {f}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-6 inline-flex items-center justify-center rounded-lg bg-gold-gradient text-navy font-semibold px-7 py-3 text-sm shadow-gold opacity-80 cursor-not-allowed" disabled>
                    Submit (placeholder)
                  </button>
                </div>
              </div>
            </div>

            {/* Instant Connection Bar */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white font-semibold px-4 py-4 text-sm hover:opacity-95 transition">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a href="tel:+8801XXXXXXXXX" className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy text-white font-semibold px-4 py-4 text-sm hover:bg-navy-deep transition">
                <Phone className="h-5 w-5" /> Direct Call
              </a>
              <a href="sms:+8801XXXXXXXXX" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient text-navy font-semibold px-4 py-4 text-sm shadow-gold hover:opacity-95 transition">
                <MessageSquare className="h-5 w-5" /> Request Call Back
              </a>
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Looking for the Legacy Scholarship?{" "}
              <Link to="/scholarship" className="font-semibold text-gold hover:text-navy">Apply for the Golden Seat here.</Link>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 mt-16 text-center">
          <CTAButton to="/programs" variant="outline">Explore Programs First</CTAButton>
        </div>
      </section>
    </SiteLayout>
  );
}

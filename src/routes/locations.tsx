import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Building2, Map } from "lucide-react";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations | SCIFINITY" },
      { name: "description", content: "Discover SCIFINITY's upcoming learning environments in Uttara and Patuatuli, Dhaka." },
      { property: "og:title", content: "Locations | SCIFINITY" },
      { property: "og:description", content: "Discover SCIFINITY's upcoming learning environments in Uttara and Patuatuli, Dhaka." },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: Locations,
});

const locations = [
  {
    title: "Uttara, Dhaka: The Roots of the Journey",
    story: "Uttara is where my academic and professional story truly began. It witnessed my transition from an ambitious college student to an EEE Engineer. I never truly left Uttara — it is a part of me. Every street reminds me of the struggle to master a complex concept and the eventual joy of clarity.",
    env: ["শান্ত পরিবেশ (Serene Environment) away from chaotic noise", "আধুনিক Setup (Modern Infrastructure) designed to match an engineer's standard of precision"],
  },
  {
    title: "Patuatuli, Dhaka: The Heart of the Mission",
    story: "Standing at the doorstep of BanglaBazar, this is the tactical heart of my vision. This ancient study hub is where my Unique Publication is situated — allowing me to walk directly from my research desk to the whiteboard. It is my urge to contribute my engineering expertise to this historic academic zone.",
    env: ["ঐতিহ্য (Legacy) in the most famous academic zone", "The Creator's Hub where theory meets the printed page"],
  },
];

function Locations() {
  return (
    <SiteLayout>
      <section className="bg-hero-gradient text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance">Our Campuses: <span className="text-gold">Where the Journey Meets the Goal</span></h1>
          <p className="mt-4 text-white/80">SCIFINITY is preparing focused learning environments in strategic academic zones.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          {locations.map((loc, i) => (
            <article key={i} className="bg-white rounded-3xl border border-border shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                    <MapPin className="h-4 w-4" /> Coming Soon
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy text-balance">{loc.title}</h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{loc.story}</p>
                  <div className="mt-6 space-y-2">
                    {loc.env.map((e) => (
                      <div key={e} className="flex items-start gap-2 text-sm text-foreground/85">
                        <Building2 className="h-4 w-4 text-gold mt-0.5 shrink-0" /> <span>{e}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-secondary/50 min-h-[280px] grid place-items-center p-8">
                  <div className="text-center text-muted-foreground">
                    <Map className="h-16 w-16 mx-auto mb-3 text-navy/40" />
                    <p className="font-semibold text-navy">Google Map Embed Coming Soon</p>
                    <p className="text-xs mt-1">An interactive map will appear here once the address is finalized.</p>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className="rounded-2xl bg-navy text-white p-8 text-center">
            <p className="font-display text-lg lg:text-xl">
              <span className="text-gold font-bold">Coming Soon:</span> Permanent Campuses in Uttara and Patuatuli. Watch this space for our official address reveals!
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

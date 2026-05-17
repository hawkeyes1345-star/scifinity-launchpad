import { MessageCircle, Phone, MessageSquare, MapPin } from "lucide-react";
import { BRANCH_LIST, waLink, telLink, smsLink, type Branch } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

type Props = {
  /** Optional pre-filled message body for WhatsApp/SMS */
  message?: string;
  /** Show only one branch (defaults to all) */
  only?: Branch["key"];
  /** Page/section label sent with analytics events */
  source?: string;
  className?: string;
};

export function InstantConnectBar({ message, only, source = "instant_connect_bar", className = "" }: Props) {
  const branches = only ? BRANCH_LIST.filter((b) => b.key === only) : BRANCH_LIST;

  const track = (channel: "whatsapp" | "call" | "sms", b: Branch) =>
    trackEvent("contact_click", {
      event_category: "engagement",
      channel,
      branch: b.key,
      source,
      conversion: true,
    });

  return (
    <div className={`space-y-4 ${className}`}>
      {branches.map((b) => (
        <div key={b.key} className="rounded-2xl border border-border bg-white p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="h-4 w-4 text-gold" />
            <p className="font-display font-semibold text-navy">{b.name} Branch</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href={waLink(b, message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp", b)}
              data-analytics="contact-whatsapp"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white font-semibold px-4 py-3.5 text-sm hover:opacity-95 transition"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <a
              href={telLink(b)}
              onClick={() => track("call", b)}
              data-analytics="contact-call"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy text-white font-semibold px-4 py-3.5 text-sm hover:bg-navy-deep transition"
            >
              <Phone className="h-5 w-5" /> Direct Call
            </a>
            <a
              href={smsLink(b, message ?? "Please call me back regarding SCIFINITY admission.")}
              onClick={() => track("sms", b)}
              data-analytics="contact-sms"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient text-navy font-semibold px-4 py-3.5 text-sm shadow-gold hover:opacity-95 transition"
            >
              <MessageSquare className="h-5 w-5" /> Request Call Back
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

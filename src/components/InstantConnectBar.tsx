import { MessageCircle, Phone, MessageSquare, MapPin } from "lucide-react";
import { BRANCH_LIST, waLink, telLink, smsLink, type Branch } from "@/lib/contact";

type Props = {
  /** Optional pre-filled message body for WhatsApp/SMS */
  message?: string;
  /** Show only one branch (defaults to all) */
  only?: Branch["key"];
  className?: string;
};

export function InstantConnectBar({ message, only, className = "" }: Props) {
  const branches = only ? BRANCH_LIST.filter((b) => b.key === only) : BRANCH_LIST;

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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white font-semibold px-4 py-3.5 text-sm hover:opacity-95 transition"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <a
              href={telLink(b)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy text-white font-semibold px-4 py-3.5 text-sm hover:bg-navy-deep transition"
            >
              <Phone className="h-5 w-5" /> Direct Call
            </a>
            <a
              href={smsLink(b, message ?? "Please call me back regarding SCIFINITY admission.")}
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

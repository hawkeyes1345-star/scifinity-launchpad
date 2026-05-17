import { useState } from "react";
import { MessageCircle, X, MapPin } from "lucide-react";
import { BRANCH_LIST, waLink } from "@/lib/contact";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-40 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:right-6 sm:bottom-6">
      {open && (
        <div className="mb-3 w-64 rounded-2xl bg-white shadow-xl border border-border overflow-hidden animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-navy text-white px-4 py-3 flex items-center justify-between">
            <p className="font-semibold text-sm">Chat on WhatsApp</p>
            <button onClick={() => setOpen(false)} aria-label="Close" className="opacity-80 hover:opacity-100">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-2">
            {BRANCH_LIST.map((b) => (
              <a
                key={b.key}
                href={waLink(b, "Hi SCIFINITY, I'd like to know more about admissions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-secondary transition"
                onClick={() => setOpen(false)}
              >
                <span className="h-9 w-9 rounded-full bg-[#25D366]/10 text-[#25D366] grid place-items-center">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-semibold text-navy text-sm">{b.name} Branch</span>
                  <span className="block text-xs text-muted-foreground">Tap to chat instantly</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        aria-expanded={open}
        className="relative h-14 w-14 rounded-full grid place-items-center bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-105 transition-transform"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
        <span className="sr-only">WhatsApp</span>
        {!open && <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />}
      </button>
    </div>
  );
}

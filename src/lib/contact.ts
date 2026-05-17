// Central contact details for SCIFINITY branches.
// Replace the placeholder numbers below with the real branch numbers when ready.
// Use international format without "+" for wa.me links (e.g. 8801712345678).

export type BranchKey = "uttara" | "patuatuli";

export type Branch = {
  key: BranchKey;
  name: string;
  // Digits only, country code first (used for wa.me). Example: "8801712345678"
  whatsapp: string;
  // E.164 with leading "+", used for tel:/sms: links. Example: "+8801712345678"
  phone: string;
};

export const BRANCHES: Record<BranchKey, Branch> = {
  uttara: {
    key: "uttara",
    name: "Uttara",
    whatsapp: "8801700000001",
    phone: "+8801700000001",
  },
  patuatuli: {
    key: "patuatuli",
    name: "Patuatuli",
    whatsapp: "8801700000002",
    phone: "+8801700000002",
  },
};

export const BRANCH_LIST: Branch[] = [BRANCHES.uttara, BRANCHES.patuatuli];

// Default branch used by the floating WhatsApp widget.
export const DEFAULT_BRANCH: BranchKey = "uttara";

export const waLink = (b: Branch, text?: string) =>
  `https://wa.me/${b.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const telLink = (b: Branch) => `tel:${b.phone}`;

export const smsLink = (b: Branch, text?: string) =>
  `sms:${b.phone}${text ? `?&body=${encodeURIComponent(text)}` : ""}`;

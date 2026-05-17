import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";
import { InstantConnectBar } from "@/components/InstantConnectBar";
import type { BranchKey } from "@/lib/contact";

type FormState = {
  full_name: string;
  phone: string;
  guardian_phone: string;
  program: "" | "SSC" | "HSC" | "Admission";
  target_subjects: string;
  preferred_branch: "" | "Uttara" | "Patuatuli";
  preferred_batch: "" | "Dawn" | "Zenith" | "Prime" | "Vesper";
  message: string;
};

const initial: FormState = {
  full_name: "",
  phone: "",
  guardian_phone: "",
  program: "",
  target_subjects: "",
  preferred_branch: "",
  preferred_batch: "",
  message: "",
};

const inputCls =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition";

const labelCls = "block text-sm font-semibold text-navy mb-1.5";

export function AdmissionForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  const validate = (): string | null => {
    if (!form.full_name.trim()) return "Full name is required.";
    if (form.full_name.trim().length > 120) return "Full name is too long.";
    if (!form.phone.trim()) return "Phone number is required.";
    if (form.phone.trim().length > 30) return "Phone number is too long.";
    if (!form.program) return "Please select a program.";
    if (!form.preferred_branch) return "Please select a preferred branch.";
    if (!form.preferred_batch) return "Please select a preferred batch.";
    if (form.message.length > 1000) return "Message is too long (max 1000 chars).";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("admission_requests").insert({
      full_name: form.full_name.trim(),
      phone: form.phone.trim(),
      guardian_phone: form.guardian_phone.trim() || null,
      program: form.program,
      target_subjects: form.target_subjects.trim() || null,
      preferred_branch: form.preferred_branch,
      preferred_batch: form.preferred_batch,
      message: form.message.trim() || null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Couldn't submit. Please try again or contact us on WhatsApp.");
      return;
    }
    setForm(initial);
    setSuccess(true);
    toast.success("Admission request received.");
  };

  if (success) {
    return (
      <div className="rounded-3xl bg-white border border-border shadow-card overflow-hidden">
        <div className="bg-navy text-white px-6 py-5 flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-gold" />
          <h3 className="font-display font-semibold">Request Received</h3>
        </div>
        <div className="p-6 sm:p-10 text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-gold-gradient grid place-items-center text-navy mb-5">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h4 className="font-display text-xl font-bold text-navy">Your request is received.</h4>
          <p className="mt-3 text-foreground/80 max-w-md mx-auto">
            To speed up your enrollment, please click the WhatsApp button below to message us instantly.
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white font-semibold px-4 py-4 text-sm hover:opacity-95 transition"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <a
              href="tel:+8801XXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy text-white font-semibold px-4 py-4 text-sm hover:bg-navy-deep transition"
            >
              <Phone className="h-5 w-5" /> Direct Call
            </a>
            <a
              href="sms:+8801XXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient text-navy font-semibold px-4 py-4 text-sm shadow-gold hover:opacity-95 transition"
            >
              <MessageSquare className="h-5 w-5" /> Request Call Back
            </a>
          </div>

          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="mt-8 text-sm text-muted-foreground hover:text-navy underline-offset-4 hover:underline"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-border shadow-card overflow-hidden">
      <div className="bg-navy text-white px-6 py-5">
        <h3 className="font-display font-semibold">Admission Form</h3>
        <p className="text-xs text-white/70 mt-1">All information is kept strictly confidential.</p>
      </div>

      <div className="p-5 sm:p-8 bg-[#F8F9FB] space-y-5">
        <div>
          <label className={labelCls} htmlFor="full_name">Full Name <span className="text-gold">*</span></label>
          <input id="full_name" required maxLength={120} className={inputCls} placeholder="e.g. Rahim Ahmed"
            value={form.full_name} onChange={(e) => update("full_name", e.target.value)} />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="phone">Phone Number <span className="text-gold">*</span></label>
            <input id="phone" required type="tel" inputMode="tel" maxLength={30} className={inputCls} placeholder="01XXXXXXXXX"
              value={form.phone} onChange={(e) => update("phone", e.target.value)} />
          </div>
          <div>
            <label className={labelCls} htmlFor="guardian_phone">Guardian Phone Number</label>
            <input id="guardian_phone" type="tel" inputMode="tel" maxLength={30} className={inputCls} placeholder="01XXXXXXXXX"
              value={form.guardian_phone} onChange={(e) => update("guardian_phone", e.target.value)} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="program">Current Class / Program <span className="text-gold">*</span></label>
            <select id="program" required className={inputCls}
              value={form.program} onChange={(e) => update("program", e.target.value as FormState["program"])}>
              <option value="" disabled>Select program</option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="Admission">Admission</option>
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="target_subjects">Target Subjects</label>
            <input id="target_subjects" maxLength={200} className={inputCls} placeholder="e.g. Physics, Chemistry, Math"
              value={form.target_subjects} onChange={(e) => update("target_subjects", e.target.value)} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="preferred_branch">Preferred Branch <span className="text-gold">*</span></label>
            <select id="preferred_branch" required className={inputCls}
              value={form.preferred_branch} onChange={(e) => update("preferred_branch", e.target.value as FormState["preferred_branch"])}>
              <option value="" disabled>Select branch</option>
              <option value="Uttara">Uttara</option>
              <option value="Patuatuli">Patuatuli</option>
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="preferred_batch">Preferred Batch <span className="text-gold">*</span></label>
            <select id="preferred_batch" required className={inputCls}
              value={form.preferred_batch} onChange={(e) => update("preferred_batch", e.target.value as FormState["preferred_batch"])}>
              <option value="" disabled>Select batch</option>
              <option value="Dawn">Dawn</option>
              <option value="Zenith">Zenith</option>
              <option value="Prime">Prime</option>
              <option value="Vesper">Vesper</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelCls} htmlFor="message">Message / Special Request</label>
          <textarea id="message" rows={4} maxLength={1000} className={`${inputCls} resize-none`}
            placeholder="Share anything we should know — schedule needs, goals, etc."
            value={form.message} onChange={(e) => update("message", e.target.value)} />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient text-navy font-bold px-7 py-4 text-base shadow-gold hover:opacity-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (<><Loader2 className="h-5 w-5 animate-spin" /> Submitting…</>) : "Submit Admission Request"}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting, you agree to be contacted by the SCIFINITY admissions team.
        </p>
      </div>
    </form>
  );
}

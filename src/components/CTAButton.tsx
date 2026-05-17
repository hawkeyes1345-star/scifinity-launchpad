import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "outline" | "navy" | "ghost-light";

const variants: Record<Variant, string> = {
  gold: "bg-gold-gradient text-navy shadow-gold hover:opacity-95",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  navy: "bg-navy text-white hover:bg-navy-deep",
  "ghost-light": "border-2 border-white/40 text-white hover:bg-white hover:text-navy",
};

interface Props {
  to?: ComponentProps<typeof Link>["to"];
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
}

export function CTAButton({ to, href, variant = "gold", children, className = "", size = "md" }: Props) {
  const sizeCls = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-3 text-sm";
  const cls = `inline-flex items-center justify-center rounded-lg font-semibold transition-all ${sizeCls} ${variants[variant]} ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <button className={cls}>{children}</button>;
}

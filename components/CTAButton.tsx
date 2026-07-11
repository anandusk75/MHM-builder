import Link from "next/link";
import type { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}

const variants = {
  solid: "bg-accent text-paper hover:bg-accent-dark",
  outline: "border border-paper text-paper hover:bg-paper hover:text-ink",
  ghost: "text-ink hover:text-accent",
};

export default function CTAButton({ href, children, variant = "solid", className = "" }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

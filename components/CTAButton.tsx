import Link from "next/link";
import type { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}

const variants = {
  solid: "bg-steel text-paper hover:bg-steel-dark",
  outline: "border border-paper text-paper hover:bg-paper hover:text-ink",
  ghost: "text-ink hover:text-steel",
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

import Image from "next/image";
import type { ReactNode } from "react";
import type { GalleryImage } from "@/lib/data";

interface HeroProps {
  image: GalleryImage;
  eyebrow?: string;
  title: string;
  description?: string;
  height?: "full" | "large" | "medium";
  children?: ReactNode;
}

const heights = {
  full: "h-screen min-h-[640px]",
  large: "h-[80vh] min-h-[520px]",
  medium: "h-[56vh] min-h-[420px]",
};

export default function Hero({ image, eyebrow, title, description, height = "large", children }: HeroProps) {
  return (
    <section className={`relative flex w-full items-end overflow-hidden bg-ink ${heights[height]}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        {eyebrow ? (
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-paper/80">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.75rem,6vw,6.5rem)] leading-[0.95] text-paper">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/85 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

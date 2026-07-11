import type { Testimonial as TestimonialType } from "@/lib/data";
import Reveal from "./Reveal";

interface TestimonialProps {
  testimonial: TestimonialType;
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <section className="bg-paper-dim py-24 sm:py-32">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <span aria-hidden className="font-display text-6xl text-accent">
          &ldquo;
        </span>
        <blockquote className="font-display text-2xl italic leading-snug text-ink sm:text-3xl">
          {testimonial.quote}
        </blockquote>
        <p className="mt-8 text-sm font-medium uppercase tracking-[0.15em] text-muted">
          {testimonial.author} &mdash; {testimonial.role}
        </p>
      </Reveal>
    </section>
  );
}

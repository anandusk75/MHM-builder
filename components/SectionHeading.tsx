interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-steel">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}

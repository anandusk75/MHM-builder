interface HeaderLogoProps {
  solid: boolean;
}

/**
 * Inline rendering of public/logo/mhm-logo-horizontal-clean.svg without its
 * baked-in background rect, so the mark/wordmark can sit transparently over
 * the hero image and switch to ink-on-paper once the header goes solid.
 */
export default function HeaderLogo({ solid }: HeaderLogoProps) {
  const primary = solid ? "#252A31" : "#F7F6F3";
  const line = solid ? "#9AA0A8" : "#F7F6F3";
  const divider = solid ? "#C6CBD1" : "#F7F6F3";

  return (
    <svg
      viewBox="0 0 940 240"
      role="img"
      aria-label="MHM Custom Home Builders"
      className="h-9 w-auto transition-colors duration-300 sm:h-10"
    >
      <g transform="translate(30,38) scale(0.78)">
        <rect x="224" y="16" width="15" height="38" fill="#B9722F" />
        <path
          d="M 40 118 L 108 30 L 154 76 L 208 0 L 272 118"
          fill="none"
          stroke={primary}
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="4" y1="118" x2="308" y2="118" stroke={line} strokeWidth="5" strokeLinecap="round" />
      </g>

      <line x1="310" y1="55" x2="310" y2="185" stroke={divider} strokeWidth="2" />

      <text
        x="350"
        y="140"
        fontSize="96"
        fontWeight="900"
        letterSpacing="6"
        fill={primary}
        fontFamily="var(--font-display)"
      >
        MHM
      </text>
      <text
        x="352"
        y="180"
        fontSize="20"
        fontWeight="700"
        letterSpacing="5"
        fill={primary}
        fontFamily="var(--font-sans)"
      >
        CUSTOM HOME BUILDERS
      </text>
    </svg>
  );
}

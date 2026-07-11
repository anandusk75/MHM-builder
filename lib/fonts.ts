import { Fraunces, Inter } from "next/font/google";

/** Editorial display serif used for headlines and pull-quotes. */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

/** Neutral grotesque used for body copy and UI. */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

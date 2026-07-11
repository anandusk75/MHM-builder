import Image from "next/image";

/**
 * The badge is a self-contained circular emblem with its own dark
 * background, so unlike the previous wordmark it doesn't need to swap
 * colors between the transparent (over-hero) and solid header states.
 */
export default function HeaderLogo() {
  return (
    <div className="relative h-12 w-12 overflow-hidden rounded-full sm:h-14 sm:w-14">
      <Image
        src="/logo/mhm-badge-logo.jpg"
        alt="MHM Custom Home Builders"
        fill
        sizes="56px"
        priority
        className="object-cover"
      />
    </div>
  );
}

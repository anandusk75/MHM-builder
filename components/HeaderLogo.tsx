import Image from "next/image";

/**
 * The MHM System logo is a self-contained emblem on its own black
 * background, so it doesn't need to swap colors between the transparent
 * (over-hero) and solid header states.
 */
export default function HeaderLogo() {
  return (
    <div className="relative h-14 w-[58px] overflow-hidden rounded-md sm:h-16 sm:w-[66px]">
      <Image
        src="/logo/mhm-system-logo.jpg"
        alt="MHM System — Construction, Engineering, Solutions"
        fill
        sizes="66px"
        priority
        className="object-contain"
      />
    </div>
  );
}

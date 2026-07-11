import Image from "next/image";
import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Image
              src="/logo/mhm-logo-horizontal.svg"
              alt={`${siteConfig.name} — ${siteConfig.legalSuffix}`}
              width={280}
              height={72}
              className="h-auto w-64"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/join-the-team"
                  className="text-sm font-medium text-accent transition-colors hover:text-accent-dark"
                >
                  Join the Team &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-accent">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-muted">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {siteConfig.name} — All rights reserved.</p>
          <p>Licensed & Bonded General Contractor</p>
        </div>
      </div>
    </footer>
  );
}

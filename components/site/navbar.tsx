"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CcwButton } from "@/components/ui/ccw-button";

const LINKS: [string, string][] = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Services"],
  ["/case-studies", "Case Studies"],
  ["/gallery", "Gallery"],
  ["/contact", "Contact"],
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <Image
            src="/logo/CCW-logo-colour-tight.png"
            alt=""
            width={3074}
            height={2754}
            style={{ height: 28, width: "auto" }}
          />
          Central Civil Works
        </Link>
        <ul className="nav-links">
          {LINKS.map(([href, label]) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link href={href} className={active ? "is-active" : undefined}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <CcwButton
          href="/contact"
          size="sm"
          style={{
            height: 36,
            padding: "0 18px",
            fontWeight:
              "var(--weight-bold)" as React.CSSProperties["fontWeight"],
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-wide)",
            fontSize: "var(--text-caption)",
          }}
        >
          Get a Quote
        </CcwButton>
      </div>
    </nav>
  );
}

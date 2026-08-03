"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/**
 * Fixed bottom furniture shared across every page:
 *  - a diagonal yellow "construction" stripe that reveals while the hero fills
 *    the viewport (only present on pages that render a #hero section),
 *  - a persistent "Request a Site Visit" nub that links to the contact page.
 */
export function BottomChrome() {
  const stripeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stripe = stripeRef.current;
    const hero = document.getElementById("hero");
    const nav = document.querySelector<HTMLElement>(".navbar");
    if (!stripe || !hero) return;

    const check = () => {
      const navH = nav ? nav.offsetHeight : 0;
      const r = hero.getBoundingClientRect();
      stripe.classList.toggle("is-visible", r.top <= navH + 1 && r.bottom >= window.innerHeight - 1);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <>
      <div className="stripe" ref={stripeRef} aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} style={{ background: i % 2 === 0 ? "var(--ccw-yellow)" : "transparent" }} />
        ))}
      </div>
      <Link href="/contact" className="section-counter is-cta">
        Request a Site Visit →
      </Link>
    </>
  );
}

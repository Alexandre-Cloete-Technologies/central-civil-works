import Image from "next/image";
import { CcwButton } from "@/components/ui/ccw-button";

export function FeaturedNetwork() {
  return (
    <section id="network" className="section dark">
      <div className="section-inner featured-grid">
        <div className="featured-photo">
          <Image src="/images/tower-1.jpg" alt="Tower foundation and network infrastructure" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
        </div>
        <div>
          <h2>Network As A Whole: Full Turnkey Builds</h2>
          <p className="lead">
            From the first trench to the final splice, we design, build and light complete networks end-to-end: civils,
            towers, backhaul and last-mile fibre, delivered by one accountable contractor instead of three.
          </p>
          <ul className="featured-list">
            <li><b>01.</b> Site survey &amp; network design</li>
            <li><b>02.</b> Civil works &amp; tower foundations</li>
            <li><b>03.</b> Backhaul &amp; GPON deployment</li>
            <li><b>04.</b> Splicing, OTDR testing &amp; handover</li>
          </ul>
          <CcwButton
            href="/contact"
            size="lg"
            style={{
              height: 48,
              padding: "0 32px",
              fontSize: "var(--text-body)",
              fontWeight: "var(--weight-bold)" as React.CSSProperties["fontWeight"],
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-wide)",
            }}
          >
            Talk To Us About Your Network
          </CcwButton>
        </div>
      </div>
    </section>
  );
}

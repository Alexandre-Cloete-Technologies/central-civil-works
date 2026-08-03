import Image from "next/image";
import { CcwButton } from "@/components/ui/ccw-button";

export function FeaturedFibre() {
  return (
    <section id="fibre" className="section light">
      <div className="section-inner featured-grid">
        <div>
          <h2>Fibre-Optic Infrastructure, End To End</h2>
          <p className="lead">
            Point-to-multipoint links, data &amp; voice circuits and switch deployment, engineered and installed by
            technicians who test and certify every link before handover.
          </p>
          <ul className="featured-list">
            <li><b>01.</b> Point-to-multipoint fibre &amp; wireless links</li>
            <li><b>02.</b> Data &amp; voice circuit installation</li>
            <li><b>03.</b> Switch supply &amp; configuration</li>
            <li><b>04.</b> OTDR test &amp; handover certification</li>
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
            Request A Fibre Assessment
          </CcwButton>
        </div>
        <div className="featured-photo">
          <Image src="/images/fibre-splicing.jpg" alt="Fibre splicing technician at work" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}

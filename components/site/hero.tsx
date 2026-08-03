import { CcwButton } from "@/components/ui/ccw-button";

const CTA_STYLE = {
  height: 48,
  padding: "0 32px",
  fontSize: "var(--text-body)",
  fontWeight: "var(--weight-bold)" as React.CSSProperties["fontWeight"],
  textTransform: "uppercase" as const,
  letterSpacing: "var(--tracking-wide)",
};

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="content">
        <h1>
          Civil Works, Construction &amp; Fibre Optics
          <br />
          <span className="accent">Built Right, Namibia-Wide</span>
        </h1>
        <p className="sub">
          Central Civil Works delivers trenching, ducting and tower foundations alongside splicing, OTDR testing and
          FTTH rollout, the full civil and fibre-optic build from one Namibian contractor.
        </p>
        <div className="cta-row">
          <CcwButton href="/contact" size="lg" style={CTA_STYLE}>
            Request a Site Visit
          </CcwButton>
          <CcwButton
            href="/gallery"
            variant="ghost"
            size="lg"
            style={{
              ...CTA_STYLE,
              color: "var(--ccw-white)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            View Our Work
          </CcwButton>
        </div>
      </div>
    </section>
  );
}

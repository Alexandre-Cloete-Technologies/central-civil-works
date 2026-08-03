import { CcwButton } from "@/components/ui/ccw-button";

export function CtaBanner() {
  return (
    <section className="section dark cta-banner">
      <div className="section-inner">
        <h2>Ready To Build? Let&apos;s Talk.</h2>
        <p className="lead">Tell us about your project and we&apos;ll get back to you within one business day.</p>
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
          Request A Site Visit
        </CcwButton>
      </div>
    </section>
  );
}

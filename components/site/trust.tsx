export function Trust() {
  return (
    <section className="section light tight">
      <div className="section-inner">
        <div className="header-block" style={{ marginBottom: "var(--space-8)" }}>
          <p className="lead" style={{ marginBottom: 0 }}>
            Accredited, certified and working alongside trusted technology partners.
          </p>
        </div>
        <div className="trust-group">
          <span className="trust-label">Certifications</span>
          <div className="trust-row">
            <span className="trust-name">OTT Accredited</span>
            <span className="trust-name">FOCE Certified</span>
          </div>
        </div>
        <div className="trust-group">
          <span className="trust-label">Partners</span>
          <div className="trust-row">
            <span className="trust-name">Ruckus</span>
            <span className="trust-name">HPE Aruba</span>
          </div>
        </div>
      </div>
    </section>
  );
}

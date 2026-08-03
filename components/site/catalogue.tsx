const TAGS = [
  "Trenching & Ducting",
  "Tower Foundations",
  "General Construction",
  "Fibre Splicing",
  "OTDR Testing",
  "FTTx / FTTH Rollout",
  "Backhaul Deployment",
  "GPON Networks",
  "Point-to-Multipoint Links",
  "Data & Voice Circuits",
  "Switching & Network Hardware",
];

export function Catalogue() {
  return (
    <section className="section light">
      <div className="section-inner">
        <div className="header-block">
          <h2>More Services</h2>
          <p className="lead">Every discipline behind our two flagship builds, available on its own.</p>
        </div>
        <div className="tag-grid">
          {TAGS.map((t) => (
            <div key={t} className="tag">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

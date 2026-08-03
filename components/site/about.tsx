import Image from "next/image";

const STATS: [string, string][] = [
  ["32+", "Projects Completed"],
  ["320+", "Customers Serviced"],
  ["20+", "Clients Serviced"],
  ["10+", "Years Of Experience"],
  ["2016", "Founded"],
  ["2", "Branches"],
];

const VALUES = ["Integrity", "Safety", "Professionalism", "Transparency", "Responsibility", "Accountability"];

export function About() {
  return (
    <section id="about" className="section dark">
      <div className="section-inner about-grid">
        <div>
          <h2>100% Namibian-Owned. Built On The Ground We Work.</h2>
          <p className="lead">
            Central Civil Works Pty Ltd builds more than structures. We build connections. Headquartered at Unit 5
            Coastal Courtyard in Swakopmund, with a second office in Windhoek, we bring civil works, construction and
            fibre-optic expertise to every project, engaging with clients every step of the way.
          </p>
          <div className="stat-row">
            {STATS.map(([value, label]) => (
              <div className="stat" key={label}>
                <b>{value}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="value-chips">
            {VALUES.map((v) => (
              <span key={v} className="value-chip">
                {v}
              </span>
            ))}
          </div>
        </div>
        <div className="about-photo">
          <Image src="/images/site-photo-3.jpg" alt="Central Civil Works crew on site" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}

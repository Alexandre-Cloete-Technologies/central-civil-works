import Image from "next/image";

const ITEMS: { src: string; title: string; body: string }[] = [
  {
    src: "/images/site-trenching.jpg",
    title: "Trenching & Ducting",
    body: "Civil groundwork for fibre and power runs, trenching, ducting and reinstatement to spec.",
  },
  {
    src: "/images/tower-1.jpg",
    title: "Tower Foundations",
    body: "Foundation and civil works for telecom towers, engineered for Namibia's terrain and conditions.",
  },
  {
    src: "/images/fibre-splicing.jpg",
    title: "Fibre Splicing & Testing",
    body: "Splicing, OTDR testing and handover certification for FTTx and backhaul links.",
  },
  {
    src: "/images/site-photo-4.jpg",
    title: "Network Rollouts",
    body: "End-to-end network builds combining civils, backhaul and last-mile fibre under one team.",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section light">
      <div className="section-inner">
        <div className="header-block">
          <h2>Selected Work</h2>
          <p className="lead">
            A look at the kind of projects we deliver across civil works, construction and fibre. Full project write-ups
            are coming soon.
          </p>
        </div>
        <div className="case-grid">
          {ITEMS.map((it) => (
            <div key={it.title} className="case-card">
              <div className="case-photo">
                <Image src={it.src} alt={it.title} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

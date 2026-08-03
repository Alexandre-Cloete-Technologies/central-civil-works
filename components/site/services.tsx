import { HardHat, Building2, Cable, LucideIcon } from "lucide-react";
import { CcwButton } from "@/components/ui/ccw-button";

const ITEMS: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: HardHat,
    title: "Civil Works",
    body: "Trenching, ducting and tower foundations engineered to spec and built to last in Namibia's terrain.",
  },
  {
    Icon: Building2,
    title: "Construction",
    body: "General construction and site development delivered with the same safety-first discipline as our civil work.",
  },
  {
    Icon: Cable,
    title: "Fibre-Optic Networks",
    body: "Splicing, OTDR testing and FTTx/FTTH rollout, plus backhaul and GPON deployment for operators and private clients alike.",
  },
];

export function Services() {
  return (
    <section id="services" className="section light">
      <div className="section-inner">
        <div className="header-block">
          <h2>One Contractor for Civil, Construction &amp; Fibre</h2>
          <p className="lead">
            From breaking ground to lighting the network, Central Civil Works handles the full infrastructure build
            in-house.
          </p>
        </div>
        <div className="grid-3">
          {ITEMS.map(({ Icon, title, body }) => (
            <div key={title} className="service-card" style={{ background: "var(--surface-card)", border: "1px solid var(--border-default)", boxShadow: "var(--shadow-sm)" }}>
              <div className="service-icon">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
          <CcwButton
            href="/services"
            variant="ghost"
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
            View All Services
          </CcwButton>
        </div>
      </div>
    </section>
  );
}

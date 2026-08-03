"use client";

import { CSSProperties, FormEvent, useState } from "react";
import { Clock, Phone, Mail, HardHat, Building2, LucideIcon } from "lucide-react";
import { CcwButton } from "@/components/ui/ccw-button";

const fieldLabel: CSSProperties = {
  fontSize: "var(--text-body-sm)",
  fontWeight: "var(--weight-medium)" as CSSProperties["fontWeight"],
  display: "block",
  marginBottom: 6,
};

const control: CSSProperties = {
  height: 32,
  width: "100%",
  padding: "0 10px",
  background: "var(--ccw-white)",
  border: "1px solid var(--border-default)",
  borderRadius: "var(--radius-none)",
  fontSize: "var(--text-body-sm)",
  outline: "none",
  color: "var(--ccw-black)",
};

const INFO: { Icon: LucideIcon; title: string; text: string }[] = [
  { Icon: Clock, title: "Availability", text: "On call 24/7 for urgent civil and fibre works" },
  { Icon: Phone, title: "Phone", text: "+264 81 645 1909" },
  { Icon: Mail, title: "Email", text: "Info@ccw.com.na" },
  { Icon: HardHat, title: "Swakopmund (HQ)", text: "Unit 5 Coastal Courtyard, 34 Phillip Street" },
  { Icon: Building2, title: "Windhoek (Branch)", text: "Contact us for directions" },
];

export function ContactCTA() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="section dark">
      <div className="section-inner cta-grid">
        <div>
          <h2>Let&apos;s Talk About Your Project</h2>
          <p className="lead">
            Homeowner, business or operator, tell us what you need. We&apos;re available 24/7 and get back to you within
            one business day.
          </p>
          <div className="contact-info">
            {INFO.map(({ Icon, title, text }) => (
              <div className="contact-info-item" key={title}>
                <Icon size={18} strokeWidth={1.75} style={{ color: "var(--ccw-yellow)", marginTop: 2, flexShrink: 0 }} />
                <div>
                  <b>{title}</b>
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {sent ? (
            <div
              style={{
                background: "var(--ccw-white)",
                padding: "var(--space-12)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
                border: "1px solid var(--border-default)",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", margin: 0, color: "var(--ccw-black)" }}>
                Thanks. Request Received
              </h3>
              <p style={{ margin: 0, color: "var(--text-muted)" }}>
                We&apos;ll be in touch within one business day to schedule your site visit.
              </p>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={onSubmit}
              style={{ background: "var(--ccw-white)", padding: "var(--space-8)", border: "1px solid var(--border-default)", color: "var(--ccw-black)" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  fontSize: "var(--text-h3)",
                  margin: "0 0 var(--space-2)",
                  color: "var(--ccw-black)",
                }}
              >
                Send Us A Message
              </h3>
              <div>
                <label style={fieldLabel}>What Are You Looking For?</label>
                <select defaultValue="" required style={{ ...control, padding: "0 8px" }}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="civil">Civil Works</option>
                  <option value="construction">Construction</option>
                  <option value="fibre">Fibre-Optic Installation</option>
                  <option value="network">Full Network Build</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-row-2">
                <div>
                  <label style={fieldLabel}>Full Name</label>
                  <input required placeholder="Jane Amupolo" style={control} />
                </div>
                <div>
                  <label style={fieldLabel}>Phone</label>
                  <input required placeholder="+264 81 000 0000" style={control} />
                </div>
              </div>
              <div>
                <label style={fieldLabel}>Email</label>
                <input required type="email" placeholder="you@email.com" style={control} />
              </div>
              <div>
                <label style={fieldLabel}>Project Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your site, timeline and scope."
                  style={{ ...control, height: "auto", padding: 10, resize: "vertical" }}
                />
              </div>
              <CcwButton
                type="submit"
                size="lg"
                style={{
                  height: 48,
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--weight-bold)" as CSSProperties["fontWeight"],
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-wide)",
                }}
              >
                Request A Site Visit
              </CcwButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

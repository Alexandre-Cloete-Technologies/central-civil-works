import type { Metadata } from "next";
import { ContactCTA } from "@/components/site/contact-cta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a site visit with Central Civil Works, Swakopmund and Windhoek. We'll get back to you within one business day.",
};

export default function ContactPage() {
  return <ContactCTA />;
}

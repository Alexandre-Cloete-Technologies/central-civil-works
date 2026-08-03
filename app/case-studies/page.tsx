import type { Metadata } from "next";
import { CaseStudies } from "@/components/site/case-studies";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "A look at the kind of civil, construction and fibre-optic projects Central Civil Works delivers across Namibia.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudies />
      <CtaBanner />
    </>
  );
}

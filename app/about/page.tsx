import type { Metadata } from "next";
import { About } from "@/components/site/about";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Central Civil Works is a 100% Namibian-owned civil engineering, construction and fibre-optic contractor based in Swakopmund and Windhoek since 2016.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <CtaBanner />
    </>
  );
}

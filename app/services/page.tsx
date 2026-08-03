import type { Metadata } from "next";
import { Services } from "@/components/site/services";
import { FeaturedNetwork } from "@/components/site/featured-network";
import { FeaturedFibre } from "@/components/site/featured-fibre";
import { Catalogue } from "@/components/site/catalogue";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Civil works, general construction and fibre-optic network deployment, including turnkey Network As A Whole builds, from one Namibian contractor.",
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <FeaturedNetwork />
      <FeaturedFibre />
      <Catalogue />
      <CtaBanner />
    </>
  );
}

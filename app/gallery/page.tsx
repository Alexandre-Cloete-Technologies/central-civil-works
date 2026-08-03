import type { Metadata } from "next";
import { Gallery } from "@/components/site/gallery";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from the field: civil works, tower foundations and fibre-optic installation projects across Namibia.",
};

export default function GalleryPage() {
  return (
    <>
      <Gallery />
      <CtaBanner />
    </>
  );
}

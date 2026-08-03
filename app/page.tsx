import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
import { FeaturedNetwork } from "@/components/site/featured-network";
import { Catalogue } from "@/components/site/catalogue";
import { FeaturedFibre } from "@/components/site/featured-fibre";
import { Gallery } from "@/components/site/gallery";
import { Trust } from "@/components/site/trust";
import { ContactCTA } from "@/components/site/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <FeaturedNetwork />
      <Catalogue />
      <FeaturedFibre />
      <Gallery />
      <Trust />
      <ContactCTA />
    </>
  );
}

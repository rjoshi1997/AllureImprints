import Testimonials from "@/src/components/common/Testimonials";
import Footer1 from "@/src/components/footers/Footer1";
import Header7 from "@/src/components/headers/Header7";
import Collections from "@/src/components/homes/fashion-modernRetreat/Collections";
import Hero from "@/src/components/homes/fashion-modernRetreat/Hero";
import Lookbook from "@/src/components/homes/fashion-modernRetreat/Lookbook";
import Products from "@/src/components/homes/fashion-modernRetreat/Products";
import Products2 from "@/src/components/homes/fashion-modernRetreat/Products2";
import MarqueeSection from "@/src/components/common/MarqueeSection2";
import React from "react";
import Features from "../../../../components/common/Features2";

export const metadata = {
  title:
    "Home Fashion Modern Retreate || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header7 />
      <Hero />
      <Products />
      <Lookbook />
      <Products2 />
      <Testimonials parentClass="flat-spacing pt-0" />
      <Collections />
      <Features />
      <MarqueeSection />
      <Footer1 dark />
    </>
  );
}

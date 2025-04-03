import Features from "@/src/components/common/Features";
import Products3 from "@/src/components/common/Products3";
import ShopGram from "@/src/components/common/ShopGram";
import Testimonials from "@/src/components/common/Testimonials";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Topbar4 from "@/src/components/headers/Topbar4";
import Collections from "@/src/components/homes/fashion-glamDwell/Collections";
import Hero from "@/src/components/homes/fashion-glamDwell/Hero";
import Lookbook from "@/src/components/homes/fashion-glamDwell/Lookbook";
import React from "react";

export const metadata = {
  title:
    "Home Fashion Glamdwell || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar4 />
      <Header1 />
      <Hero />
      <Collections />
      <Products3 parentClass="flat-spacing pt-0" />
      <Lookbook />
      <Testimonials parentClass="" />
      <Features parentClass="flat-spacing" />
      <div className="line-bottom-container"></div>
      <ShopGram parentClass="flat-spacing" />
      <Footer1 />
    </>
  );
}

import Features from "@/src/components/common/Features";
import MarqueeSection2 from "@/src/components/common/MarqueeSection2";
import Products6 from "@/src/components/common/Products6";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";

import Topbar3 from "@/src/components/headers/Topbar3";
import Collections from "@/src/components/homes/furniture/Collections";
import Collections2 from "@/src/components/homes/furniture/Collections2";
import Hero from "@/src/components/homes/furniture/Hero";
import Lookbook from "@/src/components/homes/furniture/Lookbook";
import Products from "@/src/components/homes/furniture/Products";
import ShopGram from "@/src/components/homes/furniture/ShopGram";
import Testimonials from "@/src/components/homes/furniture/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Furniture || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar3 />
      <Header1 fullWidth />
      <Hero />
      <MarqueeSection2 parentClass="tf-marquee bg-light-blue-4 border-0" />
      <Collections />
      <Products />
      <Lookbook />
      <Products6 />
      <Collections2 />
      <Testimonials />
      <Features parentClass="flat-spacing line-top-container" />
      <ShopGram />
      <Footer1 border={false} />
    </>
  );
}

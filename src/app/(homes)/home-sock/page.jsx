import Features from "@/src/components/common/Features";
import MarqueeSection2 from "@/src/components/common/MarqueeSection2";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Collections from "@/src/components/homes/sock/Collections";
import Collections2 from "@/src/components/homes/sock/Collections2";
import Hero from "@/src/components/homes/sock/Hero";
import Products1 from "@/src/components/homes/sock/Products1";
import Products2 from "@/src/components/homes/sock/Products2";
import ShopGram from "@/src/components/homes/sock/ShopGram";
import Testimonials from "@/src/components/homes/sock/Testimonials";

import React from "react";

export const metadata = {
  title: "Home Sock || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header1 />
      <Hero />
      <MarqueeSection2 />
      <Products1 />
      <Collections />
      <Products2 parentClass="flat-spacing pt-5" />
      <Collections2 />
      <Testimonials />
      <Features parentClass="flat-spacing line-top-container" />
      <ShopGram />
      <Footer1 border={false} />
    </>
  );
}

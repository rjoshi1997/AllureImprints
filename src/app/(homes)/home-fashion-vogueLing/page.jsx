import BannerTab from "@/src/components/common/BannerTab";
import Features from "@/src/components/common/Features";
import MarqueeSection from "@/src/components/common/MarqueeSection";
import MarqueeSection2 from "@/src/components/common/MarqueeSection2";
import Products from "@/src/components/common/Products";
import ShopGram from "@/src/components/common/ShopGram2";
import Testimonials from "@/src/components/common/Testimonials";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Hero from "@/src/components/homes/fashion-vogueLing/Hero";
import Lookbook from "@/src/components/homes/fashion-vogueLing/Lookbook";
import React from "react";

export const metadata = {
  title:
    "Home Fashion Vogueling || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header1 fullWidth />
      <Hero />
      <MarqueeSection2 />

      <Products parentClass={"flat-spacing"} />
      <BannerTab />
      <Lookbook />
      <div className="line-top-container"></div>
      <Features />
      <Testimonials parentClass="flat-spacing pt-0" />
      <ShopGram />
      <Footer1 />
    </>
  );
}

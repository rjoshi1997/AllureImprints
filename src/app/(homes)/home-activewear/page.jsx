import Features from "@/src/components/common/Features";
import MarqueeSection2 from "@/src/components/common/MarqueeSection2";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Topbar3 from "@/src/components/headers/Topbar3";
import BannerTab from "@/src/components/homes/activewear/BannerTab";
import Collections from "@/src/components/homes/activewear/Collections";
import Hero from "@/src/components/homes/activewear/Hero";
import Lookbook from "@/src/components/homes/activewear/Lookbook";
import Products from "@/src/components/homes/activewear/Products";
import Products2 from "@/src/components/homes/activewear/Products2";
import ShopGram from "@/src/components/homes/activewear/ShopGram";
import Testimonials from "@/src/components/homes/activewear/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Active Wear || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar3 />
      <Header1 fullWidth />
      <Hero />
      <MarqueeSection2 parentClass="tf-marquee border-0" />
      <Collections />
      <Products />
      <Lookbook />
      <BannerTab />
      <Products2 />
      <Testimonials />
      <Features parentClass="flat-spacing line-top-container" />
      <ShopGram />
      <Footer1 border={false} />
    </>
  );
}

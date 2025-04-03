import BannerTab2 from "@/src/components/common/BannerTab2";
import Categories from "@/src/components/common/Categories";
import Features from "@/src/components/common/Features";
import MarqueeSection2 from "@/src/components/common/MarqueeSection2";
import Products5 from "@/src/components/common/Products5";

import ShopGram4 from "@/src/components/common/ShopGram4";
import Testimonials2 from "@/src/components/common/Testimonials2";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Banner from "@/src/components/homes/cosmetic/Banner";
import Collections from "@/src/components/homes/cosmetic/Collections";
import Hero from "@/src/components/homes/cosmetic/Hero";
import React from "react";

export const metadata = {
  title:
    "Home Cosmetic || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header1 />
      <Hero />
      <MarqueeSection2 />
      <Collections />
      <Categories parentClass="" />
      <Products5 />
      <Banner />
      <BannerTab2 parentClass="flat-spacing" />
      <Testimonials2 />
      <Features parentClass="flat-spacing line-top-container" />
      <ShopGram4 />
      <Footer1 />
    </>
  );
}

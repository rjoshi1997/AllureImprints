import Categories from "@/src/components/common/Categories";
import Features from "@/src/components/common/Features";
import MarqueeSection2 from "@/src/components/common/MarqueeSection2";
import Products5 from "@/src/components/common/Products5";
import Tiktok from "@/src/components/common/Tiktok";
import Footer1 from "@/src/components/footers/Footer1";
import Header9 from "@/src/components/headers/Header9";
import Topbar4 from "@/src/components/headers/Topbar4";
import Hero from "@/src/components/homes/skincare/Hero";
import Lookbook from "@/src/components/homes/skincare/Lookbook";
import ShopGram from "@/src/components/homes/skincare/ShopGram";
import SingleProduct from "@/src/components/homes/skincare/SingleProduct";
import SkinBeforeAfter from "@/src/components/homes/skincare/SkinBeforeAfter";
import Testimonials from "@/src/components/common/Testimonials2";
import React from "react";

export const metadata = {
  title:
    "Home Skillcare || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar4 />
      <Header9 />
      <Hero />

      <Tiktok parentClass="flat-spacing" />
      <Categories />
      <MarqueeSection2 />
      <Products5 />
      <Lookbook />
      <Testimonials />
      <SkinBeforeAfter />
      <SingleProduct />
      <Features />
      <ShopGram parentClass="flat-spacing pt-0" />
      <Footer1 />
    </>
  );
}

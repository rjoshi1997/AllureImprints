import Features from "@/src/components/common/Features";
import ShopGram from "@/src/components/common/ShopGram";
import Testimonials from "@/src/components/common/Testimonials";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Banner from "@/src/components/homes/eleganceNest/Banner";
import Categories from "@/src/components/homes/eleganceNest/Categories";
import Collections from "@/src/components/homes/eleganceNest/Collections";
import Hero from "@/src/components/homes/eleganceNest/Hero";
import Products from "@/src/components/common/Products4";
import Products2 from "@/src/components/common/Products2";
import React from "react";
import CartTogglerSide from "@/src/components/common/CartTogglerSide";
import MarqueeSection2 from "@/src/components/common/MarqueeSection2";

export const metadata = {
  title:
    "Home Fashion Elegancenest || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header1 />
      <Hero />
      <MarqueeSection2 />
      <Categories />
      <Products />
      <Collections />
      <Products2 parentClass="flat-spacing pt-0" />
      <Banner />
      <Features />
      <Testimonials parentClass="" />
      <ShopGram parentClass="flat-spacing" />
      <Footer1 />
      <CartTogglerSide />
    </>
  );
}

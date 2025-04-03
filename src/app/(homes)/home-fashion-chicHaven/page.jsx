import Brands from "@/src/components/common/Brands";
import Features from "@/src/components/common/Features";
import Products2 from "@/src/components/common/Products2";
import Products4 from "@/src/components/common/Products4";
import ShopGram from "@/src/components/common/ShopGram";
import Testimonials from "@/src/components/common/Testimonials";
import Footer1 from "@/src/components/footers/Footer1";
import Header4 from "@/src/components/headers/Header4";
import Collections from "@/src/components/homes/fashion-chicHaven/Collections";
import Hero from "@/src/components/homes/fashion-chicHaven/Hero";
import MarqueeSection from "@/src/components/common/MarqueeSection";
import SingleProduct from "@/src/components/homes/fashion-chicHaven/SingleProduct";
import React from "react";

export const metadata = {
  title:
    "Home Fashion Chichaven || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header4 />
      <Hero />
      <Collections />
      <Products4 parentClass="flat-spacing" />
      <MarqueeSection />
      <SingleProduct />
      <Products2 title="Top Trending" parentClass="flat-spacing" />
      <Features parentClass="flat-spacing pt-0 line-bottom-container" />
      <Testimonials />
      <ShopGram />
      <div className="mt-5"></div>
      <Brands parentClass="flat-spacing-5 line-top mt--5" />
      <Footer1 dark />
    </>
  );
}

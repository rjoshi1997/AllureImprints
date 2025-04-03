import Features from "@/src/components/common/Features";
import MarqueeSection from "@/src/components/common/MarqueeSection";
import Products2 from "@/src/components/common/Products2";
import ShopGram from "@/src/components/common/ShopGram2";
import Testimonials from "@/src/components/common/Testimonials";
import Footer1 from "@/src/components/footers/Footer1";
import Header5 from "@/src/components/headers/Header5";
import Topbar5 from "@/src/components/headers/Topbar5";
import Banner from "@/src/components/homes/fashion-chicHaven-02/Banner";
import Categories from "@/src/components/homes/fashion-chicHaven-02/Categories";
import Hero from "@/src/components/homes/fashion-chicHaven-02/Hero";
import Products from "@/src/components/homes/fashion-chicHaven-02/Products";
import SingleProduct from "@/src/components/homes/fashion-chicHaven-02/SingleProduct";
import React from "react";

export const metadata = {
  title:
    "Home Fashion Chichaven 02 || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar5 />
      <Header5 />
      <Hero />
      <Products />
      <MarqueeSection />
      <Categories />
      <Products2 title="week’s highlights" parentClass="flat-spacing" />
      <SingleProduct />
      <Testimonials />
      <Banner />
      <Features parentClass="pb-5 pt-5" />
      <ShopGram />
      <Footer1 />
    </>
  );
}

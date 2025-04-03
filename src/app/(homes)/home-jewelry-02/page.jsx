import Features from "@/src/components/common/Features";
import MarqueeSection2 from "@/src/components/common/MarqueeSection2";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Topbar5 from "@/src/components/headers/Topbar5";
import Categories from "@/src/components/homes/jewelry-02/Categories";
import Collections from "@/src/components/homes/jewelry-02/Collections";
import Hero from "@/src/components/homes/jewelry-02/Hero";
import NewsLetter from "@/src/components/homes/jewelry-02/NewsLetter";
import Products1 from "@/src/components/homes/jewelry-02/Products";
import Products2 from "@/src/components/homes/jewelry-02/Products2";
import Shopgram from "@/src/components/homes/jewelry-02/Shopgram";
import Testimonials from "@/src/components/homes/jewelry-02/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Jewelry 02 || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar5 parentClass="tf-topbar style-2 line-bt" />
      <Header1 />
      <Hero />
      <Categories />
      <Products1 parentClass="flat-spacing pt-0" />
      <Collections />
      <Products2 parentClass="flat-spacing" />
      <Testimonials />
      <Features parentClass="flat-spacing line-top-containe pt-0" />
      <Shopgram />
      <MarqueeSection2 />
      <NewsLetter />
      <Footer1 />
    </>
  );
}

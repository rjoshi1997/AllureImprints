import Features from "@/src/components/common/Features";
import ShopGram from "@/src/components/common/ShopGram2";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Topbar2 from "@/src/components/headers/Topbar2";
import Banner from "@/src/components/homes/fashion-trendset/Banner";
import Blogs from "@/src/components/homes/fashion-trendset/Blogs";
import Collectons from "@/src/components/homes/fashion-trendset/Collectons";
import Hero from "@/src/components/homes/fashion-trendset/Hero";
import Products from "@/src/components/homes/fashion-trendset/Products";
import Products2 from "@/src/components/homes/fashion-trendset/Products2";
import Testimonials from "@/src/components/homes/fashion-trendset/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Fashion Trendset || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header1 />
      <Topbar2 />
      <Hero />
      <Products />
      <Banner />
      <Products2 parentClass="flat-spacing pt-0 pt-md-4" />
      <Collectons />
      <Testimonials />
      <Blogs />
      <Features />
      <ShopGram />
      <Footer1 />
    </>
  );
}

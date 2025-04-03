import Features from "@/src/components/common/Features";
import Footer1 from "@/src/components/footers/Footer1";
import Header2 from "@/src/components/headers/Header2";
import BannerTab from "@/src/components/common/BannerTab";
import Collections from "@/src/components/homes/fashion-main/Collections";
import Collections2 from "@/src/components/homes/fashion-main/Collections2";
import Hero from "@/src/components/homes/fashion-main/Hero";
import Products from "@/src/components/common/Products";
import ShopGram from "@/src/components/common/ShopGram2";
import Testimonials from "@/src/components/homes/fashion-main/Testimonials";
import React from "react";
import Features2 from "@/src/components/common/Features2";

export const metadata = {
  title:
    "Home Fashion Main || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header2 />
      <Hero />
      <Collections />
      <BannerTab />
      <Products />
      <Collections2 />
      <Features2 />
      <Testimonials />
      <ShopGram />
      <Footer1 />
    </>
  );
}

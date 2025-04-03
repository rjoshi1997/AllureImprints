import Blogs from "@/src/components/common/Blogs";
import Brands from "@/src/components/common/Brands";
import Features from "@/src/components/common/Features";
import Products4 from "@/src/components/common/Products4";
import Footer1 from "@/src/components/footers/Footer1";
import Header6 from "@/src/components/headers/Header6";
import Topbar2 from "@/src/components/headers/Topbar2";
import BannerTab from "@/src/components/homes/fashion-tiktok/BannerTab";
import Collections from "@/src/components/homes/fashion-tiktok/Collections";
import Hero from "@/src/components/homes/fashion-tiktok/Hero";
import MarqueeSection from "@/src/components/common/MarqueeSection2";
import Testimonials from "@/src/components/homes/fashion-tiktok/Testimonials3";
import Tiktok from "@/src/components/homes/fashion-tiktok/Tiktok";
import React from "react";

export const metadata = {
  title:
    "Home Fashion Tiktok || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header6 />
      <Hero />
      <Collections />
      <Products4 parentClass="flat-spacing pt-0" />
      <MarqueeSection />
      <BannerTab />
      <Tiktok />
      <Testimonials />
      <Blogs parentClass="flat-spacing" />
      <Features parentClass="flat-spacing line-top-container" />
      <Brands />
      <Footer1 dark />
    </>
  );
}

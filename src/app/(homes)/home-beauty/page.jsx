import Features2 from "@/src/components/common/Features2";
import MarqueeSection2 from "@/src/components/common/MarqueeSection2";
import Footer1 from "@/src/components/footers/Footer1";
import Header8 from "@/src/components/headers/Header8";
import Topbar2 from "@/src/components/headers/Topbar2";
import BannerTab from "@/src/components/common/BannerTab2";
import Blogs from "@/src/components/homes/beauty/Blogs";
import Categories from "@/src/components/common/Categories";
import Collections from "@/src/components/homes/beauty/Collections";
import Hero from "@/src/components/homes/beauty/Hero";
import Products from "@/src/components/common/Products5";
import ShopGram from "@/src/components/common/ShopGram4";
import Testimonials from "@/src/components/common/Testimonials3";
import Tiktok from "@/src/components/common/Tiktok";
import React from "react";

export const metadata = {
  title: "Home Beauty || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar2 parentClass="tf-topbar topbar-white bg-purple-2" />
      <Header8 />
      <Hero />
      <Collections />
      <Categories />
      <MarqueeSection2 />
      <Products />
      <BannerTab />
      <Tiktok />
      <Testimonials />
      <Blogs />
      <Features2 parentClass="flat-spacing pt-0" />
      <ShopGram />
      <Footer1 dark />
    </>
  );
}

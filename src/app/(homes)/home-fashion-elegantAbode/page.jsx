import MarqueeSection from "@/src/components/common/MarqueeSection";
import Products2 from "@/src/components/common/Products2";
import Testimonials from "@/src/components/common/Testimonials";
import Header1 from "@/src/components/headers/Header1";
import Topbar3 from "@/src/components/headers/Topbar3";
import BannerCountdown from "@/src/components/homes/fashion-elegantAbode/BannerCountdown";
import Categories from "@/src/components/homes/fashion-elegantAbode/Categories";
import Hero from "@/src/components/homes/fashion-elegantAbode/Hero";
import Lookbook from "@/src/components/homes/fashion-elegantAbode/Lookbook";
import Products from "@/src/components/homes/fashion-elegantAbode/Products";
import Blogs from "@/src/components/common/Blogs";
import React from "react";
import Features from "@/src/components/common/Features";
import Brands from "@/src/components/common/Brands";
import Footer1 from "@/src/components/footers/Footer1";
import MarqueeSection2 from "@/src/components/common/MarqueeSection2";

export const metadata = {
  title:
    "Home Fashion Elegant Abode || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar3 />
      <Header1 />
      <Hero />
      <Categories />
      <Products />
      <BannerCountdown />
      <MarqueeSection2 parentClass={"tf-marquee marquee-white bg-purple-2"} />
      <Lookbook />
      <Products2 title="Top Trending" parentClass="flat-spacing pt-0" />
      <Testimonials parentClass="flat-spacing pt-0" />
      <Blogs parentClass="" />
      <Features parentClass="flat-spacing-5" />
      <Brands />
      <Footer1 dark />
    </>
  );
}

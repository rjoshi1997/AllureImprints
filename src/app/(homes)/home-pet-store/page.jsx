import MarqueeSection2 from "@/src/components/common/MarqueeSection2";
import Footer1 from "@/src/components/footers/Footer1";
import Header12 from "@/src/components/headers/Header12";

import Topbar6 from "@/src/components/headers/Topbar6";
import Banner from "@/src/components/homes/pet-store/Banner";
import BannerCountdown from "@/src/components/homes/pet-store/BannerCountdown";
import Benefits from "@/src/components/homes/pet-store/Benefits";
import Blogs from "@/src/components/homes/pet-store/Blogs";
import Categories from "@/src/components/homes/pet-store/Categories";
import Hero from "@/src/components/homes/pet-store/Hero";
import Products from "@/src/components/homes/pet-store/Products";
import Products2 from "@/src/components/homes/pet-store/Products2";
import Products3 from "@/src/components/homes/pet-store/Products3";
import React from "react";

export const metadata = {
  title:
    "Home Pet Store || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar6 bgColor=" has-line-bot bg-purple" />
      <Header12 />
      <Benefits />
      <Hero />
      <Categories />
      <Products />
      <BannerCountdown />
      <Products2 />
      <Banner />
      <Products3 />
      <Blogs />
      <MarqueeSection2 parentClass="tf-marquee bg-light-pink-3 border-0" />
      <Footer1 dark />
    </>
  );
}

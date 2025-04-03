import Features from "@/src/components/common/Features";
import Products2 from "@/src/components/common/Products2";
import Products4 from "@/src/components/common/Products4";

import ShopGram3 from "@/src/components/common/ShopGram3";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import BannerCollections from "@/src/components/homes/fashion-luxeLiving/BannerCollections";
import Categories from "@/src/components/homes/fashion-luxeLiving/Categories";
import Hero from "@/src/components/homes/fashion-luxeLiving/Hero";
import LookBook from "@/src/components/homes/fashion-luxeLiving/LookBook";
import Testimonials from "@/src/components/homes/fashion-luxeLiving/Testimonials";
import MarqueeSection from "@/src/components/common/MarqueeSection2";
import React from "react";

export const metadata = {
  title:
    "Home Fashion Luxeliving || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header1 fullWidth />
      <Hero />
      <Products4 parentClass="flat-spacing" />
      <MarqueeSection />
      <Categories />
      <LookBook />
      <Products2 title="Top Trending" parentClass="flat-spacing" />
      <Testimonials />
      <BannerCollections />
      <Features parentClass="flat-spacing" />
      <ShopGram3 />
      <Footer1 border={false} />
    </>
  );
}

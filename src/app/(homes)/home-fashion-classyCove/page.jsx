import Features from "@/src/components/common/Features";
import Products3 from "@/src/components/common/Products3";
import ShopGram from "@/src/components/common/ShopGram2";
import Testimonials from "@/src/components/common/Testimonials";
import Footer1 from "@/src/components/footers/Footer1";
import Header3 from "@/src/components/headers/Header3";
import Topbar3 from "@/src/components/headers/Topbar3";
import Blogs from "@/src/components/homes/fashion-classyCove/Blogs";
import Categories from "@/src/components/homes/fashion-classyCove/Categories";
import Collections from "@/src/components/homes/fashion-classyCove/Collections";
import Hero from "@/src/components/homes/fashion-classyCove/Hero";
import React from "react";

export const metadata = {
  title:
    "Home Fashion Classycove || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar3 />
      <Header3 />
      <Hero />
      <Collections />
      <Products3 />
      <Categories />
      <Testimonials />
      <Blogs />
      <Features parentClass="flat-spacing line-top-container" />
      <ShopGram />
      <Footer1 dark />
    </>
  );
}

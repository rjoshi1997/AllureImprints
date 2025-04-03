import Features from "@/src/components/common/Features";
import Footer1 from "@/src/components/footers/Footer1";
import Header4 from "@/src/components/headers/Header4";
import BannerCountdown from "@/src/components/homes/camping/BannerCountdown";
import BannerTab from "@/src/components/homes/camping/BannerTab";
import Blogs from "@/src/components/homes/camping/Blogs";
import Categories from "@/src/components/homes/camping/Categories";
import Hero from "@/src/components/homes/camping/Hero";
import Products from "@/src/components/homes/camping/Products";
import Shopgram from "@/src/components/homes/camping/Shopgram";
import SingleProduct from "@/src/components/homes/camping/SingleProduct";
import Testimonials from "@/src/components/homes/camping/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Camping || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header4 />
      <Hero />
      <Categories />
      <Products />
      <SingleProduct />
      <BannerTab />

      <Products />
      <BannerCountdown />
      <Testimonials />
      <Blogs />
      <Features parentClass="flat-spacing pt-0" />
      <Shopgram />
      <Footer1 border={false} />
    </>
  );
}

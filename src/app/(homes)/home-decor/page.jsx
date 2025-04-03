import Features from "@/src/components/common/Features";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Banner from "@/src/components/homes/decor/Banner";
import Collections from "@/src/components/homes/decor/Collections";
import Hero from "@/src/components/homes/decor/Hero";
import ListCollections from "@/src/components/homes/decor/ListCollections";
import LookBook from "@/src/components/homes/decor/LookBook";
import Products from "@/src/components/homes/decor/Products";
import Products2 from "@/src/components/common/Products6";
import Testimonials from "@/src/components/homes/decor/Testimonials";
import React from "react";

export const metadata = {
  title: "Home Decor || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header1 fullWidth />
      <Hero />
      <Collections />
      <ListCollections />
      <Products />
      <LookBook />
      <Products2 />
      <Testimonials />
      <Features parentClass="flat-spacing line-top-container" />
      <Banner />
      <Footer1 />
    </>
  );
}

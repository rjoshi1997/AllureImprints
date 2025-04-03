import Features from "@/src/components/common/Features";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import BannerCountdown from "@/src/components/homes/organic/BannerCountdown";
import Collections from "@/src/components/homes/organic/Collections";
import Hero from "@/src/components/homes/organic/Hero";
import Products1 from "@/src/components/homes/organic/Products1";
import Products2 from "@/src/components/homes/organic/Products2";
import ShopGram from "@/src/components/homes/organic/ShopGram";
import Testimonials from "@/src/components/homes/organic/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Organic || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Header1 fullWidth />

      <Hero />
      <Products1 />
      <Collections />
      <BannerCountdown />
      <Products2 />
      <Testimonials />
      <Features parentClass="flat-spacing pt-0" />
      <ShopGram />
      <Footer1 border={false} />
    </>
  );
}

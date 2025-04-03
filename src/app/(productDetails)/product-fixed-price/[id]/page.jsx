import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Topbar6 from "@/src/components/headers/Topbar6";
import Breadcumb from "@/src/components/productDetails/Breadcumb";
import DetailsFixedprice from "@/src/components/productDetails/details/DetailsFixedprice";

import { allProducts } from "@/data/products";
import React from "react";

export const metadata = {
  title:
    "Product Fixed Price || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default async function page({ params }) {
  const { id } = await params;

  const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
  return (
    <>
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <Breadcumb product={product} />
      <DetailsFixedprice product={product} />

      <Footer1 hasPaddingBottom />
    </>
  );
}

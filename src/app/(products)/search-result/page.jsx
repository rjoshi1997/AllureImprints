import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Topbar6 from "@/src/components/headers/Topbar6";
import SearchProducts from "@/src/components/products/SearchProducts";
import React from "react";

export default function page() {
  return (
    <>
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/page-title.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Search</h3>
            </div>
          </div>
        </div>
      </div>
      <SearchProducts />

      <Footer1 />
    </>
  );
}

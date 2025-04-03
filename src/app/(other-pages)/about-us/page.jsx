import Brands from "@/src/components/common/Brands";
import Features2 from "@/src/components/common/Features2";
import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Link from "next/link";
import Topbar6 from "@/src/components/headers/Topbar6";
import About from "@/src/components/otherPages/About";
import Team from "@/src/components/otherPages/Team";
import Testimonials from "@/src/components/otherPages/Testimonials";
import React from "react";

export const metadata = {
  title: "About Us || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

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
              <h3 className="heading text-center">About Our Store</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href={`/`}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>
                  <a className="link" href="#">
                    Pages
                  </a>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>About Our Store</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Features2 parentClass="flat-spacing line-bottom-container" />
      <Team />
      <Brands parentClass="flat-spacing-5 bg-surface" />
      <Testimonials />
      <Footer1 />
    </>
  );
}

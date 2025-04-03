import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Topbar from "@/src/components/headers/Topbar";
import BannerCollection from "@/src/components/homes/home-1/BannerCollection";
import BannerCountdown from "@/src/components/homes/home-1/BannerCountdown";
import Blogs from "@/src/components/common/Blogs";
import Collections from "@/src/components/homes/home-1/Collections";
import Features from "@/src/components/common/Features";
import Hero from "@/src/components/homes/home-1/Hero";
import Products from "@/src/components/common/Products3";
import ShopGram from "@/src/components/common/ShopGram";
import Testimonials from "@/src/components/common/Testimonials";

export const metadata = {
  title: "Home || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function Home() {
  return (
    <>
      <Topbar />
      <Header1 />
      <Hero />
      <Collections />
      <Products />
      <BannerCollection />
      <BannerCountdown />
      <Testimonials />
      <Blogs />
      <ShopGram />
      <Features />
      <Footer1 />
    </>
  );
}

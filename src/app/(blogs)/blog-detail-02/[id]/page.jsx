import BlogDetail2 from "@/src/components/blogs/BlogDetail2";

import RelatedBlogs from "@/src/components/blogs/RelatedBlogs";

import Footer1 from "@/src/components/footers/Footer1";
import Header1 from "@/src/components/headers/Header1";
import Topbar6 from "@/src/components/headers/Topbar6";
import { allBlogs } from "@/data/blogs";
import React from "react";

export default async function page({ params }) {
  const { id } = await params;

  const blog = allBlogs.filter((p) => p.id == id)[0] || allBlogs[0];
  return (
    <>
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <BlogDetail2 blog={blog} />
      <RelatedBlogs />
      <Footer1 />
    </>
  );
}

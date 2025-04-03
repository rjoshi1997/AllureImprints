"use client";

import { useContextElement } from "@/src/context/Context";

export default function CartLength() {
  const { cartProducts } = useContextElement();
  return <>{cartProducts.length}</>;
}

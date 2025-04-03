"use client";
import ColorSelect from "@/src/components/productDetails/ColorSelect";
import QuantitySelect from "@/src/components/productDetails/QuantitySelect";
import React, { useState } from "react";

import Link from "next/link";
import Slider1 from "@/src/components/productDetails/sliders/Slider1";
import { products44 } from "@/data/products";
import { useContextElement } from "@/src/context/Context";
import SizeSelect from "@/src/components/productDetails/SizeSelect";
const imgs = [
  {
    id: 1,
    color: "white",
    src: "/images/products/womens/women-185.jpg",
    alt: "",
    width: 735,
    height: 980,
  },
  {
    id: 2,
    color: "white",
    src: "/images/products/womens/women-186.jpg",
    alt: "",
    width: 735,
    height: 980,
  },
  {
    id: 3,
    color: "white",
    src: "/images/products/womens/women-187.jpg",
    alt: "",
    width: 735,
    height: 980,
  },
  {
    id: 4,
    color: "black",
    src: "/images/products/womens/women-188.jpg",
    alt: "",
    width: 735,
    height: 980,
  },
];

const colorOptions = [
  {
    id: "white",
    value: "white",
    color: "white",
  },
  {
    id: "black",
    value: "black",
    color: "black",
  },
];
export default function SingleProduct2() {
  const [activeColor, setActiveColor] = useState("gray");
  const [quantity, setQuantity] = useState(1); // Initial quantity is 1
  const {
    quickViewItem,
    addProductToCart,
    isAddedToCartProducts,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
    cartProducts,
    updateQuantity,
  } = useContextElement();
  return (
    <section className="flat-spacing bg-surface">
      <div className="container">
        <div className="row flat-single-home">
          {/* Product default */}
          <div className="col-md-6">
            <div className="tf-product-media-wrap sticky-top">
              <Slider1
                activeColor={activeColor}
                setActiveColor={setActiveColor}
                slideItems={imgs}
                thumbSlidePerView={4.5}
              />
            </div>
          </div>
          {/* /Product default */}
          {/* tf-product-info-list */}
          <div className="col-md-6">
            <div className="tf-product-info-wrap position-relative">
              <div className="tf-zoom-main" />
              <div className="tf-product-info-list other-image-zoom">
                <div className="tf-product-info-heading">
                  <div className="tf-product-info-name">
                    <div className="text text-btn-uppercase">Clothing</div>
                    <h3 className="name">{products44[2].title}</h3>
                    <div className="tf-product-info-rate">
                      <div className="list-star-default">
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                      </div>
                      <div className="text text-caption-1">(1.234 reviews)</div>
                    </div>
                    <div className="tf-product-info-sold">
                      <div className="tf-product-pre-order text-btn-uppercase">
                        Best seller
                      </div>
                      <div className="d-flex gap-4 align-items-center">
                        <i className="icon icon-lightning" />
                        <div className="text text-caption-1 text-secondary text-line-clamp-1">
                          Selling fast! 22 people have this in their carts.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tf-product-info-price">
                    <h4 className="price-on-sale">
                      ${products44[2].price.toFixed(2)}
                    </h4>
                    <div className="old-price old-price-sold">
                      ${products44[2].oldPrice.toFixed(2)}
                    </div>
                    <div className="badges-on-sale text-btn-uppercase">
                      -25%
                    </div>
                  </div>
                </div>
                <div className="tf-product-info-choose-option">
                  <ColorSelect
                    setActiveColor={setActiveColor}
                    activeColor={activeColor}
                    colorOptions={[...colorOptions]}
                  />
                  <SizeSelect />
                  <div className="tf-product-info-quantity">
                    <div className="title mb_12">Quantity:</div>
                    <QuantitySelect
                      quantity={
                        isAddedToCartProducts(products44[2].id)
                          ? cartProducts.filter(
                              (elm) => elm.id == products44[2].id
                            )[0].quantity
                          : quantity
                      }
                      setQuantity={(qty) => {
                        if (isAddedToCartProducts(products44[2].id)) {
                          updateQuantity(products44[2].id, qty);
                        } else {
                          setQuantity(qty);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <div className="tf-product-info-by-btn mb_10">
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="modal"
                        onClick={() =>
                          addProductToCart(products44[2].id, quantity)
                        }
                        className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6 btn-add-to-cart"
                      >
                        <span>
                          {isAddedToCartProducts(products44[2].id)
                            ? "Already Added"
                            : "Add to Cart -"}
                        </span>
                        <span className="tf-qty-price total-price">
                          $
                          {isAddedToCartProducts(products44[2].id)
                            ? (
                                products44[2].price *
                                cartProducts.filter(
                                  (elm) => elm.id == products44[2].id
                                )[0].quantity
                              ).toFixed(2)
                            : (products44[2].price * quantity).toFixed(2)}{" "}
                        </span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        onClick={() => addToCompareItem(products44[2].id)}
                        aria-controls="compare"
                        className="box-icon hover-tooltip compare btn-icon-action"
                      >
                        <span className="icon icon-gitDiff" />
                        <span className="tooltip text-caption-2">
                          {" "}
                          {isAddedtoCompareItem(products44[2].id)
                            ? "Already compared"
                            : "Compare"}
                        </span>
                      </a>
                      <a
                        onClick={() => addToWishlist(products44[2].id)}
                        className="box-icon hover-tooltip text-caption-2 wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart" />
                        <span className="tooltip text-caption-2">
                          {isAddedtoWishlist(products44[2].id)
                            ? "Already Wishlished"
                            : "Wishlist"}
                        </span>
                      </a>
                    </div>
                    <a href="#" className="btn-style-3 text-btn-uppercase">
                      Buy it now
                    </a>
                  </div>
                  <div>
                    <Link
                      href={`/product-detail/${products44[2].id}`}
                      className="btn-line"
                    >
                      View Full details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /tf-product-info-list */}
        </div>
      </div>
    </section>
  );
}

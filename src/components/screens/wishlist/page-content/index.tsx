import { useWishlist } from "context/wishlistContext";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Item, useCart } from "react-use-cart";

const PageContent = () => {
  const { items, removeItem, totalItems } = useWishlist();
  const { addItem } = useCart();

  const [Items, setItems] = useState<Item[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setItems(items);
    setTotal(totalItems);
  }, [items, totalItems]);

  return (
    <section className="section-box shop-template">
      <div className="containers">
        <div className="box-wishlist">
          <div className="head-wishlist">
            <div className="item-wishlist">
              <div className="wishlist-cb">
                <input className="cb-layout cb-all" type="checkbox" />
              </div>
              <div className="wishlist-product">
                <span className="font-md-bold color-brand-3">Product</span>
              </div>
              <div className="wishlist-price">
                <span className="font-md-bold color-brand-3">Price</span>
              </div>
              <div className="wishlist-status">
                <span className="font-md-bold color-brand-3">Stock status</span>
              </div>
              <div className="wishlist-action">
                <span className="font-md-bold color-brand-3">Action</span>
              </div>
              <div className="wishlist-remove">
                <span className="font-md-bold color-brand-3">Remove</span>
              </div>
            </div>
          </div>
          <div className="content-wishlist">
            <div className="item-wishlist">
              <div className="wishlist-cb">
                <input className="cb-layout cb-select" type="checkbox" />
              </div>
              <div className="wishlist-product">
                <div className="product-wishlist">
                  <div className="product-image">
                    <a href="shop-single-product.html">
                      <Image
                        src="/imgs/page/product/img-sub.png"
                        alt="Ecom"
                        width={343}
                        height={308}
                      />
                    </a>
                  </div>
                  <div className="product-info">
                    <a href="shop-single-product.html">
                      <h6 className="color-brand-3">
                        Samsung 36&quot; French door 28 cu. ft. Smart Energy
                        Star Refrigerator{" "}
                      </h6>
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist-price">
                <h4 className="color-brand-3">$2.51</h4>
              </div>
              <div className="wishlist-status">
                <span className="btn btn-gray font-md-bold color-brand-3">
                  In Stock
                </span>
              </div>
              <div className="wishlist-action">
                <a className="btn btn-cart font-sm-bold" href="shop-cart.html">
                  Add to Cart
                </a>
              </div>
              <div className="wishlist-remove">
                <a className="btn btn-delete" href="#"></a>
              </div>
            </div>
            <div className="item-wishlist">
              <div className="wishlist-cb">
                <input className="cb-layout cb-select" type="checkbox" />
              </div>
              <div className="wishlist-product">
                <div className="product-wishlist">
                  <div className="product-image">
                    <a href="shop-single-product.html">
                      <Image
                        src="/imgs/page/product/img-sub2.png"
                        alt="Ecom"
                        width={343}
                        height={308}
                      />
                    </a>
                  </div>
                  <div className="product-info">
                    <a href="shop-single-product.html">
                      <h6 className="color-brand-3">
                        Samsung 36&quot; French door 28 cu. ft. Smart Energy
                        Star Refrigerator{" "}
                      </h6>
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist-price">
                <h4 className="color-brand-3">$1.51</h4>
              </div>
              <div className="wishlist-status">
                <span className="btn btn-gray font-md-bold color-brand-3">
                  In Stock
                </span>
              </div>
              <div className="wishlist-action">
                <a className="btn btn-cart font-sm-bold" href="shop-cart.html">
                  Add to Cart
                </a>
              </div>
              <div className="wishlist-remove">
                <a className="btn btn-delete" href="#"></a>
              </div>
            </div>
            <div className="item-wishlist">
              <div className="wishlist-cb">
                <input className="cb-layout cb-select" type="checkbox" />
              </div>
              <div className="wishlist-product">
                <div className="product-wishlist">
                  <div className="product-image">
                    <a href="shop-single-product.html">
                      <Image
                        src="/imgs/page/product/img-sub3.png"
                        alt="Ecom"
                        width={343}
                        height={308}
                      />
                    </a>
                  </div>
                  <div className="product-info">
                    <a href="shop-single-product.html">
                      <h6 className="color-brand-3">
                        Samsung 36&quot; French door 28 cu. ft. Smart Energy
                        Star Refrigerator{" "}
                      </h6>
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist-price">
                <h4 className="color-brand-3">$3.51</h4>
              </div>
              <div className="wishlist-status">
                <span className="btn btn-gray font-md-bold color-brand-3">
                  In Stock
                </span>
              </div>
              <div className="wishlist-action">
                <a className="btn btn-cart font-sm-bold" href="shop-cart.html">
                  Add to Cart
                </a>
              </div>
              <div className="wishlist-remove">
                <a className="btn btn-delete" href="#"></a>
              </div>
            </div>
            <div className="item-wishlist">
              <div className="wishlist-cb">
                <input className="cb-layout cb-select" type="checkbox" />
              </div>
              <div className="wishlist-product">
                <div className="product-wishlist">
                  <div className="product-image">
                    <a href="shop-single-product.html">
                      <Image
                        src="/imgs/page/product/img-sub4.png"
                        alt="Ecom"
                        width={343}
                        height={308}
                      />
                    </a>
                  </div>
                  <div className="product-info">
                    <a href="shop-single-product.html">
                      <h6 className="color-brand-3">
                        Samsung 36&quot; French door 28 cu. ft. Smart Energy
                        Star Refrigerator{" "}
                      </h6>
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist-price">
                <h4 className="color-brand-3">$4.51</h4>
              </div>
              <div className="wishlist-status">
                <span className="btn btn-gray font-md-bold color-brand-3">
                  In Stock
                </span>
              </div>
              <div className="wishlist-action">
                <a className="btn btn-cart font-sm-bold" href="shop-cart.html">
                  Add to Cart
                </a>
              </div>
              <div className="wishlist-remove">
                <a className="btn btn-delete" href="#"></a>
              </div>
            </div>
            <div className="item-wishlist">
              <div className="wishlist-cb">
                <input className="cb-layout cb-select" type="checkbox" />
              </div>
              <div className="wishlist-product">
                <div className="product-wishlist">
                  <div className="product-image">
                    <a href="shop-single-product.html">
                      <Image
                        src="/imgs/page/product/img-sub5.png"
                        alt="Ecom"
                        width={343}
                        height={308}
                      />
                    </a>
                  </div>
                  <div className="product-info">
                    <a href="shop-single-product.html">
                      <h6 className="color-brand-3">
                        Samsung 36&quot; French door 28 cu. ft. Smart Energy
                        Star Refrigerator{" "}
                      </h6>
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist-price">
                <h4 className="color-brand-3">$3.51</h4>
              </div>
              <div className="wishlist-status">
                <span className="btn btn-gray font-md-bold color-brand-3">
                  In Stock
                </span>
              </div>
              <div className="wishlist-action">
                <a className="btn btn-cart font-sm-bold" href="shop-cart.html">
                  Add to Cart
                </a>
              </div>
              <div className="wishlist-remove">
                <a className="btn btn-delete" href="#"></a>
              </div>
            </div>
            <div className="item-wishlist">
              <div className="wishlist-cb">
                <input className="cb-layout cb-select" type="checkbox" />
              </div>
              <div className="wishlist-product">
                <div className="product-wishlist">
                  <div className="product-image">
                    <a href="shop-single-product.html">
                      <Image
                        src="/imgs/page/product/img-sub.png"
                        alt="Ecom"
                        width={343}
                        height={308}
                      />
                    </a>
                  </div>
                  <div className="product-info">
                    <a href="shop-single-product.html">
                      <h6 className="color-brand-3">
                        Samsung 36&quot; French door 28 cu. ft. Smart Energy
                        Star Refrigerator{" "}
                      </h6>
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist-price">
                <h4 className="color-brand-3">$2.51</h4>
              </div>
              <div className="wishlist-status">
                <span className="btn btn-gray font-md-bold color-brand-3">
                  In Stock
                </span>
              </div>
              <div className="wishlist-action">
                <a className="btn btn-cart font-sm-bold" href="shop-cart.html">
                  Add to Cart
                </a>
              </div>
              <div className="wishlist-remove">
                <a className="btn btn-delete" href="#"></a>
              </div>
            </div>
            <div className="item-wishlist">
              <div className="wishlist-cb">
                <input className="cb-layout cb-select" type="checkbox" />
              </div>
              <div className="wishlist-product">
                <div className="product-wishlist">
                  <div className="product-image">
                    <a href="shop-single-product.html">
                      <Image
                        src="/imgs/page/product/img-sub2.png"
                        alt="Ecom"
                        width={343}
                        height={308}
                      />
                    </a>
                  </div>
                  <div className="product-info">
                    <a href="shop-single-product.html">
                      <h6 className="color-brand-3">
                        Samsung 36&quot; French door 28 cu. ft. Smart Energy
                        Star Refrigerator{" "}
                      </h6>
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="!inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist-price">
                <h4 className="color-brand-3">$1.51</h4>
              </div>
              <div className="wishlist-status">
                <span className="btn btn-gray font-md-bold color-brand-3">
                  In Stock
                </span>
              </div>
              <div className="wishlist-action">
                <a className="btn btn-cart font-sm-bold" href="shop-cart.html">
                  Add to Cart
                </a>
              </div>
              <div className="wishlist-remove">
                <a className="btn btn-delete" href="#"></a>
              </div>
            </div>
          </div>
        </div>
        <h4 className="color-brand-3">You may also like</h4>
        <div className="list-products-5 mt-20 mb-40">
          <div className="card-grid-style-3">
            <div className="card-grid-inner">
              <div className="tools">
                <a
                  className="btn btn-trend btn-tooltip mb-10"
                  href="#"
                  aria-label="Trend"
                  data-bs-placement="left"
                ></a>
                <a
                  className="btn btn-wishlist btn-tooltip mb-10"
                  href="shop-wishlist.html"
                  aria-label="Add To Wishlist"
                ></a>
                <a
                  className="btn btn-compare btn-tooltip mb-10"
                  href="shop-compare.html"
                  aria-label="Compare"
                ></a>
                <a
                  className="btn btn-quickview btn-tooltip"
                  aria-label="Quick view"
                  href="#ModalQuickview"
                  data-bs-toggle="modal"
                ></a>
              </div>
              <div className="image-box">
                <span className="label bg-brand-2">-17%</span>
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp3.png"
                    alt="Ecom"
                    width={343}
                    height={308}
                  />
                </a>
              </div>
              <div className="info-right">
                <a
                  className="font-xs color-gray-500"
                  href="shop-vendor-single.html"
                >
                  Apple
                </a>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  Razer Power Up Gaming Bundle V2 - Cynosa Lite
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <span className="font-xs color-gray-500">(65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2856.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
                <div className="mt-20 box-btn-cart">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li>27-inch (diagonal) Retina 5K display</li>
                  <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-grid-style-3">
            <div className="card-grid-inner">
              <div className="tools">
                <a
                  className="btn btn-trend btn-tooltip mb-10"
                  href="#"
                  aria-label="Trend"
                  data-bs-placement="left"
                ></a>
                <a
                  className="btn btn-wishlist btn-tooltip mb-10"
                  href="shop-wishlist.html"
                  aria-label="Add To Wishlist"
                ></a>
                <a
                  className="btn btn-compare btn-tooltip mb-10"
                  href="shop-compare.html"
                  aria-label="Compare"
                ></a>
                <a
                  className="btn btn-quickview btn-tooltip"
                  aria-label="Quick view"
                  href="#ModalQuickview"
                  data-bs-toggle="modal"
                ></a>
              </div>
              <div className="image-box">
                <span className="label bg-brand-2">-17%</span>
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp4.png"
                    alt="Ecom"
                    width={343}
                    height={308}
                  />
                </a>
              </div>
              <div className="info-right">
                <a
                  className="font-xs color-gray-500"
                  href="shop-vendor-single.html"
                >
                  Apple
                </a>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  2022 Apple iMac with Retina 5K Display 8GB RAM
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <span className="font-xs color-gray-500">(65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2856.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
                <div className="mt-20 box-btn-cart">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li>27-inch (diagonal) Retina 5K display</li>
                  <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-grid-style-3">
            <div className="card-grid-inner">
              <div className="tools">
                <a
                  className="btn btn-trend btn-tooltip mb-10"
                  href="#"
                  aria-label="Trend"
                  data-bs-placement="left"
                ></a>
                <a
                  className="btn btn-wishlist btn-tooltip mb-10"
                  href="shop-wishlist.html"
                  aria-label="Add To Wishlist"
                ></a>
                <a
                  className="btn btn-compare btn-tooltip mb-10"
                  href="shop-compare.html"
                  aria-label="Compare"
                ></a>
                <a
                  className="btn btn-quickview btn-tooltip"
                  aria-label="Quick view"
                  href="#ModalQuickview"
                  data-bs-toggle="modal"
                ></a>
              </div>
              <div className="image-box">
                <span className="label bg-brand-2">-17%</span>
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp5.png"
                    alt="Ecom"
                    width={343}
                    height={308}
                  />
                </a>
              </div>
              <div className="info-right">
                <a
                  className="font-xs color-gray-500"
                  href="shop-vendor-single.html"
                >
                  Apple
                </a>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  Samsung Galaxy Tab A7 Lite, 8.7&quot; Tablet 32
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <span className="font-xs color-gray-500">(65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2856.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
                <div className="mt-20 box-btn-cart">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li>27-inch (diagonal) Retina 5K display</li>
                  <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-grid-style-3">
            <div className="card-grid-inner">
              <div className="tools">
                <a
                  className="btn btn-trend btn-tooltip mb-10"
                  href="#"
                  aria-label="Trend"
                  data-bs-placement="left"
                ></a>
                <a
                  className="btn btn-wishlist btn-tooltip mb-10"
                  href="shop-wishlist.html"
                  aria-label="Add To Wishlist"
                ></a>
                <a
                  className="btn btn-compare btn-tooltip mb-10"
                  href="shop-compare.html"
                  aria-label="Compare"
                ></a>
                <a
                  className="btn btn-quickview btn-tooltip"
                  aria-label="Quick view"
                  href="#ModalQuickview"
                  data-bs-toggle="modal"
                ></a>
              </div>
              <div className="image-box">
                <span className="label bg-brand-2">-17%</span>
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp6.png"
                    alt="Ecom"
                    width={343}
                    height={308}
                  />
                </a>
              </div>
              <div className="info-right">
                <a
                  className="font-xs color-gray-500"
                  href="shop-vendor-single.html"
                >
                  Apple
                </a>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  2022 Apple iMac with Retina 5K Display 8GB RAM
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <span className="font-xs color-gray-500">(65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2856.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
                <div className="mt-20 box-btn-cart">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li>27-inch (diagonal) Retina 5K display</li>
                  <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-grid-style-3">
            <div className="card-grid-inner">
              <div className="tools">
                <a
                  className="btn btn-trend btn-tooltip mb-10"
                  href="#"
                  aria-label="Trend"
                  data-bs-placement="left"
                ></a>
                <a
                  className="btn btn-wishlist btn-tooltip mb-10"
                  href="shop-wishlist.html"
                  aria-label="Add To Wishlist"
                ></a>
                <a
                  className="btn btn-compare btn-tooltip mb-10"
                  href="shop-compare.html"
                  aria-label="Compare"
                ></a>
                <a
                  className="btn btn-quickview btn-tooltip"
                  aria-label="Quick view"
                  href="#ModalQuickview"
                  data-bs-toggle="modal"
                ></a>
              </div>
              <div className="image-box">
                <span className="label bg-brand-2">-17%</span>
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp7.png"
                    alt="Ecom"
                    width={343}
                    height={308}
                  />
                </a>
              </div>
              <div className="info-right">
                <a
                  className="font-xs color-gray-500"
                  href="shop-vendor-single.html"
                >
                  Apple
                </a>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  HDR Smart Portable Projector - SP-LSP3B
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <span className="font-xs color-gray-500">(65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2856.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
                <div className="mt-20 box-btn-cart">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li>27-inch (diagonal) Retina 5K display</li>
                  <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h4 className="color-brand-3">Recently viewed items</h4>
        <div className="row mt-40">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-grid-style-2 card-grid-none-border hover-up">
              <div className="image-box">
                <a href="#">
                  <Image
                    src="/imgs/page/homepage1/imgsp1.png"
                    alt="Ecom"
                    width={343}
                    height={308}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">HP</span>
                <br />
                <a className="color-brand-3 font-xs-bold" href="#">
                  HP 24 All-in-One PC, Intel Core i3-1115G4
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <span className="font-xs color-gray-500"> (65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2556.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-grid-style-2 card-grid-none-border hover-up">
              <div className="image-box">
                <a href="#">
                  <Image
                    src="/imgs/page/homepage1/imgsp2.png"
                    alt="Ecom"
                    width={343}
                    height={308}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">HP</span>
                <br />
                <a className="color-brand-3 font-xs-bold" href="#">
                  HP 22 All-in-One PC, Intel Pentium Silver
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <span className="font-xs color-gray-500"> (65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2556.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-grid-style-2 card-grid-none-border hover-up">
              <div className="image-box">
                <a href="#">
                  <Image
                    src="/imgs/page/homepage1/imgsp1.png"
                    alt="Ecom"
                    width={343}
                    height={308}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">Class</span>
                <br />
                <a className="color-brand-3 font-xs-bold" href="#">
                  Class 4K UHD (2160P) LED Roku Smart TV HDR
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <span className="font-xs color-gray-500"> (65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2556.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-grid-style-2 card-grid-none-border hover-up">
              <div className="image-box">
                <a href="#">
                  <Image
                    src="/imgs/page/homepage1/imgsp2.png"
                    alt="Ecom"
                    width={343}
                    height={308}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">LG</span>
                <br />
                <a className="color-brand-3 font-xs-bold" href="#">
                  LG 65&quot; Class 4K UHD Smart TV OLED A1 Series{" "}
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <span className="font-xs color-gray-500"> (65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2556.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;

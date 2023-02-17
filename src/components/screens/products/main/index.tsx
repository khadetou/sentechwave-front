import { useWishlist } from "context/wishlistContext";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { getProductById } from "redux/products/productSlice";
import LeftSidebar from "../left";

const Main = () => {
  const { products } = useAppSelector((store) => store.product);
  const dispatch = useAppDispatch();
  const { addItem } = useCart();
  const { addItem: addWishlist } = useWishlist();
  return (
    <div className="section-box shop-template mt-30">
      <div className="containers">
        <div className="row">
          <div className="col-lg-9 order-first order-lg-last">
            <div className="banner-ads-top mb-30">
              <a href="shop-single-product-3.html">
                <Image
                  src="/imgs/page/shop/banner.png"
                  alt="Ecom"
                  width={1269}
                  height={269}
                />
              </a>
            </div>
            <div className="box-filters mt-0 pb-5 border-bottom">
              <div className="row">
                <div className="col-xl-2 col-lg-3 mb-10 text-lg-start text-center">
                  <a
                    className="btn btn-filter font-sm color-brand-3 font-medium"
                    href="#ModalFiltersForm"
                    data-bs-toggle="modal"
                  >
                    All Fillters
                  </a>
                </div>
                <div className="col-xl-10 col-lg-9 mb-10 text-lg-end text-center">
                  <span className="font-sm color-gray-900 font-medium border-1-right span">
                    Showing 1&ndash;16 of 17 results
                  </span>
                  <div className="d-inline-block">
                    <span className="font-sm color-gray-500 font-medium">
                      Sort by:
                    </span>
                    <div className="dropdown dropdown-sort border-1-right">
                      <button
                        className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                        id="dropdownSort"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Latest products
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-light"
                        aria-labelledby="dropdownSort"
                        style={{ margin: "0px" }}
                      >
                        <li>
                          <a className="dropdown-item active" href="#">
                            Latest products
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Oldest products
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Comments products
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-inline-block">
                    <span className="font-sm color-gray-500 font-medium">
                      Show
                    </span>
                    <div className="dropdown dropdown-sort border-1-right">
                      <button
                        className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                        id="dropdownSort2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-display="static"
                      >
                        <span>30 items</span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-light"
                        aria-labelledby="dropdownSort2"
                      >
                        <li>
                          <a className="dropdown-item active" href="#">
                            30 items
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            50 items
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            100 items
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-inline-block">
                    <a
                      className="view-type-grid mr-5 active"
                      href="shop-grid.html"
                    ></a>
                    <a className="view-type-list" href="shop-list.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-20">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        Dell Optiplex 9020 Small Form Business Desktop
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        <span className="font-xs color-gray-500">(65)</span>
                      </div>
                      <div className="price-info">
                        <strong className="font-lg-bold color-brand-3 price-main">
                          $2856.3
                        </strong>
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        Gateway 23.8&quot; All-in-one Desktop, Fully Adjustable
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        HP 22 All-in-One PC, Intel Pentium Silver J5040
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        HP Slim Desktop, Intel Celeron J4025, 4GB RAM
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          src="/imgs/page/homepage1/imgsp1.png"
                          alt="Ecom"
                          width={648}
                          height={468}
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
                        <span className="font-xs color-gray-500">(65)</span>
                      </div>
                      <div className="price-info">
                        <strong className="font-lg-bold color-brand-3 price-main">
                          $2856.3
                        </strong>
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          src="/imgs/page/homepage1/imgsp2.png"
                          alt="Ecom"
                          width={648}
                          height={468}
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
                        Galaxy Tab S7 Plus 12.4&quot; 128GB Mystic Black
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        HP 11.6&quot; Chromebook, AMD A4, 4GB RAM, 32GB Storage
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        MSI Optix G272 27&quot; Full HD LED Gaming LCD Monitor
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        RCA 43&quot; Class 4K Ultra HD (2160P) HDR Roku Smart
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        Bose Sport Earbuds True Wireless Headphones
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        ASUS VivoBook 15.6&quot; 1080p PC Laptops, Intel Core i3
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          src="/imgs/page/homepage1/imgsp1.png"
                          alt="Ecom"
                          width={648}
                          height={468}
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
                        Apple Watch Series 7 GPS + Cellular, 41mm Midnight
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          src="/imgs/page/homepage1/imgsp2.png"
                          alt="Ecom"
                          width={648}
                          height={468}
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
                        Hisense 43&quot; Class 4K UHD LED XClass Smart TV HDR
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        2022 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        Chromecast with Google TV - Streaming Entertainment
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        LG 65&quot; Class 4K UHD Smart TV OLED A1 Series
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        HDR Smart Portable Projector - SP- 2022
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        Lenovo Legion 5i 15.6&quot; Laptop, Intel Core i5
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          src="/imgs/page/homepage1/imgsp1.png"
                          alt="Ecom"
                          width={648}
                          height={468}
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
                        Galaxy Tab A7 Lite, 8.7&quot; Tablet 32GB
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          src="/imgs/page/homepage1/imgsp2.png"
                          alt="Ecom"
                          width={648}
                          height={468}
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
                        Apple AirPods Pro with MagSafe Charging Case
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        2022 Apple iMac Retina 5K Display 8GB RAM, 256GB SSD
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        Razer Power Up Gaming Bundle V2 - Cynosa Lit
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        Seagate Portable 2TB External Hard Drive Portable
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        SanDisk 128GB Ultra microSDXC UHS-I Memory
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        Original HP 63XL Black High-yield Ink Cartridge
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          src="/imgs/page/homepage1/imgsp1.png"
                          alt="Ecom"
                          width={648}
                          height={468}
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
                        2022 Apple iMac Retina 5K Display 8GB RAM, 256GB SSD
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          src="/imgs/page/homepage1/imgsp2.png"
                          alt="Ecom"
                          width={648}
                          height={468}
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
                        Logitech C920x HD Pro Webcam, Full HD
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        Logitech H390 Wired Headset, Stereo Headphones with
                        Noise
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        Logitech MK345 Wireless Combo Full-Sized Keyboard with
                        Palm
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                          width={648}
                          height={468}
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
                        Logitech Brio 4K Webcam, Ultra 4K HD Video Calling 2T
                        Storage
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
                        <span className="color-gray-500 price-line">
                          $3225.6
                        </span>
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
            </div>
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link page-prev" href="#"></a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link active" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link page-next" href="#"></a>
                </li>
              </ul>
            </nav>
          </div>
          <LeftSidebar />
        </div>
      </div>
    </div>
  );
};

export default Main;

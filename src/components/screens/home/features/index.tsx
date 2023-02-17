import { useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  const { topProducts } = useAppSelector((store) => store.product);
  return (
    <section className="section-box bg-gray-50 pt-50 pb-50 mt-50">
      <div className="containers">
        <div className="head-main bd-gray-200">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <h3 className="mb-5 text-[31px] font-bold">Trending This Week</h3>
              <p className="font-base color-gray-500">
                Special products in this month.
              </p>
            </div>
            <div className="col-xl-5 col-lg-6">
              <ul className="nav nav-tabs" role="tablist">
                <li>
                  <a
                    className="active"
                    href="#tab-2-all"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-2-all"
                    aria-selected="true"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-2-bestseller"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-2-bestseller"
                    aria-selected="true"
                  >
                    Best seller
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-2-mostviewed"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-2-mostviewed"
                    aria-selected="true"
                  >
                    Most viewed
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-2-topbrands"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-2-topbrands"
                    aria-selected="true"
                  >
                    Top Brands
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div
            className="tab-pane fade active show"
            id="tab-2-all"
            role="tabpanel"
            aria-labelledby="tab-2-all"
          >
            <div className="list-products-5">
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
                        height={438}
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
                      2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
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
                        width={648}
                        height={438}
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Philips
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html"
                    >
                      Philips H4205 On-Ear Wireless Headphones with 32mm
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $154.0.3
                      </strong>
                      <span className="color-gray-500 price-line">$162.5</span>
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
                        width={648}
                        height={438}
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
                      2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2325.3
                      </strong>
                      <span className="color-gray-500 price-line">$2225.6</span>
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
                        width={648}
                        height={438}
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
                      Apple Watch Series 8 [GPS 45mm] Smart Watch
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $530.3
                      </strong>
                      <span className="color-gray-500 price-line">$560.6</span>
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
                        width={648}
                        height={438}
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Kami Tech
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html"
                    >
                      Kami by YI 4pc 1080p Home Security Cameras
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $156.3
                      </strong>
                      <span className="color-gray-500 price-line">$250.6</span>
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
          <div
            className="tab-pane fade"
            id="tab-2-bestseller"
            role="tabpanel"
            aria-labelledby="tab-2-bestseller"
          >
            <div className="list-products-5">
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
                        height={438}
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
                      2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2325.3
                      </strong>
                      <span className="color-gray-500 price-line">$2225.6</span>
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
                        src="/imgs/page/homepage1/imgsp2.png"
                        alt="Ecom"
                        width={648}
                        height={438}
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
                      Apple Watch Series 8 [GPS 45mm] Smart Watch
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $530.3
                      </strong>
                      <span className="color-gray-500 price-line">$560.6</span>
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
                        width={648}
                        height={438}
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Kami Tech
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html"
                    >
                      Kami by YI 4pc 1080p Home Security Cameras
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $156.3
                      </strong>
                      <span className="color-gray-500 price-line">$250.6</span>
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
                        src="/imgs/page/homepage1/imgsp3.png"
                        alt="Ecom"
                        width={648}
                        height={438}
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
                      2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
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
                        width={648}
                        height={438}
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Philips
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html"
                    >
                      Philips H4205 On-Ear Wireless Headphones with 32mm
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $154.0.3
                      </strong>
                      <span className="color-gray-500 price-line">$162.5</span>
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
          <div
            className="tab-pane fade"
            id="tab-2-mostviewed"
            role="tabpanel"
            aria-labelledby="tab-2-mostviewed"
          >
            <div className="list-products-5">
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
                        height={438}
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
                      2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2325.3
                      </strong>
                      <span className="color-gray-500 price-line">$2225.6</span>
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
                        width={648}
                        height={438}
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
                      Apple Watch Series 8 [GPS 45mm] Smart Watch
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $530.3
                      </strong>
                      <span className="color-gray-500 price-line">$560.6</span>
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
                        src="/imgs/page/homepage1/imgsp3.png"
                        alt="Ecom"
                        width={648}
                        height={438}
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
                      2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
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
                        width={648}
                        height={438}
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Philips
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html"
                    >
                      Philips H4205 On-Ear Wireless Headphones with 32mm
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $154.0.3
                      </strong>
                      <span className="color-gray-500 price-line">$162.5</span>
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
                        width={648}
                        height={438}
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Kami Tech
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html"
                    >
                      Kami by YI 4pc 1080p Home Security Cameras
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $156.3
                      </strong>
                      <span className="color-gray-500 price-line">$250.6</span>
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
          <div
            className="tab-pane fade"
            id="tab-2-topbrands"
            role="tabpanel"
            aria-labelledby="tab-2-topbrands"
          >
            <div className="list-products-5">
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
                        height={438}
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Kami Tech
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html"
                    >
                      Kami by YI 4pc 1080p Home Security Cameras
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $156.3
                      </strong>
                      <span className="color-gray-500 price-line">$250.6</span>
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
                        src="/imgs/page/homepage1/imgsp2.png"
                        alt="Ecom"
                        width={648}
                        height={438}
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
                      2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
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
                        src="/imgs/page/homepage1/imgsp1.png"
                        alt="Ecom"
                        width={648}
                        height={438}
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Philips
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html"
                    >
                      Philips H4205 On-Ear Wireless Headphones with 32mm
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $154.0.3
                      </strong>
                      <span className="color-gray-500 price-line">$162.5</span>
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
                        width={648}
                        height={438}
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
                      2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2325.3
                      </strong>
                      <span className="color-gray-500 price-line">$2225.6</span>
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
                        width={648}
                        height={438}
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
                      Apple Watch Series 8 [GPS 45mm] Smart Watch
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        className="inline"
                        alt="Ecom"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $530.3
                      </strong>
                      <span className="color-gray-500 price-line">$560.6</span>
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
        </div>
      </div>
    </section>
  );
};

export default Features;

import product from "components/screens/product";
import { useWishlist } from "context/wishlistContext";
import { useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import moment from "moment";
import "moment/locale/fr";

import { useState, useEffect, useMemo } from "react";

moment.locale("fr");
const Deals = () => {
  const { products } = useAppSelector((store) => store.product);
  const deals = products.slice(0, 4);
  const { addItem } = useCart();
  const timer = useMemo(() => {
    return new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
  }, []);

  const [timeLeft, setTimeLeft] = useState<moment.Duration>(
    moment.duration(moment(timer).diff(moment()))
  );
  const [timing, setTiming] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer && moment().isBefore(moment(timer))) {
        setTimeLeft(moment.duration(moment(timer).diff(moment())));
      }
    }, 500);

    setTiming(moment.utc(timeLeft.asMilliseconds()).format("DD:HH:mm:ss"));

    return () => clearInterval(interval);
  }, [timer, timeLeft]);

  const [days, hours, minutes, secondes] = timing.split(":");

  return (
    <section className="section-box pt-50">
      <div className="containers">
        <div className="head-main bd-gray-200">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="mb-5 text-[31px] font-bold leading-[41px]">
                Latest Deals
              </h3>
              <p className="font-base color-gray-500">
                Special products in this month.
              </p>
            </div>
            <div className="col-lg-6 text-end">
              <div className="box-all-hurry">
                <div className="d-inline-block box-text-hurryup">
                  <span className="font-md-bold color-gray-900">Hurry up!</span>
                  <br />
                  <span className="font-xs color-gray-500">Offers end in:</span>
                </div>
                <div className="box-count box-count-square hide-period">
                  <div
                    className="deals-countdown"
                    data-countdown="2023/08/25 00:00:00"
                  >
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {days}
                      </span>
                      <span className="countdown-period lh-14 font-xs">
                        day
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {hours}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        hour
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {minutes}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        min
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {secondes}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        sec
                      </span>
                    </span>
                  </div>
                </div>
                <a
                  className="btn btn-view-all font-md-bold"
                  href="shop-single-product.html"
                >
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card-grid-style-3 hover-show hurry-up">
              <div className="card-grid-inner">
                <div className="tools">
                  <a
                    className="btn btn-trend mb-10"
                    href="shop-single-product.html"
                  ></a>
                  <a
                    className="btn btn-wishlist mb-10"
                    href="shop-single-product.html"
                  ></a>
                  <a
                    className="btn btn-compare mb-10"
                    href="shop-single-product.html"
                  ></a>
                  <a
                    className="btn btn-quickview"
                    aria-label="Quick view"
                    href="#ModalQuickview"
                    data-bs-toggle="modal"
                  ></a>
                </div>
                <span className="label">
                  <span className="font-lg-bold color-white">Hurry Up!</span>
                </span>
                <div className="image-box">
                  <div className="box-swiper">
                    <div className="swiper-container swiper-group-1">
                      <div className="swiper-wrapper pt-5">
                        <div className="swiper-slide">
                          <Image
                            src="/imgs/page/homepage1/screen.png"
                            alt="Ecom"
                            width={800}
                            height={689}
                          />
                        </div>
                        <div className="swiper-slide">
                          <Image
                            src="/imgs/page/homepage1/screen-2.png"
                            alt="Ecom"
                            width={800}
                            height={689}
                          />
                        </div>
                        <div className="swiper-slide">
                          <Image
                            src="/imgs/page/homepage1/screen-3.png"
                            alt="Ecom"
                            width={800}
                            height={689}
                          />
                        </div>
                      </div>
                      <div className="swiper-pagination swiper-pagination-2"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-10 mb-15">
                  <h4>Special Offer</h4>
                  <p className="font-base color-gray-500">
                    Remains until the end of the offer
                  </p>
                </div>
                <div className="box-count box-count-square">
                  <div
                    className="deals-countdown"
                    data-countdown="2023/08/25 00:00:00"
                  >
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {days}
                      </span>
                      <span className="countdown-period lh-14 font-xs">
                        day
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {hours}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        hour
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {minutes}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        min
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {secondes}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        sec
                      </span>
                    </span>
                  </div>
                </div>
                <div className="divide"></div>
                <div className="info-right">
                  <span className="font-xs color-gray-500">Apple</span>
                  <br />
                  <a
                    className="color-brand-3 font-sm-bold"
                    href="shop-single-product.html"
                  >
                    <h5>2022 Apple iMac Retina 5K Display</h5>
                  </a>
                  <div className="rating">
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      className="inline"
                      width={12}
                      height={12}
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      className="inline"
                      width={12}
                      height={12}
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      className="inline"
                      width={12}
                      height={12}
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      className="inline"
                      width={12}
                      height={12}
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      className="inline"
                      width={12}
                      height={12}
                    />
                    <span className="font-xs color-gray-500"> (65)</span>
                  </div>
                  <div className="price-info">
                    <h3 className="color-brand-3 price-main d-inline-block">
                      $2856.3
                    </h3>
                    <span className="color-gray-500 price-line">$3225.6</span>
                  </div>
                  <div className="box-progress">
                    <div className="progress-bar">
                      <div className="progress-bar-inner"></div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <span className="font-xs color-gray-500">
                          Available:
                        </span>
                        <span className="font-xs-bold color-gray-900">568</span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                        <span className="font-xs color-gray-500">Sold:</span>
                        <span className="font-xs-bold color-gray-900">289</span>
                      </div>
                    </div>
                  </div>
                  <div className="divide"></div>
                  <ul className="list-features">
                    <li> 27-inch (diagonal) Retina 5K display</li>
                    <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                    <li>AMD Radeon Pro 5300 graphics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools">
                      <a
                        className="btn btn-trend btn-tooltip mb-10"
                        href="#"
                        aria-label="Trend"
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
                          width={800}
                          height={689}
                        />
                      </a>
                    </div>
                    <div className="info-right">
                      <span className="font-xs color-gray-500">Samsung</span>
                      <br />
                      <a
                        className="color-brand-3 font-sm-bold"
                        href="shop-single-product.html"
                      >
                        Samsung 30-100 inches The Freestyle FHD HDR Smart
                        Projector
                      </a>
                      <div className="rating">
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
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
                      <div className="mt-20">
                        <a className="btn btn-cart" href="shop-cart.html">
                          Add To Cart
                        </a>
                      </div>
                      <ul className="list-features">
                        <li> 27-inch (diagonal) Retina 5K display</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools">
                      <a
                        className="btn btn-trend btn-tooltip mb-10"
                        href="#"
                        aria-label="Trend"
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
                          width={800}
                          height={689}
                        />
                      </a>
                    </div>
                    <div className="info-right">
                      <span className="font-xs color-gray-500">Apple</span>
                      <br />
                      <a
                        className="color-brand-3 font-sm-bold"
                        href="shop-single-product.html"
                      >
                        Lenovo Legion 5i 15.6&quot; Laptop, Intel Core i5-10500H
                      </a>
                      <div className="rating">
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
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
                      <div className="mt-20">
                        <a className="btn btn-cart" href="shop-cart.html">
                          Add To Cart
                        </a>
                      </div>
                      <ul className="list-features">
                        <li> 27-inch (diagonal) Retina 5K display</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools">
                      <a
                        className="btn btn-trend btn-tooltip mb-10"
                        href="#"
                        aria-label="Trend"
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
                          width={800}
                          height={689}
                        />
                      </a>
                    </div>
                    <div className="info-right">
                      <span className="font-xs color-gray-500">Apple</span>
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
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
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
                      <div className="mt-20">
                        <a className="btn btn-cart" href="shop-cart.html">
                          Add To Cart
                        </a>
                      </div>
                      <ul className="list-features">
                        <li> 27-inch (diagonal) Retina 5K display</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools">
                      <a
                        className="btn btn-trend btn-tooltip mb-10"
                        href="#"
                        aria-label="Trend"
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
                          width={800}
                          height={689}
                        />
                      </a>
                    </div>
                    <div className="info-right">
                      <span className="font-xs color-gray-500">Apple</span>
                      <br />
                      <a
                        className="color-brand-3 font-sm-bold"
                        href="shop-single-product.html"
                      >
                        Razer Power Up Gaming Bundle V2 - Cynosa Lite, Gigantus
                      </a>
                      <div className="rating">
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
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
                      <div className="mt-20">
                        <a className="btn btn-cart" href="shop-cart.html">
                          Add To Cart
                        </a>
                      </div>
                      <ul className="list-features">
                        <li> 27-inch (diagonal) Retina 5K display</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools">
                      <a
                        className="btn btn-trend btn-tooltip mb-10"
                        href="#"
                        aria-label="Trend"
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
                          width={800}
                          height={689}
                        />
                      </a>
                    </div>
                    <div className="info-right">
                      <span className="font-xs color-gray-500">Apple</span>
                      <br />
                      <a
                        className="color-brand-3 font-sm-bold"
                        href="shop-single-product.html"
                      >
                        ASUS ROG Strix GL10 Gaming Desktop, AMD Ryzen 5-3600X
                      </a>
                      <div className="rating">
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
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
                      <div className="mt-20">
                        <a className="btn btn-cart" href="shop-cart.html">
                          Add To Cart
                        </a>
                      </div>
                      <ul className="list-features">
                        <li> 27-inch (diagonal) Retina 5K display</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools">
                      <a
                        className="btn btn-trend btn-tooltip mb-10"
                        href="#"
                        aria-label="Trend"
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
                          width={800}
                          height={689}
                        />
                      </a>
                    </div>
                    <div className="info-right">
                      <span className="font-xs color-gray-500">Apple</span>
                      <br />
                      <a
                        className="color-brand-3 font-sm-bold"
                        href="shop-single-product.html"
                      >
                        Fujifilm INSTAX Mini Link 2 Smartphone Printer Exclusive
                      </a>
                      <div className="rating">
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
                        />
                        <Image
                          src="/imgs/template/icons/star.svg"
                          alt="Ecom"
                          className="inline"
                          width={12}
                          height={12}
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
                      <div className="mt-20">
                        <a className="btn btn-cart" href="shop-cart.html">
                          Add To Cart
                        </a>
                      </div>
                      <ul className="list-features">
                        <li> 27-inch (diagonal) Retina 5K display</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-products-5">
          <div className="card-grid-style-3">
            <div className="card-grid-inner">
              <div className="tools">
                <a
                  className="btn btn-trend btn-tooltip mb-10"
                  href="#"
                  aria-label="Trend"
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
                    width={800}
                    height={689}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">Apple</span>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  Klipsch ProMedia 2.1 Bluetooth Computer Speakers
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    className="inline"
                    width={12}
                    height={12}
                  />

                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
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
                <div className="mt-20">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li> 27-inch (diagonal) Retina 5K display</li>
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
                    width={800}
                    height={689}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">Apple</span>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  Apple TV HD 32GB (2nd Generation) (Latest Model)
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
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
                <div className="mt-20">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li> 27-inch (diagonal) Retina 5K display</li>
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
                    width={800}
                    height={689}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">Apple</span>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  Hisense 40&quot; Class 2K FHD LED LCD Roku Smart TV H4030F
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
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
                <div className="mt-20">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li> 27-inch (diagonal) Retina 5K display</li>
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
                    width={800}
                    height={689}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">Apple</span>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  2022 Apple 10.9-inch iPad Air Wi-Fi 64GB - Space Gray
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
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
                <div className="mt-20">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li> 27-inch (diagonal) Retina 5K display</li>
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
                    width={800}
                    height={689}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">Apple</span>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  LeapFrog LeapPad Academy Kids Tablet with LeapFrog
                </a>
                <div className="rating">
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
                    height={12}
                  />
                  <Image
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    width={12}
                    className="inline"
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
                <div className="mt-20">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li> 27-inch (diagonal) Retina 5K display</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;

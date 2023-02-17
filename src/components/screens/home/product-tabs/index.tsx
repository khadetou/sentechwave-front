import { useWishlist } from "context/wishlistContext";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { getProductById } from "redux/products/productSlice";
import NextArrow from "./nav-buttons/next-arrow";
import PrevArrow from "./nav-buttons/prev-arrow";

const ProductTabs = () => {
  const { products } = useAppSelector((store) => store.product);
  const dispatch = useAppDispatch();
  const { addItem } = useCart();
  const { addItem: addWishlist } = useWishlist();

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const refdes = useRef<any>(null);

  useEffect(() => {
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    refdes.current?.appendChild(prev);
    refdes.current?.appendChild(next);
  }, [refdes]);
  return (
    <section className="section-box mt-50">
      <div className="containers">
        <div className="row">
          <div className="col-lg-8">
            <div className="head-main">
              <h3 className="mb-5 text-[31px] font-bold">
                Top Selling Products
              </h3>
              <p className="font-base color-gray-500">
                Special products in this month.
              </p>
              <div ref={refdes} className="box-button-slider"></div>
            </div>
            <div className="box-swiper">
              <Slider {...settings} className="swiper-container swiper-group-1">
                <div className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp1.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">Apple</span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            2022 Apple iMac with Retina 5K Display 8GB RAM,
                            256GB SSD
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp2.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">
                            Philips
                          </span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            Philips H4205 On-Ear Wireless Headphones with 32mm
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp3.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">Apple</span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp4.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">Apple</span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            Apple Watch Series 8 [GPS 45mm] Smart Watch
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp5.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">
                            Kami Tech
                          </span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            Kami by YI 4pc 1080p Home Security Cameras
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp6.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">Apple</span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            2022 Apple iMac with Retina 5K Display 8GB RAM,
                            256GB SSD
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp2.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">Apple</span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            2022 Apple iMac with Retina 5K Display 8GB RAM,
                            256GB SSD
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp1.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">
                            Philips
                          </span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            Philips H4205 On-Ear Wireless Headphones with 32mm
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp7.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">Apple</span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp5.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">Apple</span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            Apple Watch Series 8 [GPS 45mm] Smart Watch
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp6.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">
                            Kami Tech
                          </span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            Kami by YI 4pc 1080p Home Security Cameras
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card-grid-style-2">
                        <div className="image-box">
                          <a href="shop-single-product-2.html">
                            <Image
                              src="/imgs/page/homepage1/imgsp3.png"
                              alt="Ecom"
                              width={648}
                              height={438}
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <span className="font-xs color-gray-500">Apple</span>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product-2.html"
                          >
                            2022 Apple iMac with Retina 5K Display 8GB RAM,
                            256GB SSD
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
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2556.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="banner-right text-center">
              <span className="text-no">No.9</span>
              <h5 className="text-main mt-20">
                Sensitive Touch
                <br className="d-none d-lg-block" />
                without fingerprint
              </h5>
              <p className="text-desc mt-15">
                Smooth handle and accurate click
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;

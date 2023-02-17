import Image from "next/image";
import { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import NextArrow from "./nav-buttons/next-arrow";
import PrevArrow from "./nav-buttons/prev-arrow";
const Bestseller = () => {
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

  const refleft = useRef<any>(null);

  useEffect(() => {
    const prev = document.getElementById("prevel");
    const next = document.getElementById("nextel");

    refleft.current?.appendChild(prev);
    refleft.current?.appendChild(next);
  }, [refleft]);

  return (
    <div className="box-slider-item mb-30">
      <div className="head pb-15 border-brand-2">
        <h5 className="color-gray-900 text-[20px] font-bold">Best seller</h5>
      </div>
      <div className="content-slider">
        <div className="box-swiper slide-shop">
          <Slider {...settings} className="swiper-container swiper-best-seller">
            <div className="swiper-slide">
              <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                <div className="image-box">
                  <span className="label bg-brand-2">-17%</span>
                  <a href="shop-single-product-3.html">
                    <Image
                      src="/imgs/page/homepage2/camera.png"
                      alt="Ecom"
                      width={648}
                      height={468}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-xs-bold"
                    href="shop-single-product-3.html"
                  >
                    HP Slim Desktop, Intel Celeron J4025, 4GB RAM
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
                    <strong className="font-md-bold color-brand-3 price-main">
                      $150
                    </strong>
                    <span className="color-gray-500 font-sm price-line">
                      $187
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                <div className="image-box">
                  <a href="shop-single-product-3.html">
                    <Image
                      src="/imgs/page/homepage2/clock.png"
                      alt="Ecom"
                      width={648}
                      height={468}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-xs-bold"
                    href="shop-single-product-3.html"
                  >
                    Class 4K UHD (2160P) LED Roku Smart TV HDR
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
                    <strong className="font-md-bold color-brand-3 price-main">
                      $2900
                    </strong>
                    <span className="color-gray-500 font-sm price-line">
                      $3200
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                <div className="image-box">
                  <a href="shop-single-product-3.html">
                    <Image
                      src="/imgs/page/homepage2/airpod.png"
                      alt="Ecom"
                      width={648}
                      height={468}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-xs-bold"
                    href="shop-single-product-3.html"
                  >
                    HP 11.6&quot; Chromebook, AMD A4, 4GB RAM, 32GB Storage
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
                    <strong className="font-md-bold color-brand-3 price-main">
                      $160
                    </strong>
                    <span className="color-gray-500 font-sm price-line">
                      $168
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                <div className="image-box">
                  <a href="shop-single-product-3.html">
                    <Image
                      src="/imgs/page/homepage2/cat-img-7.png"
                      alt="Ecom"
                      width={648}
                      height={468}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-xs-bold"
                    href="shop-single-product-3.html"
                  >
                    LG 65&quot; Class 4K UHD Smart TV OLED A1 Series
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
                    <strong className="font-md-bold color-brand-3 price-main">
                      $325
                    </strong>
                    <span className="color-gray-500 font-sm price-line">
                      $392
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                <div className="image-box">
                  <a href="shop-single-product-3.html">
                    <Image
                      src="/imgs/page/homepage2/cat-img-8.png"
                      alt="Ecom"
                      width={648}
                      height={468}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-xs-bold"
                    href="shop-single-product-3.html"
                  >
                    Lenovo Legion 5i 15.6&quot; Laptop, Intel Core i5
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
                    <strong className="font-md-bold color-brand-3 price-main">
                      $150
                    </strong>
                    <span className="color-gray-500 font-sm price-line">
                      $187
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                <div className="image-box">
                  <span className="label bg-brand-2">-17%</span>
                  <a href="shop-single-product-3.html">
                    <Image
                      src="/imgs/page/homepage2/cat-img-1.png"
                      alt="Ecom"
                      width={648}
                      height={468}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-xs-bold"
                    href="shop-single-product-3.html"
                  >
                    SAMSUNG Galaxy Tab A7 Lite, 8.7&quot; Tablet 32GB
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
                    <strong className="font-md-bold color-brand-3 price-main">
                      $2900
                    </strong>
                    <span className="color-gray-500 font-sm price-line">
                      $3200
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                <div className="image-box">
                  <a href="shop-single-product-3.html">
                    <Image
                      src="/imgs/page/homepage2/cat-img-2.png"
                      alt="Ecom"
                      width={648}
                      height={468}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-xs-bold"
                    href="shop-single-product-3.html"
                  >
                    Apple AirPods Pro with MagSafe Charging
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
                    <strong className="font-md-bold color-brand-3 price-main">
                      $160
                    </strong>
                    <span className="color-gray-500 font-sm price-line">
                      $168
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                <div className="image-box">
                  <a href="shop-single-product-3.html">
                    <Image
                      src="/imgs/page/homepage2/cat-img-3.png"
                      alt="Ecom"
                      width={648}
                      height={468}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-xs-bold"
                    href="shop-single-product-3.html"
                  >
                    Razer Power Up Gaming Bundle V2 - Cynosa
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
                    <strong className="font-md-bold color-brand-3 price-main">
                      $325
                    </strong>
                    <span className="color-gray-500 font-sm price-line">
                      $392
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div ref={refleft}></div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;

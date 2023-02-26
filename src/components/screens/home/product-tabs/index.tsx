import { useWishlist } from "context/wishlistContext";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";

import { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";

import { useCart } from "react-use-cart";

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
                Produits les plus vendus
              </h3>
              <p className="font-base color-gray-500">
                Produits spéciaux ce mois-ci.
              </p>
              <div ref={refdes} className="box-button-slider"></div>
            </div>
            <div className="box-swiper">
              <Slider {...settings} className="swiper-container swiper-group-1">
                <div className="swiper-slide">
                  <div className="row">
                    {products.slice(0, 5).map((product: any) => (
                      <div
                        key={product._id}
                        className="col-lg-6 col-md-6 col-sm-12"
                      >
                        <div className="card-grid-style-2">
                          <div className="image-box">
                            <a href="shop-single-product-2.html">
                              <Image
                                src={product.images[0].url}
                                alt="Ecom"
                                width={product.images[0].width}
                                height={product.images[0].height}
                              />
                            </a>
                          </div>
                          <div className="info-right">
                            <span className="font-xs color-gray-500">
                              {product.brand}
                            </span>
                            <br />
                            <a
                              className="color-brand-3 font-sm-bold"
                              href="shop-single-product-2.html"
                            >
                              {product.name}
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
                              <span className="font-xs color-gray-500">
                                (65)
                              </span>
                            </div>
                            <div className="price-info">
                              <strong className="font-lg-bold color-brand-3 price-main">
                                {Number(product.price).toLocaleString("fr-FR", {
                                  style: "currency",
                                  currency: "XOF",
                                })}
                              </strong>
                              <span className="color-gray-500 price-line">
                                {Number(product.oldPrice).toLocaleString(
                                  "fr-FR",
                                  {
                                    style: "currency",
                                    currency: "XOF",
                                  }
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="row">
                    {products.slice(0, 5).map((product: any) => (
                      <div
                        key={product._id}
                        className="col-lg-6 col-md-6 col-sm-12"
                      >
                        <div className="card-grid-style-2">
                          <div className="image-box">
                            <a href="shop-single-product-2.html">
                              <Image
                                src={product.images[0].url}
                                alt="Ecom"
                                width={product.images[0].width}
                                height={product.images[0].height}
                              />
                            </a>
                          </div>
                          <div className="info-right">
                            <span className="font-xs color-gray-500">
                              {product.brand}
                            </span>
                            <br />
                            <a
                              className="color-brand-3 font-sm-bold"
                              href="shop-single-product-2.html"
                            >
                              {product.name}
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
                              <span className="font-xs color-gray-500">
                                (65)
                              </span>
                            </div>
                            <div className="price-info">
                              <strong className="font-lg-bold color-brand-3 price-main">
                                {Number(product.price).toLocaleString("fr-FR", {
                                  style: "currency",
                                  currency: "XOF",
                                })}
                              </strong>
                              <span className="color-gray-500 price-line">
                                {Number(product.oldPrice).toLocaleString(
                                  "fr-FR",
                                  {
                                    style: "currency",
                                    currency: "XOF",
                                  }
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="banner-right text-center">
              <span className="text-no">No.9</span>
              <h5 className="text-main mt-20">
                Touches sensibles
                <br className="d-none d-lg-block" />
                Sans empreinte digitale
              </h5>
              <p className="text-desc mt-15">
                Prise en main lisse et clic précis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;

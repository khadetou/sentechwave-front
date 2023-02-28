import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
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
  const { products } = useAppSelector((store) => store.product);

  useEffect(() => {
    const prev = document.getElementById("prevel");
    const next = document.getElementById("nextel");

    refleft.current?.appendChild(prev);
    refleft.current?.appendChild(next);
  }, [refleft]);

  return (
    <div className="box-slider-item mb-30">
      <div className="head pb-15 border-brand-2">
        <h5 className="color-gray-900 text-[20px] font-bold">
          Meilleure vente
        </h5>
      </div>
      <div className="content-slider">
        <div className="box-swiper slide-shop">
          <Slider {...settings} className="swiper-container swiper-best-seller">
            <div className="swiper-slide">
              {products.slice(0, 4).map((product: any) => (
                <div
                  key={product._id}
                  className="card-grid-style-2 card-grid-none-border border-bottom mb-10"
                >
                  <div className="image-box max-h-[100px]">
                    <span className="label bg-brand-2">-17%</span>
                    <Link href={`/products/${product._id}`}>
                      <Image
                        src={product.images[0].url}
                        alt="Ecom"
                        width={648}
                        height={468}
                      />
                    </Link>
                  </div>
                  <div className="info-right">
                    <Link
                      className="color-brand-3 truncate max-w-[224px] block font-xs-bold"
                      href={`/products/${product._id}`}
                    >
                      {product.name}
                    </Link>
                    <div className="rating">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{
                            width: `${(100 * product.rating) / 5}%`,
                          }}
                        ></div>
                      </div>
                      <span className="font-xs color-gray-500">
                        ({product.numbReviews})
                      </span>
                    </div>
                    <div className="price-info">
                      <strong className="font-md-bold color-brand-3 price-main">
                        {Number(product.price).toLocaleString("fr-FR", {
                          style: "currency",
                          currency: "XOF",
                        })}
                      </strong>
                      <br />
                      <span className="color-gray-500 font-sm price-line">
                        {Number(product.oldPrice).toLocaleString("fr-FR", {
                          style: "currency",
                          currency: "XOF",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-slide">
              {products.slice(0, 4).map((product: any) => (
                <div
                  key={product._id}
                  className="card-grid-style-2 card-grid-none-border border-bottom mb-10"
                >
                  <div className="image-box max-h-[100px]">
                    <span className="label bg-brand-2">-17%</span>
                    <Link href={`/products/${product._id}`}>
                      <Image
                        src={product.images[0].url}
                        alt="Ecom"
                        width={648}
                        height={468}
                      />
                    </Link>
                  </div>
                  <div className="info-right">
                    <Link
                      className="color-brand-3 truncate max-w-[224px] block font-xs-bold"
                      href={`/products/${product._id}`}
                    >
                      {product.name}
                    </Link>
                    <div className="rating">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{
                            width: `${(100 * product.rating) / 5}%`,
                          }}
                        ></div>
                      </div>
                      <span className="font-xs color-gray-500">
                        ({product.numbReviews})
                      </span>
                    </div>
                    <div className="price-info">
                      <strong className="font-md-bold color-brand-3 price-main">
                        {Number(product.price).toLocaleString("fr-FR", {
                          style: "currency",
                          currency: "XOF",
                        })}
                      </strong>
                      <br />
                      <span className="color-gray-500 font-sm price-line">
                        {Number(product.oldPrice).toLocaleString("fr-FR", {
                          style: "currency",
                          currency: "XOF",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Slider>
          <div ref={refleft}></div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;

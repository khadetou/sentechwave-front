import { useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import NextArrow from "../arrows/next-arrow";
import PrevArrow from "../arrows/prev-arrow";

const FeaturedCat = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const refdes = useRef<any>(null);

  // useEffect(() => {
  //   const prev = document.getElementById("prev");
  //   const next = document.getElementById("next");

  //   refdes.current?.appendChild(prev);
  //   refdes.current!.appendChild(next);
  // }, [refdes]);

  const { categories } = useAppSelector((store) => store.product);

  const featuredCats = categories.filter((category: any) => {
    return (
      category.name === "Ordinateurs et accessoires" ||
      category.name === "Télévisions" ||
      category.name === "Ordinateurs et accessoires" ||
      category.name === "Téléphones portables" ||
      category.name === "Montres intelligentes" ||
      category.name === "Gadgets de jeux vidéo" ||
      category.name === "PC de bureau" ||
      category.name === "Ordinateur portables et tablettes"
    );
  });

  const images = [
    "/imgs/page/homepage1/smartphone.png",
    "/imgs/page/homepage1/computer.png",
    "/imgs/page/homepage1/television.png",
    "/imgs/page/homepage1/computer.png",
    "/imgs/page/homepage1/electric.png",
    "/imgs/page/homepage1/laptop.png",
    "/imgs/page/homepage1/smartwatches.png",
    "/imgs/page/homepage1/gaming.png",
    "/imgs/page/homepage1/outdoor.png",
  ];

  const featuredCategories = featuredCats.map((category: any, idx: any) => {
    return {
      ...category,
      image: images[idx],
    };
  });

  return (
    <section className="section-box">
      <div className="containers">
        <div className="row">
          <div className="col-lg-5">
            <h3 className="text-[32px] font-bold leading-[41px]">
              Catégories en vedette.
            </h3>
            <p className="font-base">
              Choisissez vos produits parmi ces catégories en vedette.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="list-brands">
              <div className="box-swiper">
                <Slider
                  {...settings}
                  className="swiper-container swiper-group-7"
                >
                  <div className="swiper-slide">
                    <a href="shop-grid.html">
                      <Image
                        src="/imgs/slider/logo/acer.svg"
                        alt="Ecom"
                        width={88}
                        height={20}
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="shop-grid.html">
                      <Image
                        src="/imgs/slider/logo/nokia.svg"
                        alt="Ecom"
                        width={88}
                        height={20}
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="shop-grid.html">
                      <Image
                        src="/imgs/slider/logo/assus.svg"
                        alt="Ecom"
                        width={88}
                        height={20}
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="shop-grid.html">
                      <Image
                        src="/imgs/slider/logo/casio.svg"
                        alt="Ecom"
                        width={88}
                        height={20}
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="shop-grid.html">
                      <Image
                        src="/imgs/slider/logo/dell.svg"
                        alt="Ecom"
                        width={88}
                        height={20}
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="shop-grid.html">
                      <Image
                        src="/imgs/slider/logo/panasonic.svg"
                        alt="Ecom"
                        width={88}
                        height={20}
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="shop-grid.html">
                      <Image
                        src="/imgs/slider/logo/vaio.svg"
                        alt="Ecom"
                        width={88}
                        height={20}
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-50">
          <div className="row">
            {featuredCategories.map((category: any) => (
              <div
                key={category._id}
                className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
              >
                <div className="card-grid-style-2 card-grid-style-2-small hover-up">
                  <div className="image-box">
                    <Link href={`/products?category=${category._id}`}>
                      <Image
                        src={category.image}
                        alt="Ecom"
                        width={363}
                        height={363}
                      />
                    </Link>
                  </div>
                  <div className="info-right">
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-grid.html"
                    >
                      <h6 className="truncate max-w-[183px]">
                        {category.name}
                      </h6>
                    </a>
                    <ul className="list-links-disc !max-h-[155px] scrollbar">
                      {category.subcategories.slice(0, 4).map((subcat: any) => (
                        <li key={subcat._id}>
                          <Link
                            className="font-sm truncate max-w-[183.4px]"
                            href={`/products?souscategory=${subcat._id}`}
                          >
                            {subcat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      className="btn btn-gray-abs"
                      href={`/products?category=${category._id}`}
                    >
                      Afficher tout
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCat;

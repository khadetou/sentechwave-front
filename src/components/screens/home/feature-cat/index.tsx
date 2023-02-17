import Image from "next/image";
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

  return (
    <section className="section-box">
      <div className="containers">
        <div className="row">
          <div className="col-lg-5">
            <h3 className="text-[32px] font-bold leading-[41px]">
              Featured Categories
            </h3>
            <p className="font-base">
              Choose your necessary products from this feature categories.
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
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card-grid-style-2 card-grid-style-2-small hover-up">
                <div className="image-box">
                  <a href="shop-grid.html">
                    <Image
                      src="/imgs/page/homepage1/smartphone.png"
                      alt="Ecom"
                      width={363}
                      height={363}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-sm-bold"
                    href="shop-grid.html"
                  >
                    <h6>Smart Phone</h6>
                  </a>
                  <ul className="list-links-disc">
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Phone Accessories
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Phone Cases
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Postpaid Phones
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Refurbished Phones
                      </a>
                    </li>
                  </ul>
                  <a className="btn btn-gray-abs" href="shop-grid.html">
                    View all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card-grid-style-2 card-grid-style-2-small hover-up">
                <div className="image-box">
                  <a href="shop-grid.html">
                    <Image
                      src="/imgs/page/homepage1/television.png"
                      alt="Ecom"
                      width={363}
                      height={363}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-sm-bold"
                    href="shop-grid.html"
                  >
                    <h6>Television</h6>
                  </a>
                  <ul className="list-links-disc">
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        HD DVD Players
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Projection Screens
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Television Accessories
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        TV-DVD Combos
                      </a>
                    </li>
                  </ul>
                  <a className="btn btn-gray-abs" href="shop-grid.html">
                    View all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card-grid-style-2 card-grid-style-2-small hover-up">
                <div className="image-box">
                  <a href="shop-grid.html">
                    <Image
                      src="/imgs/page/homepage1/computer.png"
                      alt="Ecom"
                      width={363}
                      height={363}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-sm-bold"
                    href="shop-grid.html"
                  >
                    <h6>Computers</h6>
                  </a>
                  <ul className="list-links-disc">
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Computer Components
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Computer Accessories
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Desktops
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Monitors
                      </a>
                    </li>
                  </ul>
                  <a className="btn btn-gray-abs" href="shop-grid.html">
                    View all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card-grid-style-2 card-grid-style-2-small hover-up">
                <div className="image-box">
                  <a href="shop-grid.html">
                    <Image
                      src="/imgs/page/homepage1/electric.png"
                      alt="Ecom"
                      width={363}
                      height={363}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-sm-bold"
                    href="shop-grid.html"
                  >
                    <h6>Electronics</h6>
                  </a>
                  <ul className="list-links-disc">
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Office Electronics
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Portable Audio &amp; Video
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Washing Machine
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Accessories &amp; Supplies
                      </a>
                    </li>
                  </ul>
                  <a className="btn btn-gray-abs" href="shop-grid.html">
                    View all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card-grid-style-2 card-grid-style-2-small hover-up">
                <div className="image-box">
                  <a href="shop-grid.html">
                    <Image
                      src="/imgs/page/homepage1/laptop.png"
                      alt="Ecom"
                      width={363}
                      height={363}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-sm-bold"
                    href="shop-grid.html"
                  >
                    <h6>Laptop &amp; Tablet</h6>
                  </a>
                  <ul className="list-links-disc">
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Office laptop
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Gaming laptop
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Laptop accessories
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Tablet
                      </a>
                    </li>
                  </ul>
                  <a className="btn btn-gray-abs" href="shop-grid.html">
                    View all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card-grid-style-2 card-grid-style-2-small hover-up">
                <div className="image-box">
                  <a href="shop-grid.html">
                    <Image
                      src="/imgs/page/homepage1/smartwatches.png"
                      alt="Ecom"
                      width={363}
                      height={363}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-sm-bold"
                    href="shop-grid.html"
                  >
                    <h6>Smartwatches</h6>
                  </a>
                  <ul className="list-links-disc">
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Sport Watches
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Chronograph Watches
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Kids Watches
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Luxury Watches
                      </a>
                    </li>
                  </ul>
                  <a className="btn btn-gray-abs" href="shop-grid.html">
                    View all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card-grid-style-2 card-grid-style-2-small hover-up">
                <div className="image-box">
                  <a href="shop-grid.html">
                    <Image
                      src="/imgs/page/homepage1/gaming.png"
                      alt="Ecom"
                      width={363}
                      height={363}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-sm-bold"
                    href="shop-grid.html"
                  >
                    <h6>Gaming</h6>
                  </a>
                  <ul className="list-links-disc">
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Game Controllers
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Gaming Keyboards
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        PC Gaming Mice
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        PC Game Headsets
                      </a>
                    </li>
                  </ul>
                  <a className="btn btn-gray-abs" href="shop-grid.html">
                    View all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card-grid-style-2 card-grid-style-2-small hover-up">
                <div className="image-box">
                  <a href="shop-grid.html">
                    <Image
                      src="/imgs/page/homepage1/outdoor.png"
                      alt="Ecom"
                      width={363}
                      height={363}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="color-brand-3 font-sm-bold"
                    href="shop-grid.html"
                  >
                    <h6>Outdoor Camera</h6>
                  </a>
                  <ul className="list-links-disc">
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Security &amp; Surveillance
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Surveillance DVR Kits
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Surveillance NVR Kits
                      </a>
                    </li>
                    <li>
                      <a className="font-sm" href="shop-grid.html">
                        Smart Outdoor Lighting
                      </a>
                    </li>
                  </ul>
                  <a className="btn btn-gray-abs" href="shop-grid.html">
                    View all
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCat;

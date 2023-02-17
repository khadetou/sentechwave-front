import Image from "next/image";
import { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import NextArrow from "./nav-buttons/next-arrow";
import PrevArrow from "./nav-buttons/prev-arrow";
const Trending = () => {
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
    console.log(prev);
    refleft.current?.appendChild(prev);
    refleft.current?.appendChild(next);
  }, [refleft]);

  return (
    <div className="box-slider-item mb-30">
      <div className="head pb-15 border-brand-2">
        <h5 className="color-gray-900 text-xl font-bold">Trending News</h5>
      </div>

      <div className="box-swiper slide-shop">
        <div className="swiper-container swiper-best-seller">
          <Slider {...settings} className="swiper-wrapper pt-5">
            <div className="swiper-slide">
              <div className="card-grid-style-2 card-none-border mb-30 pb-5 mh-auto">
                <div className="image-box mw-84">
                  <a href="blog-single.html">
                    <Image
                      width={84}
                      height={63}
                      src="/imgs/page/blog/blog-1.jpg"
                      alt="Ecom"
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a className="color-brand-3 font-sm" href="blog-single.html">
                    The latest technologies to be used for VR in 2022
                  </a>
                  <div className="row mt-5">
                    <div className="col-12">
                      <span className="color-gray-500 font-xs mr-20">
                        August 30, 2022
                      </span>
                      <span className="color-gray-500 font-xs">
                        3
                        <span className="color-gray-500 font-xs">
                          Mins read
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-none-border mb-30 pb-5 mh-auto">
                <div className="image-box mw-84">
                  <a href="blog-single.html">
                    <Image
                      width={84}
                      height={63}
                      src="/imgs/page/blog/blog-2.jpg"
                      alt="Ecom"
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a className="color-brand-3 font-sm" href="blog-single.html">
                    The fate of Elon Musks deal to buy Twitter
                  </a>
                  <div className="row mt-5">
                    <div className="col-12">
                      <span className="color-gray-500 font-xs mr-20">
                        August 30, 2022
                      </span>
                      <span className="color-gray-500 font-xs">
                        4
                        <span className="color-gray-500 font-xs">
                          Mins read
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-none-border mb-30 pb-5 mh-auto">
                <div className="image-box mw-84">
                  <a href="blog-single.html">
                    <Image
                      width={84}
                      height={63}
                      src="/imgs/page/blog/blog-3.jpg"
                      alt="Ecom"
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a className="color-brand-3 font-sm" href="blog-single.html">
                    Binance blockchain hit by $570 million crypto
                  </a>
                  <div className="row mt-5">
                    <div className="col-12">
                      <span className="color-gray-500 font-xs mr-20">
                        August 30, 2022
                      </span>
                      <span className="color-gray-500 font-xs">
                        5
                        <span className="color-gray-500 font-xs">
                          Mins read
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-none-border mb-30 pb-5 mh-auto">
                <div className="image-box mw-84">
                  <a href="blog-single.html">
                    <Image
                      width={84}
                      height={63}
                      src="/imgs/page/blog/blog-4.jpg"
                      alt="Ecom"
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a className="color-brand-3 font-sm" href="blog-single.html">
                    The Twitter-Musk trial is now on pause
                  </a>
                  <div className="row mt-5">
                    <div className="col-12">
                      <span className="color-gray-500 font-xs mr-20">
                        August 30, 2022
                      </span>
                      <span className="color-gray-500 font-xs">
                        6
                        <span className="color-gray-500 font-xs">
                          Mins read
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card-grid-style-2 card-none-border mb-30 pb-5 mh-auto">
                <div className="image-box mw-84">
                  <a href="blog-single.html">
                    <Image
                      width={84}
                      height={63}
                      src="/imgs/page/blog/blog-5.jpg"
                      alt="Ecom"
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a className="color-brand-3 font-sm" href="blog-single.html">
                    Apple unveils iPhone 14 at far out event
                  </a>
                  <div className="row mt-5">
                    <div className="col-12">
                      <span className="color-gray-500 font-xs mr-20">
                        August 30, 2022
                      </span>
                      <span className="color-gray-500 font-xs">
                        3
                        <span className="color-gray-500 font-xs">
                          Mins read
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-none-border mb-30 pb-5 mh-auto">
                <div className="image-box mw-84">
                  <a href="blog-single.html">
                    <Image
                      width={84}
                      height={63}
                      src="/imgs/page/blog/blog-6.jpg"
                      alt="Ecom"
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a className="color-brand-3 font-sm" href="blog-single.html">
                    Walmart enters the metaverse with Roblox
                  </a>
                  <div className="row mt-5">
                    <div className="col-12">
                      <span className="color-gray-500 font-xs mr-20">
                        August 30, 2022
                      </span>
                      <span className="color-gray-500 font-xs">
                        4
                        <span className="color-gray-500 font-xs">
                          Mins read
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-none-border mb-30 pb-5 mh-auto">
                <div className="image-box mw-84">
                  <a href="blog-single.html">
                    <Image
                      width={84}
                      height={63}
                      src="/imgs/page/blog/blog-7.jpg"
                      alt="Ecom"
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a className="color-brand-3 font-sm" href="blog-single.html">
                    Take no prisoners: In the Feds inflation fight
                  </a>
                  <div className="row mt-5">
                    <div className="col-12">
                      <span className="color-gray-500 font-xs mr-20">
                        August 30, 2022
                      </span>
                      <span className="color-gray-500 font-xs">
                        5
                        <span className="color-gray-500 font-xs">
                          Mins read
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-2 card-none-border mb-30 pb-5 mh-auto">
                <div className="image-box mw-84">
                  <a href="blog-single.html">
                    <Image
                      width={84}
                      height={63}
                      src="/imgs/page/blog/blog-8.jpg"
                      alt="Ecom"
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a className="color-brand-3 font-sm" href="blog-single.html">
                    Who is who: Meet the Murdoch Family
                  </a>
                  <div className="row mt-5">
                    <div className="col-12">
                      <span className="color-gray-500 font-xs mr-20">
                        August 30, 2022
                      </span>
                      <span className="color-gray-500 font-xs">
                        6
                        <span className="color-gray-500 font-xs">
                          Mins read
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div ref={refleft}></div>
      </div>
    </div>
  );
};

export default Trending;

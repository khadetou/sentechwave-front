import Image from "next/image";
import { useRef, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import NextArrow from "./nav-buttons/next-arrow";
import PrevArrow from "./nav-buttons/prev-arrow";
const LatestNews = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: false,
    slidesToShow: 4,
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const ref = useRef<any>(null);

  useEffect(() => {
    const prev = document.getElementById("prevn");
    const next = document.getElementById("nextn");

    ref.current?.appendChild(prev);
    ref.current!.appendChild(next);
  }, [ref]);
  return (
    <section className="section-box mt-50">
      <div className="containers">
        <div className="head-main">
          <h3 className="mb-5 font-bold text-[31px]">
            Dernières actualités et événements
          </h3>
          <p className="font-base color-gray-500">De notre blog, forum</p>
          <div ref={ref} className="box-button-slider el"></div>
        </div>
      </div>
      <div className="containers mt-10">
        <div className="box-swiper">
          <Slider {...settings} className="swiper-container swiper-group-4">
            <div className="swiper-slide">
              <div className="card-grid-style-1 pr-[20px]">
                <div className="image-box">
                  <a href="blog-single-2.html"></a>
                  <Image
                    src="/imgs/page/blog/blog-1.jpg"
                    alt="Ecom"
                    width={1000}
                    height={750}
                  />
                </div>
                <a className="tag-dot font-xs" href="blog-list.html">
                  Technologie
                </a>
                <a className="color-gray-1100" href="blog-single-2.html">
                  <h4>
                    Les dernières technologies à utiliser pour la réalité
                    virtuelle en 2022
                  </h4>
                </a>
                <div className="mt-20">
                  <span className="color-gray-500 font-xs mr-30">
                    2 septembre 2022
                  </span>
                  <span className="color-gray-500 font-xs">
                    4<span> min de lecture</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card-grid-style-1 pr-[20px]">
                <div className="image-box">
                  <a href="blog-single.html"></a>
                  <Image
                    src="/imgs/page/blog/blog-2.jpg"
                    alt="Ecom"
                    width={1000}
                    height={750}
                  />
                </div>
                <a className="tag-dot font-xs" href="blog-list.html">
                  Technologie
                </a>
                <a className="color-gray-1100" href="blog-single.html">
                  <h4>
                    Comment Web 3.0 peut apporter des changements dans les jeux
                    vidéo ?
                  </h4>
                </a>
                <div className="mt-20">
                  <span className="color-gray-500 font-xs mr-30">
                    30 août 2022
                  </span>
                  <span className="color-gray-500 font-xs">
                    5<span> min de lecture</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card-grid-style-1 pr-[20px]">
                <div className="image-box">
                  <a href="blog-single-3.html"></a>
                  <Image
                    src="/imgs/page/blog/blog-3.jpg"
                    alt="Ecom"
                    width={1000}
                    height={750}
                  />
                </div>
                <a className="tag-dot font-xs" href="blog-list.html">
                  Jeux vidéo
                </a>
                <a className="color-gray-1100" href="blog-single-3.html">
                  <h4>Jeux NFT Blockchain qui pourraient décoller</h4>
                </a>
                <div className="mt-20">
                  <span className="color-gray-500 font-xs mr-30">
                    25 août 2022
                  </span>
                  <span className="color-gray-500 font-xs">
                    3<span> min de lecture</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card-grid-style-1 pr-[20px]">
                <div className="image-box">
                  <a href="blog-single-2.html"></a>
                  <Image
                    src="/imgs/page/blog/blog-4.jpg"
                    alt="Ecom"
                    width={1000}
                    height={750}
                  />
                </div>
                <a className="tag-dot font-xs" href="blog-list.html">
                  Blockchain
                </a>
                <a className="color-gray-1100" href="blog-single-2.html">
                  <h4>Jeux blockchain et ses trois défis</h4>
                </a>
                <div className="mt-20">
                  <span className="color-gray-500 font-xs mr-30">
                    15 août 2022
                  </span>
                  <span className="color-gray-500 font-xs">
                    7<span> min de lecture</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card-grid-style-1 pr-[20px]">
                <div className="image-box">
                  <a href="blog-single-2.html"></a>
                  <Image
                    src="/imgs/page/blog/blog-5.jpg"
                    alt="Ecom"
                    width={1000}
                    height={750}
                  />
                </div>
                <a className="tag-dot font-xs" href="blog-list.html">
                  Développement
                </a>
                <a className="color-gray-1100" href="blog-single-2.html">
                  <h4>
                    HTML5 - L&rsquo;avenir du développement d&rsquo;applications
                    mobiles
                  </h4>
                </a>
                <div className="mt-20">
                  <span className="color-gray-500 font-xs mr-30">
                    12 août 2022
                  </span>
                  <span className="color-gray-500 font-xs">
                    9<span> min de lecture</span>
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

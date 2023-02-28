import Link from "next/link";
import { CSSProperties, FC } from "react";
import Slider, { Settings } from "react-slick";
import LeftArrow from "./arrows/left-arrow";
import RightArrow from "./arrows/right-arrow";
import { link } from "fs";

interface NextArrowProps {
  className?: string | undefined;
  style?: CSSProperties | undefined;
  onClick?: () => void;
}
const NextArrow: FC<NextArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "16px" }}
      onClick={onClick}
    />
  );
};

interface PrevArrowProps {
  className?: string | undefined;
  style?: CSSProperties | undefined;
  onClick?: () => void;
}
const PrevArrow: FC<PrevArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "16px", zIndex: "10" }}
      onClick={onClick}
    />
  );
};

const Hero = () => {
  const settings: Settings = {
    infinite: true,
    dots: true,
    fade: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
  };

  const sliders = [
    {
      img: "/imgs/page/homepage1/banner.png",
      ftitle: "EN VOGUE ACTUELLEMENT.",
      stitle: "-50% en vente !",
      ttitle: "Appareils mobiles",
      bg: "bg-11",
      description:
        "-50% sur appareils mobiles ! Téléphones, tablettes,ordinateurs, écouteurs, montres connectées et accessoires mobiles de qualité à prix compétitifs. Promo exceptionnelle pour les dernières technologies. Fin de la promo proche, agissez vite !",
      link1: {
        name: "Commandez !",
        link: "/products",
      },
      link2: {
        name: "Commandez !",
        link: "/about",
      },
    },
    {
      img: "/imgs/page/homepage1/banner-hero-2.png",
      ftitle: "TENDANCES ACTUELLES",
      stitle: "Grande Vente 25%",
      ttitle: "PC et ordi portables",
      bg: "bg-11",
      description:
        "Profitez de notre promotion actuelle de 25% sur les ordinateurs portables et les PC de qualité. C&apos;est l&apos;occasion idéale pour obtenir la technologie dont vous avez besoin à un prix compétitif. Ne manquez pas cette offre exceptionnelle !",
      link1: {
        name: "Commandez !",
        link: "/products",
      },
      link2: {
        name: "Commandez !",
        link: "/about",
      },
    },
    {
      img: "/imgs/page/homepage1/banner-hero-3.png",
      ftitle: "MEILLEURE VENTE",
      stitle: "Collection tendance",
      ttitle: "Lunettes virtuelles",
      bg: "bg-11-3",
      description:
        "Découvrez notre incroyable sélection de lunettes virtuelles à la pointe de la technologie ! La meilleure vente de ce mois-ci vous propose une collection tendance de lunettes virtuelles pour tous les goûts et tous les besoins.",
      link1: {
        name: "Commandez !",
        link: "/products",
      },
      link2: {
        name: "Commandez !",
        link: "/about",
      },
    },
  ];

  return (
    <section className="section-box banner">
      <div className="banner-hero banner-1">
        <div className="containers">
          <div className="row">
            <div className="col-lg-8">
              <div className="box-swiper">
                <Slider
                  {...settings}
                  className="swiper-container swiper-group-1"
                >
                  {sliders.map(
                    (
                      {
                        img,
                        ftitle,
                        stitle,
                        ttitle,
                        description,
                        link1,
                        link2,
                        bg,
                      },
                      idx: any
                    ) => (
                      <div key={idx} className="swiper-slide">
                        <div
                          className={`banner-big ${bg}`}
                          style={{
                            backgroundImage: `url(${img})`,
                          }}
                        >
                          <span className="font-sm text-uppercase">
                            {ftitle}
                          </span>
                          <h2 className="mt-10 font-bold text-[45px] leading-[58px]">
                            {stitle}
                          </h2>
                          <h1 className="text-[64px] leading-[83px] font-bold">
                            {ttitle}
                          </h1>
                          <div className="row">
                            <div className="col-lg-7 col-md-9 col-sm-12">
                              <p className="font-sm color-brand-3">
                                {description}
                              </p>
                            </div>
                          </div>
                          <div className="mt-30">
                            <Link
                              className="btn btn-brand-2"
                              href={`${link1.link}`}
                            >
                              {link1.name}
                            </Link>
                            <Link
                              className="btn btn-link"
                              href={`${link2.link}`}
                            >
                              {link2.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </Slider>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <div className="banner-small banner-small-1 bg-13">
                    <span className="color-danger text-uppercase font-sm-lh32">
                      10%
                      <span className="color-brand-3">
                        de réduction sur les achats.
                      </span>
                    </span>
                    <h4 className="mb-10 text-2xl font-bold">
                      Apple Watch Serial 7
                    </h4>
                    <p className="color-brand-3 font-desc">
                      Ne manquez pas la dernière
                      <br className="d-none d-lg-block" /> opportunité.
                    </p>
                    <div className="mt-20">
                      <Link
                        className="btn btn-brand-3 btn-arrow-right"
                        href="/products"
                      >
                        Commandez !
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <div className="banner-small banner-small-2 bg-14">
                    <span className="color-danger text-uppercase font-sm-lh32">
                      DERNIÈRE COLLECTION.
                    </span>
                    <h4 className="mb-10 text-2xl font-bold">
                      Appareils & logiciels Apple.
                    </h4>
                    <p className="color-brand-3 font-md">
                      Ne manquez pas la dernière
                      <br className="d-none d-lg-block" /> opportunité.
                    </p>
                    <div className="mt-20">
                      <Link
                        className="btn btn-brand-2 btn-arrow-right"
                        href="/products"
                      >
                        Commandez !
                      </Link>
                    </div>
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

export default Hero;

import Link from "next/link";
import { CSSProperties, FC } from "react";
import Slider, { Settings } from "react-slick";
import LeftArrow from "./arrows/left-arrow";
import RightArrow from "./arrows/right-arrow";

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
    autoplay: true,
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
                  <div className="swiper-slide">
                    <div
                      className="banner-big bg-11"
                      style={{
                        backgroundImage: "url(/imgs/page/homepage1/banner.png)",
                      }}
                    >
                      <span className="font-sm text-uppercase">
                        EN VOGUE ACTUELLEMENT.
                      </span>
                      <h2 className="mt-10 font-bold text-[45px] leading-[58px]">
                        -50% en vente !
                      </h2>
                      <h1 className="text-[64px] leading-[83px] font-bold">
                        Appareils mobiles
                      </h1>
                      <div className="row">
                        <div className="col-lg-7 col-md-9 col-sm-12">
                          <p className="font-sm color-brand-3">
                            -50% sur appareils mobiles ! Téléphones, tablettes,
                            ordinateurs, écouteurs, montres connectées et
                            accessoires mobiles de qualité à prix compétitifs.
                            Promo exceptionnelle pour les dernières
                            technologies. Fin de la promo proche, agissez vite !
                          </p>
                        </div>
                      </div>
                      <div className="mt-30">
                        <Link className="btn btn-brand-2" href="/products">
                          Commandez !
                        </Link>
                        <Link className="btn btn-link" href="/about-us">
                          En savoir plus
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="banner-big bg-11-2"
                      style={{
                        backgroundImage:
                          "url(/imgs/page/homepage1/banner-hero-2.png)",
                      }}
                    >
                      <span className="font-sm text-uppercase">
                        TENDANCES ACTUELLES
                      </span>
                      <h2 className="mt-10 font-bold text-[45px] leading-[58px]">
                        Grande Vente 25%
                      </h2>
                      <h1 className="text-[64px] leading-[83px] font-bold">
                        PC et ordi portables
                      </h1>
                      <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-12">
                          <p className="font-sm color-brand-3">
                            Profitez de notre promotion actuelle de 25% sur les
                            ordinateurs portables et les PC de qualité.
                            C&apos;est l&apos;occasion idéale pour obtenir la
                            technologie dont vous avez besoin à un prix
                            compétitif. Ne manquez pas cette offre
                            exceptionnelle !
                          </p>
                        </div>
                      </div>
                      <div className="mt-30">
                        <a className="btn btn-brand-2" href="shop-grid.html">
                          Commandez !
                        </a>
                        <Link className="btn btn-link" href="/about-us">
                          En savoir plus
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="banner-big bg-11-3"
                      style={{
                        backgroundImage:
                          "url(/imgs/page/homepage1/banner-hero-3.png)",
                      }}
                    >
                      <span className="font-sm text-uppercase">
                        MEILLEURE VENTE
                      </span>
                      <h2 className="mt-10 font-bold text-[45px] leading-[58px]">
                        Collection tendance
                      </h2>
                      <h1 className="text-[64px] leading-[83px] font-bold">
                        Lunettes virtuelles
                      </h1>
                      <div className="row">
                        <div className="col-lg-5 col-md-7 col-sm-12">
                          <p className="font-sm color-brand-3">
                            Découvrez notre incroyable sélection de lunettes
                            virtuelles à la pointe de la technologie ! La
                            meilleure vente de ce mois-ci vous propose une
                            collection tendance de lunettes virtuelles pour tous
                            les goûts et tous les besoins.
                          </p>
                        </div>
                      </div>
                      <div className="mt-30">
                        <a className="btn btn-brand-2" href="shop-grid.html">
                          Commandez !
                        </a>
                        <Link className="btn btn-link" href="/about-us">
                          En savoir plus
                        </Link>
                      </div>
                    </div>
                  </div>
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

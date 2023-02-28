import React from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { Flagfr, Flagdt, Flagru } from "../images/index";
import Link from "next/link";

const HTop = () => {
  const options: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
  };
  return (
    <div className="topbar">
      <div className="container-topbar">
        <div className="menu-topbar-left d-none d-xl-block">
          <ul className="nav-small">
            <li>
              <Link className="font-xs" href="/about">
                A Propos
              </Link>
            </li>
            <li>
              <Link className="font-xs" href="/">
                Carrière
              </Link>
            </li>
            {/* <li>
              <a className="font-xs" href="page-register.html">
                Open a shop
              </a>
            </li> */}
          </ul>
        </div>
        <div className="info-topbar text-center d-none d-xl-block">
          <span className="font-xs color-brand-3">
            Livraison gratuite pour toutes les commandes de plus de
          </span>
          <span className="font-sm-bold color-success"> 500 000 FCFA</span>
        </div>

        <div className="menu-topbar-right">
          <span className="font-xs color-brand-3">
            Besoin d’aide ? Appelez-nous:
          </span>
          <span className="font-sm-bold color-success"> +221 77 586 79 68</span>
        </div>
      </div>
    </div>
  );
};

export default HTop;

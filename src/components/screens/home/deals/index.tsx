import product from "components/screens/product";
import { useWishlist } from "context/wishlistContext";
import { useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import moment from "moment";
import "moment/locale/fr";
import ReactHtmlParser from "react-html-parser";
import { useState, useEffect, useMemo } from "react";
import Slider, { Settings } from "react-slick";
import { useDispatch } from "react-redux";
import { getProductById } from "redux/products/productSlice";

moment.locale("fr");
const Deals = () => {
  const { products } = useAppSelector((store) => store.product);
  const deals = products.slice(0, 4);
  const { addItem } = useCart();
  const timer = useMemo(() => {
    return new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
  }, []);

  const [timeLeft, setTimeLeft] = useState<moment.Duration>(
    moment.duration(moment(timer).diff(moment()))
  );
  const [timing, setTiming] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer && moment().isBefore(moment(timer))) {
        setTimeLeft(moment.duration(moment(timer).diff(moment())));
      }
    }, 500);

    setTiming(moment.utc(timeLeft.asMilliseconds()).format("DD:HH:mm:ss"));

    return () => clearInterval(interval);
  }, [timer, timeLeft]);

  const [days, hours, minutes, secondes] = timing.split(":");
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const processLiElements = (liArray: any) => {
    // Split liArray
    liArray = liArray.split(/<li>|<\/li>/).filter((item: any) => item !== "");
    // Remove the <ul> and </ul> tags from the array
    liArray = liArray.filter(
      (item: any) => item !== "<ul>" && item !== "</ul>"
    );

    // Count the number of li tags in the array

    // If the number of li tags in the array is less than or equal to 3, return all of them

    if (liArray.length <= 3) {
      // Join the selected li elements back into a string
      // const outputString = `${liArray.map((li: any) => `<li>${li}</li>`)}`;
      // return outputString.replace(/,/g, "");
      return liArray;
    }
    // Otherwise, return only the first three li tags
    else {
      // Return 3 elements of li
      const selectedLis = liArray.slice(0, 3);
      // const outputString = `${selectedLis.map((li: any) => `<li>${li}</li>`)}`;
      // return outputString.replace(/,/g, "");
      return selectedLis;
    }
  };
  const dispatch = useDispatch();
  const handleQuickviewClick = (event: any) => {
    const productId = event.target.dataset.productId;
    dispatch(getProductById(productId));
  };
  const { addItem: addWishlist } = useWishlist();

  return (
    <section className="section-box pt-50">
      <div className="containers">
        <div className="head-main bd-gray-200">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="mb-5 text-[31px] font-bold leading-[41px]">
                Dernières offres
              </h3>
              <p className="font-base color-gray-500">
                Des produits spéciaux ce mois-ci.
              </p>
            </div>
            <div className="col-lg-6 text-end">
              <div className="box-all-hurry">
                <div className="d-inline-block box-text-hurryup">
                  <span className="font-md-bold color-gray-900">
                    Dépêchez-vous!
                  </span>
                  <br />
                  <span className="font-xs color-gray-500">
                    Les offres se terminent dans:
                  </span>
                </div>
                <div className="box-count box-count-square hide-period">
                  <div
                    className="deals-countdown"
                    data-countdown="2023/08/25 00:00:00"
                  >
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {days}
                      </span>
                      <span className="countdown-period lh-14 font-xs">
                        jours
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {hours}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        heurs
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {minutes}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        min
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {secondes}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        sec
                      </span>
                    </span>
                  </div>
                </div>
                <Link
                  className="btn btn-view-all font-md-bold"
                  href="/products"
                >
                  Voir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card-grid-style-3 hover-show hurry-up">
              <div className="card-grid-inner">
                <div className="tools">
                  <a
                    className="btn btn-trend mb-10"
                    href="shop-single-product.html"
                  ></a>
                  <a
                    className="btn btn-wishlist mb-10"
                    href="shop-single-product.html"
                  ></a>
                  <a
                    className="btn btn-compare mb-10"
                    href="shop-single-product.html"
                  ></a>
                  <a
                    className="btn btn-quickview"
                    aria-label="Quick view"
                    href="#ModalQuickview"
                    data-bs-toggle="modal"
                    data-product-id="63f3b6f4fc67302abab27bd5"
                    onClick={handleQuickviewClick}
                  ></a>
                </div>
                <span className="label">
                  <span className="font-lg-bold color-white">
                    Dépêchez-vous!
                  </span>
                </span>
                <div className="image-box">
                  <div className="box-swiper">
                    <div className="swiper-container swiper-group-1">
                      <Slider {...settings} className="swiper-wrapper pt-5">
                        <div className="swiper-slide">
                          <Image
                            src="/imgs/page/homepage1/screen.png"
                            alt="Ecom"
                            width={800}
                            height={689}
                          />
                        </div>
                        <div className="swiper-slide">
                          <Image
                            src="/imgs/page/homepage1/screen-2.png"
                            alt="Ecom"
                            width={800}
                            height={689}
                          />
                        </div>
                        <div className="swiper-slide">
                          <Image
                            src="/imgs/page/homepage1/screen-3.png"
                            alt="Ecom"
                            width={800}
                            height={689}
                          />
                        </div>
                      </Slider>
                      <div className="swiper-pagination swiper-pagination-2"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-10 mb-15">
                  <h4 className="text-[24px] font-bold">Offre spéciale</h4>
                  <p className="font-base color-gray-500">
                    Valable jusqu&rsquo;à la fin de l&rsquo;offre
                  </p>
                </div>
                <div className="box-count box-count-square">
                  <div
                    className="deals-countdown"
                    data-countdown="2023/08/25 00:00:00"
                  >
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {days}
                      </span>
                      <span className="countdown-period lh-14 font-xs">
                        jour
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {hours}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        heur
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {minutes}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        min
                      </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount font-sm-bold lh-16">
                        {secondes}
                      </span>
                      <span className="countdown-period font-xs lh-14">
                        sec
                      </span>
                    </span>
                  </div>
                </div>
                <div className="divide"></div>
                <div className="info-right">
                  <span className="font-xs color-gray-500">Apple</span>
                  <br />
                  <a
                    className="color-brand-3 font-sm-bold"
                    href="shop-single-product.html"
                  >
                    <h5>IMac Retina 5K Display Apple 2022.</h5>
                  </a>
                  <div className="rating">
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      className="inline"
                      width={12}
                      height={12}
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      className="inline"
                      width={12}
                      height={12}
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      className="inline"
                      width={12}
                      height={12}
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      className="inline"
                      width={12}
                      height={12}
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      className="inline"
                      width={12}
                      height={12}
                    />
                    <span className="font-xs color-gray-500"> (65)</span>
                  </div>
                  <div className="price-info">
                    <h3 className="color-brand-3 price-main d-inline-block">
                      2 500 000 F CFA
                    </h3>
                    <span className="color-gray-500 price-line">
                      3 000 000 F CFA
                    </span>
                  </div>
                  <div className="box-progress">
                    <div className="progress-bar">
                      <div className="progress-bar-inner"></div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <span className="font-xs color-gray-500">
                          Disponible:
                        </span>
                        <span className="font-xs-bold color-gray-900">568</span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                        <span className="font-xs color-gray-500">Vendu:</span>
                        <span className="font-xs-bold color-gray-900">289</span>
                      </div>
                    </div>
                  </div>
                  <div className="divide"></div>
                  <ul className="list-features">
                    <li>Écran Retina 5K de 27 pouces (diagonale)</li>
                    <li>
                      Processeur Intel Core i5 6 cœurs de 10ème génération à 3,1
                      GHz
                    </li>
                    <li>Graphismes AMD Radeon Pro 5300.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              {products.slice(0, 5).map((product: any) => (
                <div
                  key={product._id}
                  className="col-lg-4 col-md-6 col-sm-6 col-12"
                >
                  <div className="card-grid-style-3">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                        ></a>
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        ></a>
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        ></a>
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                          data-product-id={product._id}
                          onClick={handleQuickviewClick}
                        ></a>
                      </div>
                      <div className="image-box">
                        <span className="label bg-brand-2">-17%</span>
                        <a>
                          <Image
                            src={product.images[0].url}
                            alt="Ecom"
                            width={product.images[0].width}
                            height={product.images[0].height}
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <span className="font-xs color-gray-500">Samsung</span>
                        <br />
                        <a className="color-brand-3 font-sm-bold">
                          Samsung 30-100 inches The Freestyle FHD HDR Smart
                          Projector
                        </a>
                        <div className="rating">
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            className="inline"
                            width={12}
                            height={12}
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            className="inline"
                            width={12}
                            height={12}
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            className="inline"
                            width={12}
                            height={12}
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            className="inline"
                            width={12}
                            height={12}
                          />
                          <Image
                            src="/imgs/template/icons/star.svg"
                            alt="Ecom"
                            className="inline"
                            width={12}
                            height={12}
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            {Number(product.price).toLocaleString("fr-FR", {
                              style: "currency",
                              currency: "XOF",
                            })}
                          </strong>
                          <span className="color-gray-500 price-line">
                            {Number(product.oldPrice).toLocaleString("fr-FR", {
                              style: "currency",
                              currency: "XOF",
                            })}
                          </span>
                        </div>
                        <div className="mt-20">
                          <a
                            className="btn btn-cart"
                            onClick={() => {
                              addItem({
                                ...product,
                                id: product._id,
                              });
                              toast.success("Produit ajouté au panier");
                            }}
                          >
                            Ajouter au panier
                          </a>
                        </div>
                        <ul className="list-features">
                          <li>
                            {ReactHtmlParser(
                              processLiElements(product.specification)[0]
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="list-products-5">
          {products.slice(0, 5).map((product: any) => (
            <div key={product._id} className="card-grid-style-3">
              <div className="card-grid-inner">
                <div className="tools">
                  <a
                    className="btn btn-trend btn-tooltip mb-10"
                    href="#"
                    aria-label="Trend"
                    data-bs-placement="left"
                  ></a>
                  <a
                    className="btn btn-wishlist btn-tooltip mb-10"
                    aria-label="Add To Wishlist"
                    onClick={() => {
                      addWishlist({
                        ...product,
                        id: product._id,
                      });
                      toast.success("Produit ajouté au liste de souhait!");
                    }}
                  ></a>
                  <a
                    className="btn btn-compare btn-tooltip mb-10"
                    href="shop-compare.html"
                    aria-label="Compare"
                  ></a>
                  <a
                    className="btn btn-quickview btn-tooltip"
                    aria-label="Quick view"
                    href="#ModalQuickview"
                    data-bs-toggle="modal"
                    data-product-id={product._id}
                    onClick={handleQuickviewClick}
                  ></a>
                </div>
                <div className="image-box">
                  <span className="label bg-brand-2">-17%</span>
                  <a href="shop-single-product.html">
                    <Image
                      src={product.images[1].url}
                      alt="Ecom"
                      width={648}
                      height={438}
                    />
                  </a>
                </div>
                <div className="info-right">
                  <a
                    className="font-xs color-gray-500"
                    href="shop-vendor-single.html"
                  >
                    {product.brand}
                  </a>
                  <br />
                  <Link
                    className="color-brand-3 truncate max-w-[219px] block font-sm-bold"
                    href={`/products/${product._id}`}
                  >
                    {product.name}
                  </Link>
                  <div className="rating">
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      width={12}
                      height={12}
                      className="inline"
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      width={12}
                      height={12}
                      className="inline"
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      width={12}
                      height={12}
                      className="inline"
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      width={12}
                      height={12}
                      className="inline"
                    />
                    <Image
                      src="/imgs/template/icons/star.svg"
                      alt="Ecom"
                      width={12}
                      height={12}
                      className="inline"
                    />
                    <span className="font-xs color-gray-500">(65)</span>
                  </div>
                  <div className="price-info">
                    <strong className="font-lg-bold color-brand-3 price-main">
                      {Number(product.price).toLocaleString("fr-FR", {
                        style: "currency",
                        currency: "XOF",
                      })}
                    </strong>
                    <br />
                    <span className="color-gray-500 price-line">
                      {Number(product.oldPrice).toLocaleString("fr-FR", {
                        style: "currency",
                        currency: "XOF",
                      })}
                    </span>
                  </div>
                  <div className="mt-20 box-btn-cart">
                    <a
                      className="btn btn-cart"
                      onClick={() => {
                        addItem({
                          ...product,
                          id: product._id,
                        });
                        toast.success("Produit ajouté au panier");
                      }}
                    >
                      Ajouter au panier
                    </a>
                  </div>
                  <ul className="list-features">
                    {processLiElements(product.specification).map(
                      (li: any, idx: any) => (
                        <li className="truncate" key={idx}>
                          {ReactHtmlParser(li)}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;

import { useWishlist } from "context/wishlistContext";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import Slider, { Settings } from "react-slick";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { getProductById } from "redux/products/productSlice";
import NextArrow from "./arrows/next-arrow";
import Next1Arrow from "./arrows/next1-arrow";
import Next2Arrow from "./arrows/next2-arrow";
import PrevArrow from "./arrows/prev-arrow";
import Prev1Arrow from "./arrows/prev1-arrow";
import Prev2Arrow from "./arrows/prev2-arrow";
import { useRecviewed } from "context/recviewedContext";

const BestSells = () => {
  const refde = useRef<any>(null);
  const refde1 = useRef<any>(null);
  const refde2 = useRef<any>(null);
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    nextArrow: <NextArrow refde={refde} />,
    prevArrow: <PrevArrow refde={refde} />,
  };

  const settings1: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    nextArrow: <Next1Arrow refde1={refde1} />,
    prevArrow: <Prev1Arrow refde1={refde1} />,
  };

  const settings2: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    nextArrow: <Next2Arrow refde2={refde2} />,
    prevArrow: <Prev2Arrow refde2={refde2} />,
  };

  useEffect(() => {
    const prev = document.getElementById("prevs");
    const next = document.getElementById("nexts");
    const prev1 = document.getElementById("prev1");
    const next1 = document.getElementById("next1");

    const prev2 = document.getElementById("prev2");
    const next2 = document.getElementById("next2");

    // refde.current!.appendChild(prev);
    // refde.current!.appendChild(next);
    // refde1.current!.appendChild(prev1);
    // refde1.current!.appendChild(next1);
    // refde2.current!.appendChild(prev2);
    // refde2.current!.appendChild(next2);
  }, [refde, refde1, refde2]);
  const { products } = useAppSelector((store) => store.product);
  const { addItem } = useCart();
  const { addItem: addWishlist } = useWishlist();
  const dispatch = useAppDispatch();

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

  const handleQuickviewClick = (event: any) => {
    const productId = event.target.dataset.productId;
    dispatch(getProductById(productId));
  };
  const {
    addItem: addRecviewed,
    inRecviewed,
    totalItems,
    removeItem,
    items,
  } = useRecviewed();

  const addReviewedFunc = (product: any) => {
    if (product) {
      if (!inRecviewed(product._id)) {
        if (totalItems > 5) {
          removeItem(items[0].id);
          addRecviewed({
            ...product,
            id: product._id,
          });
        } else {
          addRecviewed({
            ...product,
            id: product._id,
          });
        }
      }
    }
  };
  return (
    <section className="section-box pt-50">
      <div className="containers">
        <div className="head-main">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <h3 className="mb-5 font-bold text-[32px]">Meilleures ventes</h3>
              <p className="font-base color-gray-500">
                Produits spéciaux du mois
              </p>
            </div>
            <div className="col-xl-5 col-lg-6">
              <ul className="nav nav-tabs" role="tablist">
                <li>
                  <a
                    className="active"
                    href="#tab-all"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-all"
                    aria-selected="true"
                  >
                    Tout
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-bestseller"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-bestseller"
                    aria-selected="true"
                  >
                    Meilleures ventes.
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-mostviewed"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-mostviewed"
                    aria-selected="true"
                  >
                    Le plus vu.
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-topbrands"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-topbrands"
                    aria-selected="true"
                  >
                    Meilleures marques.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div
            className="tab-pane fade active show"
            id="tab-all"
            role="tabpanel"
            aria-labelledby="tab-all"
          >
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
                        onClick={() => addReviewedFunc(product)}
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
          <div
            className="tab-pane fade"
            id="tab-bestseller"
            role="tabpanel"
            aria-labelledby="tab-bestseller"
          >
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
                        onClick={() => addReviewedFunc(product)}
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
          <div
            className="tab-pane fade"
            id="tab-mostviewed"
            role="tabpanel"
            aria-labelledby="tab-mostviewed"
          >
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
                        onClick={() => addReviewedFunc(product)}
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
          <div
            className="tab-pane fade"
            id="tab-topbrands"
            role="tabpanel"
            aria-labelledby="tab-topbrands"
          >
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
                        onClick={() => addReviewedFunc(product)}
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
        </div>
      </div>
    </section>
  );
};

export default BestSells;

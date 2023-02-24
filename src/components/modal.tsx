import { useAppSelector } from "hooks/index";
import Image from "next/image";
import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import Slick, { Settings } from "react-slick";
import ButtonLoading from "./Loadingbutton";
import NextArrow from "./screens/home/arrows/next-arrow";
import PrevArrow from "./screens/home/arrows/prev-arrow";
import ReactHtmlParser from "react-html-parser";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";

interface ModalProps {
  id?: string;
}

const Modal: FC<ModalProps> = ({ id }) => {
  const { product, isLoading } = useAppSelector((store) => store.product);
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
  };
  const settingsNav: Settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow:
      product && product.images.length >= 4
        ? 4
        : product && product.images.length,
    draggable: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const [nav1, setNav1] = useState<Slick | null>(null);
  const [nav2, setNav2] = useState<Slick | null>(null);

  const list =
    product &&
    product.specification
      .split(/<li>|<\/li>/)
      .filter((item: any) => item !== "")
      .filter((item: any) => item !== "<ul>" && item !== "</ul>");

  const [color, setColor] = useState("");
  const [style, setStyle] = useState("");
  const [size, setSize] = useState("");
  const [disabled, setDisabled] = useState(false);
  // CONTROL
  const [imgColors, setImgColors] = useState<any>(null);

  useEffect(() => {
    if (isLoading) {
      setColor("");
      setImgColors("");
      setStyle("");
      setSize("");
    }

    if (product && product.colors.length > 0 && !imgColors) {
      setImgColors(
        product.images.map((image: any, idx: number) => {
          return {
            ...image,
            color: product.colors[idx],
          };
        })
      );
    }
    if (product && product.styles.length > 0 && !style) {
      setStyle(product.styles[0]);
    }
    if (product && product.sizes.length > 0 && !size) {
      setSize(product.sizes[0]);
    }
    if (imgColors && imgColors.length > 0 && !color) {
      setColor(imgColors[0].color);
    }
  }, [imgColors, color, product, style, size, isLoading]);

  const onChangeColor = (color: string) => {
    setColor(color);
  };
  // CART

  const { addItem, getItem, inCart } = useCart();
  const [itms, setItms] = useState(null);
  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    if (product && qty < product.countInStock) {
      setQty(qty + 1);
    }
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const addToCart = (product: any) => {
    if (product && inCart(product._id)) {
      const item = getItem(product._id);
      if (item.quantity < item.countInStock) {
        setDisabled(true);
        addItem(
          {
            ...product,
            id: product._id,
          },
          qty
        );
        toast.success("Produit ajouté avec succée!");
      } else {
        setDisabled(false);
      }
    } else {
      addItem(
        {
          ...product,
          id: product._id,
        },
        qty
      );
      toast.success("Produit ajouté avec succée!");
    }
    setQty(1);
  };

  useEffect(() => {
    if (!isLoading && product && inCart(product._id)) {
      const item = getItem(product._id);
      if (!isLoading && item.countInStock <= item.quantity) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [product, inCart, getItem, isLoading]);

  return (
    <div
      className="modal fade"
      id="ModalQuickview"
      tabIndex={-1}
      aria-hidden="true"
      style={{ display: "none;" }}
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content apply-job-form">
          <button
            className="btn-close bg-[url('/imgs/close-btn.svg')]"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>

          <div
            className={`modal-body p-30 ${
              isLoading ? "min-h-[500px] flex items-center justify-center" : ""
            }`}
          >
            {isLoading ? (
              <ButtonLoading style="text-[#425a8b]" />
            ) : (
              <div className="row">
                <div className="col-lg-6">
                  <div className="gallery-image">
                    <div className="galleries-2">
                      <div className="detail-gallery">
                        <Slick
                          {...settings}
                          ref={(slider) => setNav1(slider)}
                          asNavFor={nav2!}
                          className="product-image-slider-2"
                        >
                          {product &&
                            product.images.map((img: any, idx: any) => (
                              <figure key={idx} className="border-radius-10">
                                <Image
                                  src={img.url}
                                  alt="product image"
                                  width={img.width}
                                  height={img.height}
                                />
                              </figure>
                            ))}
                        </Slick>
                      </div>
                      <Slick
                        {...settingsNav}
                        asNavFor={nav1!}
                        ref={(slider) => setNav2(slider)}
                        className="slider-nav-thumbnails-2"
                      >
                        {product &&
                          product.images.map((img: any) => (
                            <div
                              key={img.public_id}
                              className={`${
                                product.images.length < 4 ? "!px-10" : ""
                              }`}
                            >
                              <div className={`item-thumb `}>
                                <Image
                                  src={img.url}
                                  alt="product image"
                                  width={img.width}
                                  height={img.height}
                                />
                              </div>
                            </div>
                          ))}
                      </Slick>
                    </div>
                  </div>
                  <div className="box-tags">
                    <div className="d-inline-block mr-25">
                      <span className="font-sm font-medium color-gray-900">
                        Category:
                      </span>
                      <a className="link" href="#">
                        Smartphones
                      </a>
                    </div>
                    <div className="d-inline-block">
                      <span className="font-sm font-medium color-gray-900">
                        Tags:
                      </span>
                      <a className="link" href="#">
                        Blue
                      </a>
                      ,
                      <a className="link" href="#">
                        Smartphone
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="product-info">
                    <h5 className="mb-15 font-bold text-xl">
                      {product && product.name}
                    </h5>
                    <div className="info-by">
                      <span className="bytext color-gray-500 font-xs font-medium">
                        by
                      </span>
                      <a
                        className="byAUthor color-gray-900 font-xs font-medium"
                        href="shop-vendor-list.html"
                      >
                        {" "}
                        Ecom Tech
                      </a>
                      <div className="rating d-inline-block">
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
                        <span className="font-xs color-gray-500 font-medium">
                          {" "}
                          (65 reviews)
                        </span>
                      </div>
                    </div>
                    <div className="border-bottom pt-10 mb-20"></div>
                    <div className="box-product-price">
                      <h3 className="color-brand-3 font-bold text-[32px] price-main d-inline-block mr-10">
                        {product &&
                          Number(product.price).toLocaleString("fr-FR", {
                            style: "currency",
                            currency: "XOF",
                          })}
                      </h3>
                      <span className="color-gray-500 price-line font-xl line-througt">
                        {product &&
                          Number(product.oldPrice).toLocaleString("fr-FR", {
                            style: "currency",
                            currency: "XOF",
                          })}
                      </span>
                    </div>
                    <div className="product-description mt-10 color-gray-900">
                      <ul className="list-dot">
                        {list && list.length > 7
                          ? list
                              .slice(0, 6)
                              .map((l: any, idx: any) => (
                                <li key={idx}>{ReactHtmlParser(l)}</li>
                              ))
                          : list &&
                            list.map((l: any, idx: any) => (
                              <li key={idx}>{ReactHtmlParser(l)}</li>
                            ))}
                      </ul>
                    </div>
                    {product && product.colors.length > 0 && (
                      <div className="box-product-color mt-10">
                        {imgColors && (
                          <p className="font-sm color-gray-900">
                            Couleur:
                            <span className="color-brand-2 nameColor">
                              {color}
                            </span>
                          </p>
                        )}

                        <ul className="list-colors">
                          {imgColors &&
                            imgColors.map((img: any, idx: any) => (
                              <li
                                key={idx}
                                className={`${
                                  img.color === color ? "active" : ""
                                } ${!img.color ? "disabled" : ""}`}
                                onClick={() => {
                                  if (img.color) {
                                    onChangeColor(img.color);
                                  }
                                }}
                              >
                                <Image
                                  src={img.url}
                                  alt="Ecom"
                                  width={img.width}
                                  height={img.height}
                                  title={img.color}
                                />
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                    <div className="box-product-style-size mt-10">
                      <div className="row">
                        {style && (
                          <div className="col-lg-12 mb-10">
                            <p className="font-sm color-gray-900">
                              Style:
                              <span className="color-brand-2 nameStyle">
                                {style}
                              </span>
                            </p>
                            <ul className="list-styles">
                              {product &&
                                product.styles.map((styl: any, idx: any) => (
                                  <li
                                    key={idx}
                                    className={`${
                                      styl === style ? "active" : ""
                                    } ${!style ? "disabled" : ""}`}
                                    title={styl}
                                    onClick={() => setStyle(styl)}
                                  >
                                    {styl}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}
                        {size && (
                          <div className="col-lg-12 mb-10">
                            <p className="font-sm color-gray-900">
                              Size:
                              <span className="color-brand-2 nameSize">
                                {size}
                              </span>
                            </p>
                            <ul className="list-sizes">
                              {product &&
                                product.sizes.map((siz: any, idx: any) => (
                                  <li
                                    key={idx}
                                    className={`${
                                      siz === size ? "active" : ""
                                    } ${!size ? "disabled" : ""}`}
                                    title={siz}
                                    onClick={() => setSize(siz)}
                                  >
                                    {siz}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="buy-product mt-5">
                      <p className="font-sm mb-10">Quantity</p>
                      <div className="box-quantity">
                        <div className="input-quantity">
                          <input
                            className="font-xl color-brand-3"
                            type="number"
                            value={qty}
                            max={product && product.countInStock}
                            readOnly
                          />
                          <span
                            className="minus-cart"
                            onClick={handleDecrement}
                          ></span>
                          <span
                            className="plus-cart"
                            onClick={handleIncrement}
                          ></span>
                        </div>
                        <div className="button-buy">
                          <a
                            onClick={() => addToCart(product)}
                            className={`btn btn-cart ${
                              disabled ? "disabled" : ""
                            }`}
                          >
                            Ajouter au panier
                          </a>
                          <a className="btn btn-buy" href="shop-checkout.html">
                            Acheter maintenant
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

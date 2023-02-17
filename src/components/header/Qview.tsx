import { useState, MouseEvent, useRef, useEffect } from "react";
import Slick, { Settings } from "react-slick";
import NextArrow from "./arrows/next-arrow";
import PrevArrow from "./arrows/prev-arrow";
import Image from "next/image";
import { useAppSelector } from "hooks/index";
import { useCart } from "react-use-cart";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

const Qview = () => {
  const { product } = useAppSelector((store) => store.product);
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
    slidesToShow: product && product.images.length,
    draggable: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const [nav1, setNav1] = useState<Slick | null>(null);
  const [nav2, setNav2] = useState<Slick | null>(null);

  const Zoom = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    const offsetWidth = e.currentTarget.offsetWidth;
    const offsetHeight = e.currentTarget.offsetHeight;

    let x = (offsetX / offsetWidth) * 100;
    let y = (offsetY / offsetHeight) * 100;
    e.currentTarget.style.backgroundPositionX = x + "%";
    e.currentTarget.style.backgroundPositionY = y + "%";
  };

  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const onChange = (e: any) => {
    setQty(e.target.value);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    !modalRef.current?.className.includes("show") && setQty(1);
  }, [modalRef.current?.className]);
  return (
    <div
      ref={modalRef}
      className="modal fade custom-modal"
      id="quickViewModal"
      tabIndex={-1}
      aria-labelledby="quickViewModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close !tw-text-[25px] tw-flex tw-items-center tw-justify-center "
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <IoMdClose size={25} />
          </button>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5 tw-grouphover">
                <div className="detail-gallery">
                  <span className="zoom-icon group-[hover:hover]:!tw-opacity-0">
                    <i className="fi-rs-search"></i>
                  </span>

                  <Slick
                    {...settings}
                    ref={(slider) => setNav1(slider)}
                    asNavFor={nav2!}
                    className="product-image-slider"
                  >
                    {product &&
                      product.images.map((img: any) => (
                        <div key={img.public_id}>
                          <figure
                            className="border-radius-10 tw-group tw-bg-[50%_50%] tw-cursor-zoom-in"
                            onMouseMove={Zoom}
                            style={{
                              backgroundImage: `url(${img.url})`,
                            }}
                          >
                            <Image
                              src={img.url}
                              alt="product image"
                              className="group-hover:!tw-opacity-0 tw-transition-[opacity] tw-duration-500 "
                              width={img.width}
                              height={img.height}
                            />
                          </figure>
                        </div>
                      ))}
                  </Slick>
                  {product &&
                  product.images.length > 1 &&
                  product.images.length < 4 ? (
                    <Slick
                      {...settingsNav}
                      asNavFor={nav1!}
                      ref={(slider) => setNav2(slider)}
                      className="slider-nav-thumbnails"
                    >
                      {/* <div>
                      <Image
                        src="/imgs/shop/thumbnail-3.jpg"
                        alt="product image"
                        width={600}
                        height={600}
                      />
                    </div> */}
                      {product &&
                        product.images.map((img: any) => (
                          <div key={img.public_id}>
                            <Image
                              src={img.url}
                              alt="product image"
                              width={600}
                              height={600}
                              className="!tw-mx-auto !tw-max-w-[75px]"
                            />
                          </div>
                        ))}
                    </Slick>
                  ) : (
                    product &&
                    product.length > 1 && (
                      <Slick
                        {...settingsNav}
                        asNavFor={nav1!}
                        ref={(slider) => setNav2(slider)}
                        className="slider-nav-thumbnails"
                      >
                        {/* <div>
                  <Image
                    src="/imgs/shop/thumbnail-3.jpg"
                    alt="product image"
                    width={600}
                    height={600}
                  />
                </div> */}
                        {product &&
                          product.images.map((img: any) => (
                            <div key={img.public_id}>
                              <Image
                                src={img.url}
                                alt="product image"
                                width={600}
                                height={600}
                              />
                            </div>
                          ))}
                      </Slick>
                    )
                  )}
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="detail-info pr-30 pl-30">
                  <span className="stock-status out-stock"> Sale Off </span>
                  <h3 className="title-detail">
                    <a href="shop-product-right.html" className="text-heading">
                      {product && product.name}
                    </a>
                  </h3>
                  <div className="product-detail-rating">
                    <div className="product-rate-cover text-end">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted">
                        (32 reviews)
                      </span>
                    </div>
                  </div>
                  <div className="clearfix product-price-cover">
                    <div className="product-price primary-color tw-flex-wrap float-left">
                      <span className="current-price text-brand">
                        {product &&
                          Number(product.price).toLocaleString("fr-FR", {
                            style: "currency",
                            currency: "XOF",
                          })}
                      </span>
                      <span>
                        <span className="save-price font-md color3 ml-15">
                          26% Off
                        </span>
                        <span className="old-price font-md ml-15">
                          {product &&
                            Number(product.oldPrice).toLocaleString("fr-FR", {
                              style: "currency",
                              currency: "XOF",
                            })}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="detail-extralink mb-30">
                    <div className="detail-qty border radius">
                      <a
                        className="qty-down"
                        onClick={() => {
                          qty > 1 && setQty(qty - 1);
                        }}
                      >
                        <i className="fi-rs-angle-small-down"></i>
                      </a>
                      <span className="qty-val">{qty}</span>
                      <a className="qty-up" onClick={() => setQty(qty + 1)}>
                        <i className="fi-rs-angle-small-up"></i>
                      </a>
                    </div>
                    <div className="product-extra-link2">
                      <button
                        type="submit"
                        className="button button-add-to-cart"
                        onClick={() => {
                          addItem(
                            {
                              ...product,
                              id: product._id,
                            },
                            qty
                          );
                          setQty(1);
                          toast.success("Produit ajouté avec succée!");
                        }}
                      >
                        <i className="fi-rs-shopping-cart"></i>Ajouter au Panier
                      </button>
                    </div>
                  </div>
                  <div className="font-xs">
                    <ul>
                      <li className="mb-5">
                        Vendor: <span className="text-brand">Nest</span>
                      </li>
                      <li className="mb-5">
                        MFG:<span className="text-brand"> Jun 4.2022</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qview;

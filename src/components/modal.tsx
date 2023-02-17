import Image from "next/image";
import { FC, Dispatch, SetStateAction, useState } from "react";
import Slick, { Settings } from "react-slick";
import NextArrow from "./screens/home/arrows/next-arrow";
import PrevArrow from "./screens/home/arrows/prev-arrow";

const Modal = () => {
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
    slidesToShow: 4,
    draggable: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const [nav1, setNav1] = useState<Slick | null>(null);
  const [nav2, setNav2] = useState<Slick | null>(null);
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

          <div className="modal-body p-30">
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
                        <figure className="border-radius-10">
                          <Image
                            src="/imgs/page/product/img-gallery-1.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <Image
                            src="/imgs/page/product/img-gallery-2.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <Image
                            src="/imgs/page/product/img-gallery-3.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <Image
                            src="/imgs/page/product/img-gallery-4.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <Image
                            src="/imgs/page/product/img-gallery-5.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <Image
                            src="/imgs/page/product/img-gallery-6.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <Image
                            src="/imgs/page/product/img-gallery-7.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </figure>
                      </Slick>
                    </div>
                    <Slick
                      {...settingsNav}
                      asNavFor={nav1!}
                      ref={(slider) => setNav2(slider)}
                      className="slider-nav-thumbnails-2"
                    >
                      <div>
                        <div className="item-thumb">
                          <Image
                            src="/imgs/page/product/img-gallery-1.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="item-thumb">
                          <Image
                            src="/imgs/page/product/img-gallery-2.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="item-thumb">
                          <Image
                            src="/imgs/page/product/img-gallery-3.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="item-thumb">
                          <Image
                            src="/imgs/page/product/img-gallery-4.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="item-thumb">
                          <Image
                            src="/imgs/page/product/img-gallery-5.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="item-thumb">
                          <Image
                            src="/imgs/page/product/img-gallery-6.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="item-thumb">
                          <Image
                            src="/imgs/page/product/img-gallery-7.jpg"
                            alt="product image"
                            width={1200}
                            height={1200}
                          />
                        </div>
                      </div>
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
                  <h5 className="mb-15">
                    SAMSUNG Galaxy S22 Ultra, 8K Camera & Video, Brightest
                    Display Screen, S Pen Pro
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
                    <h3 className="color-brand-3 price-main d-inline-block mr-10">
                      $2856.3
                    </h3>
                    <span className="color-gray-500 price-line font-xl line-througt">
                      $3225.6
                    </span>
                  </div>
                  <div className="product-description mt-10 color-gray-900">
                    <ul className="list-dot">
                      <li>8k super steady video</li>
                      <li>Nightography plus portait mode</li>
                      <li>50mp photo resolution plus bright display</li>
                      <li>Adaptive color contrast</li>
                      <li>premium design & craftmanship</li>
                      <li>Long lasting battery plus fast charging</li>
                    </ul>
                  </div>
                  <div className="box-product-color mt-10">
                    <p className="font-sm color-gray-900">
                      Color:
                      <span className="color-brand-2 nameColor">Pink Gold</span>
                    </p>
                    <ul className="list-colors">
                      <li className="disabled">
                        <Image
                          src="/imgs/page/product/img-gallery-1.jpg"
                          alt="Ecom"
                          width={1200}
                          height={1200}
                          title="Pink"
                        />
                      </li>
                      <li>
                        <Image
                          src="/imgs/page/product/img-gallery-2.jpg"
                          alt="Ecom"
                          width={1200}
                          height={1200}
                          title="Gold"
                        />
                      </li>
                      <li>
                        <Image
                          src="/imgs/page/product/img-gallery-3.jpg"
                          alt="Ecom"
                          width={1200}
                          height={1200}
                          title="Pink Gold"
                        />
                      </li>
                      <li>
                        <Image
                          src="/imgs/page/product/img-gallery-4.jpg"
                          alt="Ecom"
                          width={1200}
                          height={1200}
                          title="Silver"
                        />
                      </li>
                      <li className="active">
                        <Image
                          src="/imgs/page/product/img-gallery-5.jpg"
                          alt="Ecom"
                          width={1200}
                          height={1200}
                          title="Pink Gold"
                        />
                      </li>
                      <li className="disabled">
                        <Image
                          src="/imgs/page/product/img-gallery-6.jpg"
                          alt="Ecom"
                          width={1200}
                          height={1200}
                          title="Black"
                        />
                      </li>
                      <li className="disabled">
                        <Image
                          src="/imgs/page/product/img-gallery-7.jpg"
                          alt="Ecom"
                          width={1200}
                          height={1200}
                          title="Red"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="box-product-style-size mt-10">
                    <div className="row">
                      <div className="col-lg-12 mb-10">
                        <p className="font-sm color-gray-900">
                          Style:
                          <span className="color-brand-2 nameStyle">S22</span>
                        </p>
                        <ul className="list-styles">
                          <li className="disabled" title="S22 Ultra">
                            S22 Ultra
                          </li>
                          <li className="active" title="S22">
                            S22
                          </li>
                          <li title="S22 + Standing Cover">
                            S22 + Standing Cover
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 mb-10">
                        <p className="font-sm color-gray-900">
                          Size:
                          <span className="color-brand-2 nameSize">512GB</span>
                        </p>
                        <ul className="list-sizes">
                          <li className="disabled" title="1GB">
                            1GB
                          </li>
                          <li className="active" title="512 GB">
                            512 GB
                          </li>
                          <li title="256 GB">256 GB</li>
                          <li title="128 GB">128 GB</li>
                          <li className="disabled" title="64GB">
                            64GB
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="buy-product mt-5">
                    <p className="font-sm mb-10">Quantity</p>
                    <div className="box-quantity">
                      <div className="input-quantity">
                        <input
                          className="font-xl color-brand-3"
                          type="text"
                          value="1"
                        />
                        <span className="minus-cart"></span>
                        <span className="plus-cart"></span>
                      </div>
                      <div className="button-buy">
                        <a className="btn btn-cart" href="shop-cart.html">
                          Add to cart
                        </a>
                        <a className="btn btn-buy" href="shop-checkout.html">
                          Buy now
                        </a>
                      </div>
                    </div>
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

export default Modal;

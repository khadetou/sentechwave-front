import { useWishlist } from "context/wishlistContext";
import { useAppSelector, useAppDispatch } from "hooks/index";
import { MouseEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { createReviews, resetReviews } from "redux/products/productSlice";
import NextArrow from "../arrows/next-arrow";
import PrevArrow from "../arrows/prev-arrow";
const Top = () => {
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
    slidesToShow: 5,
    draggable: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

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

  const { addItem: addWishlist } = useWishlist();

  const [rating, setRating] = useState<number | undefined>(0);
  const [comment, setComment] = useState("");
  const {
    query: { id },
  } = useRouter();
  const { product, isError, message, isSuccess, products } = useAppSelector(
    (state) => state.product
  );

  const { isAuthenticated, user } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      rating,
      comment,
    };
    const reviewData = {
      data,
      id,
    };

    dispatch(createReviews(reviewData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
      setComment("");
      setRating(0);
      dispatch(resetReviews());
    }
    if (isSuccess) {
      toast.success("Merci d'avoire noté le produit");
      setComment("");
      setRating(0);
      dispatch(resetReviews());
    }
  }, [dispatch, isError, message, isSuccess]);
  const { asPath } = useRouter();

  const percentage = (n1: any, n2: any) => {
    return (
      product &&
      (
        (product.reviews
          .map((review: any) => {
            if (review.rating >= n1 && review.rating <= n2) {
              return review;
            } else {
              return 0;
            }
          })
          .filter((count: any) => count != 0).length *
          100) /
        product.numbReviews
      ).toFixed(0)
    );
  };
  const listProducts = [...products];
  const sortedDate = listProducts.sort((a: any, b: any) => {
    const dateB: any = new Date(b.createdAt);
    const dateA: any = new Date(a.createdAt);

    return dateB - dateA;
  });

  const Lastprod = sortedDate.slice(0, 3);
  const [value, setValue] = useState<any>({ min: "4500", max: "9000" });
  return (
    <section className="section-box shop-template">
      <div className="containers">
        <div className="row">
          <div className="col-lg-5">
            <div className="gallery-image">
              <div className="galleries">
                <div className="detail-gallery">
                  <label className="label">-17%</label>
                  <Slider
                    {...settings}
                    ref={(slider) => setNav1(slider)}
                    asNavFor={nav2!}
                    className="product-image-slider"
                  >
                    <figure>
                      <div
                        className="border-radius-10 bg-[url('/imgs/page/product/img-gallery-1.jpg')] group h-[430px] mt-28 bg-[50%_50%] cursor-zoom-in"
                        onMouseMove={Zoom}
                        style={{
                          backgroundImage: `url("/imgs/page/product/img-gallery-1.jpg")`,
                        }}
                      >
                        <Image
                          width={1200}
                          height={1200}
                          className="group-hover:!opacity-0 transition-[opacity] duration-300"
                          src="/imgs/page/product/img-gallery-1.jpg"
                          alt="product image"
                        />
                      </div>
                    </figure>
                    <figure>
                      <div
                        className="border-radius-10 group h-[430px] mt-28 bg-[url('/imgs/page/product/img-gallery-2.jpg')] bg-[50%_50%] cursor-zoom-in"
                        onMouseMove={Zoom}
                        style={{
                          backgroundImage: `url("/imgs/page/product/img-gallery-1.jpg")`,
                        }}
                      >
                        <Image
                          width={1200}
                          height={1200}
                          className="group-hover:!opacity-0 transition-[opacity] duration-300"
                          src="/imgs/page/product/img-gallery-2.jpg"
                          alt="product image"
                        />
                      </div>
                    </figure>
                    <figure>
                      <div
                        className="border-radius-10 group h-[430px] mt-28 bg-[url('/imgs/page/product/img-gallery-3.jpg')] bg-[50%_50%] cursor-zoom-in"
                        onMouseMove={Zoom}
                        style={{
                          backgroundImage: `url("/imgs/page/product/img-gallery-1.jpg")`,
                        }}
                      >
                        <Image
                          width={1200}
                          height={1200}
                          className="group-hover:!opacity-0 transition-[opacity] duration-300"
                          src="/imgs/page/product/img-gallery-3.jpg"
                          alt="product image"
                        />
                      </div>
                    </figure>
                    <figure>
                      <div
                        className="border-radius-10 group h-[430px] mt-28 bg-[url('/imgs/page/product/img-gallery-4.jpg')] bg-[50%_50%] cursor-zoom-in"
                        onMouseMove={Zoom}
                        style={{
                          backgroundImage: `url("/imgs/page/product/img-gallery-1.jpg")`,
                        }}
                      >
                        <Image
                          width={1200}
                          height={1200}
                          className="group-hover:!opacity-0 transition-[opacity] duration-300"
                          src="/imgs/page/product/img-gallery-4.jpg"
                          alt="product image"
                        />
                      </div>
                    </figure>
                    <figure>
                      <div
                        className="border-radius-10 group h-[430px] mt-28 bg-[url('/imgs/page/product/img-gallery-1.jpg')] bg-[50%_50%] cursor-zoom-in"
                        onMouseMove={Zoom}
                        style={{
                          backgroundImage: `url("/imgs/page/product/img-gallery-1.jpg")`,
                        }}
                      >
                        <Image
                          width={1200}
                          height={1200}
                          className="group-hover:!opacity-0 transition-[opacity] duration-300"
                          src="/imgs/page/product/img-gallery-5.jpg"
                          alt="product image"
                        />
                      </div>
                    </figure>
                    <figure>
                      <div
                        className="border-radius-10 group h-[430px] mt-28 bg-[url('/imgs/page/product/img-gallery-1.jpg')] bg-[50%_50%] cursor-zoom-in"
                        onMouseMove={Zoom}
                        style={{
                          backgroundImage: `url("/imgs/page/product/img-gallery-1.jpg")`,
                        }}
                      >
                        <Image
                          width={1200}
                          height={1200}
                          className="group-hover:!opacity-0 transition-[opacity] duration-300"
                          src="/imgs/page/product/img-gallery-6.jpg"
                          alt="product image"
                        />
                      </div>
                    </figure>
                    <figure>
                      <div
                        className="border-radius-10 group h-[430px] mt-28 bg-[url('/imgs/page/product/img-gallery-1.jpg')] bg-[50%_50%] cursor-zoom-in"
                        onMouseMove={Zoom}
                        style={{
                          backgroundImage: `url("/imgs/page/product/img-gallery-1.jpg")`,
                        }}
                      >
                        <Image
                          width={1200}
                          height={1200}
                          className="group-hover:!opacity-0 transition-[opacity] duration-300"
                          src="/imgs/page/product/img-gallery-7.jpg"
                          alt="product image"
                        />
                      </div>
                    </figure>
                  </Slider>
                </div>
                <Slider
                  {...settingsNav}
                  asNavFor={nav1!}
                  ref={(slider) => setNav2(slider)}
                  className="slider-nav-thumbnails !absolute"
                >
                  <div>
                    <div className="item-thumb">
                      <Image
                        width={1200}
                        height={1200}
                        src="/imgs/page/product/img-gallery-1.jpg"
                        alt="product image"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="item-thumb">
                      <Image
                        width={1200}
                        height={1200}
                        src="/imgs/page/product/img-gallery-2.jpg"
                        alt="product image"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="item-thumb">
                      <Image
                        width={1200}
                        height={1200}
                        src="/imgs/page/product/img-gallery-3.jpg"
                        alt="product image"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="item-thumb">
                      <Image
                        width={1200}
                        height={1200}
                        src="/imgs/page/product/img-gallery-4.jpg"
                        alt="product image"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="item-thumb">
                      <Image
                        width={1200}
                        height={1200}
                        src="/imgs/page/product/img-gallery-5.jpg"
                        alt="product image"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="item-thumb">
                      <Image
                        width={1200}
                        height={1200}
                        src="/imgs/page/product/img-gallery-6.jpg"
                        alt="product image"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="item-thumb">
                      <Image
                        width={1200}
                        height={1200}
                        src="/imgs/page/product/img-gallery-7.jpg"
                        alt="product image"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <h3 className="color-brand-3 mb-25 font-bold text-[32px]">
              Samsung Galaxy S22 Ultra, 8K Camera & Video, Brightest Display
              Screen, S Pen Pro
            </h3>
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-3 mb-mobile">
                <span className="bytext color-gray-500 font-xs font-medium">
                  by
                </span>
                <a
                  className="byAUthor color-gray-900 font-xs font-medium"
                  href="shop-vendor-single.html"
                >
                  {" "}
                  Ecom Tech
                </a>
                <div className="rating mt-5">
                  <Image
                    width={12}
                    height={12}
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    className="inline"
                  />
                  <Image
                    width={12}
                    height={12}
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    className="inline"
                  />
                  <Image
                    width={12}
                    height={12}
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    className="inline"
                  />
                  <Image
                    width={12}
                    height={12}
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    className="inline"
                  />
                  <Image
                    width={12}
                    height={12}
                    src="/imgs/template/icons/star.svg"
                    alt="Ecom"
                    className="inline"
                  />
                  <span className="font-xs color-gray-500 font-medium">
                    {" "}
                    (65 reviews)
                  </span>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-9 text-start text-sm-end">
                <a className="mr-20" href="shop-wishlist.html">
                  <span className="btn btn-wishlist mr-5 opacity-100 transform-none"></span>
                  <span className="font-md color-gray-900">
                    Add to Wish list
                  </span>
                </a>
                <a href="shop-compare.html">
                  <span className="btn btn-compare mr-5 opacity-100 transform-none"></span>
                  <span className="font-md color-gray-900">Add to Compare</span>
                </a>
              </div>
            </div>
            <div className="border-bottom pt-10 mb-20"></div>
            <div className="box-product-price">
              <h3 className="color-brand-3 price-main d-inline-block text-[32px] font-bold mr-10">
                $2856.3
              </h3>
              <span className="color-gray-500 price-line font-xl line-througt">
                $3225.6
              </span>
            </div>
            <div className="product-description mt-20 color-gray-900">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul className="list-dot">
                    <li>8k super steady video</li>
                    <li>Nightography plus portait mode</li>
                    <li>50mp photo resolution plus bright display</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul className="list-dot">
                    <li>Adaptive color contrast</li>
                    <li>premium design & craftmanship</li>
                    <li>Long lasting battery plus fast charging</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-product-color mt-20">
              <p className="font-sm color-gray-900">
                Color:<span className="color-brand-2 nameColor">Pink Gold</span>
              </p>
              <ul className="list-colors">
                <li className="disabled">
                  <Image
                    width={1200}
                    height={1200}
                    src="/imgs/page/product/img-gallery-1.jpg"
                    alt="Ecom"
                    className="inline"
                    title="Pink"
                  />
                </li>
                <li>
                  <Image
                    width={1200}
                    height={1200}
                    src="/imgs/page/product/img-gallery-2.jpg"
                    alt="Ecom"
                    className="inline"
                    title="Gold"
                  />
                </li>
                <li>
                  <Image
                    width={1200}
                    height={1200}
                    src="/imgs/page/product/img-gallery-3.jpg"
                    alt="Ecom"
                    className="inline"
                    title="Pink Gold"
                  />
                </li>
                <li>
                  <Image
                    width={1200}
                    height={1200}
                    src="/imgs/page/product/img-gallery-4.jpg"
                    alt="Ecom"
                    className="inline"
                    title="Silver"
                  />
                </li>
                <li className="active">
                  <Image
                    width={1200}
                    height={1200}
                    src="/imgs/page/product/img-gallery-5.jpg"
                    alt="Ecom"
                    className="inline"
                    title="Pink Gold"
                  />
                </li>
                <li className="disabled">
                  <Image
                    width={1200}
                    height={1200}
                    src="/imgs/page/product/img-gallery-6.jpg"
                    alt="Ecom"
                    className="inline"
                    title="Black"
                  />
                </li>
                <li className="disabled">
                  <Image
                    width={1200}
                    height={1200}
                    src="/imgs/page/product/img-gallery-7.jpg"
                    alt="Ecom"
                    className="inline"
                    title="Red"
                  />
                </li>
              </ul>
            </div>
            <div className="box-product-style-size mt-20">
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-20">
                  <p className="font-sm color-gray-900">
                    Style:<span className="color-brand-2 nameStyle">S22</span>
                  </p>
                  <ul className="list-styles">
                    <li className="disabled" title="S22 Ultra">
                      S22 Ultra
                    </li>
                    <li className="active" title="S22">
                      S22
                    </li>
                    <li title="S22 + Standing Cover">S22 + Standing Cover</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 mb-20">
                  <p className="font-sm color-gray-900">
                    Size:<span className="color-brand-2 nameSize">512GB</span>
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
            <div className="buy-product mt-30">
              <p className="font-sm mb-20">Quantity</p>
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
            <div className="info-product mt-40">
              <div className="row align-items-end">
                <div className="col-lg-4 col-md-4 mb-20">
                  <span className="font-sm font-medium color-gray-900">
                    SKU:<span className="color-gray-500">iphone12pro128</span>
                    <br />
                    Category:<span className="color-gray-500">Smartphones</span>
                    <br />
                    Tags:
                    <span className="color-gray-500">Blue, Smartphone</span>
                  </span>
                </div>
                <div className="col-lg-4 col-md-4 mb-20">
                  <span className="font-sm font-medium color-gray-900">
                    Free Delivery
                    <br />
                    <span className="color-gray-500">
                      Available for all locations.
                    </span>
                    <br />
                    <span className="color-gray-500">
                      Delivery Options & Info
                    </span>
                  </span>
                </div>
                <div className="col-lg-4 col-md-4 mb-20 text-start text-md-end">
                  <div className="d-inline-block">
                    <div className="share-link">
                      <span className="font-md-bold color-brand-3 mr-15">
                        Share
                      </span>
                      <a className="facebook hover-up" href="#"></a>
                      <a className="printest hover-up" href="#"></a>
                      <a className="twitter hover-up" href="#"></a>
                      <a className="instagram hover-up" href="#"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom pt-30 mb-40"></div>
        <h4 className="color-brand-3 mb-20">Frequently Bought Together</h4>
        <div className="box-bought-together">
          <div className="box-product-bought">
            <div className="product-bought">
              <Image
                width={1200}
                height={1200}
                src="/imgs/page/product/sp1.png"
                alt="Ecom"
              />
            </div>
            <div className="product-bought">
              <Image
                width={1200}
                height={1200}
                src="/imgs/page/product/sp2.png"
                alt="Ecom"
              />
            </div>
            <div className="product-bought">
              <Image
                width={1200}
                height={1200}
                src="/imgs/page/product/sp3.png"
                alt="Ecom"
              />
            </div>
          </div>
          <div className="price-bought">
            <h3 className="color-brand-3 mr-10">$2856.3</h3>
            <span className="font-lg color-gray-900">(3 items)</span>
            <div className="box-btn-add-cart">
              <a className="btn btn-cart" href="shop-cart.html">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <label className="cb-container-2">
          <input type="checkbox" checked />
          <span className="font-md color-brand-3">
            <strong>This item:</strong>iPhone 12 Pro Max 128GB Pacific Blue -
            $1,099.00
          </span>
          <span className="checkmark"></span>
        </label>
        <label className="cb-container-2">
          <input type="checkbox" checked />
          <span className="font-md color-brand-3">
            Apple AirPods Pro, Active Noise Cancellation, Custom Fit - $197.00
          </span>
          <span className="checkmark"></span>
        </label>
        <label className="cb-container-2">
          <input type="checkbox" checked />
          <span className="font-md color-brand-3">
            Apple iMac 24&rdquo; All-In-One Computer, Apple M1, 8GB RAM, 512GB
            SSD, macOS Big Sur, Green, MGPJ3LL/A - $1,599.00
          </span>
          <span className="checkmark"></span>
        </label>
      </div>
    </section>
  );
};

export default Top;

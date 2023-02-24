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
import ReactHtmlParser from "react-html-parser";
import NextArrow from "../arrows/next-arrow";
import PrevArrow from "../arrows/prev-arrow";
const Top = () => {
  const { product, products, isError, message, isSuccess, isLoading } =
    useAppSelector((state) => state.product);

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
      product && product.images.length >= 5
        ? 5
        : product && product.images.length,
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

  const { addItem, inCart, getItem } = useCart();
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
                    {product &&
                      product.images.map((img: any, idx: any) => (
                        <figure key={img.public_id}>
                          <div
                            className={`border-radius-10  group h-[430px] mt-28 bg-[50%_50%] cursor-zoom-in`}
                            onMouseMove={Zoom}
                            style={{
                              backgroundImage: `url(${img.url})`,
                            }}
                          >
                            <Image
                              width={img.width}
                              height={img.height}
                              className="group-hover:!opacity-0 transition-[opacity] duration-300"
                              src={img.url}
                              alt="product image"
                            />
                          </div>
                        </figure>
                      ))}
                  </Slider>
                </div>
                <Slider
                  {...settingsNav}
                  asNavFor={nav1!}
                  ref={(slider) => setNav2(slider)}
                  className="slider-nav-thumbnails !absolute"
                >
                  {product &&
                    product.images.map((img: any) => (
                      <div key={img.public_id}>
                        <div className="item-thumb">
                          <Image
                            width={img.width}
                            height={img.height}
                            src={img.url}
                            alt="product image"
                          />
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <h3 className="color-brand-3 mb-25 font-bold text-[32px]">
              {product && product.name}
            </h3>
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-3 mb-mobile">
                <span className="bytext color-gray-500 font-xs font-medium">
                  marque:
                </span>
                <a
                  className="byAUthor color-gray-900 font-xs font-medium"
                  href="shop-vendor-single.html"
                >
                  {" "}
                  {product && product.brand}
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
                <a
                  className="mr-20"
                  onClick={() =>
                    addWishlist({
                      ...product,
                      id: product._id,
                    })
                  }
                >
                  <span className="btn btn-wishlist mr-5 opacity-100 transform-none"></span>
                  <span className="font-md color-gray-900">
                    Ajouter à ma wishlist
                  </span>
                </a>
              </div>
            </div>
            <div className="border-bottom pt-10 mb-20"></div>
            <div className="box-product-price">
              <h3 className="color-brand-3 price-main d-inline-block text-[32px] font-bold mr-10">
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
            <div className="product-description mt-20 color-gray-900">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul className="list-dot">
                    {list && list.length > 6
                      ? list
                          .slice(0, 3)
                          .map((l: any, idx: any) => (
                            <li key={idx}>{ReactHtmlParser(l)}</li>
                          ))
                      : list &&
                        list.map((l: any, idx: any) => (
                          <li key={idx}>{ReactHtmlParser(l)}</li>
                        ))}
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul className="list-dot">
                    {list && list.length > 6
                      ? list
                          .slice(3, 6)
                          .map((l: any, idx: any) => (
                            <li key={idx}>{ReactHtmlParser(l)}</li>
                          ))
                      : list &&
                        list.map((l: any, idx: any) => (
                          <li key={idx}>{ReactHtmlParser(l)}</li>
                        ))}
                  </ul>
                </div>
              </div>
            </div>
            {product && product.colors.length > 0 && (
              <div className="box-product-color mt-10">
                {imgColors && (
                  <p className="font-sm color-gray-900">
                    Couleur:
                    <span className="color-brand-2 nameColor">{color}</span>
                  </p>
                )}

                <ul className="list-colors">
                  {imgColors &&
                    imgColors.map((img: any, idx: any) => (
                      <li
                        key={idx}
                        className={`${img.color === color ? "active" : ""} ${
                          !img.color ? "disabled" : ""
                        }`}
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
            <div className="box-product-style-size mt-20">
              <div className="row">
                {style && (
                  <div className="col-lg-12 mb-10">
                    <p className="font-sm color-gray-900">
                      Style:
                      <span className="color-brand-2 nameStyle">{style}</span>
                    </p>
                    <ul className="list-styles">
                      {product &&
                        product.styles.map((styl: any, idx: any) => (
                          <li
                            key={idx}
                            className={`${styl === style ? "active" : ""} ${
                              !style ? "disabled" : ""
                            }`}
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
                      <span className="color-brand-2 nameSize">{size}</span>
                    </p>
                    <ul className="list-sizes">
                      {product &&
                        product.sizes.map((siz: any, idx: any) => (
                          <li
                            key={idx}
                            className={`${siz === size ? "active" : ""} ${
                              !size ? "disabled" : ""
                            }`}
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
            <div className="buy-product mt-30">
              <p className="font-sm mb-20">Quantity</p>
              <div className="box-quantity">
                <div className="input-quantity">
                  <input
                    className="font-xl color-brand-3"
                    type="number"
                    value={qty}
                    max={product && product.countInStock}
                    readOnly
                  />
                  <span className="minus-cart" onClick={handleDecrement}></span>
                  <span className="plus-cart" onClick={handleIncrement}></span>
                </div>
                <div className="button-buy">
                  <a
                    className={`btn btn-cart ${disabled ? "disabled" : ""}`}
                    onClick={() => addToCart(product)}
                  >
                    Ajouter au panier
                  </a>
                  <a className="btn btn-buy" href="shop-checkout.html">
                    Acheter maintenant
                  </a>
                </div>
              </div>
            </div>
            <div className="info-product mt-40">
              <div className="row align-items-end">
                <div className="col-lg-4 col-md-4 mb-20">
                  <span className="font-sm font-medium color-gray-900">
                    SKU:
                    <span className="color-gray-500">
                      {product && product.sku}
                    </span>
                    <br />
                    Category:
                    <span className="color-gray-500">
                      {product && product.category.name}
                    </span>
                    <br />
                  </span>
                </div>
                <div className="col-lg-4 col-md-4 mb-20">
                  <span className="font-sm font-medium color-gray-900">
                    Livraison Gratuite
                    <br />
                    <span className="color-gray-500">
                      Disponibles pour tous les lieux.
                    </span>
                    <br />
                    <span className="color-gray-500">
                      Options de livraison et renseignements
                    </span>
                  </span>
                </div>
                <div className="col-lg-4 col-md-4 mb-20 text-start text-md-end">
                  <div className="d-inline-block">
                    <div className="share-link">
                      <span className="font-md-bold color-brand-3 mr-15">
                        Partager
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
        {/* <h4 className="color-brand-3 mb-20">Frequently Bought Together</h4>
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
        </div> */}
        {/* <label className="cb-container-2">
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
        </label> */}
      </div>
    </section>
  );
};

export default Top;

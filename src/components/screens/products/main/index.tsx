import { useWishlist } from "context/wishlistContext";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { getProductById } from "redux/products/productSlice";
import ReactHtmlParser from "react-html-parser";
import LeftSidebar from "../left";
import { useRecviewed } from "context/recviewedContext";

const Main = () => {
  const { products } = useAppSelector((store) => store.product);
  const dispatch = useAppDispatch();
  const { addItem } = useCart();
  const { addItem: addWishlist } = useWishlist();

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

  //  CALCULATE THE TOTAL PERCENTAGE OF RATINGS
  const calculate_the_percentage = (numbReviews: number, rating: number) => {
    if (numbReviews !== 0 && rating !== 0) {
      return (rating * 100) / numbReviews;
    } else {
      return 0;
    }
  };

  return (
    <div className="section-box shop-template mt-30">
      <div className="containers">
        <div className="row">
          <div className="col-lg-9 order-first order-lg-last">
            <div className="banner-ads-top mb-30">
              <a href="shop-single-product-3.html">
                <Image
                  src="/imgs/page/shop/banner.png"
                  alt="Ecom"
                  width={1269}
                  height={269}
                  priority
                />
              </a>
            </div>
            <div className="box-filters mt-0 pb-5 border-bottom">
              <div className="row">
                <div className="col-xl-2 col-lg-3 mb-10 text-lg-start text-center">
                  <a
                    className="btn btn-filter font-sm color-brand-3 font-medium"
                    href="#ModalFiltersForm"
                    data-bs-toggle="modal"
                  >
                    Tous les filtres
                  </a>
                </div>
                <div className="col-xl-10 col-lg-9 mb-10 text-lg-end text-center">
                  <span className="font-sm color-gray-900 font-medium border-1-right span">
                    Affichage de 1 à 16 résultats sur 17
                  </span>
                  <div className="d-inline-block">
                    <span className="font-sm color-gray-500 font-medium">
                      Trier par :
                    </span>
                    <div className="dropdown dropdown-sort border-1-right">
                      <button
                        className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                        id="dropdownSort"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Derniers produits
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-light"
                        aria-labelledby="dropdownSort"
                        style={{ margin: "0px" }}
                      >
                        <li>
                          <a className="dropdown-item active" href="#">
                            Derniers produits
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Plus anciens produits
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Produits commentés
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-inline-block">
                    <span className="font-sm color-gray-500 font-medium">
                      Afficher
                    </span>
                    <div className="dropdown dropdown-sort border-1-right">
                      <button
                        className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                        id="dropdownSort2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-display="static"
                      >
                        <span>30 articles</span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-light"
                        aria-labelledby="dropdownSort2"
                      >
                        <li>
                          <a className="dropdown-item active" href="#">
                            30 articles
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            50 articles
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            100 articles
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-20">
              {products.map((product: any) => (
                <div
                  key={product._id}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
                >
                  <div className="card-grid-style-3">
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
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                          onClick={() => {
                            addWishlist({
                              ...product,
                              id: product._id,
                            });
                            toast.success(
                              "Produit ajouté au liste de souhait!"
                            );
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
                        <Link
                          onClick={() => addReviewedFunc(product)}
                          href={`/products/${product._id}`}
                        >
                          <Image
                            src={product.images[1].url}
                            alt="Ecom"
                            width={product.images[1].width}
                            height={product.images[1].height}
                          />
                        </Link>
                      </div>
                      <div className="info-right">
                        <Link
                          onClick={() => addReviewedFunc(product)}
                          className="font-xs color-gray-500"
                          href={`/products/${product._id}`}
                        >
                          {product.brand}
                        </Link>
                        <br />
                        <Link
                          onClick={() => addReviewedFunc(product)}
                          className="color-brand-3 font-sm-bold truncate max-w-[199.4px] block"
                          href={`/products/${product._id}`}
                        >
                          {product.name}
                        </Link>
                        <div className="rating">
                          <div className="product-rate d-inline-block mr-15">
                            <div
                              className="product-rating"
                              style={{
                                width: `${
                                  product &&
                                  calculate_the_percentage(5, product.rating)
                                }%`,
                              }}
                            ></div>
                          </div>
                          <span className="font-xs color-gray-500">
                            ({product.numbReviews})
                          </span>
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
                </div>
              ))}
            </div>
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link page-prev" href="#"></a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link active" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link page-next" href="#"></a>
                </li>
              </ul>
            </nav>
          </div>
          <LeftSidebar />
        </div>
      </div>
    </div>
  );
};

export default Main;

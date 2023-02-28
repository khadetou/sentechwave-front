import { useWishlist } from "context/wishlistContext";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { getProductById } from "redux/products/productSlice";
import ReactHtmlParser from "react-html-parser";
import { useRecviewed } from "context/recviewedContext";

const MayLike = () => {
  const { products } = useAppSelector((store) => store.product);
  const dispatch = useAppDispatch();
  const { addItem } = useCart();
  const { addItem: addWishlist } = useWishlist();
  const handleQuickviewClick = (event: any) => {
    const productId = event.target.dataset.productId;
    dispatch(getProductById(productId));
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
    <div>
      {" "}
      <h4 className="color-brand-3 text-2xl font-bold">
        Vous pourriez également aimer
      </h4>
      <div className="list-products-5 mt-20">
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
                <Link href={`/products/${product._id}`}>
                  <Image
                    src={product.images[1].url}
                    alt="Ecom"
                    width={648}
                    height={438}
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
                  className="color-brand-3 truncate max-w-[219px] block font-sm-bold"
                  href={`/products/${product._id}`}
                >
                  {product.name}
                </Link>
                <div className="rating">
                  <div className="product-rate d-inline-block">
                    <div
                      className="product-rating"
                      style={{
                        width: `${(100 * product.rating) / 5}%`,
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
        ))}
      </div>
    </div>
  );
};

export default MayLike;

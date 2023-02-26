import MayLike from "components/screens/product/main/bottom/maylike";
import RecViewed from "components/screens/product/main/bottom/recviewed";
import { useWishlist } from "context/wishlistContext";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Item, useCart } from "react-use-cart";

const PageContent = () => {
  const { items, removeItem, totalItems } = useWishlist();
  const { addItem } = useCart();

  const [Items, setItems] = useState<Item[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setItems(items);
    setTotal(totalItems);
  }, [items, totalItems]);

  return (
    <section className="section-box shop-template">
      <div className="containers">
        <div className="box-wishlist">
          <div className="head-wishlist">
            <div className="item-wishlist">
              <div className="wishlist-cb">
                <input className="cb-layout cb-all" type="checkbox" />
              </div>
              <div className="wishlist-product">
                <span className="font-md-bold color-brand-3">Produit</span>
              </div>
              <div className="wishlist-price">
                <span className="font-md-bold color-brand-3">Prix</span>
              </div>
              <div className="wishlist-status">
                <span className="font-md-bold color-brand-3">
                  Statut des stocks
                </span>
              </div>
              <div className="wishlist-action">
                <span className="font-md-bold color-brand-3">Action</span>
              </div>
              <div className="wishlist-remove">
                <span className="font-md-bold color-brand-3">Supprimer</span>
              </div>
            </div>
          </div>
          <div className="content-wishlist">
            {Items.length > 0 ? (
              Items.map((item) => (
                <div key={item.id} className="item-wishlist">
                  <div className="wishlist-cb">
                    <input className="cb-layout cb-select" type="checkbox" />
                  </div>
                  <div className="wishlist-product">
                    <div className="product-wishlist">
                      <div className="product-image">
                        <a href="shop-single-product.html">
                          <Image
                            src={item.images[0].url}
                            alt="Ecom"
                            width={343}
                            height={308}
                          />
                        </a>
                      </div>
                      <div className="product-info">
                        <a href="shop-single-product.html">
                          <h6 className="color-brand-3 font-bold">
                            {item.name}
                          </h6>
                        </a>
                        <div className="rating">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{
                                width: `${(100 * item.rating) / 5}%`,
                              }}
                            ></div>
                          </div>
                          <span className="font-xs color-gray-500"> (65)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist-price">
                    <h4 className="color-brand-3 font-bold text-2xl">
                      {Number(item.price).toLocaleString("fr-FR", {
                        style: "currency",
                        currency: "XOF",
                      })}
                    </h4>
                  </div>
                  <div className="wishlist-status">
                    <span
                      className={`btn btn-gray font-md-bold color-brand-3 ${
                        item.countInStock > 0
                          ? ""
                          : "!bg-[#ffaeae] !text-[#970404] !ml-5"
                      }`}
                    >
                      {item.countInStock > 0 ? "En stock" : "hors stock"}
                    </span>
                  </div>
                  <div className="wishlist-action">
                    <a
                      className="btn btn-cart font-sm-bold"
                      onClick={() => {
                        addItem({
                          ...item,
                        });
                        toast.success("Produit ajouté au panier avec succés !");
                        removeItem(item.id);
                      }}
                    >
                      Ajouter au panier
                    </a>
                  </div>
                  <div className="wishlist-remove">
                    <a
                      className="btn btn-delete"
                      onClick={() => {
                        removeItem(item.id);
                        toast.info("Produits enlévé de la lite des souhaits !");
                      }}
                    ></a>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="w-full h-full flex items-center justify-center">
                  <h3 className="text-center font-bold text-xl py-8">
                    Votre Liste de souhait est vide!
                  </h3>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="border-bottom pt-20 mb-40"></div>
        <MayLike />
        <div className="border-bottom pt-20 mb-40"></div>
        <RecViewed />
      </div>
    </section>
  );
};

export default PageContent;

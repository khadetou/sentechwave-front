import MayLike from "components/maylike";
import RecViewed from "components/recviewed";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import SlideDown from "react-slidedown";
import { useCart, Item } from "react-use-cart";

const MainCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    items,
    isEmpty,
    removeItem,
    updateItemQuantity,
    cartTotal,
    emptyCart,
  } = useCart();
  const [empty, setEmpty] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState("Dakar-Plateau");
  const [Items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    setEmpty(isEmpty);
    setTotalCost(cartTotal);
    setItems(items);
  }, [cartTotal, isEmpty, items]);

  const handleIncrement = (item: Item) => {
    if (item && item.quantity! < item.countInStock) {
      updateItemQuantity(item.id, item.quantity! + 1);
    }
  };
  const handleDecrement = (item: Item) => {
    if (item.quantity! > 1) {
      updateItemQuantity(item.id, item.quantity! - 1);
    }
  };

  // SHIPPING PRICING CALCULATION
  const shippingRegions: any = {
    "Dakar-Plateau": 0.05,
    Almadies: 0.05,
    Medina: 0.05,
    Plateau: 0.05,
    Fann: 0.05,
    Mermoz: 0.05,
    Ngor: 0.05,
    Ouakam: 0.05,
    Yoff: 0.05,
    HLM: 0.05,
    "Gueule Tapee": 0.05,
    "Dieuppeul Derkle": 0.05,
    "Grand Dakar": 0.05,
    "Point E": 0.05,
    "Bel Air": 0.05,
    Colobane: 0.05,
    Hann: 0.05,
    Liberte: 0.05,
    Sicap: 0.05,
    Amitie: 0.05,
    "Sacre Coeur": 0.05,
    Pikine: 0.1,
    "Patte d'Oie": 0.1,
    Golf: 0.1,
    Mbao: 0.1,
    "Parcelles Assainies": 0.1,
    Guédiawaye: 0.1,
    Thiaroye: 0.1,
    Rufisque: 0.2,
    "Keur Massar": 0.2,
    Malika: 0.2,
    Yeumbeul: 0.2,
    Cambérène: 0.2,
    Pout: 0.3,
    "Tivaouane Peulh-Niaga": 0.3,
    Mboro: 0.3,
    Diamniadio: 0.3,
    Kolda: 0.5,
    Ziguinchor: 0.5,
    Tambacounda: 0.5,
    "Saint-Louis": 0.5,
    Louga: 0.5,
    Kaolack: 0.5,
    Diourbel: 0.5,
    Fatick: 0.5,
    Matam: 0.5,
  };

  const calculateShipping = (totalCost: number, selectedRegion: string) => {
    if (selectedRegion in shippingRegions) {
      return totalCost * shippingRegions[selectedRegion];
    } else {
      return totalCost * 0.1;
    }
  };

  const handleFreeShipping = () => {
    if (totalCost >= 2250000) {
      return 0;
    } else {
      return calculateShipping(totalCost, selectedRegion);
    }
  };

  const handleRegionChange = (e: any) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <section className="section-box shop-template">
      <div className="containers">
        <div className="row">
          <div className="col-lg-9">
            <div className="box-carts">
              <div className="head-wishlist">
                <div className="item-wishlist">
                  <div className="wishlist-cb">
                    <input className="cb-layout cb-all" type="checkbox" />
                  </div>
                  <div className="wishlist-product">
                    <span className="font-md-bold color-brand-3">Produit</span>
                  </div>
                  <div className="wishlist-price">
                    <span className="font-md-bold color-brand-3">
                      Prix unitaire
                    </span>
                  </div>
                  <div className="wishlist-status">
                    <span className="font-md-bold color-brand-3">Quantité</span>
                  </div>
                  <div className="wishlist-action">
                    <span className="font-md-bold color-brand-3">
                      Sous-total
                    </span>
                  </div>
                  <div className="wishlist-remove">
                    <span className="font-md-bold color-brand-3">
                      Supprimer
                    </span>
                  </div>
                </div>
              </div>
              <div className="content-wishlist mb-20">
                {!empty ? (
                  Items.map((item) => (
                    <div key={item.id} className="item-wishlist">
                      <div className="wishlist-cb">
                        <input
                          className="cb-layout cb-select"
                          type="checkbox"
                        />
                      </div>
                      <div className="wishlist-product">
                        <div className="product-wishlist">
                          <div className="product-image">
                            <a href="shop-single-product.html">
                              <Image
                                src={item.images[0].url}
                                alt="Ecom"
                                width={339}
                                height={246}
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
                              <span className="font-xs color-gray-500">
                                {" "}
                                ({item.numbReviews})
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wishlist-price !w-fit">
                        <h4 className="color-brand-3 font-bold text-xl">
                          {Number(item.price).toLocaleString("fr-Fr", {
                            style: "currency",
                            currency: "XOF",
                          })}
                        </h4>
                      </div>
                      <div className="wishlist-status !mx-4">
                        <div className="box-quantity ">
                          <div className="input-quantity !mr-0">
                            <input
                              className="font-xl color-brand-3"
                              type="text"
                              value={item.quantity}
                              readOnly
                            />
                            <span
                              className="minus-cart"
                              onClick={() => handleDecrement(item)}
                            ></span>
                            <span
                              className="plus-cart"
                              onClick={() => handleIncrement(item)}
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div className="wishlist-action">
                        <h4 className="color-brand-3 font-bold text-xl">
                          {Number(item.itemTotal).toLocaleString("fr-Fr", {
                            style: "currency",
                            currency: "XOF",
                          })}
                        </h4>
                      </div>
                      <div className="wishlist-remove">
                        <a className="btn btn-delete" href="#"></a>
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
              <div className="row mb-40">
                <div className="col-lg-6 col-md-6 col-sm-6-col-6">
                  <Link
                    className="btn btn-buy w-auto arrow-back mb-10"
                    href="/products"
                  >
                    Continuer les achats.
                  </Link>
                </div>
                {/* <div className="col-lg-6 col-md-6 col-sm-6-col-6 text-md-end">
                  <a
                    className="btn btn-buy w-auto update-cart mb-10"
                    href="shop-cart.html"
                  >
                    Update cart
                  </a>
                </div> */}
              </div>
              <div className="row mb-50">
                <div className="col-lg-6 col-md-6">
                  <div className="box-cart-left">
                    <h5 className="font-md-bold mb-10">
                      Calculer les frais de livraison
                    </h5>
                    <div className="flex justify-between">
                      <div>
                        <span className="font-sm-bold mb-5 d-inline-block color-gray-500">
                          Frais forfaitaires :
                        </span>
                        <span className="font-sm-bold d-inline-block color-brand-3">
                          5%
                        </span>
                      </div>
                      <p className="font-sm-bold d-inline-block color-brand-3">
                        Frais Total:{" "}
                        {totalCost >= 2250000
                          ? "GRATUITS"
                          : `${handleFreeShipping().toLocaleString()} FCFA`}
                      </p>
                    </div>
                    <div className="form-group">
                      <select
                        value={selectedRegion}
                        onChange={handleRegionChange}
                        className="form-control select-style1 color-gray-700"
                      >
                        {Object.keys(shippingRegions).map((region) => (
                          <option value={region} key={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-10">
                        <input
                          className="form-control"
                          placeholder="Stage / Pays"
                        />
                      </div>
                      <div className="col-lg-6 mb-10">
                        <input
                          className="form-control"
                          placeholder="PostCode / ZIP"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="box-cart-right p-20">
                    <h5 className="font-md-bold mb-10">Appliquer le coupon</h5>
                    <span className="font-sm-bold mb-5 d-inline-block color-gray-500">
                      Utilisez un code promo ?
                    </span>
                    <div className="form-group d-flex">
                      <input
                        className="form-control mr-15"
                        placeholder="Enter Your Coupon"
                      />
                      <button className="btn btn-buy w-auto">Appliquer</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="summary-cart">
              <div className="border-bottom mb-10">
                <div className="row">
                  <div className="col-4">
                    <span className="font-md-bold color-gray-500">
                      Sous-total
                    </span>
                  </div>
                  <div className="col-8 text-end">
                    <h4 className="text-2xl font-bold">
                      {" "}
                      {Number(totalCost).toLocaleString("fr-Fr", {
                        style: "currency",
                        currency: "XOF",
                      })}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="border-bottom mb-10">
                <div className="row">
                  <div className="col-4">
                    <span className="font-md-bold color-gray-500">
                      Livraison
                    </span>
                  </div>
                  <div className="col-8 text-end">
                    <h4 className="text-2xl font-bold">
                      {totalCost >= 2250000
                        ? "GRATUITS"
                        : `${handleFreeShipping().toLocaleString()} FCFA`}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="border-bottom mb-10">
                <div className="row">
                  <div className="col-6">
                    <span className="font-md-bold color-gray-500">
                      Estimation pour
                    </span>
                  </div>
                  <div className="col-6 text-end">
                    <h6 className="text-base font-bold">{selectedRegion}</h6>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <div className="row">
                  <div className="col-4">
                    <span className="font-md-bold color-gray-500">Total</span>
                  </div>
                  <div className="col-8 text-end">
                    <h4 className="text-2xl font-bold">
                      {" "}
                      {totalCost >= 2250000
                        ? Number(totalCost).toLocaleString("fr-Fr", {
                            style: "currency",
                            currency: "XOF",
                          })
                        : Number(
                            totalCost + handleFreeShipping()
                          ).toLocaleString("fr-Fr", {
                            style: "currency",
                            currency: "XOF",
                          })}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="box-button">
                <Link className="btn btn-buy" href="/checkout">
                  Passer à la caisse.
                </Link>
              </div>
            </div>
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

export default MainCart;

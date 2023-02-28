import ButtonLoading from "components/Loadingbutton";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";

import SlideDown from "react-slidedown";
import { toast } from "react-toastify";
import { useCart, Item, Metadata } from "react-use-cart";
import { login } from "redux/auth/authSlice";
import { createOrder, reset } from "redux/order/orderSlice";

const MainCheckout = () => {
  // SHIPPING PRICING CALCULATION
  const shippingRegions: any = useMemo(
    () => ({
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
    }),
    []
  );
  const [value, setValue] = useState<any>("United Kingdom");
  const [value1, setValue1] = useState<any>("United Kingdom");
  const [checkbox, setCheckbox] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const onSelectChange = (value: any) => {
    setIsOpen(!isOpen);
    setShippingPrice(value.value);
    setRegion(value.label);
  };
  const onSelectChange1 = (value: any) => {
    setIsOpen1(!isOpen1);
    setValue1(value.label);
  };

  const [totalCost, setTotalCost] = useState(0);
  const [metaDatas, setMetaDatas] = useState<Metadata>({});
  const [Items, setItems] = useState<Item[]>([]);
  const { items, cartTotal, setCartMetadata, metadata, totalItems, emptyCart } =
    useCart();
  const [totalItem, setTotalItem] = useState(0);
  const [region, setRegion] = useState("");
  const [ville, setVille] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shippingPrice, setShippingPrice] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [note, setNote] = useState("");
  const [deliveryMode, setDeliveryMode] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [disable, setDisable] = useState(false);
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState(false);

  const dispatch = useAppDispatch();
  const { isSuccess, isError, message, isLoading, order } = useAppSelector(
    (store) => store.order
  );
  const { push, asPath } = useRouter();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setTotalCost(cartTotal);
    setItems(items);
    setMetaDatas(metadata!);
    setTotalItem(totalItems);
    if (metadata && Object.keys(metadata!).length !== 0) {
      setRegion(metaDatas.region);
      setVille(metaDatas.ville);
      setShippingPrice(metaDatas.price);
      setAddress(metaDatas.address);
      setFirstname(metaDatas.firstname);
      setLastname(metaDatas.lastname);
      setShippingPrice(metaDatas.shippingPrice);
      setPhone(metaDatas.phone);
      setNote(metaDatas.note);
      setDeliveryMode(metaDatas.deliveryMode);
      setPaymentMode(metaDatas.paymentMode);
      setEmail(metaDatas.email);
    }
    if (isSuccess && !check) {
      setCheck(true);
      toast.success("Votre commande a été éffectuer avec succès!");
      emptyCart();
      push(`/dashboard`);
    }
    if (isError) {
      if (message.message !== "undefined" && Array.isArray(message.message)) {
        if (message.message.length > 0) {
          let list: Array<string> = [...message.message];
          list.map((item: any) => toast.error(item));
        }
      } else if (message.message !== "undefined" && message.message) {
        toast.error(message.message);
      } else if (Array.isArray(message)) {
        if (message.length > 0) {
          let list: Array<string> = [...message];
          list.map((item: any) => toast.error(item));
        }
      } else {
        toast.error(message);
      }
      dispatch(reset());
    }
    if (isLoading) {
      setDisable(true);
    }
  }, [
    cartTotal,
    items,
    metadata,
    metaDatas,
    isSuccess,
    isError,
    isLoading,
    push,
    dispatch,
    message,
    totalItems,
    emptyCart,
    check,
  ]);

  let cartItems: any[] = [];
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error("Veuillez vous connectez !");
      return;
    }
    setValidate(true);

    Items.map(({ id, price, quantity, name, images }) => {
      cartItems.push({
        name,
        qty: quantity,
        images,
        price,
        product: id,
      });
    });

    if (!region || !address || !phone || !ville) {
      toast.error("Remplissez les champs obligatoires");
    } else {
      setCartMetadata({
        region,
        shippingPrice:
          typeof Number(shippingPrice) === "number" && shippingPrice
            ? Number(shippingPrice)
            : 0,
        firstname,
        lastname,
        ville,
        address,
        phone,
        note,
        deliveryMode,
        paymentMode,
      });
    }

    const cart = {
      orderItems: cartItems,
      shippingAddress: {
        firstname,
        lastname,
        email,
        shipping: deliveryMode,
        payment: paymentMode,
        address,
        phone,
        ville,
        region,
      },
      itemsPrice: totalCost,
      note,
      shippingPrice,
      totalPrice:
        totalCost +
        (typeof Number(shippingPrice) && shippingPrice
          ? Number(shippingPrice)
          : 0),
    };
    dispatch(createOrder(cart));
  };
  const [show, setShow] = useState(false);
  const [credentials, setCredentials] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState("Dakar-Plateau");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { isAuthenticated } = useAppSelector((store) => store.auth);

  useEffect(() => {
    if (selectedRegion in shippingRegions) {
      const shippiPrice = totalCost * shippingRegions[selectedRegion];
      setShippingPrice(shippiPrice);
    } else {
      setShippingPrice(totalCost * 0.1);
    }
  }, [totalCost, selectedRegion, shippingRegions]);

  const handleFreeShipping = () => {
    if (totalCost >= 2250000) {
      return 0;
    } else {
      return shippingPrice;
    }
  };

  const handleRegionChange = (e: any) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <section className="section-box shop-template">
      <div className="containers">
        <div className="row">
          <div className="col-lg-6">
            <div className="box-border">
              <div className="box-payment">
                <a className="btn btn-gpay disabled">
                  <Image
                    src="/imgs/page/checkout/gpay.svg"
                    width={101}
                    height={42}
                    alt="Ecom"
                  />
                </a>
                <a className="btn btn-paypal disabled">
                  <Image
                    src="/imgs/page/checkout/paypal.svg"
                    width={101}
                    height={42}
                    alt="Ecom"
                  />
                </a>
                <a className="btn btn-amazon disabled">
                  <Image
                    src="/imgs/page/checkout/amazon.svg"
                    width={101}
                    height={42}
                    alt="Ecom"
                  />
                </a>
                <label
                  className="font-sm color-brand-3 btn btn-paypal"
                  htmlFor="checkboxOffers"
                >
                  <input
                    className="checkboxOffer"
                    id="checkboxOffers"
                    type="checkbox"
                    checked
                    readOnly
                  />
                  Payer à la livraison
                </label>
              </div>
              <div className="border-bottom-4 text-center mb-20">
                <div className="text-or font-md color-gray-500">Ou</div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6 mb-20">
                  <h5 className="font-md-bold color-brand-3 text-sm-start text-center">
                    Informations de contact
                  </h5>
                </div>
                {!isAuthenticated && (
                  <div className="col-lg-6 col-sm-6 mb-20 text-sm-end text-center">
                    <span className="font-sm color-brand-3">
                      Déjà inscrit(e) ?
                    </span>
                    <Link
                      className="font-sm color-brand-1"
                      href={{
                        pathname: "/login",
                        query: {
                          from: asPath,
                        },
                      }}
                    >
                      Se connecter
                    </Link>
                  </div>
                )}
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Email*"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label
                      className="font-sm color-brand-3"
                      htmlFor="checkboxOffers"
                    >
                      <input
                        className="checkboxOffer"
                        id="checkboxOffers"
                        type="checkbox"
                        readOnly
                      />
                      Gardez-moi informé(e) des actualités et offres exclusives
                    </label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <h5 className="font-md-bold color-brand-3 mt-15 mb-20">
                    Adresse de livraison
                  </h5>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Prénom*"
                      name="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Nom*"
                      name="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Address 1*"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                {/* -------------------------- */}
                {/* <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Address 2*"
                    />
                  </div>
                </div> */}
                {/* -------------------------- */}

                <div className="col-lg-6">
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
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Ville*"
                      name="ville"
                      value={ville}
                      onChange={(e) => setVille(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Code Postal / ZIP* (facultatif)"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Region"
                      name="region"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control font-sm"
                      type="text"
                      placeholder="Numéro Téléphone*"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-0">
                    <textarea
                      className="form-control font-sm"
                      placeholder="Informations supplémentaires"
                      rows={5}
                      name="note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-20">
              <div className="col-lg-6 col-5 mb-20">
                <Link
                  className="btn font-sm-bold color-brand-1 arrow-back-1"
                  href="/cart"
                >
                  Retourner au panier
                </Link>
              </div>
              <div className="col-lg-6 col-7 mb-20 text-end">
                {isAuthenticated ? (
                  <a
                    className="btn btn-buy w-auto arrow-next"
                    onClick={onSubmit}
                  >
                    Passer la commande
                  </a>
                ) : (
                  <Link
                    className="btn btn-buy w-auto arrow-next"
                    href={{
                      pathname: "/login",
                      query: {
                        from: asPath,
                      },
                    }}
                  >
                    Se connecter
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-border">
              <h5 className="font-md-bold mb-20">Votre commande</h5>
              <div className="listCheckout">
                {Items.map((item) => (
                  <div key={item.id} className="item-wishlist">
                    <div className="wishlist-product">
                      <div className="product-wishlist">
                        <div className="product-image">
                          <a href="shop-single-product.html">
                            <Image
                              src={item.images[1].url}
                              alt="Ecom"
                              width={339}
                              height={246}
                            />
                          </a>
                        </div>
                        <div className="product-info">
                          <a href="shop-single-product.html">
                            <h6 className="color-brand-3">{item.name}</h6>
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
                    <div className="wishlist-status">
                      <h5 className="color-gray-500">x{item.quantity}</h5>
                    </div>
                    <div className="wishlist-price">
                      <h4 className="color-brand-3 font-lg-bold">
                        {item.price}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="form-group d-flex mt-15">
                <input
                  className="form-control mr-15"
                  placeholder="Enter Your Coupon"
                  readOnly
                />
                <button className="btn btn-buy w-auto">Appliquer</button>
              </div>
              <div className="form-group mb-0">
                <div className="row mb-10">
                  <div className="col-lg-6 col-6">
                    <span className="font-md-bold color-brand-3">
                      Sou-total
                    </span>
                  </div>
                  <div className="col-lg-6 col-6 text-end">
                    <span className="font-lg-bold color-brand-3">
                      {totalCost}
                    </span>
                  </div>
                </div>
                <div className="border-bottom mb-10 pb-5">
                  <div className="row">
                    <div className="col-lg-6 col-6">
                      <span className="font-md-bold color-brand-3">
                        Livraison
                      </span>
                    </div>
                    <div className="col-lg-6 col-6 text-end">
                      <span className="font-lg-bold color-brand-3">
                        {totalCost >= 2250000
                          ? "GRATUITS"
                          : `${
                              handleFreeShipping() &&
                              handleFreeShipping().toLocaleString()
                            } FCFA`}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-bottom mb-10 pb-5">
                  <div className="row">
                    <div className="col-lg-6 col-6">
                      <span className="font-md-bold color-brand-3">
                        Estimation pour
                      </span>
                    </div>
                    <div className="col-lg-6 col-6 text-end">
                      <span className="font-lg-bold color-brand-3">
                        {selectedRegion}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-6">
                    <span className="font-md-bold color-brand-3">Total</span>
                  </div>
                  <div className="col-lg-6 col-6 text-end">
                    <span className="font-lg-bold color-brand-3">
                      {Number(totalCost + shippingPrice).toLocaleString(
                        "fr-FR",
                        {
                          style: "currency",
                          currency: "XOF",
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCheckout;

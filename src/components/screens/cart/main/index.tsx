import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import SlideDown from "react-slidedown";
import { useCart, Item } from "react-use-cart";

const MainCart = () => {
  // OPTIONS
  const options = [
    { value: "", label: "United Kingdom" },
    { value: "AX", label: "Aland Islands" },
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AI", label: "Anguilla" },
    { value: "AQ", label: "Antarctica" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AW", label: "Aruba" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "PW", label: "Belau" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BM", label: "Bermuda" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivia" },
    { value: "BQ", label: "Bonaire, Saint Eustatius and Saba" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BW", label: "Botswana" },
    { value: "BV", label: "Bouvet Island" },
    { value: "BR", label: "Brazil" },
    { value: "IO", label: "British Indian Ocean Territory" },
    { value: "VG", label: "British Virgin Islands" },
    { value: "BN", label: "Brunei" },
    { value: "BG", label: "Bulgaria" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "KH", label: "Cambodia" },
    { value: "CM", label: "Cameroon" },
    { value: "CA", label: "Canada" },
    { value: "CV", label: "Cape Verde" },
    { value: "KY", label: "Cayman Islands" },
    { value: "CF", label: "Central African Republic" },
    { value: "TD", label: "Chad" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CX", label: "Christmas Island" },
    { value: "CC", label: "Cocos (Keeling) Islands" },
    { value: "CO", label: "Colombia" },
    { value: "KM", label: "Comoros" },
    { value: "CG", label: "Congo (Brazzaville)" },
    { value: "CD", label: "Congo (Kinshasa)" },
    { value: "CK", label: "Cook Islands" },
    { value: "CR", label: "Costa Rica" },
    { value: "HR", label: "Croatia" },
    { value: "CU", label: "Cuba" },
    { value: "CW", label: "CuraÇao" },
    { value: "CY", label: "Cyprus" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "DJ", label: "Djibouti" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominican Republic" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "SV", label: "El Salvador" },
    { value: "GQ", label: "Equatorial Guinea" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" },
    { value: "ET", label: "Ethiopia" },
    { value: "FK", label: "Falkland Islands" },
    { value: "FO", label: "Faroe Islands" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GF", label: "French Guiana" },
    { value: "PF", label: "French Polynesia" },
    { value: "TF", label: "French Southern Territories" },
    { value: "GA", label: "Gabon" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GH", label: "Ghana" },
    { value: "GI", label: "Gibraltar" },
    { value: "GR", label: "Greece" },
    { value: "GL", label: "Greenland" },
    { value: "GD", label: "Grenada" },
    { value: "GP", label: "Guadeloupe" },
    { value: "GT", label: "Guatemala" },
    { value: "GG", label: "Guernsey" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "HM", label: "Heard Island and McDonald Islands" },
    { value: "HN", label: "Honduras" },
    { value: "HK", label: "Hong Kong" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran" },
    { value: "IQ", label: "Iraq" },
    { value: "IM", label: "Isle of Man" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "CI", label: "Ivory Coast" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japan" },
    { value: "JE", label: "Jersey" },
    { value: "JO", label: "Jordan" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "KI", label: "Kiribati" },
    { value: "KW", label: "Kuwait" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LA", label: "Laos" },
    { value: "LV", label: "Latvia" },
    { value: "LB", label: "Lebanon" },
    { value: "LS", label: "Lesotho" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libya" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MO", label: "Macao S.A.R., China" },
    { value: "MK", label: "Macedonia" },
    { value: "MG", label: "Madagascar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Maldives" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MQ", label: "Martinique" },
    { value: "MR", label: "Mauritania" },
    { value: "MU", label: "Mauritius" },
    { value: "YT", label: "Mayotte" },
    { value: "MX", label: "Mexico" },
    { value: "FM", label: "Micronesia" },
    { value: "MD", label: "Moldova" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolia" },
    { value: "ME", label: "Montenegro" },
    { value: "MS", label: "Montserrat" },
    { value: "MA", label: "Morocco" },
    { value: "MZ", label: "Mozambique" },
    { value: "MM", label: "Myanmar" },
    { value: "NA", label: "Namibia" },
    { value: "NR", label: "Nauru" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "AN", label: "Netherlands Antilles" },
    { value: "NC", label: "New Caledonia" },
    { value: "NZ", label: "New Zealand" },
    { value: "NI", label: "Nicaragua" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "NU", label: "Niue" },
    { value: "NF", label: "Norfolk Island" },
    { value: "KP", label: "North Korea" },
    { value: "NO", label: "Norway" },
    { value: "OM", label: "Oman" },
    { value: "PK", label: "Pakistan" },
    { value: "PS", label: "Palestinian Territory" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua New Guinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PN", label: "Pitcairn" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "QA", label: "Qatar" },
    { value: "IE", label: "Republic of Ireland" },
    { value: "RE", label: "Reunion" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russia" },
    { value: "RW", label: "Rwanda" },
    { value: "ST", label: "São Tomé and Príncipe" },
    { value: "BL", label: "Saint Barthélemy" },
    { value: "SH", label: "Saint Helena" },
    { value: "KN", label: "Saint Kitts and Nevis" },
    { value: "LC", label: "Saint Lucia" },
    { value: "SX", label: "Saint Martin (Dutch part)" },
    { value: "MF", label: "Saint Martin (French part)" },
    { value: "PM", label: "Saint Pierre and Miquelon" },
    { value: "VC", label: "Saint Vincent and the Grenadines" },
    { value: "SM", label: "San Marino" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SN", label: "Senegal" },
    { value: "RS", label: "Serbia" },
    { value: "SC", label: "Seychelles" },
    { value: "SL", label: "Sierra Leone" },
    { value: "SG", label: "Singapore" },
    { value: "SK", label: "Slovakia" },
    { value: "SI", label: "Slovenia" },
    { value: "SB", label: "Solomon Islands" },
    { value: "SO", label: "Somalia" },
    { value: "ZA", label: "South Africa" },
    { value: "GS", label: "South GeorgiaSandwich Islands" },
    { value: "KR", label: "South Korea" },
    { value: "SS", label: "South Sudan" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SD", label: "Sudan" },
    { value: "SR", label: "Suriname" },
    { value: "SJ", label: "Svalbard and Jan Mayen" },
    { value: "SZ", label: "Swaziland" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "SY", label: "Syria" },
    { value: "TW", label: "Taiwan" },
    { value: "TJ", label: "Tajikistan" },
    { value: "TZ", label: "Tanzania" },
    { value: "TH", label: "Thailand" },
    { value: "TL", label: "Timor-Leste" },
    { value: "TG", label: "Togo" },
    { value: "TK", label: "Tokelau" },
    { value: "TO", label: "Tonga" },
    { value: "TT", label: "Trinidad and Tobago" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "TM", label: "Turkmenistan" },
    { value: "TC", label: "Turks and Caicos Islands" },
    { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom (UK)" },
    { value: "US", label: "USA (US)" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VA", label: "Vatican" },
    { value: "VE", label: "Venezuela" },
    { value: "VN", label: "Vietnam" },
    { value: "WF", label: "Wallis and Futuna" },
    { value: "EH", label: "Western Sahara" },
    { value: "WS", label: "Western Samoa" },
    { value: "YE", label: "Yemen" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" },
  ];

  //   REACT SELECT STYLING
  const selectStyles: StylesConfig<any, false> = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      marginBottom: 15,
      boxShadow: "none !important",
      border: "1px solid #BCE3C9 !important",
      borderRadius: "5px",
    }),
    input: (base) => ({
      width: "100%",
      height: "40px",
      border: "none",
      input: {
        height: "100%",
        paddingLeft: "20px !important",
      },
    }),
    container: (base) => ({
      ...base,
      padding: "15px",
      borderRadius: "5px",
      minWidth: "220px",
      height: "286px",
      backgroundColor: "#fff",
      borderTop: "none",
      borderBottom: "1px solid #ececec",
      borderLeft: "1px solid #ececec",
      borderRight: "1px solid #ececec",
    }),
    valueContainer: (base) => ({
      width: "100%",
      height: "100%",
    }),
    menu: (base) => ({
      ...base,
      width: "100%",
      margin: 0,
      position: "static",
      border: "none",
      boxShadow: "none",
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: "200px",
      "&::-webkit-scrollbar": {
        width: " 0.375rem",
        height: "0.375rem",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "100vh",
        backgroundColor: "#f4f4f4",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#d1d1d1",
        borderRadius: "100vh",
        border: "3px solid #d1d1d1",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#ececec" : "transparent",
      color: state.isSelected ? "#7e7e7e" : "#7e7e7e",
      "&:hover": {
        backgroundColor: state.isSelected ? "#ececec" : "#9ddbc9",
      },
    }),
    placeholder: (base) => ({
      display: "none",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      display: "none",
    }),
  };
  const [value, setValue] = useState<any>("United Kingdom");

  const [isOpen, setIsOpen] = useState(false);
  const onSelectChange = (value: any) => {
    setIsOpen(!isOpen);
    setValue(value.label);
  };

  const [qty, setQty] = useState(1);
  const {
    items,
    isEmpty,
    removeItem,
    updateItemQuantity,
    cartTotal,
    emptyCart,
  } = useCart();
  const [empty, setEmpty] = useState(false);
  const [total, setTotal] = useState(0);
  const [Items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    setEmpty(isEmpty);
    setTotal(cartTotal);
    setItems(items);
  }, [cartTotal, isEmpty, items]);

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
                    <span className="font-md-bold color-brand-3">Product</span>
                  </div>
                  <div className="wishlist-price">
                    <span className="font-md-bold color-brand-3">
                      Unit Price
                    </span>
                  </div>
                  <div className="wishlist-status">
                    <span className="font-md-bold color-brand-3">Quantity</span>
                  </div>
                  <div className="wishlist-action">
                    <span className="font-md-bold color-brand-3">Subtotal</span>
                  </div>
                  <div className="wishlist-remove">
                    <span className="font-md-bold color-brand-3">Remove</span>
                  </div>
                </div>
              </div>
              <div className="content-wishlist mb-20">
                <div className="item-wishlist">
                  <div className="wishlist-cb">
                    <input className="cb-layout cb-select" type="checkbox" />
                  </div>
                  <div className="wishlist-product">
                    <div className="product-wishlist">
                      <div className="product-image">
                        <a href="shop-single-product.html">
                          <Image
                            src="/imgs/page/product/img-sub.png"
                            alt="Ecom"
                            width={339}
                            height={246}
                          />
                        </a>
                      </div>
                      <div className="product-info">
                        <a href="shop-single-product.html">
                          <h6 className="color-brand-3">
                            Dell Optiplex 9020 Small Form Business Desktop Tower
                            PC
                          </h6>
                        </a>
                        <div className="rating">
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
                          <span className="font-xs color-gray-500"> (65)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist-price">
                    <h4 className="color-brand-3">$2.51</h4>
                  </div>
                  <div className="wishlist-status">
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
                    </div>
                  </div>
                  <div className="wishlist-action">
                    <h4 className="color-brand-3">$2.51</h4>
                  </div>
                  <div className="wishlist-remove">
                    <a className="btn btn-delete" href="#"></a>
                  </div>
                </div>
                <div className="item-wishlist">
                  <div className="wishlist-cb">
                    <input className="cb-layout cb-select" type="checkbox" />
                  </div>
                  <div className="wishlist-product">
                    <div className="product-wishlist">
                      <div className="product-image">
                        <a href="shop-single-product.html">
                          <Image
                            src="/imgs/page/product/img-sub2.png"
                            alt="Ecom"
                            width={339}
                            height={246}
                          />
                        </a>
                      </div>
                      <div className="product-info">
                        <a href="shop-single-product.html">
                          <h6 className="color-brand-3">
                            HP 24 All-in-One PC, Intel Core i3-1115G4, 4GB RAM
                          </h6>
                        </a>
                        <div className="rating">
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
                          <span className="font-xs color-gray-500"> (65)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist-price">
                    <h4 className="color-brand-3">$1.51</h4>
                  </div>
                  <div className="wishlist-status">
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
                    </div>
                  </div>
                  <div className="wishlist-action">
                    <h4 className="color-brand-3">$1.51</h4>
                  </div>
                  <div className="wishlist-remove">
                    <a className="btn btn-delete" href="#"></a>
                  </div>
                </div>
                <div className="item-wishlist">
                  <div className="wishlist-cb">
                    <input className="cb-layout cb-select" type="checkbox" />
                  </div>
                  <div className="wishlist-product">
                    <div className="product-wishlist">
                      <div className="product-image">
                        <a href="shop-single-product.html">
                          <Image
                            src="/imgs/page/product/img-sub3.png"
                            alt="Ecom"
                            width={339}
                            height={246}
                          />
                        </a>
                      </div>
                      <div className="product-info">
                        <a href="shop-single-product.html">
                          <h6 className="color-brand-3">
                            Gateway 23.8&quot; All-in-one Desktop, Fully
                            Adjustable Stand
                          </h6>
                        </a>
                        <div className="rating">
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
                          <span className="font-xs color-gray-500"> (65)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist-price">
                    <h4 className="color-brand-3">$3.51</h4>
                  </div>
                  <div className="wishlist-status">
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
                    </div>
                  </div>
                  <div className="wishlist-action">
                    <h4 className="color-brand-3">$3.51</h4>
                  </div>
                  <div className="wishlist-remove">
                    <a className="btn btn-delete" href="#"></a>
                  </div>
                </div>
              </div>
              <div className="row mb-40">
                <div className="col-lg-6 col-md-6 col-sm-6-col-6">
                  <a
                    className="btn btn-buy w-auto arrow-back mb-10"
                    href="shop-grid.html"
                  >
                    Continue shopping
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6-col-6 text-md-end">
                  <a
                    className="btn btn-buy w-auto update-cart mb-10"
                    href="shop-cart.html"
                  >
                    Update cart
                  </a>
                </div>
              </div>
              <div className="row mb-50">
                <div className="col-lg-6 col-md-6">
                  <div className="box-cart-left">
                    <h5 className="font-md-bold mb-10">Calculate Shipping</h5>
                    <span className="font-sm-bold mb-5 d-inline-block color-gray-500">
                      Flat rate:
                    </span>
                    <span className="font-sm-bold d-inline-block color-brand-3">
                      5%
                    </span>
                    <div className="form-group">
                      <select className="form-control select-style1 color-gray-700">
                        <option value="1">USA</option>
                        <option value="1">EURO</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-10">
                        <input
                          className="form-control"
                          placeholder="Stage / Country"
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
                    <h5 className="font-md-bold mb-10">Apply Coupon</h5>
                    <span className="font-sm-bold mb-5 d-inline-block color-gray-500">
                      Using A Promo Code?
                    </span>
                    <div className="form-group d-flex">
                      <input
                        className="form-control mr-15"
                        placeholder="Enter Your Coupon"
                      />
                      <button className="btn btn-buy w-auto">Apply</button>
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
                  <div className="col-6">
                    <span className="font-md-bold color-gray-500">
                      Subtotal
                    </span>
                  </div>
                  <div className="col-6 text-end">
                    <h4> $2.51</h4>
                  </div>
                </div>
              </div>
              <div className="border-bottom mb-10">
                <div className="row">
                  <div className="col-6">
                    <span className="font-md-bold color-gray-500">
                      Shipping
                    </span>
                  </div>
                  <div className="col-6 text-end">
                    <h4> Free</h4>
                  </div>
                </div>
              </div>
              <div className="border-bottom mb-10">
                <div className="row">
                  <div className="col-6">
                    <span className="font-md-bold color-gray-500">
                      Estimate for
                    </span>
                  </div>
                  <div className="col-6 text-end">
                    <h6>United Kingdom</h6>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <div className="row">
                  <div className="col-6">
                    <span className="font-md-bold color-gray-500">Total</span>
                  </div>
                  <div className="col-6 text-end">
                    <h4> $2.51</h4>
                  </div>
                </div>
              </div>
              <div className="box-button">
                <a className="btn btn-buy" href="shop-checkout.html">
                  Proceed To CheckOut
                </a>
              </div>
            </div>
          </div>
        </div>
        <h4 className="color-brand-3">You may also like</h4>
        <div className="list-products-5 mt-20 mb-40">
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
                ></a>
              </div>
              <div className="image-box">
                <span className="label bg-brand-2">-17%</span>
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp3.png"
                    alt="Ecom"
                    width={339}
                    height={246}
                  />
                </a>
              </div>
              <div className="info-right">
                <a
                  className="font-xs color-gray-500"
                  href="shop-vendor-single.html"
                >
                  Hisense
                </a>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  Hisense 43&quot; ClassName 4K UHD LED XClassName Smart TV HDR
                </a>
                <div className="rating">
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
                  <span className="font-xs color-gray-500">(65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2856.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
                <div className="mt-20 box-btn-cart">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li>27-inch (diagonal) Retina 5K display</li>
                  <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
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
                ></a>
              </div>
              <div className="image-box">
                <span className="label bg-brand-2">-17%</span>
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp4.png"
                    alt="Ecom"
                    width={339}
                    height={246}
                  />
                </a>
              </div>
              <div className="info-right">
                <a
                  className="font-xs color-gray-500"
                  href="shop-vendor-single.html"
                >
                  Apple
                </a>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  2022 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver
                </a>
                <div className="rating">
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
                  <span className="font-xs color-gray-500">(65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2856.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
                <div className="mt-20 box-btn-cart">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li>27-inch (diagonal) Retina 5K display</li>
                  <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
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
                ></a>
              </div>
              <div className="image-box">
                <span className="label bg-brand-2">-17%</span>
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp5.png"
                    alt="Ecom"
                    width={339}
                    height={246}
                  />
                </a>
              </div>
              <div className="info-right">
                <a
                  className="font-xs color-gray-500"
                  href="shop-vendor-single.html"
                >
                  LG
                </a>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  LG 65&quot; ClassName 4K UHD Smart TV OLED A1 Series{" "}
                </a>
                <div className="rating">
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
                  <span className="font-xs color-gray-500">(65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2856.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
                <div className="mt-20 box-btn-cart">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li>27-inch (diagonal) Retina 5K display</li>
                  <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
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
                ></a>
              </div>
              <div className="image-box">
                <span className="label bg-brand-2">-17%</span>
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp6.png"
                    alt="Ecom"
                    width={339}
                    height={246}
                  />
                </a>
              </div>
              <div className="info-right">
                <a
                  className="font-xs color-gray-500"
                  href="shop-vendor-single.html"
                >
                  Apple
                </a>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  Apple AirPods Pro with MagSafe Charging Case
                </a>
                <div className="rating">
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
                  <span className="font-xs color-gray-500">(65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2856.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
                <div className="mt-20 box-btn-cart">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li>27-inch (diagonal) Retina 5K display</li>
                  <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
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
                ></a>
              </div>
              <div className="image-box">
                <span className="label bg-brand-2">-17%</span>
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp7.png"
                    alt="Ecom"
                    width={339}
                    height={246}
                  />
                </a>
              </div>
              <div className="info-right">
                <a
                  className="font-xs color-gray-500"
                  href="shop-vendor-single.html"
                >
                  Razer
                </a>
                <br />
                <a
                  className="color-brand-3 font-sm-bold"
                  href="shop-single-product.html"
                >
                  Razer Power Up Gaming Bundle V2 - Cynosa Lite
                </a>
                <div className="rating">
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
                  <span className="font-xs color-gray-500">(65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2856.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
                <div className="mt-20 box-btn-cart">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
                <ul className="list-features">
                  <li>27-inch (diagonal) Retina 5K display</li>
                  <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h4 className="color-brand-3">Recently viewed items</h4>
        <div className="row mt-40">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-grid-style-2 card-grid-none-border hover-up">
              <div className="image-box">
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp1.png"
                    alt="Ecom"
                    width={339}
                    height={246}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">HP</span>
                <br />
                <a
                  className="color-brand-3 font-xs-bold"
                  href="shop-single-product.html"
                >
                  HP DeskJet 2755e Wireless Color All-in-One Printer
                </a>
                <div className="rating">
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
                  <span className="font-xs color-gray-500"> (65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2556.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-grid-style-2 card-grid-none-border hover-up">
              <div className="image-box">
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp2.png"
                    alt="Ecom"
                    width={339}
                    height={246}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">HP</span>
                <br />
                <a
                  className="color-brand-3 font-xs-bold"
                  href="shop-single-product.html"
                >
                  Original HP 63XL Black High-yield Ink Cartridge
                </a>
                <div className="rating">
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
                  <span className="font-xs color-gray-500"> (65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2556.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-grid-style-2 card-grid-none-border hover-up">
              <div className="image-box">
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp1.png"
                    alt="Ecom"
                    width={339}
                    height={246}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">Logitech</span>
                <br />
                <a
                  className="color-brand-3 font-xs-bold"
                  href="shop-single-product.html"
                >
                  Logitech H390 Wired Headset, Stereo Headphones
                </a>
                <div className="rating">
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
                  <span className="font-xs color-gray-500"> (65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2556.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-grid-style-2 card-grid-none-border hover-up">
              <div className="image-box">
                <a href="shop-single-product.html">
                  <Image
                    src="/imgs/page/homepage1/imgsp2.png"
                    alt="Ecom"
                    width={339}
                    height={246}
                  />
                </a>
              </div>
              <div className="info-right">
                <span className="font-xs color-gray-500">Logitech</span>
                <br />
                <a
                  className="color-brand-3 font-xs-bold"
                  href="shop-single-product.html"
                >
                  Logitech MK345 Wireless Combo Full-Sized
                </a>
                <div className="rating">
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
                  <span className="font-xs color-gray-500"> (65)</span>
                </div>
                <div className="price-info">
                  <strong className="font-lg-bold color-brand-3 price-main">
                    $2556.3
                  </strong>
                  <span className="color-gray-500 price-line">$3225.6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCart;

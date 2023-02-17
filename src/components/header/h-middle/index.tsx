import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import Categorydrop from "components/select/Categorydrop";
import Location from "../../select/Location";
import { useAppDispatch, useAppSelector } from "hooks/index";
import { logout } from "redux/auth/authSlice";
import { useWishlist } from "context/wishlistContext";
import { useRouter } from "next/router";
import { useCart, Item } from "react-use-cart";
import Select, { StylesConfig } from "react-select";
import { IoCaretDownOutline } from "react-icons/io5";
import { getFiltersProducts } from "redux/products/productSlice";
import { Data } from "utils/interface";
import { filterText } from "utils/index";

interface HMiddleProps {
  setIsLocationOpen: Dispatch<SetStateAction<boolean>>;
  isLocationOpen: boolean;
  isOpenCat: boolean;
  open: boolean;
  setIsOpenCat: Dispatch<SetStateAction<boolean>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HMiddle: FC<HMiddleProps> = ({
  setIsLocationOpen,
  isLocationOpen,
  isOpenCat,
  setIsOpenCat,
  setOpen,
  open,
}) => {
  const { user, isAuthenticated } = useAppSelector((store) => store.auth);

  const dispatch = useAppDispatch();

  // CART
  const { totalItems, isEmpty, cartTotal, items, removeItem } = useCart();
  const { totalItems: totalWishlistItems } = useWishlist();
  const [totals, setTotals] = useState(0);
  const [empty, setEmpty] = useState(false);
  const [Items, setItems] = useState<Item[]>([]);
  const [totalsWishlist, setTotalsWishlist] = useState(0);
  const [cartTotals, setCartTotals] = useState(0);
  const { pathname } = useRouter();

  const [userDropdown, setUserDropdown] = useState(false);
  const [openc, setOpenc] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const refselc = useRef<HTMLDivElement>(null);
  const refselc2 = useRef<HTMLDivElement>(null);
  const refUserDropDown = useRef<HTMLDivElement>(null);
  const refUserDropDown2 = useRef<HTMLDivElement>(null);

  // CLOSE WHEN CLICKED OUTSIDE OF THE ELEMENT
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        ref2.current &&
        !ref2.current.contains(e.target)
      ) {
        setOpenc(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsOpenCat]);
  // CLOSE WHEN CLICKED OUTSIDE OF THE ELEMENT
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        refselc.current &&
        !refselc.current.contains(e.target) &&
        refselc2.current &&
        !refselc2.current.contains(e.target)
      ) {
        setIsOpenCat(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsOpenCat]);
  // CLOSE WHEN CLICKED OUTSIDE OF THE ELEMENT USER REF DROP DOWN
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        refUserDropDown.current &&
        !refUserDropDown.current.contains(e.target) &&
        refUserDropDown2.current &&
        !refUserDropDown2.current.contains(e.target)
      ) {
        setUserDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsOpenCat]);

  useEffect(() => {
    setTotals(totalItems);
    setTotalsWishlist(totalWishlistItems);
    setEmpty(isEmpty);
    setItems(items);
    setCartTotals(cartTotal);
  }, [totalItems, isEmpty, cartTotal, items, totalWishlistItems]);

  //   REACT SELECT STYLING
  const selectStyles: StylesConfig<any, false> = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      marginBottom: 15,
      boxShadow: "none !important",
      border: "1px solid #CAD6EC !important",
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
      padding: "6px",
      backgroundColor: state.isSelected ? "#ececec" : "transparent",
      color: state.isSelected ? "#425A8B" : "#425A8B",
      "&:hover": {
        backgroundColor: state.isSelected ? "#D5DFE4" : "#CAD6EC",
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

  const [value, setValue] = useState<any>(undefined);

  const onSelectChange = (value: any) => {
    setIsOpenCat(false);
    setValue(value);
  };
  const { products, filters } = useAppSelector((store) => store.product);
  const categories = filters.map((product: any) => product.category);
  const filteredcat = [...new Set(categories)];
  const filterOptions = filteredcat.map((category: any) => {
    return {
      value: category,
      label: category,
    };
  });

  const options = [
    { value: "Toutes les catégories", label: "Toutes les catégories" },
    ...filterOptions,
  ];

  //  SEARCH BAR
  const keyword = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();
  const data: Data = {
    keyword: router.query.keyword
      ? router.query.keyword
      : keyword.current?.value,
    max: router.query.max ? router.query.max : "",
    min: router.query.min ? router.query.min : "",
    pageNumber: router.query.pageNumber ? router.query.pageNumber : "",
    category: router.query.category ? router.query.category : "",
    souscategory: router.query.souscategory ? router.query.souscategory : "",
    ssouscategory: router.query.ssouscategory ? router.query.ssouscategory : "",
    qty: router.query.qty ? router.query.qty : "",
    pageSize: router.query.pageSize ? router.query.pageSize : "",
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getFiltersProducts(data));
    if (keyword.current?.value.trim()) {
      setSearchOpen(true);
    }

    setSearch(keyword.current!.value);
    localStorage.setItem("kew", keyword.current!.value);
  };

  return (
    <div className="containers">
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo">
            <a className="d-flex" href="index.html">
              <Image
                alt="Ecom"
                width={111}
                height={37}
                src="/imgs/template/logo.svg"
              />
            </a>
          </div>
          <div className="header-search">
            <div className="box-header-search">
              <form className="form-search">
                <div className="box-category cursor-pointer flex items-center">
                  <div
                    onClick={() => setIsOpenCat(!isOpenCat)}
                    ref={refselc2}
                    className="flex items-center w-full"
                  >
                    <span className=" relative pl-2 pr-[10px] w-full ">
                      <p className="text-ellipsis whitespace-nowrap w-full overflow-hidden">
                        {value ? value.value : "Tous les categories"}
                      </p>
                    </span>
                    <IoCaretDownOutline
                      color="#B6B6B6"
                      className={`${
                        isOpenCat ? "rotate-180" : "!text-[#425A8B]"
                      } text-sm mr-[-20px]  group-hover:ml-2 absolute  right-3 group-hover:right-2`}
                    />
                  </div>
                  <div
                    className={`absolute top-[36px] z-50 ${
                      isOpenCat ? "block" : "hidden"
                    }`}
                    ref={refselc}
                  >
                    <Select
                      options={options}
                      instanceId="select-cat"
                      autoFocus
                      backspaceRemovesValue={false}
                      controlShouldRenderValue={false}
                      hideSelectedOptions={false}
                      isClearable={false}
                      menuIsOpen
                      onChange={onSelectChange}
                      placeholder="Search..."
                      styles={selectStyles}
                      tabSelectsValue={false}
                      value={value}
                    />
                  </div>
                </div>
                <div className="box-keysearch">
                  <input
                    className="form-control font-xs"
                    type="text"
                    placeholder="Search for items"
                    ref={keyword}
                    value={search}
                    onChange={onChange}
                  />
                  {search && products.length !== 0 && (
                    <div className="absolute flex p-2 rounded-bl-lg rounded-br-lg flex-col items-start top-10 z-[20000] w-full h-auto bg-white">
                      {filters.map((product: any, idx: any) => (
                        <Link
                          key={idx}
                          href={`/products/?keyword=${filterText(
                            product.name
                          )}`}
                          onClick={() => setSearch("")}
                          className="p-2 rounded-md mb-1 text-sm font-medium hover:!text-primary text-start w-full hover:bg-[#f5f3f3] group text-dark"
                        >
                          <div className="flex items-center">
                            <div>
                              <Image
                                src={product.images[0].url}
                                alt={product.name}
                                width={product.images[0].width}
                                height={product.images[0].height}
                                className="max-w-[60px]"
                              />
                            </div>
                            <div className="ml-2">
                              <h3 className="text-base font-bold group-hover:bg-red-600">
                                {product.name}
                              </h3>
                              <p>
                                {Number(product.price).toLocaleString("fr-FR", {
                                  style: "currency",
                                  currency: "XOF",
                                })}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </form>
              {searchOpen && search && (
                <div
                  className="bg-[rgba(0,0,0,0.05)]  fixed top-0 left-0 right-0 z-[10000] bottom-0"
                  onClick={() => {
                    setSearch("");
                    dispatch(
                      getFiltersProducts({
                        keyword: "",
                        max: "",
                        min: "",
                        pageNumber: "",
                        category: "",
                        souscategory: "",
                        ssouscategory: "",
                        qty: "",
                        pageSize: "",
                      })
                    );
                  }}
                ></div>
              )}
            </div>
          </div>
          <div className="header-nav">
            <nav className="nav-main-menu d-none d-xl-block">
              <ul className="main-menu">
                <li className="do-not-has-children">
                  <Link className="active" href="/">
                    Accueil
                  </Link>
                </li>
                <li className="do-not-has-children">
                  <Link href="/products">Produits</Link>
                </li>
                <li className="do-not-has-children">
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Nous Contacter</Link>
                </li>
              </ul>
            </nav>
            <div
              onClick={() => setOpen(!open)}
              className={`burger-icon burger-icon-white ${
                open ? "burger-close" : ""
              }`}
            >
              <span className="burger-icon-top"></span>
              <span className="burger-icon-mid"></span>
              <span className="burger-icon-bottom"></span>
            </div>
          </div>
          <div className="header-shop">
            {isAuthenticated ? (
              <div className="d-inline-block relative box-dropdown-cart">
                <span className="font-lg icon-list icon-account !pr-2">
                  <span>Account</span>
                </span>
                <span
                  ref={refUserDropDown2}
                  onClick={() => setUserDropdown(!userDropdown)}
                  className="cursor-pointer"
                >
                  <span className="absolute bottom-[1.5px] left-3  bg-white h-fit rounded-full">
                    <Image
                      src="/imgs/checkmark.svg"
                      className="!w-[16px] "
                      width={10}
                      height={10}
                      alt=""
                    />
                  </span>
                  {user && (
                    <span className="lable ml-1 mr-3 font-bold hidden 2xl:inline-block">{`Bonjour,  ${
                      user ? user.lastname : ""
                    }`}</span>
                  )}
                </span>
                <div
                  className={` dropdown-account ${
                    userDropdown ? "dropdown-open" : ""
                  }`}
                  ref={refUserDropDown}
                >
                  <ul>
                    <li>
                      <Link href="/dashboard">Mon Compte</Link>
                    </li>
                    <li>
                      <Link href="/dashboard">Suivi de commande</Link>
                    </li>
                    <li>
                      <Link href="/dashboard">Mes Commandes</Link>
                    </li>

                    <li>
                      <Link href="/dashboard">Paramètre</Link>
                    </li>
                    <li>
                      <a onClick={() => dispatch(logout())}>Deconnecter</a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="d-inline-block box-dropdown-cart">
                <span className="font-lg icon-list icon-account">
                  <span>Account</span>
                </span>
              </div>
            )}
            <Link className="font-lg icon-list icon-wishlist" href="/wishlist">
              <span>Wishlist</span>
              <span className="number-item font-xs">{totalsWishlist}</span>
            </Link>
            <div className="d-inline-block box-dropdown-cart">
              <span
                className="font-lg icon-list icon-cart"
                onClick={() => {
                  setOpenc(!openc);
                }}
                ref={ref2}
              >
                <span>Cart</span>
                <span className="number-item font-xs">{totals}</span>
              </span>
              <div
                ref={ref}
                className={`${
                  openc ? "dropdown-cart dropdown-open" : "dropdown-cart"
                }`}
              >
                <div className="item-cart mb-20">
                  <div className="cart-image">
                    <Image
                      width={648}
                      height={438}
                      src="/imgs/page/homepage1/imgsp5.png"
                      alt="Ecom"
                    />
                  </div>
                  <div className="cart-info">
                    <a
                      className="font-sm-bold color-brand-3"
                      href="shop-single-product.html"
                    >
                      2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB SSD
                    </a>
                    <p>
                      <span className="color-brand-2 font-sm-bold">
                        1 x $2856.4
                      </span>
                    </p>
                  </div>
                </div>
                <div className="item-cart mb-20">
                  <div className="cart-image">
                    <Image
                      width={648}
                      height={438}
                      src="/imgs/page/homepage1/imgsp4.png"
                      alt="Ecom"
                    />
                  </div>
                  <div className="cart-info">
                    <a
                      className="font-sm-bold color-brand-3"
                      href="shop-single-product-2.html"
                    >
                      2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB SSD
                    </a>
                    <p>
                      <span className="color-brand-2 font-sm-bold">
                        1 x $2856.4
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border-bottom pt-0 mb-15"></div>
                <div className="cart-total">
                  <div className="row">
                    <div className="col-6 text-start">
                      <span className="font-md-bold color-brand-3">Total</span>
                    </div>
                    <div className="col-6">
                      <span className="font-md-bold color-brand-1">
                        {cartTotal}
                      </span>
                    </div>
                  </div>
                  <div className="row mt-15">
                    <div className="col-6 text-start">
                      <a className="btn btn-cart w-auto" href="shop-cart.html">
                        View cart
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        className="btn btn-buy w-auto"
                        href="shop-checkout.html"
                      >
                        Checkout
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
  );
};

export default HMiddle;

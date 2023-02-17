import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useRef,
  useState,
} from "react";
// import Logo from "/public/imgs/theme/logo.svg";
import Image from "next/image";
import { StylesConfig } from "react-select";
import { useAppSelector, useAppDispatch } from "hooks/index";
import { useRouter } from "next/router";
import { getFiltersProducts } from "redux/products/productSlice";
import { Data } from "utils/interface";
import Link from "next/link";
import { filterText } from "utils/index";
import { logout } from "redux/auth/authSlice";

interface MobileProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Mobile: FC<MobileProps> = ({ open, setOpen }) => {
  // USEAPPSELECTOR
  const { products, filters } = useAppSelector((store) => store.product);
  const { user, isAuthenticated } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  // OPTIONS

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

  const [value, setValue] = useState<any>(undefined);

  const onSelectChange = (value: any) => {
    // setIsOpen(false);
    setValue(value);
  };

  //   ONFORM SUBMIT
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  //  SEARCH BAR
  const keyword = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  // DATA
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
    // else {
    //   setOpen(false);
    // }
    setSearch(keyword.current!.value);
    localStorage.setItem("kew", keyword.current!.value);
  };
  return (
    <div
      className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${
        open ? "sidebar-visible" : ""
      }`}
    >
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-content-area">
          <div className="mobile-logo">
            <Link className="d-flex" href="/">
              <Image
                alt="Ecom"
                src="/imgs/template/logo.svg"
                width={111}
                height={37}
              />
            </Link>
          </div>
          <div className="perfect-scroll">
            <div className={`mobile-menu-wrap mobile-header-border`}>
              <nav className="mt-15">
                <ul className="mobile-menu font-heading">
                  <li className="has-children">
                    <Link className="active" href="/">
                      Acceuil
                    </Link>
                  </li>
                  <li className="has-children">
                    <Link href="/">Produits</Link>
                  </li>

                  <li className="has-children">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Nous Contacter</Link>
                  </li>
                </ul>
              </nav>
            </div>
            {isAuthenticated && (
              <div className="mobile-account">
                <div className="mobile-header-top">
                  <div className="user-account">
                    <Link href="/dashboard">
                      <Image
                        width={165}
                        height={168}
                        src="/imgs/template/ava_1.png"
                        alt="Ecom"
                      />
                    </Link>
                    <div className="content">
                      <h6 className="user-name">
                        Bonjour
                        <span className="text-brand">
                          {" "}
                          {user && user.firstname}
                        </span>
                      </h6>
                      <p className="font-xs text-muted">Vous avez 3 messages</p>
                    </div>
                  </div>
                </div>
                <ul className="mobile-menu">
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
                </ul>
              </div>
            )}
            <div className="mobile-banner">
              <div className="bg-5 block-iphone">
                <span className="color-brand-3 font-sm-lh32">
                  Starting from $899
                </span>
                <h3 className="font-xl mb-10">iPhone 12 Pro 128Gb</h3>
                <p className="font-base color-brand-3 mb-10">Special Sale</p>
                <a className="btn btn-arrow" href="shop-grid.html">
                  learn more
                </a>
              </div>
            </div>
            <div className="site-copyright color-gray-400 mt-30">
              Copyright 2022 &copy; Ecom - Marketplace Template.
              <br />
              Designed by
              <a href="#" target="_blank">
                &nbsp; AliThemes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;

import React, { useState, FC, ChangeEvent, useRef } from "react";
import Select, { StylesConfig } from "react-select";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "hooks/index";
import { filterText } from "utils/index";
import Image from "next/image";
import { getFiltersProducts } from "redux/products/productSlice";
import { Data } from "utils/interface";
import { useRouter } from "next/router";

interface CategorydropProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}
const Categorydrop: FC<CategorydropProps> = ({ setIsOpen, isOpen }) => {
  // USEAPPSELECTOR
  const { products, filters } = useAppSelector((store) => store.product);
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
    setIsOpen(false);
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
    <div className="search-style-2">
      <form onSubmit={onSubmit} className="btn-group tw-relative">
        <div className="tw-relative tw-max-w-[200px] tw-w-full tw-z-50 tw-flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="d-flex align-items-center tw-relative tw-p-[10px] tw-w-full !tw-border-2 after:tw-content-[''] after:tw-h-5 after:tw-bg-[#cacaca] after:tw-absolute after:tw-right-0 after:tw-top-[15px] after:tw-w-[1px]"
          >
            <span className="tw-relative tw-leading-10 tw-text-black tw-font-bold tw-font-Quicksand tw-p-0 tw-text-sm">
              {value ? value.value : "Toutes les catégories"}
            </span>
            <FiChevronDown
              color="#B6B6B6"
              className="tw-text-sm tw-ml-1 group-hover:tw-ml-2 tw-absolute tw-right-3 group-hover:tw-right-2"
            />
          </button>
          <div
            className={`tw-absolute tw-top-[46px] tw-z-50 ${
              isOpen ? "tw-block" : "tw-hidden"
            }`}
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
        <input
          type="text"
          placeholder="Search for items..."
          ref={keyword}
          value={search}
          onChange={onChange}
        />
        {search && products.length !== 0 && (
          <div className="tw-absolute tw-flex tw-p-2 tw-rounded-bl-lg tw-rounded-br-lg tw-flex-col tw-items-start tw-top-10 tw-z-[20000] tw-w-full tw-h-auto tw-bg-white">
            {filters.map((product: any, idx: any) => (
              <Link
                key={idx}
                href={`/products/?keyword=${filterText(product.name)}`}
                onClick={() => setSearch("")}
                className="p-2 rounded-md mb-1 text-sm font-medium hover:!text-primary text-start w-full hover:bg-[#f5f3f3] group text-dark"
              >
                <div className="tw-flex tw-items-center">
                  <div>
                    <Image
                      src={product.images[0].url}
                      alt={product.name}
                      width={product.images[0].width}
                      height={product.images[0].height}
                      className="tw-max-w-[60px]"
                    />
                  </div>
                  <div className="tw-ml-2">
                    <h3 className="tw-text-base tw-font-bold group-hover:tw-bg-red-600">
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

        <Link
          href={`/products/?category=${
            value && value.value === "Toutes les catégories"
              ? ""
              : value && value.value
          }`}
          className="btns !tw-rounded-tl-none !tw-rounded-bl-none !tw-rounded-tr-sm !tw-rounded-br-sm z-[20000] !tw-min-w-[50px] tw-bg-transparent tw-flex tw-justify-center tw-items-center btn-search "
          type="submit"
        >
          <i className="fi fi-rs-search"></i>
        </Link>
      </form>
      {searchOpen && search && (
        <div
          className="tw-bg-[rgba(0,0,0,0.05)]  tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-[10000] tw-bottom-0"
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
  );
};

export default Categorydrop;

import { useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { useState, useReducer } from "react";
import InputRange from "react-input-range";
import BannerLeft from "./banner";
import Bestseller from "./bestseller";
import Tags from "./tags";

const LeftSidebar = () => {
  const { products, categories } = useAppSelector((state) => state.product);
  const listProducts = [...products];
  const sortedDate = listProducts.sort((a: any, b: any) => {
    const dateB: any = new Date(b.createdAt);
    const dateA: any = new Date(a.createdAt);

    return dateB - dateA;
  });
  const cat1 = categories.slice(0, 9);
  const cat2 = categories.slice(9, 17);
  const Lastprod = sortedDate.slice(0, 3);
  const [value, setValue] = useState<{ min: number; max: number }>({
    min: 20000,
    max: 150000,
  });

  const [interval, setInterval] = useReducer(
    (prev: any, next: any) => {
      return { ...prev, ...next };
    },
    {
      price: 0,
    }
  );

  return (
    <div className="col-lg-3 order-last order-lg-first">
      <div className="sidebar-border mb-0">
        <div className="sidebar-head">
          <h6 className="color-gray-900 font-bold text-base">Catégories</h6>
        </div>
        <div className="sidebar-content">
          <ul className="list-nav-arrow">
            {cat1.map((category: any) => (
              <li key={category._id}>
                <Link href={`/products?category=${category._id}`}>
                  {category.name}
                  <span className="number">
                    {category.subcategories.length}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <div className="collapse" id="moreMenu">
              <ul className="list-nav-arrow">
                {cat2.map((category: any) => (
                  <li key={category._id}>
                    <Link href={`/products?category=${category._id}`}>
                      {category.name}
                      <span className="number">
                        {category.subcategories.length}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <a
              className="link-see-more mt-5"
              data-bs-toggle="collapse"
              href="#moreMenu"
              role="button"
              aria-expanded="false"
              aria-controls="moreMenu"
            >
              See More
            </a>
          </div>
        </div>
      </div>
      <div className="sidebar-border  mb-40">
        <div className="sidebar-head flex justify-between items-center">
          <h6 className="color-gray-900 text-base font-bold"> Filtrer</h6>
          <Link
            className="btn border-1 border-[#425a8b] font-sm-bold color-gray-500"
            href="/products"
          >
            Réinitialiser le filtre
          </Link>
        </div>
        <div className="sidebar-content">
          <div className="flex justify-between">
            <h6 className="color-gray-900 mt-10 mb-10 text-base font-bold">
              Price (FCFA)
            </h6>
            <Link
              href={`/products?min=${value.min}&max=${value.max}`}
              className="btn font-bold border-1 px border-[#425a8b] hover:bg-[#425a8b] text-[#425a8b] my-[4px] hover:text-white w-11 h-9 py-[7px] px-[12px]"
            >
              OK
            </Link>
          </div>
          <div className="box-slider-range mt-20 mb-15">
            <div className="row mb-20">
              <div className="col-sm-12">
                <InputRange
                  minValue={0}
                  maxValue={300000}
                  value={value}
                  onChange={(value: any) => setValue(value)}
                  classNames={{
                    valueLabel: "1 hidden",
                    activeTrack:
                      "2 bg-[#FD9636] left-0 mt-[-0.15rem] absolute right-0 top-[50%] rounded-[0.3rem] cursor-pointer block h-[0.3rem] tras transition-[left,_width] duration-300 ease-out",
                    disabledInputRange: "3",
                    inputRange: "4 h-4 relative w-full",
                    labelContainer: "5 hidden",
                    maxLabel: "6 hidden",
                    minLabel: "7 hidden",
                    slider:
                      "8 appearance-none bg-[#FD9636] border !border-[#FD9636] rounded-full cursor-pointer block h-4 -ml-[0.5rem] -mt-[0.38rem] outline-none absolute top-1/2 transition-[transform,_box-shadow] duration-300 ease-out w-4 active:scale-[1.3]",
                    sliderContainer:
                      "9 transition-[left] duration-300 ease-out ",
                    track:
                      "10 left-0 mt-[-0.15rem] absolute right-0 top-[50%] rounded-[0.3rem] cursor-pointer block h-[0.3rem] tras bg-[#eeeeee] transition-[left,_width] duration-300 ease-out",
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label className="lb-slider font-sm color-gray-500">
                  Plage de prix:
                </label>
                <span className="min-value-money font-sm color-gray-1000">
                  {" "}
                  {Number(value.min).toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "XOF",
                  })}{" "}
                </span>
                <label className="lb-slider font-sm font-medium color-gray-1000"></label>
                -
                <span className="max-value-money font-sm font-medium color-gray-1000">
                  {" "}
                  {Number(value.max).toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "XOF",
                  })}
                </span>
              </div>
            </div>
          </div>
          <ul className="list-checkbox">
            <li>
              <label className="cb-container">
                <input type="checkbox" readOnly />
                <span className="text-small">5 000 F CFA - 15 000 F CFA</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">145</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" readOnly />
                <span className="text-small">25 000 F CFA - 35 000 F CFA</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">56</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" readOnly />
                <span className="text-small">35 000 F CFA - 45 000 F CFA</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">23</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" readOnly />
                <span className="text-small">45 000 F CFA - 55 000 F CFA</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">43</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" readOnly />
                <span className="text-small">55 000 F CFA - 65 000 F CFA</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">65</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" readOnly />
                <span className="text-small">Plus de 65 000 F CFA</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">56</span>
            </li>
          </ul>
          <h6 className="color-gray-900 mt-20 mb-10 font-bold text-base">
            Marques
          </h6>
          <ul className="list-checkbox">
            <li>
              <label className="cb-container">
                <input type="checkbox" readOnly checked />
                <span className="text-small">Apple</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">12</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" readOnly />
                <span className="text-small">Sony</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">34</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" readOnly />
                <span className="text-small">Toshiba</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">56</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" readOnly />
                <span className="text-small">Assus</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">78</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" readOnly />
                <span className="text-small">Samsung</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">23</span>
            </li>
          </ul>
          {/* <h6 className="color-gray-900 mt-20 mb-10">Color</h6>
          <ul className="list-color">
            <li>
              <a className="color-red active" href="#"></a>
              <span>Red</span>
            </li>
            <li>
              <a className="color-green" href="#"></a>
              <span>Green</span>
            </li>
            <li>
              <a className="color-blue" href="#"></a>
              <span>Blue</span>
            </li>
            <li>
              <a className="color-purple" href="#"></a>
              <span>Purple</span>
            </li>
            <li>
              <a className="color-black" href="#"></a>
              <span>Black</span>
            </li>
            <li>
              <a className="color-gray" href="#"></a>
              <span>Gray</span>
            </li>
            <li>
              <a className="color-pink" href="#"></a>
              <span>Pink</span>
            </li>
            <li>
              <a className="color-brown" href="#"></a>
              <span>Brown</span>
            </li>
            <li>
              <a className="color-yellow" href="#"></a>
              <span>Yellow</span>
            </li>
          </ul> */}

          <a
            className="btn btn-filter font-sm color-brand-3 font-medium mt-10"
            href="#ModalFiltersForm"
            data-bs-toggle="modal"
          >
            Plus de Filtre
          </a>
        </div>
      </div>
      <Bestseller />
      {/* <Tags />
      <BannerLeft /> */}
    </div>
  );
};

export default LeftSidebar;

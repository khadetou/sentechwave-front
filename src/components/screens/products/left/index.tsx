import { useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import InputRange from "react-input-range";
import BannerLeft from "./banner";
import Bestseller from "./bestseller";
import Tags from "./tags";

const LeftSidebar = () => {
  const { products } = useAppSelector((state) => state.product);
  const listProducts = [...products];
  const sortedDate = listProducts.sort((a: any, b: any) => {
    const dateB: any = new Date(b.createdAt);
    const dateA: any = new Date(a.createdAt);

    return dateB - dateA;
  });

  const Lastprod = sortedDate.slice(0, 3);
  const [value, setValue] = useState<any>({ min: "4500", max: "9000" });
  return (
    <div className="col-lg-3 order-last order-lg-first">
      <div className="sidebar-border mb-0">
        <div className="sidebar-head">
          <h6 className="color-gray-900">Product Categories</h6>
        </div>
        <div className="sidebar-content">
          <ul className="list-nav-arrow">
            <li>
              <a href="shop-grid.html">
                Computers &amp; Laptop<span className="number">09</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html">
                Electric accessories<span className="number">12</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html">
                Mainboard &amp; CPU<span className="number">24</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html">
                Bluetooth devices<span className="number">34</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html">
                Mouse &amp; Keyboard<span className="number">65</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html">
                Wired Headphone<span className="number">15</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html">
                Gaming Gatgets<span className="number">76</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html">
                Smart watches<span className="number">89</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html">
                Cell Phones<span className="number">23</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html">
                Headphone<span className="number">98</span>
              </a>
            </li>
          </ul>
          <div>
            <div className="collapse" id="moreMenu">
              <ul className="list-nav-arrow">
                <li>
                  <a href="shop-grid.html">
                    Home theater<span className="number">98</span>
                  </a>
                </li>
                <li>
                  <a href="shop-grid.html">
                    Cameras & drones<span className="number">124</span>
                  </a>
                </li>
                <li>
                  <a href="shop-grid.html">
                    PC gaming<span className="number">56</span>
                  </a>
                </li>
                <li>
                  <a href="shop-grid.html">
                    Smart home<span className="number">87</span>
                  </a>
                </li>
                <li>
                  <a href="shop-grid.html">
                    Networking<span className="number">36</span>
                  </a>
                </li>
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
      <div className="sidebar-border mb-40">
        <div className="sidebar-head">
          <h6 className="color-gray-900">Products Filter</h6>
        </div>
        <div className="sidebar-content">
          <h6 className="color-gray-900 mt-10 mb-10">Price</h6>
          <div className="box-slider-range mt-20 mb-15">
            <div className="row mb-20">
              <div className="col-sm-12">
                <div id="slider-range"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label className="lb-slider font-sm color-gray-500">
                  Price Range:
                </label>
                <span className="min-value-money font-sm color-gray-1000"></span>
                <label className="lb-slider font-sm font-medium color-gray-1000"></label>
                -
                <span className="max-value-money font-sm font-medium color-gray-1000"></span>
              </div>
              <div className="col-lg-12">
                <input
                  className="form-control min-value"
                  type="hidden"
                  name="min-value"
                  value=""
                />
                <input
                  className="form-control max-value"
                  type="hidden"
                  name="max-value"
                  value=""
                />
              </div>
            </div>
          </div>
          <ul className="list-checkbox">
            <li>
              <label className="cb-container">
                <input type="checkbox" checked />
                <span className="text-small">Free - $100</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">145</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" />
                <span className="text-small">$100 - $200</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">56</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" />
                <span className="text-small">$200 - $400</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">23</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" />
                <span className="text-small">$400 - $600</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">43</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" />
                <span className="text-small">$600 - $800</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">65</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" />
                <span className="text-small">Over $1000</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">56</span>
            </li>
          </ul>
          <h6 className="color-gray-900 mt-20 mb-10">Brands</h6>
          <ul className="list-checkbox">
            <li>
              <label className="cb-container">
                <input type="checkbox" checked />
                <span className="text-small">Apple</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">12</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" />
                <span className="text-small">Sony</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">34</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" />
                <span className="text-small">Toshiba</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">56</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" />
                <span className="text-small">Assus</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">78</span>
            </li>
            <li>
              <label className="cb-container">
                <input type="checkbox" />
                <span className="text-small">Samsung</span>
                <span className="checkmark"></span>{" "}
              </label>
              <span className="number-item">23</span>
            </li>
          </ul>
          <h6 className="color-gray-900 mt-20 mb-10">Color</h6>
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
          </ul>
          <a
            className="btn btn-filter font-sm color-brand-3 font-medium mt-10"
            href="#ModalFiltersForm"
            data-bs-toggle="modal"
          >
            More Fillters
          </a>
        </div>
      </div>
      <Bestseller />
      <Tags />
      <BannerLeft />
    </div>
  );
};

export default LeftSidebar;

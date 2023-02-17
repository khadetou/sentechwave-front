import React, { useState } from "react";
import SlideDown from "react-slidedown";
import Image from "next/image";

const FilterModal = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className="modal fade"
      id="ModalFiltersForm"
      tabIndex={-1}
      aria-hidden="true"
      style={{ display: "none" }}
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content apply-job-form">
          <div className="modal-header">
            <h5 className="modal-title color-gray-1000 filters-icon">
              Addvance Fillters
            </h5>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-30">
            <div className="row">
              <div className="col-w-1">
                <h6 className="color-gray-900 mb-0">Brands</h6>
                <ul className="list-checkbox">
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" checked />
                      <span className="text-small">Apple</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Samsung</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Baseus</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Remax</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Handtown</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Elecom</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Razer</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Auto Focus</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Nillkin</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Logitech</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">ChromeBook</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="col-w-1">
                <h6 className="color-gray-900 mb-0">Special offers</h6>
                <ul className="list-checkbox">
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">On sale</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" checked />
                      <span className="text-small">FREE shipping</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Big deals</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Shop Mall</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
                <h6 className="color-gray-900 mb-0 mt-40">Ready to ship in</h6>
                <ul className="list-checkbox">
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">1 business day</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" checked />
                      <span className="text-small">
                        1&ndash;3 business days
                      </span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">in 1 week</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Shipping now</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="col-w-1">
                <h6 className="color-gray-900 mb-0">Ordering options</h6>
                <ul className="list-checkbox">
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Accepts gift cards</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Customizable</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" checked />
                      <span className="text-small">Can be gift-wrapped</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Installment 0%</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
                <h6 className="color-gray-900 mb-0 mt-40">Rating</h6>
                <ul className="list-checkbox">
                  <li className="mb-5">
                    <a href="#">
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
                      <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                        (5 stars)
                      </span>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#">
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
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                        (4 stars)
                      </span>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#">
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
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                        (3 stars)
                      </span>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#">
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
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                        (2 stars)
                      </span>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                        (1 star)
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-w-2">
                <h6 className="color-gray-900 mb-0">Material</h6>
                <ul className="list-checkbox">
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Nylon (8)</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Tempered Glass (5)</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" checked />
                      <span className="text-small">
                        Liquid Silicone Rubber (5)
                      </span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Aluminium Alloy (3)</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
                <h6 className="color-gray-900 mb-20 mt-40">Product tags</h6>
                <div>
                  <a className="btn btn-border mr-5" href="#">
                    Games
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Electronics
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Video
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Cellphone
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Indoor
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    VGA Card
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    USB
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Lightning
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Camera
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-start pl-30">
            <a className="btn btn-buy w-auto" href="#">
              Apply Fillter
            </a>
            <a className="btn font-sm-bold color-gray-500" href="#">
              Reset Fillter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

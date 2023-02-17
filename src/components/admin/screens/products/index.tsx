import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { deleteProduct } from "redux/products/productSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ProductsList = () => {
  const { products, isError, isSuccess, message } = useAppSelector(
    (store) => store.product
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Produit supprimé avec succés!");
      // dispatch(reset());
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
      // dispatch(reset());
    }
  }, [isSuccess, isError, message]);

  const onDelete = (_id: any) => {
    MySwal.fire({
      title: "Etes vous sure ?",
      text: "De vouloire supprimé",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#218838",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Oui, supprimé!",
      cancelButtonText: "No, annulé!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(_id));
      }
    });
  };
  return (
    <>
      <div className="flex items-center justify-between mb-[19px]">
        <div>
          <h2 className="capitalize text-gray-1100 font-bold text-[28px] leading-[35px]  mb-[13px]">
            All Products
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500 gap-x-[11px]">
              <div className="flex items-center gap-x-1">
                <Image
                  src="/imgs/icons/icon-home-2.svg"
                  alt="home icon"
                  width={12}
                  height={13}
                />
                <span className="capitalize">home</span>
              </div>
              <Image
                src="/imgs/icons/icon-arrow-right.svg"
                alt="arrow right icon"
                width={12}
                height={13}
              />
              <span className="capitalize text-color-brands">All Products</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <a
            className="list-grid-btn flex items-center gap-x-2 rounded-l-2xl bg-neutral px-[17px] py-[14px]"
            href="product-list.html"
          >
            <Image
              src="/imgs/icons/icon-row-vertical.svg"
              alt="row vertical icon"
              width={17}
              height={16}
            />
            <span className="text-xs text-[#8083A3]">List</span>
          </a>
          <a
            className="list-grid-btn flex items-center gap-x-2 rounded-r-2xl bg-neutral active px-[17px] py-[14px]"
            href="product-grid.html"
          >
            <Image
              src="/imgs/icons/icon-grid.svg"
              alt="grid icon"
              width={17}
              height={16}
            />
            <span className="text-xs text-[#8083A3]">Grid</span>
          </a>
        </div>
      </div>
      <div className="flex items-center gap-x-6">
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 border p-6 bg-white rounded-2xl border-neutral mb-9 dark:bg-dark-neutral-bg  pb-[31px] xl:grid-cols-3 lg:grid-cols-2">
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-1.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-2.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-3.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-4.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-5.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-6.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-7.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-8.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-9.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-10.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-1.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
            <a
              className="block border border-neutral bg-white rounded-lg p-[15px]  dark:bg-dark-neutral-bg"
              href="#"
            >
              <div className="flex items-center gap-x-5 mb-6">
                <Image
                  className="border border-neutral rounded-lg  w-[86px]"
                  src="/imgs/product-2.png"
                  alt="product"
                  width={86}
                  height={86}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm leading-4 text-gray-900 font-semibold dark:text-gray-dark-900">
                      Cubitt Smart Watch
                    </h3>
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </div>
                  <div className="mb-[18px]">
                    <div className="flex items-center relative overflow-hidden gap-[3px]">
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <Image
                        src="/imgs/icons/icon-star.svg"
                        alt="star icon"
                        width={17}
                        height={16}
                      />
                      <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                        <Image
                          src="/imgs/icons/icon-star-yellow.svg"
                          alt="star icon"
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                      $576.28
                    </p>
                    <p className="text-sm leading-4 text-gray-500">
                      FROX-13563
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 border-bottom border-neutral text-[11px] leading-[18px] pb-[18px] mb-[18px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque ipsum, lacinia et tempor eget, hendrerit et
                orci. Phasellus at nisi non turpis accumsan feugiat vel non
                arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam
                ullamcorper lectus dui, ac posuere sapien iaculis lmao.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm leading-4 text-gray-1100  font-normal">
                    Active
                  </p>
                </div>
                <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                  186 / 2058
                </p>
              </div>
            </a>
          </div>
          <div className="flex items-center gap-x-10">
            <div>
              <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-blue-600 font-semibold py-[11px] px-[18px] hover:bg-blue-600">
                1
              </button>
              <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-transparent font-semibold text-gray-1100 py-[11px] px-[18px] hover:text-white hover:bg-blue-600 ">
                2
              </button>
              <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-transparent font-semibold text-gray-1100 py-[11px] px-[18px] hover:text-white hover:bg-blue-600 ">
                3
              </button>
              <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-transparent font-semibold text-gray-1100 py-[11px] px-[18px] hover:text-white hover:bg-blue-600 ">
                4
              </button>
              <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-transparent font-semibold text-gray-1100 py-[11px] px-[18px] hover:text-white hover:bg-blue-600 ">
                5
              </button>
            </div>
            <a
              className="items-center justify-center border rounded-lg border-neutral hidden gap-x-[10px] px-[18px] py-[11px]  sm:flex"
              href="#"
            >
              {" "}
              <span className="text-gray-400 text-xs font-semibold leading-[18px] dark:text-gray-dark-400">
                Next
              </span>
              <Image
                src="/imgs/icons/icon-arrow-right-long.svg"
                alt="arrow right icon"
                width={17}
                height={16}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsList;

import Select from "react-select";
import Image from "next/image";

const singleOrder1 = () => {
  const options = [{ value: "", label: "" }];
  const theader = ["Produit", "Total"];

  const orders = [
    {
      total: "$255.00",
    },
    {
      total: "$255.00",
    },
  ];

  return (
    <section className="w-full ">
      <div className="h-full !p-5 md:!p-8">
        <div className="!p-5 md:!p-8 bg-white shadow rounded relative overflow-hidden">
          <div className="mb-6 -mt-5 -ml-5 -mr-5 md:-mr-8 md:-ml-8 md:-mt-8">
            <div className="bg-[#F7F8FA] !px-8 !py-4">
              <div className="mb-0 flex flex-col flex-wrap items-center justify-between gap-x-8 text-base font-bold text-heading sm:flex-row lg:flex-nowrap">
                <div className="order-2 flex flex-col sm:flex-row  w-full gap-6 sm:order-1 max-w-full basis-full justify-between">
                  <div>
                    <span className="mb-2 block lg:mb-0 lg:inline-block lg:mr-4">
                      Order Status :
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs whitespace-nowrap relative text-light bg-[#F59E0B]">
                      Order Processing
                    </span>
                  </div>
                  <div>
                    <span className="mb-2 block lg:mb-0 lg:inline-block lg:mr-4 lg:rtl:ml-4">
                      Payment Status :
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs whitespace-nowrap relative text-light bg-green-500">
                      Cash On Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <button
              data-variant="normal"
              className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12 mb-5 bg-blue-500 ml-auto rtl:mr-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 548.176 548.176"
                className="w-4 h-4 me-3"
              >
                <path
                  d="M524.326 297.352c-15.896-19.89-36.21-32.782-60.959-38.684 7.81-11.8 11.704-24.934 11.704-39.399 0-20.177-7.139-37.401-21.409-51.678-14.273-14.272-31.498-21.411-51.675-21.411-18.083 0-33.879 5.901-47.39 17.703-11.225-27.41-29.171-49.393-53.817-65.95-24.646-16.562-51.818-24.842-81.514-24.842-40.349 0-74.802 14.279-103.353 42.83-28.553 28.544-42.825 62.999-42.825 103.351 0 2.474.191 6.567.571 12.275-22.459 10.469-40.349 26.171-53.676 47.106C6.661 299.594 0 322.43 0 347.179c0 35.214 12.517 65.329 37.544 90.358 25.028 25.037 55.15 37.548 90.362 37.548h310.636c30.259 0 56.096-10.711 77.512-32.12 21.413-21.409 32.121-47.246 32.121-77.516-.003-25.505-7.952-48.201-23.849-68.097zm-161.731 10.992L262.38 408.565c-1.711 1.707-3.901 2.566-6.567 2.566-2.664 0-4.854-.859-6.567-2.566L148.75 308.063c-1.713-1.711-2.568-3.901-2.568-6.567 0-2.474.9-4.616 2.708-6.423 1.812-1.808 3.949-2.711 6.423-2.711h63.954V191.865c0-2.474.905-4.616 2.712-6.427 1.809-1.805 3.949-2.708 6.423-2.708h54.823c2.478 0 4.609.9 6.427 2.708 1.804 1.811 2.707 3.953 2.707 6.427v100.497h63.954c2.665 0 4.855.855 6.563 2.566 1.714 1.711 2.562 3.901 2.562 6.567 0 2.294-.944 4.569-2.843 6.849z"
                  fill="currentColor"
                ></path>
              </svg>
              Download Invoice
            </button>
          </div>
          <div className="flex flex-col items-center lg:flex-row">
            <h3 className="w-full mb-8 text-2xl font-semibold text-center whitespace-nowrap text-heading lg:mb-0 lg:w-1/3 lg:text-start">
              Order ID - 334983046149
            </h3>
            <form className="flex flex-col md:flex-row items-start w-full ms-auto lg:w-2/4">
              <div className="z-20 w-full me-5">
                <Select options={options} />
              </div>
              <button
                data-variant="normal"
                className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-green-500 text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12"
              >
                <span className="hidden sm:block">Change Status</span>
                <span className="block sm:hidden">
                  form.button-label-change
                </span>
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center my-5 lg:my-10">
            <div className="w-full h-full">
              <div className="container">
                <div className="os-viewport os-viewport-native-scrollbars-invisible">
                  <div className="w-full !box-border relative p-0 h-auto">
                    <div className="flex w-full flex-col py-7 md:flex-row md:items-start md:justify-center">
                      <div className="mb-7 flex shrink-0 items-center md:mb-0 md:w-[21.3333%] md:flex-col lg:w-1/5">
                        <div className="relative flex items-center justify-center md:mb-4 md:w-full">
                          <div className="bg-green-500 text-white z-10 flex h-9 w-9 items-center justify-center rounded-full border border-dashed !border-green-500 text-sm font-bold">
                            <div className="h-4 w-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20.894"
                                height="16"
                                viewBox="0 0 20.894 16"
                                className="w-full"
                              >
                                <path
                                  data-name="_ionicons_svg_ios-checkmark (3)"
                                  d="M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z"
                                  transform="translate(-148.4 -173.6)"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="md:top-1/2  md:left-1/2 md:h-1 md:w-full absolute top-1/2 h-[200%] w-1 bg-green-500"></div>
                        </div>
                        <div className="flex flex-col items-start ml-5 rtl:mr-5 md:items-center md:ml-0 rtl:md:mr-0">
                          <span className="text-base font-semibold capitalize text-body-dark text-left rtl:text-right md:px-2 md:!text-center">
                            Order Pending
                          </span>
                        </div>
                      </div>
                      <div className="mb-7 flex shrink-0 items-center md:mb-0 md:w-[21.3333%] md:flex-col lg:w-1/5">
                        <div className="relative flex items-center justify-center md:mb-4 md:w-full">
                          <div className="bg-green-500 text-white z-10 flex h-9 w-9 items-center justify-center rounded-full border border-dashed !border-green-500 text-sm font-bold">
                            <div className="h-4 w-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20.894"
                                height="16"
                                viewBox="0 0 20.894 16"
                                className="w-full"
                              >
                                <path
                                  data-name="_ionicons_svg_ios-checkmark (3)"
                                  d="M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z"
                                  transform="translate(-148.4 -173.6)"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="md:top-1/2 md:h-1 md:w-full absolute -top-1/2 h-[200%] w-1 bg-green-500"></div>
                        </div>
                        <div className="flex flex-col items-start ml-5 rtl:mr-5 md:items-center md:ml-0 rtl:md:mr-0">
                          <span className="text-base font-semibold capitalize text-body-dark text-left rtl:text-right md:px-2 md:!text-center">
                            Order Processing
                          </span>
                        </div>
                      </div>
                      <div className="mb-7 flex shrink-0 items-center md:mb-0 md:w-[21.3333%] md:flex-col lg:w-1/5">
                        <div className="relative flex items-center justify-center md:mb-4 md:w-full">
                          <div className="bg-white text-green-500 z-10 flex h-9 w-9 items-center justify-center rounded-full border !border-dashed !border-green-500 text-sm font-bold">
                            3
                          </div>
                          <div className="md:top-1/2 md:h-1 md:w-full absolute -top-1/2 h-[200%] w-1 bg-gray-200"></div>
                        </div>
                        <div className="flex flex-col items-start ml-5 rtl:mr-5 md:items-center md:ml-0 rtl:md:mr-0">
                          <span className="text-base font-semibold capitalize text-body-dark text-left rtl:text-right md:px-2 md:!text-center">
                            Order At Local Facility
                          </span>
                        </div>
                      </div>
                      <div className="mb-7 flex shrink-0 items-center md:mb-0 md:w-[21.3333%] md:flex-col lg:w-1/5">
                        <div className="relative flex items-center justify-center md:mb-4 md:w-full">
                          <div className="bg-white text-green-500 z-10 flex h-9 w-9 items-center justify-center rounded-full border !border-dashed !border-green-500 text-sm font-bold">
                            4
                          </div>
                          <div className="md:top-1/2 md:h-1 md:w-full absolute -top-1/2 h-[200%] w-1 bg-gray-200"></div>
                        </div>
                        <div className="flex flex-col items-start ml-5 rtl:mr-5 md:items-center md:ml-0 rtl:md:mr-0">
                          <span className="text-base font-semibold capitalize text-body-dark text-left rtl:text-right md:px-2 md:!text-center">
                            Order Out For Delivery
                          </span>
                        </div>
                      </div>
                      <div className="mb-7 flex shrink-0 items-center md:mb-0 md:w-[21.3333%] md:flex-col lg:w-1/5">
                        <div className="relative flex items-center justify-center md:mb-4 md:w-full">
                          <div className="bg-white text-green-500 z-10 flex h-9 w-9 items-center justify-center rounded-full border !border-dashed !border-green-500 text-sm font-bold">
                            5
                          </div>
                          <div className="md:top-1/2 md:h-1 md:w-full absolute bottom-1/2 h-[200%] w-1 bg-gray-200 md:right-1/2"></div>
                        </div>
                        <div className="flex flex-col items-start ml-5 rtl:mr-5 md:items-center md:ml-0 rtl:md:mr-0">
                          <span className="text-base font-semibold capitalize text-body-dark text-left rtl:text-right md:px-2 md:!text-center">
                            Order Completed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable">
                <div className="os-scrollbar-track os-scrollbar-track-off">
                  <div
                    className="os-scrollbar-handle"
                    style={{ width: "100%", transform: "translate(0px, 0px)" }}
                  ></div>
                </div>
              </div>
              <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable">
                <div className="os-scrollbar-track os-scrollbar-track-off">
                  <div
                    className="os-scrollbar-handle"
                    style={{ height: "100%", transform: "translate(0px, 0px)" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="overflow-auto rounded-lg ">
              <table className=" w-full ">
                <thead className="bg-gray-50 border-b-2 table-auto border-gray-200">
                  <tr>
                    {theader.map((item, idx) => (
                      <th
                        key={idx}
                        className="p-4 text-start  text-sm font-semibold tracking-wide text-[#2b2b2b]"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.map(({ total }, idx) => (
                    <tr
                      key={idx}
                      className="bg-white border-b border-gray-200 odd:bg-gray-50"
                    >
                      <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                        <div className="flex items-center">
                          <Image
                            src="/imgs/page/product/img-sub2.png"
                            alt="img"
                            width={50}
                            height={50}
                            className="inline"
                          />
                          <p className="ml-5">Produit electrotech</p>
                        </div>
                      </td>
                      <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                        <div>{total}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col w-full px-4 py-4 space-y-2 border-t-4 border-double border-gray-100 ms-auto sm:w-1/2 md:w-1/3">
              <div className="flex items-center justify-between text-sm text-body">
                <span>Sub total</span>
                <span>$5.00</span>
              </div>
              <div className="flex items-center justify-between text-sm text-body">
                <span>Tax</span>
                <span>$0.10</span>
              </div>
              <div className="flex items-center justify-between text-sm text-body">
                <span>Delivery fee</span>
                <span>$50.00</span>
              </div>
              <div className="flex items-center justify-between text-sm text-body">
                <span>Discount</span>
                <span>$0.00</span>
              </div>
              <div className="flex items-center justify-between text-base font-semibold text-heading">
                <span>Total</span>
                <span>$55.10</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2 sm:!pr-8">
              <h3 className="pb-2 mb-3 font-semibold border-bottom border-b-gray-100 text-heading">
                Billing Address
              </h3>
              <div className="flex flex-col items-start space-y-1 text-sm text-body">
                <span></span>
                <span>
                  <span className="single-address truncate">
                    Voluptatum qui sunt
                  </span>
                  <span className="single-address truncate">
                    Ipsum qui minus sint
                  </span>
                  <span className="single-address truncate">
                    Quod et consequatur
                  </span>

                  <span className="single-address !truncate">, 51397, </span>
                  <br />
                  <span className="single-address !truncate">
                    Aut fugiat iusto do
                  </span>
                </span>
                <span>19365141641631</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:!pl-8">
              <h3 className="pb-2 mb-3 font-semibold border-bottom border-b-gray-100 text-heading !text-start sm:!text-end">
                Shipping Address
              </h3>
              <div className="flex flex-col items-start space-y-1 text-sm text-body text-start sm:items-end sm:text-end">
                <span></span>
                <span>
                  <span className="single-address truncate">mermoz</span>
                  <span className="single-address truncate">Dakar</span>
                  <span className="single-address truncate">Dakar</span>
                  <span className="single-address truncate">38169</span>
                  <span className="single-address truncate">Sénégal</span>
                </span>
                <span>19365141641631</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default singleOrder1;

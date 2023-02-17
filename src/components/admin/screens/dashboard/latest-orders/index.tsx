import Image from "next/image";

const LatestOrders = () => {
  return (
    <div className="rounded-2xl  border border-neutral bg-white !mt-6 dark:border-dark-neutral-border dark:bg-dark-neutral-bg overflow-scroll scrollbar-hide p-[25px] mb-[33px]">
      <div className="flex items-center justify-between !pb-4 border-neutral border-bottom !mb-5 dark:border-dark-neutral-border">
        <p className="text-subtitle-semibold font-semibold text-gray-1100 dark:text-gray-dark-1100">
          Recent Purchases
        </p>
        <div className="dropdowns dropdowns-end ml-auto translate-x-4 z-10">
          <label
            className="cursor-pointer dropdowns-label flex items-center justify-between py-2 px-4"
            tabIndex={0}
          >
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-toggle.svg"
              alt="toggle icon"
              width={3}
              height={13}
            />
          </label>
          <ul className="dropdowns-content w-[132px]" tabIndex={0}>
            <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white  mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
              <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
              <li className="text-normal mb-[7px]">
                <a
                  className="flex items-center bg-transparent p-0 gap-[7px]"
                  href="#"
                >
                  <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                    Sales report
                  </span>
                </a>
              </li>
              <li className="text-normal mb-[7px]">
                <a
                  className="flex items-center bg-transparent p-0 gap-[7px]"
                  href="#"
                >
                  <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                    Export report
                  </span>
                </a>
              </li>
              <li className="text-normal mb-[7px]">
                <a
                  className="flex items-center bg-transparent p-0 gap-[7px]"
                  href="#"
                >
                  <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                    Profit manage
                  </span>
                </a>
              </li>
              <li className="text-normal mb-[7px]">
                <a
                  className="flex items-center bg-transparent p-0 gap-[7px]"
                  href="#"
                >
                  <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                    Revenue report
                  </span>
                </a>
              </li>
              <div className="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
              <li className="text-normal mb-[7px]">
                <a
                  className="flex items-center bg-transparent p-0 gap-[7px]"
                  href="#remove"
                >
                  <span className="text-red text-[11px] leading-4">
                    Remove widget
                  </span>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <table className="w-full min-w-[900px]">
        <thead>
          <tr className="border-bottom border-neutral dark:border-dark-neutral-border pb-[15px]">
            <th className="text-left">
              <input
                className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[6px]"
                type="checkbox"
              />
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Products
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Order ID
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Date
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Customer name
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Status
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Amount
            </th>
            <th className="font-normal text-normal text-gray-400 text-center pb-[15px] dark:text-gray-dark-400">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-bottom text-normal text-gray-1100 border-neutral dark:border-dark-neutral-border dark:text-gray-dark-1100">
            <td className="text-left">
              <input
                className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                type="checkbox"
              />
            </td>
            <td className="py-[17px]">
              <span>MacBook Pro</span>
            </td>
            <td>
              <span>#25413</span>
            </td>
            <td>
              <span>Aug 5th, 2021</span>
            </td>
            <td>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src="/imgs/seller-avatar-1.png"
                    alt="user avatar"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Bessie Cooper
                </p>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-x-2">
                <div className="w-2 h-2 rounded-full bg-green"></div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Delivered
                </p>
              </div>
            </td>
            <td>
              <span>$400.00</span>
            </td>
            <td>
              <div className="dropdowns dropdowns-end w-full">
                <label
                  className="cursor-pointer dropdowns-label flex items-center justify-between p-3"
                  tabIndex={0}
                >
                  <Image
                    className="mx-auto cursor-pointer"
                    src="/imgs/icons/icon-more.svg"
                    alt="more icon"
                    width={16}
                    height={4}
                  />
                </label>
                <ul className="dropdowns-content w-[132px]" tabIndex={0}>
                  <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-6 mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                    <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px] show-detail"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          View details
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Pending
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Completed
                        </span>
                      </a>
                    </li>
                    <div className="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#remove"
                      >
                        <span className="text-red text-[11px] leading-4">
                          Cancel
                        </span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="border-bottom text-normal text-gray-1100 border-neutral dark:border-dark-neutral-border dark:text-gray-dark-1100">
            <td className="text-left">
              <input
                className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                type="checkbox"
              />
            </td>
            <td className="py-[17px]">
              <span>iPhone 11 Pro</span>
            </td>
            <td>
              <span>#25413</span>
            </td>
            <td>
              <span>Aug 5th, 2021</span>
            </td>
            <td>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src="/imgs/seller-avatar-2.png"
                    alt="user avatar"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Annette Black
                </p>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-x-2">
                <div className="w-2 h-2 rounded-full bg-orange"></div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Pending
                </p>
              </div>
            </td>
            <td>
              <span>$200.00</span>
            </td>
            <td>
              <div className="dropdowns dropdowns-end w-full">
                <label
                  className="cursor-pointer dropdowns-label flex items-center justify-between p-3"
                  tabIndex={0}
                >
                  <Image
                    className="mx-auto cursor-pointer"
                    src="/imgs/icons/icon-more.svg"
                    alt="more icon"
                    width={16}
                    height={4}
                  />
                </label>
                <ul className="dropdowns-content w-[132px]" tabIndex={0}>
                  <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-6 mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                    <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px] show-detail"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          View details
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Pending
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Completed
                        </span>
                      </a>
                    </li>
                    <div className="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#remove"
                      >
                        <span className="text-red text-[11px] leading-4">
                          Cancel
                        </span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="border-bottom text-normal text-gray-1100 border-neutral dark:border-dark-neutral-border dark:text-gray-dark-1100">
            <td className="text-left">
              <input
                className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                type="checkbox"
              />
            </td>
            <td className="py-[17px]">
              <span>Oppo A20</span>
            </td>
            <td>
              <span>#25413</span>
            </td>
            <td>
              <span>Aug 5th, 2021</span>
            </td>
            <td>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src="/imgs/seller-avatar-3.png"
                    alt="user avatar"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Erling Halland
                </p>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-x-2">
                <div className="w-2 h-2 rounded-full bg-green"></div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Delivered
                </p>
              </div>
            </td>
            <td>
              <span>$250.00</span>
            </td>
            <td>
              <div className="dropdowns dropdowns-end w-full">
                <label
                  className="cursor-pointer dropdowns-label flex items-center justify-between p-3"
                  tabIndex={0}
                >
                  <Image
                    className="mx-auto cursor-pointer"
                    src="/imgs/icons/icon-more.svg"
                    alt="more icon"
                    width={16}
                    height={4}
                  />
                </label>
                <ul className="dropdowns-content w-[132px]" tabIndex={0}>
                  <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-6 mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                    <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px] show-detail"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          View details
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Pending
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Completed
                        </span>
                      </a>
                    </li>
                    <div className="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#remove"
                      >
                        <span className="text-red text-[11px] leading-4">
                          Cancel
                        </span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="border-bottom text-normal text-gray-1100 border-neutral dark:border-dark-neutral-border dark:text-gray-dark-1100">
            <td className="text-left">
              <input
                className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                type="checkbox"
              />
            </td>
            <td className="py-[17px]">
              <span>Oppo A20</span>
            </td>
            <td>
              <span>#25413</span>
            </td>
            <td>
              <span>Aug 5th, 2021</span>
            </td>
            <td>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src="/imgs/seller-avatar-4.png"
                    alt="user avatar"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Kristin Watson
                </p>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-x-2">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Canceled
                </p>
              </div>
            </td>
            <td>
              <span>$400.00</span>
            </td>
            <td>
              <div className="dropdowns dropdowns-end w-full">
                <label
                  className="cursor-pointer dropdowns-label flex items-center justify-between p-3"
                  tabIndex={0}
                >
                  <Image
                    className="mx-auto cursor-pointer"
                    src="/imgs/icons/icon-more.svg"
                    alt="more icon"
                    width={16}
                    height={4}
                  />
                </label>
                <ul className="dropdowns-content w-[132px]" tabIndex={0}>
                  <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-6 mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                    <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px] show-detail"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          View details
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Pending
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Completed
                        </span>
                      </a>
                    </li>
                    <div className="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#remove"
                      >
                        <span className="text-red text-[11px] leading-4">
                          Cancel
                        </span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="border-bottom text-normal text-gray-1100 border-neutral dark:border-dark-neutral-border dark:text-gray-dark-1100">
            <td className="text-left">
              <input
                className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                type="checkbox"
              />
            </td>
            <td className="py-[17px]">
              <span>MacBook Pro</span>
            </td>
            <td>
              <span>#25413</span>
            </td>
            <td>
              <span>Aug 5th, 2021</span>
            </td>
            <td>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src="/imgs/seller-avatar-5.png"
                    alt="user avatar"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Esther Howard
                </p>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-x-2">
                <div className="w-2 h-2 rounded-full bg-green"></div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Delivered
                </p>
              </div>
            </td>
            <td>
              <span>$400.00</span>
            </td>
            <td>
              <div className="dropdowns dropdowns-end w-full">
                <label
                  className="cursor-pointer dropdowns-label flex items-center justify-between p-3"
                  tabIndex={0}
                >
                  <Image
                    className="mx-auto cursor-pointer"
                    src="/imgs/icons/icon-more.svg"
                    alt="more icon"
                    width={16}
                    height={4}
                  />
                </label>
                <ul className="dropdowns-content w-[132px]" tabIndex={0}>
                  <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                    <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px] show-detail"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          View details
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Pending
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Completed
                        </span>
                      </a>
                    </li>
                    <div className="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#remove"
                      >
                        <span className="text-red text-[11px] leading-4">
                          Cancel
                        </span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="border-bottom text-normal text-gray-1100 border-neutral dark:border-dark-neutral-border dark:text-gray-dark-1100">
            <td className="text-left">
              <input
                className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                type="checkbox"
              />
            </td>
            <td className="py-[17px]">
              <span>iPhone 11 Pro</span>
            </td>
            <td>
              <span>#25413</span>
            </td>
            <td>
              <span>Aug 5th, 2021</span>
            </td>
            <td>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src="/imgs/seller-avatar-2.png"
                    alt="user avatar"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Jerome Bell
                </p>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-x-2">
                <div className="w-2 h-2 rounded-full bg-orange"></div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Pending
                </p>
              </div>
            </td>
            <td>
              <span>$200.00</span>
            </td>
            <td>
              <div className="dropdowns dropdowns-end w-full">
                <label
                  className="cursor-pointer dropdowns-label flex items-center justify-between p-3"
                  tabIndex={0}
                >
                  <Image
                    className="mx-auto cursor-pointer"
                    src="/imgs/icons/icon-more.svg"
                    alt="more icon"
                    width={16}
                    height={4}
                  />
                </label>
                <ul className="dropdowns-content" tabIndex={0}>
                  <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white  mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                    <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px] show-detail"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          View details
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Pending
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Completed
                        </span>
                      </a>
                    </li>
                    <div className="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#remove"
                      >
                        <span className="text-red text-[11px] leading-4">
                          Cancel
                        </span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="border-bottom text-normal text-gray-1100 border-neutral dark:border-dark-neutral-border dark:text-gray-dark-1100">
            <td className="text-left">
              <input
                className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                type="checkbox"
              />
            </td>
            <td className="py-[17px]">
              <span>Oppo A20</span>
            </td>
            <td>
              <span>#25413</span>
            </td>
            <td>
              <span>Aug 5th, 2021</span>
            </td>
            <td>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src="/imgs/seller-avatar-6.png"
                    alt="user avatar"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Brooklyn
                </p>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-x-2">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                  Canceled
                </p>
              </div>
            </td>
            <td>
              <span>$400.00</span>
            </td>
            <td>
              <div className="dropdowns dropdowns-end w-full">
                <label
                  className="cursor-pointer dropdowns-label flex items-center justify-between p-3"
                  tabIndex={0}
                >
                  <Image
                    className="mx-auto cursor-pointer"
                    src="/imgs/icons/icon-more.svg"
                    alt="more icon"
                    width={16}
                    height={4}
                  />
                </label>
                <ul className="dropdowns-content w-[132px]" tabIndex={0}>
                  <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                    <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px] show-detail"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          View details
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Pending
                        </span>
                      </a>
                    </li>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#"
                      >
                        <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                          Completed
                        </span>
                      </a>
                    </li>
                    <div className="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
                    <li className="text-normal mb-[7px]">
                      <a
                        className="flex items-center bg-transparent p-0 gap-[7px]"
                        href="#remove"
                      >
                        <span className="text-red text-[11px] leading-4">
                          Cancel
                        </span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LatestOrders;

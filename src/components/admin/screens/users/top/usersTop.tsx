import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import "moment/locale/fr";

moment.locale("fr");
const TopUsers = () => {
  return (
    <>
      {" "}
      <div className="flex items-end justify-between mb-[25px]">
        <div>
          <h2 className="capitalize  font-bold text-[28px] leading-[35px]  mb-[13px]">
            Liste des clients
          </h2>
          <div className="flex items-center text-xs text-gray-500 gap-x-[11px]">
            <div className="flex items-center gap-x-1">
              <Image
                src="/imgs/icons/icon-home-2.svg"
                alt="home icon"
                width={12}
                height={12}
              />
              <Link className="capitalize" href="/">
                Acceuil
              </Link>
            </div>
            <Image
              src="/imgs/icons/icon-arrow-right.svg"
              alt="arrow right icon"
              width={12}
              height={12}
            />
            <span className="capitalize text-color-brands">Customers List</span>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          {" "}
          <Image
            src="/imgs/icons/icon-calendar-1.svg"
            alt="calendar icon"
            width={12}
            height={12}
          />
          <time className="text-xs text-gray-500">
            {moment().format("lll")}
          </time>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-5 mb-[27px]">
        <div className="dropdowns dropdowns-end">
          <label
            className="cursor-pointer dropdowns-label flex items-center justify-between"
            tabIndex={0}
          >
            <div className="flex items-center justify-between !p-4 bg-white border border-neutral rounded-lg w-[225px] dark:bg-dark-neutral-bg dark:border-dark-neutral-border">
              <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                All Category
              </p>
              <Image
                className="cursor-pointer"
                src="/imgs/icons/icon-arrow-down.svg"
                alt="arrow icon"
                width={12}
                height={12}
              />
            </div>
          </label>
          <ul className="dropdowns-content" tabIndex={0}>
            <div className="relative menu rounded-2xl dropdowns-shadow w-[225px] bg-white pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
              <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
              <li className="text-normal mb-[7px]">
                <div className="flex items-center bg-transparent p-0">
                  <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                    Sales report
                  </span>
                </div>
              </li>
              <li className="text-normal mb-[7px]">
                <div className="flex items-center bg-transparent p-0">
                  <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                    Export report
                  </span>
                </div>
              </li>
              <li className="text-normal mb-[7px]">
                <div className="flex items-center bg-transparent p-0">
                  <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                    Profit manage
                  </span>
                </div>
              </li>
              <li className="text-normal mb-[7px]">
                <div className="flex items-center bg-transparent p-0">
                  <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                    Revenue report
                  </span>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="dropdowns dropdowns-end">
            <label
              className="cursor-pointer dropdowns-label flex items-center justify-between"
              tabIndex={0}
            >
              <div className="flex items-center justify-between !p-4 bg-white border border-neutral rounded-lg w-[173px] dark:bg-dark-neutral-bg dark:border-dark-neutral-border">
                <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                  10-02-2021
                </p>
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-calendar-2.svg"
                  alt="calendar icon"
                  width={12}
                  height={12}
                />
              </div>
            </label>
            <ul className="dropdowns-content" tabIndex={0}>
              <div className="relative menu rounded-2xl dropdowns-shadow w-[173px] bg-white pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Sales report
                    </span>
                  </div>
                </li>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Export report
                    </span>
                  </div>
                </li>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Profit manage
                    </span>
                  </div>
                </li>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Revenue report
                    </span>
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div className="dropdowns dropdowns-end">
            <label
              className="cursor-pointer dropdowns-label flex items-center justify-between"
              tabIndex={0}
            >
              <div className="flex items-center justify-between !p-4 bg-white border border-neutral rounded-lg w-[173px] dark:bg-dark-neutral-bg dark:border-dark-neutral-border">
                <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                  Status
                </p>
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-arrow-down.svg"
                  alt="arrow icon"
                  width={12}
                  height={12}
                />
              </div>
            </label>
            <ul className="dropdowns-content" tabIndex={0}>
              <div className="relative menu rounded-2xl dropdowns-shadow w-[173px] bg-white pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Sales report
                    </span>
                  </div>
                </li>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Export report
                    </span>
                  </div>
                </li>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Profit manage
                    </span>
                  </div>
                </li>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Revenue report
                    </span>
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div className="dropdowns dropdowns-end">
            <label
              className="cursor-pointer dropdowns-label flex items-center justify-between"
              tabIndex={0}
            >
              <div className="flex items-center !p-4 bg-white border border-neutral rounded-lg w-[90px] dark:bg-dark-neutral-bg dark:border-dark-neutral-border gap-[5px]">
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-filter.svg"
                  alt="calendar icon"
                  width={12}
                  height={12}
                />
                <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                  Filters
                </p>
              </div>
            </label>
            <ul className="dropdowns-content" tabIndex={0}>
              <div className="relative menu rounded-2xl dropdowns-shadow w-[150px] bg-white pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Sales report
                    </span>
                  </div>
                </li>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Export report
                    </span>
                  </div>
                </li>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Profit manage
                    </span>
                  </div>
                </li>
                <li className="text-normal mb-[7px]">
                  <div className="flex items-center bg-transparent p-0">
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Revenue report
                    </span>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopUsers;

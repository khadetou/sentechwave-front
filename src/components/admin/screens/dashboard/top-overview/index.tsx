import Image from "next/image";

const TopOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mb-[26px] lg:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-2xl border border-neutral bg-white !py-4 flex-1 px-[19px]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-desc text-gray-500 ">Total sells</p>
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
            <ul className="dropdowns-content w-[129px]" tabIndex={0}>
              <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border">
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
                <div className="w-full bg-neutral h-[1px] my-[7px]"></div>
                <li className="text-normal mb-[7px]">
                  <a
                    className="flex items-center bg-transparent p-0 gap-[7px]"
                    href="#remove"
                  >
                    <span className="text-red-600 text-[11px] leading-4">
                      Remove widget
                    </span>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between mb-[2px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg grid place-items-center bg-green-500">
              <Image
                src="/imgs/icons/icon-bag-happy.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <p className="text-btn-label text-lg font-bold text-gray-1100 ">
              $126.500
            </p>
          </div>
          <div className="flex items-center gap-[7px]">
            <Image
              src="/imgs/icons/icon-export-green.svg"
              width={16}
              height={16}
              alt=""
            />
            <span className="text-green-500 text-subtitle font-bold">
              34.7%
            </span>
          </div>
        </div>
        <p className="text-right text-gray-400  text-[11px] leading-[16px]">
          Compared to Jan 2022
        </p>
      </div>
      <div className="rounded-2xl border border-neutral bg-white !py-4 flex-1 px-[19px]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-desc text-gray-500 ">Orders value</p>
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
            <ul className="dropdowns-content w-[129px]" tabIndex={0}>
              <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border">
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
                <div className="w-full bg-neutral h-[1px] my-[7px]"></div>
                <li className="text-normal mb-[7px]">
                  <a
                    className="flex items-center bg-transparent p-0 gap-[7px]"
                    href="#remove"
                  >
                    <span className="text-red-600 text-[11px] leading-4">
                      Remove widget
                    </span>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between mb-[2px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg grid place-items-center bg-blue-500">
              <Image
                src="/imgs/icons/icon-bag-happy.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <p className="text-btn-label text-lg font-bold text-gray-1100">
              $136.800
            </p>
          </div>
          <div className="flex items-center gap-[7px]">
            <Image
              src="/imgs/icons/icon-export-green.svg"
              width={16}
              height={16}
              alt=""
            />
            <span className="text-green-500 text-subtitle font-bold">
              22.8%
            </span>
          </div>
        </div>
        <p className="text-right text-gray-400  text-[11px] leading-[16px]">
          Compared to Jan 2022
        </p>
      </div>
      <div className="rounded-2xl border border-neutral bg-white  !py-4 flex-1 px-[19px]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-desc text-gray-500 ">Daily orders</p>
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
            <ul className="dropdowns-content w-[129px]" tabIndex={0}>
              <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border  ">
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
                <div className="w-full bg-neutral h-[1px] my-[7px] "></div>
                <li className="text-normal mb-[7px]">
                  <a
                    className="flex items-center bg-transparent p-0 gap-[7px]"
                    href="#remove"
                  >
                    <span className="text-red-600 text-[11px] leading-4">
                      Remove widget
                    </span>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between mb-[2px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg grid place-items-center bg-violet-500">
              <Image
                src="/imgs/icons/icon-bag-happy.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <p className="text-btn-label text-lg font-bold text-gray-1100 ">
              $25.200
            </p>
          </div>
          <div className="flex items-center gap-[7px]">
            <Image
              src="/imgs/icons/icon-export-green.svg"
              width={16}
              height={16}
              alt=""
            />
            <span className="text-green-500 text-subtitle font-bold">
              17.8%
            </span>
          </div>
        </div>
        <p className="text-right text-gray-400  text-[11px] leading-[16px]">
          Compared to Jan 2022
        </p>
      </div>
      <div className="rounded-2xl border border-neutral bg-white  !py-4 flex-1 px-[19px]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-desc text-gray-500">Total sells</p>
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
            <ul className="dropdowns-content w-[129px]" tabIndex={0}>
              <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border">
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
                <div className="w-full bg-neutral h-[1px] my-[7px] "></div>
                <li className="text-normal mb-[7px]">
                  <a
                    className="flex items-center bg-transparent p-0 gap-[7px]"
                    href="#remove"
                  >
                    <span className="text-red-600 text-[11px] leading-4">
                      Remove widget
                    </span>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between mb-[2px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg grid place-items-center bg-pink-700">
              <Image
                src="/imgs/icons/icon-bag-happy.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <p className="text-btn-label text-lg font-bold text-gray-1100">
              $12.125
            </p>
          </div>
          <div className="flex items-center gap-[7px]">
            <Image
              src="/imgs/icons/icon-export-green.svg"
              width={16}
              height={16}
              alt=""
            />
            <span className="text-green-500 text-subtitle font-bold">
              23.9%
            </span>
          </div>
        </div>
        <p className="text-right text-gray-400 text-[11px] leading-[16px]">
          Compared to Jan 2022
        </p>
      </div>
    </div>
  );
};

export default TopOverview;

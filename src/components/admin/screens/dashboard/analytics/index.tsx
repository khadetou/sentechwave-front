import Image from "next/image";

const Analytics = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col justify-between gap-6 xl:flex-row">
          <div className="border bg-white border-neutral dark:bg-dark-neutral-bg dark:border-dark-neutral-border rounded-2xl px-6 flex-1 pt-[15px] pb-[34px]">
            <div className="flex items-center justify-between border-b border-neutral dark:border-dark-neutral-border mb-[24px] pb-[15px]">
              <div className="text-base leading-5 text-gray-1100 font-semibold dark:text-gray-dark-1100">
                Top countries
              </div>
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
                <ul className="dropdowns-content" tabIndex={0}>
                  <div className="relative menu rounded-box dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
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
            <canvas id="canvas"></canvas>
          </div>
          <div className="border bg-white border-neutral dark:bg-dark-neutral-bg dark:border-dark-neutral-border rounded-2xl pt-[15px] pb-[31px] pl-[30px] pr-[27px] xl:w-[35%]">
            <div className="flex items-center justify-between border-b border-neutral dark:border-dark-neutral-border mb-[34px] pb-[15px]">
              <div className="text-base leading-5 text-gray-1100 font-semibold dark:text-gray-dark-1100">
                Popular browser
              </div>
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
                <ul className="dropdowns-content" tabIndex={0}>
                  <div className="relative menu rounded-box dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
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
            <div className="mb-[43px]">
              <div>
                <canvas
                  className="max-h-[256px]"
                  width="400"
                  height="400"
                  id="barChart"
                ></canvas>
              </div>
            </div>
            <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 w-full bg-neutral text-gray-500 dark:text-gray-dark-500 dark:bg-dark-neutral-border rounded-[10px] py-[15px] hover:bg-neutral dark:hover:bg-dark-neutral-border">
              View All Reports
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;

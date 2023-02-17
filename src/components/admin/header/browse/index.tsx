import Image from "next/image";

const Browse = () => {
  return (
    <div className="dropdowns">
      <label
        className="cursor-pointer dropdowns-label flex items-center justify-between w-[142px]"
        tabIndex={0}
      >
        <div className="items-center justify-center hidden rounded-lg border border-neutral  gap-x-[10px] px-[18px] py-[11px] sm:flex">
          <div className="flex items-center gap-[11px]">
            <Image
              src="/imgs/icons/icon-export.svg"
              alt="export icon"
              width={16}
              height={16}
            />
            <span className="text-normal font-semibold text-gray-500 ">
              Browse
            </span>
          </div>
          <Image
            src="/imgs/icons/icon-arrow-down.svg"
            alt="down icon"
            width={12}
            height={12}
          />
        </div>
      </label>
      <ul className="dropdowns-content" tabIndex={0}>
        <div className="relative menu rounded-2xl dropdowns-shadow min-w-[237px] mt-[25px] md:mt-[48px] p-[25px] pb-[10px] bg-blue-500">
          <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-blue-500"></div>
          <li className="text-normal p-[15px] pl-[21px]">
            <a
              className="flex items-center bg-transparent p-0 gap-[7px]"
              href="#"
            >
              {" "}
              <i className="w-4 h-4 grid place-items-center">
                <Image
                  src="/imgs/icons/icon-verify.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
              </i>
              <span className="text-white hover:text-[#C6CBD9]">
                All Brands
              </span>
            </a>
          </li>
          <li className="text-normal p-[15px] pl-[21px]">
            <a
              className="flex items-center bg-transparent p-0 gap-[7px]"
              href="#"
            >
              {" "}
              <i className="w-4 h-4 grid place-items-center">
                <Image
                  src="/imgs/icons/icon-verify.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
              </i>
              <span className="text-white hover:text-[#C6CBD9]">
                News Reviews
              </span>
            </a>
          </li>
          <li className="text-normal p-[15px] pl-[21px]">
            <a
              className="flex items-center bg-transparent p-0 gap-[7px]"
              href="#"
            >
              {" "}
              <i className="w-4 h-4 grid place-items-center">
                <Image
                  src="/imgs/icons/icon-verify.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
              </i>
              <span className="text-white hover:text-[#C6CBD9]">
                Financial report
              </span>
            </a>
          </li>
          <li className="text-normal p-[15px] pl-[21px]">
            <a
              className="flex items-center bg-transparent p-0 gap-[7px]"
              href="#"
            >
              {" "}
              <i className="w-4 h-4 grid place-items-center">
                <Image
                  src="/imgs/icons/icon-verify.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
              </i>
              <span className="text-white hover:text-[#C6CBD9]">Shipping</span>
            </a>
          </li>
          <li className="text-normal p-[15px] pl-[21px]">
            <a
              className="flex items-center bg-transparent p-0 gap-[7px]"
              href="#"
            >
              {" "}
              <i className="w-4 h-4 grid place-items-center">
                <Image
                  src="/imgs/icons/icon-verify.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
              </i>
              <span className="text-white hover:text-[#C6CBD9]">
                View Catalog
              </span>
            </a>
          </li>
          <li className="text-normal p-[15px] pl-[21px]">
            <a
              className="flex items-center bg-transparent p-0 gap-[7px]"
              href="#"
            >
              {" "}
              <i className="w-4 h-4 grid place-items-center">
                <Image
                  src="/imgs/icons/icon-verify.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
              </i>
              <span className="text-white hover:text-[#C6CBD9]">
                Revenue report
              </span>
            </a>
          </li>
          <li className="text-normal p-[15px] pl-[21px]">
            <a
              className="flex items-center bg-transparent p-0 gap-[7px]"
              href="#"
            >
              {" "}
              <i className="w-4 h-4 grid place-items-center">
                <Image
                  src="/imgs/icons/icon-verify.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
              </i>
              <span className="text-white hover:text-[#C6CBD9]">
                Refund requests
              </span>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Browse;

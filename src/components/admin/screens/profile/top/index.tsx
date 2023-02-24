import Image from "next/image";

const TopProfile = () => {
  return (
    <>
      <h2 className="capitalize text-gray-1100 font-bold text-[28px] leading-[35px] dark:text-gray-dark-1100 mb-[13px]">
        Seller Details
      </h2>
      <div className="flex justify-between flex-col gap-y-2 mb-[28px] sm:flex-row">
        <div className="flex items-center text-xs text-gray-500 gap-x-[11px]">
          <div className="flex items-center gap-x-1">
            <Image
              src="/imgs/icons/icon-home-2.svg"
              width={12}
              height={13}
              alt="home icon"
            />
            <span className="capitalize">home</span>
          </div>
          <Image
            src="/imgs/icons/icon-arrow-right.svg"
            alt="arrow right icon"
            width={12}
            height={13}
          />
          <span className="capitalize text-color-brands">Seller Details</span>
        </div>
        <div className="flex items-center gap-x-2">
          {" "}
          <Image
            src="/imgs/icons/icon-calendar-1.svg"
            alt="calendar icon"
            width={16}
            height={16}
          />
          <time className="text-xs text-gray-500">
            Feb 15, 2022 - Feb 21, 2022
          </time>
        </div>
      </div>
    </>
  );
};

export default TopProfile;

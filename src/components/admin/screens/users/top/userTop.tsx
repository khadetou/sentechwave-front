import Image from "next/image";

const UserTop = () => {
  return (
    <div className="xl:px-[20px] mt-11 ">
      <h2 className="capitalize text-gray-1100 font-bold text-[28px] leading-[35px] dark:text-gray-dark-1100 mb-[13px]">
        Customers Details
      </h2>
      <div className="flex justify-between flex-col gap-y-2 sm:flex-row mb-[53px]">
        <div className="flex items-center text-xs gap-x-[11px]">
          <div className="flex items-center gap-x-1">
            <Image
              src="/imgs/icons/icon-home-2.svg"
              alt="home icon"
              width={12}
              height={13}
            />
            <span className="capitalize text-gray-500 dark:text-gray-dark-500">
              Home
            </span>
          </div>
          <Image
            src="/imgs/icons/icon-arrow-right.svg"
            alt="arrow right icon"
            width={12}
            height={13}
          />
          <span className="capitalize text-color-brands">Customers</span>
        </div>
        <div className="items-center gap-x-2 flex">
          <Image
            src="/imgs/icons/icon-calendar-1.svg"
            alt="calendar icon"
            width={16}
            height={16}
          />
          <time className="text-xs text-gray-500 dark:text-gray-dark-500">
            Feb 15, 2022 - Feb 21, 2022
          </time>
        </div>
      </div>
    </div>
  );
};

export default UserTop;

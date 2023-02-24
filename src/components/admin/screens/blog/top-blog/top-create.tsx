import Image from "next/image";

const TopCreate = () => {
  return (
    <>
      <h2 className="capitalize text-gray-1100 font-bold text-[28px] leading-[35px] dark:text-gray-dark-1100 mb-[13px]">
        Add new post
      </h2>
      <div className="flex justify-between flex-col gap-y-2 sm:flex-row mb-[54px]">
        <div className="flex items-center text-xs gap-x-[11px]">
          <div className="flex items-center gap-x-1">
            <Image
              src="/imgs/icons/icon-home-2.svg"
              alt="home icon"
              width={13}
              height={12}
            />
            <span className="capitalize text-gray-500 dark:text-gray-dark-500">
              Home
            </span>
          </div>
          <Image
            src="/imgs/icons/icon-arrow-right.svg"
            alt="arrow right icon"
            width={13}
            height={12}
          />
          <span className="capitalize text-color-brands">Posts listing</span>
        </div>
        <div className="items-center gap-x-2 flex">
          <Image
            src="/imgs/icons/icon-calendar-1.svg"
            alt="calendar icon"
            width={16}
            height={16}
          />
          <time className="text-xs text-gray-500 dark:text-gray-dark-500">
            Feb 15, 2022 - Feb 21, 2023
          </time>
        </div>
      </div>
    </>
  );
};

export default TopCreate;

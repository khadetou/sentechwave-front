import Image from "next/image";

const OrderTop = () => {
  return (
    <div className="xl:px-[20px] mt-11 ">
      <h2 className="capitalize text-gray-1100 font-bold text-[28px] leading-[35px] dark:text-gray-dark-1100 mb-[13px]">
        dashboard
      </h2>
      <div className="flex items-center text-xs text-gray-500 gap-x-[11px] mb-[32px]">
        <div className="flex items-center gap-x-1">
          <Image
            width={12}
            height={13}
            src="/imgs/icons/icon-home-2.svg"
            alt="home icon"
          />
          <a className="capitalize" href="index-2.html">
            home
          </a>
        </div>
        <Image
          width={12}
          height={13}
          src="/imgs/icons/icon-arrow-right.svg"
          alt="arrow right icon"
        />
        <span className="capitalize text-color-brands">dashboard</span>
      </div>
    </div>
  );
};

export default OrderTop;

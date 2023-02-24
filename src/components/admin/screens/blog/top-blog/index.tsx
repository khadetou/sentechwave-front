import Image from "next/image";

const TopBlog = () => {
  return (
    <>
      <div className="flex justify-between flex-col gap-y-3 mb-[36px] md:flex-row">
        <div className="flex flex-col items-stretch gap-y-3 gap-x-[41px] lg:items-center lg:flex-row">
          <div>
            <h2 className="capitalize text-gray-1100 font-bold text-[28px] leading-[35px] ">
              All posts
            </h2>
            <div className="flex items-center text-xs gap-x-[11px]">
              <div className="flex items-center gap-x-1">
                <Image
                  src="/imgs/icons/icon-home-2.svg"
                  alt="home icon"
                  width={13}
                  height={12}
                />
                <span className="capitalize text-gray-500 ">Home</span>
              </div>
              <Image
                src="/imgs/icons/icon-arrow-right.svg"
                alt="arrow right icon"
                width={13}
                height={12}
              />
              <span className="capitalize text-color-brands">
                Posts listing
              </span>
            </div>
          </div>
          <button className="btn flex items-center w-fit normal-case bg-color-brands h-auto rounded-2xl border-gray-100 gap-x-[10.5px] border-[4px] hover:border-[#B2A7FF] hover:bg-color-brands   p-[17.5px]">
            <Image
              src="/imgs/icons/icon-add.svg"
              alt="add icon"
              width={12}
              height={12}
            />
            <span className="text-white font-semibold text-[14px] leading-[21px]">
              Add New Post
            </span>
          </button>
        </div>
        <div className="flex items-center gap-x-2 self-end">
          <Image
            src="/imgs/icons/icon-calendar-1.svg"
            alt="calendar icon"
            width={12}
            height={12}
          />
          <time className="text-xs text-gray-500 ">
            Feb 15, 2022 - Feb 21, 2022
          </time>
        </div>
      </div>
      <div className="border bg-white border-neutral   rounded-2xl search-input-shadow flex items-center justify-between flex-col py-[18px] pl-[28px] pr-[19px] mb-[38px] gap-[10px] sm:flex-row">
        <div className="flex items-center">
          <Image
            src="/imgs/icons/icon-search-normal.svg"
            alt="seacrh icon"
            width={20}
            height={20}
          />
          <input
            className="input w-full bg-transparent outline-none h-5 text-gray-400 text-sm leading-4 focus:!outline-none placeholder:text-gray-400  pl-[11px]"
            type="text"
            placeholder="Search post"
          />
        </div>
        <div>
          <button className="text-sm leading-4 text-gray-500 py-3 rounded-lg px-5 hidden items-center  bg-[#E8EDF2]  xl:inline-flex gap-x-[13px]">
            Trending 2022
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </button>
        </div>
        <div className="items-center hidden min-w-[127px] lg:flex">
          <Image
            className="flex-1 max-w-[20px]"
            src="/imgs/icons/icon-work.svg"
            alt="work icon"
            width={20}
            height={19}
          />
          <select className="select text-gray-500 pl-1 font-normal h-fit min-h-fit  focus:outline-0 select-arrow !outline-0">
            <option>Categories</option>
            <option>Category1</option>
            <option>Category2</option>
            <option>Category3</option>
          </select>
        </div>
        <div className="items-center hidden min-w-[133px] lg:flex">
          <Image
            className="flex-1 max-w-[18px]"
            src="/imgs/icons/icon-location.svg"
            alt="location icon"
            width={18}
            height={18}
          />
          <select className="select text-gray-500 pl-1 font-normal h-fit min-h-fit  focus:outline-0 select-arrow !outline-0">
            <option>All Format</option>
            <option>Format1</option>
            <option>Format2</option>
            <option>Format3</option>
          </select>
        </div>
        <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 px-6 bg-color-brands rounded-lg py-[11.5px] hover:bg-color-brands">
          Search Article
        </button>
      </div>
    </>
  );
};

export default TopBlog;

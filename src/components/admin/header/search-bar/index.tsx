import Image from "next/image";

const Search = () => {
  return (
    <div className="bg-gray-100 flex rounded-xl w-full m-0 py-[14px] px-[18px] xl:w-[360px] lg:max-w-[250px] xl:max-w-[360px] lg:mr-[47px] lg:ml-6">
      <Image
        src="/imgs/icons/icon-search-normal.svg"
        alt="seacrh icon"
        width={20}
        height={20}
      />
      <input
        className="input w-full bg-transparent outline-none pl-2 h-5 text-gray-300 focus:!outline-none placeholder:text-gray-300 placeholder:font-semibold"
        type="text"
        placeholder="Search"
      />
      <Image
        src="/imgs/icons/icon-microphone-2.svg"
        alt="microphone icon"
        width={20}
        height={20}
      />
    </div>
  );
};

export default Search;
//

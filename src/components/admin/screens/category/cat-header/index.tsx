const CatHeader = () => {
  return (
    <>
      <h2 className="capitalize text-gray-1100 font-bold text-[28px] leading-[35px] dark:text-gray-dark-1100 mb-[13px] ">
        Categories
      </h2>
      <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px]">
        Add, edit or delete a category
      </p>

      <div className="input-group border rounded-lg border-[#E8EDF2] bg-white !mb-5  sm:min-w-[252px]">
        <input
          type="text"
          placeholder="Search Categories"
          className="input w-full bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit py-4 focus:outline-none pl-[13px]  placeholder:text-inherit"
        />
      </div>
    </>
  );
};

export default CatHeader;

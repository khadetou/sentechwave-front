const CatHeader = () => {
  return (
    <div className="content-header">
      <div>
        <h2 className="content-title card-title tw-font-bold tw-text-[40px]">
          Categories
        </h2>
        <p className="tw-text-sm">Add, edit or delete a category</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Categories"
          className="form-control bg-white"
        />
      </div>
    </div>
  );
};

export default CatHeader;

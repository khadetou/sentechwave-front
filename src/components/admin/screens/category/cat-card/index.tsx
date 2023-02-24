import ButtonLoading from "components/Loadingbutton";
import { useAppDispatch, useAppSelector } from "hooks/index";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

import {
  createItemCategory,
  createProductCategory,
  createSubCategory,
  createSubSubCategory,
  deleteItemsCategory,
  deleteProductCategory,
  deleteSubCategory,
  deleteSubSubCategory,
  reset,
} from "redux/products/productSlice";

const CatCard = () => {
  const [category, setCategory] = useState({
    name: "",
    _id: "",
  });
  const [sousCategory, setSousCategory] = useState({
    name: "",
    _id: "",
  });
  const [ssousCategory, setSsousCategory] = useState({
    name: "",
    _id: "",
  });
  const [itemsCategory, setItemsCategory] = useState("");
  const dispatch = useAppDispatch();
  const {
    subcategories,
    subsubcategories,
    itemscategories,
    categories,
    isLoading,
    isError,
    message,
    isSuccess,
  } = useAppSelector((store) => store.product);

  const onSubmitCategory = (e: any) => {
    e.preventDefault();
    dispatch(createProductCategory({ name: category.name, _id: category._id }));
  };
  const onSumbitSousCategory = (e: any) => {
    e.preventDefault();
    dispatch(
      createSubCategory({ name: sousCategory.name, _id: sousCategory._id })
    );
  };
  const onSumbitSsousCategory = (e: any) => {
    e.preventDefault();
    dispatch(
      createSubSubCategory({ name: ssousCategory.name, _id: ssousCategory._id })
    );
  };
  const onSumbitItemsCategory = (e: any) => {
    e.preventDefault();
    console.log(sousCategory);
    dispatch(createItemCategory({ name: itemsCategory }));
  };

  useEffect(() => {
    if (isError) {
      if (message.message !== "undefined" && Array.isArray(message.message)) {
        if (message.message.length > 0) {
          let list: Array<string> = [...message.message];
          list.map((item: any) => toast.error(item));
        }
      } else if (message.message !== "undefined" && message.message) {
        toast.error(message.message);
        dispatch(reset());
      } else if (Array.isArray(message)) {
        if (message.length > 0) {
          let list: Array<string> = [...message];
          list.map((item: any) => toast.error(item));
        }
      } else {
        toast.error(message);
        dispatch(reset());
      }
      dispatch(reset());
    }
    if (isSuccess) {
      toast.success("Produit créé avec succées!");
    }
  }, [isError, dispatch, message, isSuccess]);

  const onDeleteProductCategory = (slug: any) => {
    MySwal.fire({
      title: "Etes vous sure ?",
      text: "De vouloire supprimé",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#218838",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Oui, supprimé!",
      cancelButtonText: "No, annulé!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductCategory(slug));
      }
    });
  };
  const onDeleteSubCategory = (slug: any) => {
    MySwal.fire({
      title: "Etes vous sure ?",
      text: "De vouloire supprimé",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#218838",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Oui, supprimé!",
      cancelButtonText: "No, annulé!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteSubCategory(slug));
      }
    });
  };
  const onDeleteSubSubCategory = (slug: any) => {
    MySwal.fire({
      title: "Etes vous sure ?",
      text: "De vouloire supprimé",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#218838",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Oui, supprimé!",
      cancelButtonText: "No, annulé!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteSubSubCategory(slug));
      }
    });
  };
  const onDeleteItemsCategory = (slug: any) => {
    MySwal.fire({
      title: "Etes vous sure ?",
      text: "De vouloire supprimé",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#218838",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Oui, supprimé!",
      cancelButtonText: "No, annulé!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteItemsCategory(slug));
      }
    });
  };
  const [itemLoadig, setItemLoading] = useState("");

  // useEffect(() => {
  //   dispatch(getAllSubSubCategories());
  // }, [dispatch]);
  return (
    <div className="border bg-white border-neutral  rounded-2xl px-[25px] pt-[25px] pb-[68px]">
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            <form>
              <label
                htmlFor="product_name"
                className="my-2 text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px]"
              >
                Category
              </label>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] !mb-3">
                <input
                  type="text"
                  placeholder="Catégorie"
                  className="input  w-full bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] placeholder:text-inherit"
                  id="product_name"
                  value={categories.name}
                  onChange={(e) =>
                    setCategory({ ...category, ["name"]: e.target.value })
                  }
                />
              </div>

              {subcategories.length > 0 && (
                <>
                  <label className="my-2 text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px]">
                    Sous Catégories
                  </label>
                  <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] !mb-3">
                    <select
                      className="input  w-full bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] placeholder:text-inherit"
                      onChange={(e) =>
                        setCategory({ ...category, ["_id"]: e.target.value })
                      }
                    >
                      <option value="">Sous Cat</option>
                      {subcategories.map(({ _id, name, slug }: any) => (
                        <option key={_id} value={_id}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              <div className="d-grid mb-2" onClick={onSubmitCategory}>
                <button
                  onClick={() => {
                    setItemLoading("create category");
                  }}
                  className="flex items-center justify-between w-full cursor-pointer text-white font-bold !py-4 px-[21px] focus:outline-none rounded-xl peer-checked:border-transparent bg-blue-600 active"
                >
                  {isLoading && itemLoadig === "create category" ? (
                    <ButtonLoading />
                  ) : (
                    "Créer category"
                  )}
                </button>
              </div>

              <label
                htmlFor="product_slug"
                className="my-2 text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px]"
              >
                Sous Category
              </label>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] !mb-3">
                <input
                  type="text"
                  placeholder="Sous Catégorie"
                  className="input  w-full bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] placeholder:text-inherit"
                  id="product_slug"
                  onChange={(e) =>
                    setSousCategory({
                      ...sousCategory,
                      ["name"]: e.target.value,
                    })
                  }
                />
              </div>
              {subsubcategories.length > 0 && (
                <>
                  <label className="my-2 text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px]">
                    Sous Catégories
                  </label>
                  <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] !mb-3">
                    <select
                      className="input  w-full bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] placeholder:text-inherit"
                      onChange={(e) =>
                        setSousCategory({
                          ...sousCategory,
                          ["_id"]: e.target.value,
                        })
                      }
                    >
                      <option value="">Sous Sous Cat</option>
                      {subsubcategories.map(({ _id, name, slug }: any) => (
                        <option
                          onDoubleClick={() => onDeleteSubSubCategory(slug)}
                          key={slug}
                          value={_id}
                        >
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              <div className="d-grid mb-2">
                <button
                  className="flex items-center justify-between w-full cursor-pointer text-white font-bold !py-4 px-[21px] focus:outline-none rounded-xl peer-checked:border-transparent bg-blue-600 active"
                  onClick={(e) => {
                    setItemLoading("create sub cat");
                    onSumbitSousCategory(e);
                  }}
                >
                  {isLoading && itemLoadig === "create sub cat" ? (
                    <ButtonLoading />
                  ) : (
                    "Créer sous category"
                  )}
                </button>
              </div>
              <label
                htmlFor="product_slug"
                className="my-2 text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px]"
              >
                Sous Sous Category
              </label>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] !mb-3">
                <input
                  type="text"
                  placeholder="Sous Sous Catégorie"
                  className="input  w-full bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] placeholder:text-inherit"
                  id="product_slug"
                  onChange={(e) =>
                    setSsousCategory({
                      ...ssousCategory,
                      ["name"]: e.target.value,
                    })
                  }
                />
              </div>
              {itemscategories.length > 0 && (
                <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] !mb-3">
                  <label className="my-2 text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px]">
                    Sous Catégories
                  </label>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      setCategory({ ...category, ["_id"]: e.target.value })
                    }
                  >
                    <option value="">Items Cat</option>
                    {itemscategories.map(({ _id, name, slug }: any) => (
                      <option
                        onDoubleClick={() => onDeleteItemsCategory(slug)}
                        key={_id}
                        value={_id}
                      >
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="d-grid mb-2">
                <button
                  className="flex items-center justify-between w-full cursor-pointer text-white font-bold !py-4 px-[21px] focus:outline-none rounded-xl peer-checked:border-transparent bg-blue-600 active"
                  onClick={(e) => {
                    onSumbitSsousCategory(e);
                    setItemLoading("create sub su");
                  }}
                >
                  {isLoading && itemLoadig === "create sub sub" ? (
                    <ButtonLoading />
                  ) : (
                    "Créer sous sous category"
                  )}
                </button>
              </div>
              <label
                htmlFor="product_slug"
                className="my-2 text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px]"
              >
                Items Category
              </label>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] !mb-3">
                <input
                  type="text"
                  placeholder="Items Catégories"
                  className="input  w-full bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] placeholder:text-inherit"
                  id="product_slug"
                  onChange={(e) => setItemsCategory(e.target.value)}
                />
              </div>
              <div className="d-grid mb-2">
                <button
                  className="flex items-center justify-between w-full cursor-pointer text-white font-bold !py-4 px-[21px] focus:outline-none rounded-xl peer-checked:border-transparent bg-blue-600 active"
                  onClick={(e) => {
                    onSumbitItemsCategory(e);
                    setItemLoading("create item");
                  }}
                >
                  {isLoading && itemLoadig === "create item" ? (
                    <ButtonLoading />
                  ) : (
                    "Créer items category"
                  )}
                </button>
              </div>
              {/* <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] !mb-3">
                <label className="my-2 text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px]">Parent</label>
                <select className="form-select">
                  <option>Fruit</option>
                  <option>Snack</option>
                </select>
              </div>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] !mb-3">
                <label className="my-2 text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px]">Description</label>
                <textarea
                  placeholder="Catégorie"
                   className="input  w-full bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] placeholder:text-inherit"
                ></textarea>
              </div>
              <div className="d-grid">
                <button className="flex items-center justify-between w-full cursor-pointer text-white font-bold !py-4 px-[21px] focus:outline-none rounded-xl peer-checked:border-transparent bg-blue-600 active">Create category</button>
              </div> */}
            </form>
          </div>
          <div className="col-md-9">
            <h2 className="font-bold text-[20px]">Catégories</h2>

            {categories.length > 0 &&
              categories.map(({ slug, _id, name }: any) => (
                <button
                  key={_id}
                  title="Double click to delete"
                  onDoubleClick={() => onDeleteProductCategory(slug)}
                  className="btn btn-outline border-secondary text-secondary font-bold hover:!text-white hover:!bg-secondary mr-1 ml-1 mt-3"
                >
                  {name}
                </button>
              ))}
            {subcategories.length > 0 && (
              <h2 className="font-bold text-[20px] mt-2">Sous Catégories</h2>
            )}
            {subcategories.length > 0 &&
              subcategories.map(({ slug, _id, name }: any) => (
                <button
                  key={_id}
                  title="Double click to delete"
                  onDoubleClick={() => onDeleteSubCategory(slug)}
                  className="btn btn-outline border-secondary text-secondary hover:!text-white hover:!bg-secondary mr-1 ml-1 mt-3"
                >
                  {name}
                </button>
              ))}
            {subsubcategories.length > 0 && (
              <h2 className="font-bold text-[20px] mt-2">
                Sous Sous Catégories
              </h2>
            )}

            {subsubcategories.length > 0 &&
              subsubcategories.map(({ slug, _id, name }: any) => (
                <button
                  key={_id}
                  title="Double click to delete"
                  onDoubleClick={() => onDeleteSubSubCategory(slug)}
                  className="btn btn-outline border-secondary text-secondary hover:!bg-secondary mr-1 ml-1 mt-3"
                >
                  {name}
                </button>
              ))}
            {itemscategories.length > 0 && (
              <h2 className="font-bold text-[20px] mt-2">Items Catégories</h2>
            )}

            {itemscategories.length > 0 &&
              itemscategories.map(({ slug, _id, name }: any) => (
                <button
                  key={_id}
                  title="Double click to delete"
                  onDoubleClick={() => onDeleteItemsCategory(slug)}
                  className="btn btn-outline border-secondary text-secondary hover:!bg-secondary mr-1 ml-1 mt-3"
                >
                  {name}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;

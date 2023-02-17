import ButtonLoading from "components/Loadingbutton";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";

import { reset, updateProduct } from "redux/products/productSlice";

const EditProductPage = () => {
  const [option, setOption] = useState("");
  const { product, isError, isLoading, isSuccess, message, categories } =
    useAppSelector((state) => state.product);
  const [categori, setCategory] = useState({
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
  const [cat, setCat] = useState(categories);
  const [subcat, setSubcat] = useState<any>([]);
  const [subsubcat, setsubsubcat] = useState<any>([]);
  const [itemcat, setItemcat] = useState<any>([]);
  const dispatch = useAppDispatch();
  const [values, setValues] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
    rating: 0,
    price: 0,
    oldPrice: 0,
    countInStock: 0,
    sizes: "",
    souscategory: "",
    ssouscategory: "",
  });

  const [imagesPreview, setImagesPreview] = useState<any>([]);
  const [images, setImages] = useState<any>([]);
  const [oldImages, setOldImages] = useState<any>([]);

  const onChangeVal = (e: ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.value);
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onChangeImage = (e: any) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);

    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((oldArray: any) => [...oldArray, reader.result]);
          setImagesPreview((oldArray: any) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setDisabled(true);
    }
  }, [isLoading]);

  const {
    brand,
    category,
    countInStock,
    description,
    name,
    price,
    oldPrice,
    rating,
    sizes,
    souscategory,
    ssouscategory,
  } = values;

  useEffect(() => {
    if (product) {
      setValues({
        brand: product.brand,
        category: product.category,
        countInStock: product.countInStock,
        description: product.description,
        name: product.name,
        price: product.price,
        rating: product.rating,
        oldPrice: product.oldPrice,
        sizes: product.sizes[0],
        ssouscategory: product.ssouscategory,
        souscategory: product.souscategory,
      });
      setCategory(product.category);
      setSousCategory(product.subcategory);
      setSsousCategory(product.subsubcategory);
      setOption(product.sizes[0]);
      setOldImages(product.images);
    }
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
      toast.success("Produit mis à jour avec succés!");
      dispatch(reset());
    }
    dispatch(reset());
  }, [isError, dispatch, message, isSuccess, product]);
  const {
    query: { id },
  } = useRouter();

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      brand,
      price: Number(price),
      oldPrice: Number(oldPrice),
      countInStock: Number(countInStock),
      description,
      name,
      rating: Number(rating),
      images,
      sizes,
      category: categori._id,
      subcategory: sousCategory._id,
      subsubcategory: ssousCategory._id,
    };

    const productData = {
      id,
      data,
    };
    console.log(data);
    dispatch(updateProduct(productData));
  };

  return (
    <section className="content-main">
      <div className="row">
        <div className="col-9">
          <div className="content-header">
            <h2 className="content-title tw-text-3xl tw-font-extrabold">
              Ajouter un nouveau produit
            </h2>
            <div>
              <button className="btns btns-light rounded font-sm mr-5 text-body hover-up">
                Enregistrer
              </button>
              <button
                onClick={onSubmit}
                // disabled={disabled}
                className="btns btns-md rounded font-sm hover-up tw-flex tw-items-center tw-justify-center"
              >
                {isLoading ? <ButtonLoading /> : "Publier"}
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header !tw-bg-white">
              <h4 className="tw-text-lg tw-font-extrabold">Basic</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-4">
                  <label htmlFor="product_name" className="form-label">
                    Titre du produit
                  </label>
                  <input
                    type="text"
                    placeholder="Nom du produit"
                    className="form-control !tw-bg-[#f4f5f9] !tw-rounded !tw-text-[13px]"
                    id="product_name"
                    name="name"
                    onChange={onChange}
                    value={name}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Description</label>
                  <textarea
                    placeholder="Description"
                    className="form-control !tw-bg-[#f4f5f9] !tw-rounded !tw-text-[13px]"
                    rows={4}
                    onChange={onChange}
                    name="description"
                    value={description}
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <label className="form-label">Regular price</label>
                      <div className="row gx-2">
                        <input
                          placeholder="F CFA"
                          type="number"
                          className="form-control !tw-bg-[#f4f5f9] !tw-rounded !tw-text-[13px]"
                          name="price"
                          onChange={onChange}
                          value={price === 0 ? "" : price}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <label className="form-label">Promotional price</label>
                      <input
                        placeholder="F CFA"
                        type="text"
                        className="form-control !tw-bg-[#f4f5f9] !tw-rounded !tw-text-[13px]"
                        value={oldPrice === 0 ? "" : oldPrice}
                        name="oldPrice"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-4">
                      <label className="form-label">Taille</label>
                      <input
                        placeholder="L, cm, g, kg"
                        type="text"
                        className="form-control !tw-bg-[#f4f5f9] !tw-rounded !tw-text-[13px]"
                        name="sizes"
                        onChange={onChange}
                        value={sizes}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="mb-4">
                  <label className="form-label">Tax rate</label>
                  <input
                    type="text"
                    placeholder="%"
                    className="form-control !tw-bg-[#f4f5f9] !tw-rounded !tw-text-[13px]"
                    id="product_name"
                    name=""
                  />
                </div> */}
                <label className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <span className="form-check-label"> Make a template </span>
                </label>
              </form>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <h4 className="tw-text-lg tw-font-extrabold">
                Info supplémentaire
              </h4>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label htmlFor="product_name" className="form-label">
                        Marque
                      </label>
                      <input
                        type="text"
                        placeholder="Sopralait"
                        className="form-control !tw-bg-[#f4f5f9] !tw-rounded !tw-text-[13px]"
                        id="product_name"
                        name="brand"
                        value={brand}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label htmlFor="product_name" className="form-label">
                        Hauteur
                      </label>
                      <input
                        type="text"
                        placeholder="cm"
                        className="form-control !tw-bg-[#f4f5f9] !tw-rounded !tw-text-[13px]"
                        id="product_name"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="product_name" className="form-label">
                    Largeur
                  </label>
                  <input
                    type="text"
                    placeholder="cm"
                    className="form-control !tw-bg-[#f4f5f9] !tw-rounded !tw-text-[13px]"
                    id="product_name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="product_name" className="form-label">
                    Count In Stock
                  </label>
                  <input
                    type="number"
                    placeholder="50"
                    className="form-control !tw-bg-[#f4f5f9] !tw-rounded !tw-text-[13px]"
                    id="product_name"
                    name="countInStock"
                    value={countInStock === 0 ? "" : countInStock}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card mb-4">
            <div className="card-header !tw-bg-white">
              <h4 className="tw-text-lg tw-font-extrabold">Media</h4>
            </div>
            <div className="card-body">
              <div className="input-upload">
                <label htmlFor="img">
                  <div className="tw-flex tw-flex-col tw-h-full tw-items-center tw-justify-center tw-group ">
                    {imagesPreview.length === 0 && (
                      <div className="flex flex-wrap w-full items-center h-full">
                        {imagesPreview.length === 0 &&
                          oldImages.length > 0 &&
                          oldImages.map((img: any, idx: any) => (
                            <div className="max-w-[148px] mr-1" key={idx}>
                              <Image
                                src={img.url}
                                alt=""
                                className="rounded-md mr-1"
                                width={200}
                                height={200}
                              />
                            </div>
                          ))}
                      </div>
                    )}
                    {imagesPreview.length !== 0 ? (
                      <div className="flex flex-wrap w-full items-center h-full">
                        {imagesPreview.map((img: any, idx: any) => (
                          <div className="max-w-[148px] mr-1" key={idx}>
                            <Image
                              src={img}
                              alt=""
                              className="rounded-md mr-1"
                              width={200}
                              height={200}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      oldImages === 0 && (
                        <Image
                          src="/imgs/theme/upload.svg"
                          className="tw-mx-auto"
                          width={100}
                          height={100}
                          alt=""
                        />
                      )
                    )}
                  </div>
                  <input
                    className="form-control !tw-bg-[#f4f5f9]  !tw-text-[13px] !tw-h-[34px] !tw-rounded"
                    id="img"
                    type="file"
                    multiple
                    onChange={onChangeImage}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <h4 className="tw-text-lg tw-font-extrabold">Organization</h4>
            </div>
            <div className="card-body">
              <div className="row gx-2">
                <div className="col-sm-6 mb-3">
                  <label className="form-label ">Category</label>
                  <select
                    onChange={(e) => {
                      setCategory({ ...categori, ["_id"]: e.target.value });
                      const cate = cat.find(
                        (categ: any) => categ._id === e.target.value
                      );
                      setSubcat(cate.subcategories);
                    }}
                    className="form-select"
                  >
                    <option value="">Category</option>
                    {cat.map(({ name, _id }: any) => (
                      <option key={_id} value={_id}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-sm-6 mb-3">
                  <label className="form-label">Sous-category</label>
                  <select
                    className="form-select"
                    onChange={(e) => {
                      setSousCategory({
                        ...sousCategory,
                        ["_id"]: e.target.value,
                      });
                      const subcate = subcat.find(
                        (subc: any) => subc._id === e.target.value
                      );
                      setsubsubcat(subcate.subsubcategories);
                    }}
                  >
                    <option value="">Sous-category</option>
                    {subcat.map(({ name, _id }: any) => (
                      <option key={_id} value={_id}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 col-sm-6 ">
                  <label htmlFor="product_name" className="form-label">
                    Sous-sous-catégory
                  </label>
                  <select
                    className="form-select"
                    onChange={(e) => {
                      setSsousCategory({
                        ...ssousCategory,
                        ["_id"]: e.target.value,
                      });
                      const itemcate = subsubcat.find(
                        (subc: any) => subc._id === e.target.value
                      );

                      setItemcat(itemcate.itemcategories);
                    }}
                  >
                    <option value="">Sous-sous-Category</option>
                    {subsubcat.map(({ name, _id }: any) => (
                      <option key={_id} value={_id}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 col-sm-6 ">
                  <label htmlFor="product_name" className="form-label">
                    Items catégory
                  </label>
                  <select
                    className="form-select"
                    onChange={(e) => setItemsCategory(e.target.value)}
                  >
                    <option value="">Item-Category</option>
                    {itemcat.map(({ name, _id }: any) => (
                      <option key={_id} value={_id}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProductPage;

import ButtonLoading from "components/Loadingbutton";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";
import Slider, { Settings } from "react-slick";
import { reset, updateProduct } from "redux/products/productSlice";
import EditTop from "../top/edit-top";
import Link from "next/link";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // This line ensures that the component is rendered only on the client-side
});

const EditProductPage = () => {
  const [option, setOption] = useState("");
  const { product, isError, isLoading, isSuccess, message, categories } =
    useAppSelector((state) => state.product);
  const [categori, setCategory] = useState<{ name: string; _id: string }>({
    name: "",
    _id: "",
  });
  const [sousCategory, setSousCategory] = useState<{
    name: string;
    _id: string;
  }>({
    name: "",
    _id: "",
  });
  const [ssousCategory, setSsousCategory] = useState<{
    name: string;
    _id: string;
  }>({
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
    souscategory: "",
    ssouscategory: "",
  });

  const [sizes, setSizes] = useState<string[]>([]);
  const [styles, setStyles] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
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
        ssouscategory: product.ssouscategory,
        souscategory: product.souscategory,
      });
      setSizes(product.sizes);
      setColors(product.colors);
      setStyles(product.styles);
      setCategory({ ...categori, ["_id"]: product.category });
      setSousCategory({ ...sousCategory, ["_id"]: product.subcategory });
      setSsousCategory({ ...ssousCategory, ["_id"]: product.subsubcategory });
      setOption(product.sizes);
      setOldImages(product.images);
      setSpecification(product.specification);
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
  }, [
    isError,
    dispatch,
    message,
    isSuccess,
    product,
    categori,
    sousCategory,
    ssousCategory,
  ]);
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
      colors,
      styles,
      category: categori._id,
      subcategory: sousCategory._id,
      subsubcategory: ssousCategory._id,
      specification,
    };

    const productData = {
      id,
      data,
    };

    dispatch(updateProduct(productData));
  };

  const removeImage = (idx: number) => {
    const newImg = [...images];
    newImg.splice(idx, 1);
    setImages(newImg);
    setImagesPreview(newImg);
  };
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  const [specification, setSpecification] = useState("");

  return (
    <div>
      <EditTop />
      <div className="flex gap-x-12 border rounded-2xl justify-between flex-col gap-y-12 bg-white border-neutral pt-[50px] pb-[132px] px-[29px] dark:border-dark-neutral-border lg:flex-row lg:gap-y-0 dark:bg-[#1F218]">
        <div className="lg:max-w-[610px]">
          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
            product name
          </p>
          <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
            <input
              className="input w-full bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
              type="text"
              placeholder="Type name here"
              name="name"
              onChange={onChange}
              value={name}
            />
          </div>
          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
            Description
          </p>
          <div className="rounded-lg mb-12 border border-neutral dark:border-dark-neutral-border p-[13px]">
            <textarea
              className="textarea w-full p-0 text-gray-400 resize-none rounded-none bg-transparent min-h-[140px] focus:outline-none"
              placeholder="Type description here"
              onChange={onChange}
              name="description"
              value={description}
            ></textarea>
          </div>
          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
            Spécifications
          </p>
          <div className="rounded-lg mb-12 border border-neutral dark:border-dark-neutral-border p-[13px]">
            <ReactQuill
              value={specification}
              onChange={(e) => setSpecification(e)}
              className="textarea w-full p-0 text-gray-400 resize-none rounded-none bg-transparent min-h-[140px] focus:outline-none"
            />
          </div>
          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
            Marque
          </p>
          <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
            <input
              className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
              type="text"
              placeholder="Type brand here"
              name="brand"
              onChange={onChange}
              value={brand}
            />
          </div>
          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
            Catégory
          </p>
          <select
            onChange={(e) => {
              setCategory({ ...categori, ["_id"]: e.target.value });
              const cate = cat.find(
                (categ: any) => categ._id === e.target.value
              );
              setSubcat(cate.subcategories);
            }}
            className="select w-full border rounded-lg font-normal text-sm leading-4 text-gray-400 !py-4 h-fit min-h-fit border-[#E8EDF2] dark:border-[#313442] focus:outline-none pl-[13px] min-w-[252px] dark:text-gray-dark-400 mb-12"
          >
            <option disabled selected>
              Type Category here
            </option>
            {cat.map(({ name, _id }: any) => (
              <option key={_id} value={_id}>
                {name}
              </option>
            ))}
          </select>
          {subcat.length > 0 && (
            <>
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Sous Catégory
              </p>
              <select
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
                className="select w-full border rounded-lg font-normal text-sm leading-4 text-gray-400 !py-4 h-fit min-h-fit border-[#E8EDF2] dark:border-[#313442] focus:outline-none pl-[13px] min-w-[252px] dark:text-gray-dark-400 mb-12"
              >
                <option disabled selected>
                  Type Sous Category here
                </option>
                {subcat.map(({ name, _id }: any) => (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                ))}
              </select>
            </>
          )}

          <div className="flex justify-between flex-col lg:flex-row">
            <div>
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                SKU
              </p>
              <div className="input-group border rounded-lg mr-1 border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                  type="text"
                  placeholder="FOX-2983"
                />
              </div>
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Prix normal
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                  type="text"
                  placeholder="$500"
                  value={oldPrice === 0 ? "" : oldPrice}
                  name="oldPrice"
                  onChange={onChange}
                />
              </div>
              <p className="text-gray-1100 text-base  leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Couleurs
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit w-full"
                  type="text"
                  placeholder="Blue, Gris"
                  name="colors"
                  onChange={(e) => setColors(e.target.value.split(","))}
                  value={colors}
                />
              </div>
              <p className="text-gray-1100 text-base  leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Styles
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit w-full"
                  type="text"
                  placeholder="Blue, Gris"
                  name="styles"
                  onChange={(e) => setStyles(e.target.value.split(","))}
                  value={styles}
                />
              </div>
              {/* <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
              Tax status
            </p>
            <select className="select w-full border rounded-lg font-normal text-sm leading-4 text-gray-400 !py-4 h-fit min-h-fit border-[#E8EDF2] dark:border-[#313442] focus:outline-none pl-[13px] min-w-[252px] dark:text-gray-dark-400 mb-12">
              <option disabled selected>
                Taxable
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
            </select> */}
            </div>
            <div className="!ml-8">
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Stock quantity
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                  type="text"
                  placeholder="1258"
                  name="countInStock"
                  value={countInStock === 0 ? "" : countInStock}
                  onChange={onChange}
                />
              </div>
              <p className="text-gray-1100 text-base  leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Prix de vente
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                  type="text"
                  placeholder="$450"
                  name="price"
                  onChange={onChange}
                  value={price === 0 ? "" : price}
                />
              </div>
              <p className="text-gray-1100 text-base  leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Tailles
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                  type="text"
                  placeholder="250 GB, 500 GB"
                  name="taille"
                  onChange={(e) => setSizes(e.target.value.split(","))}
                  value={sizes}
                />
              </div>
              {/* <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
              Tax class
            </p>
            <select className="select w-full border rounded-lg font-normal text-sm leading-4 text-gray-400 !py-4 h-fit min-h-fit border-[#E8EDF2] dark:border-[#313442] focus:outline-none pl-[13px] min-w-[252px] dark:text-gray-dark-400 mb-12">
              <option disabled selected>
                Standard
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
            </select> */}
            </div>
          </div>
          {/* <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
          tag
        </p>
        <div className="flex items-center border flex-wrap rounded-lg border-neutral gap-x-[10px] dark:border-dark-neutral-border pt-[15px] pl-[15px] pr-[23px] pb-[66px]">
          <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]">
            <span className="text-xs text-gray-400">smartwatch</span>
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </div>
          <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]">
            <span className="text-xs text-gray-400">Apple</span>
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </div>
          <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]">
            <span className="text-xs text-gray-400">Watch</span>
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </div>
          <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]">
            <span className="text-xs text-gray-400">smartphone</span>
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </div>
          <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]">
            <span className="text-xs text-gray-400">iPhone13 max</span>
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </div>
          <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]">
            <span className="text-xs text-gray-400">iPhone13 max</span>
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </div>
          <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]">
            <span className="text-xs text-gray-400">iPhone13 max</span>
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </div>
          <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]">
            <span className="text-xs text-gray-400">iPhone13 max</span>
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </div>
          <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]">
            <span className="text-xs text-gray-400">iPhone13 max</span>
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </div>
          <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]">
            <span className="text-xs text-gray-400">iPhone13 max</span>
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </div>
          <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]">
            <span className="text-xs text-gray-400">iPhone13 max</span>
            <Image
              className="cursor-pointer"
              src="/imgs/icons/icon-close.svg"
              alt="close icon"
              width={8}
              height={8}
            />
          </div>
        </div> */}
        </div>
        <div className="min-w-[466px]">
          {imagesPreview.length === 0 && (
            <Slider {...settings} className="w-[466px]  relative">
              {oldImages.length > 0 &&
                oldImages.map((img: any, idx: number) => (
                  <>
                    <Image
                      className="block border rounded-lg max-w-[466px] max-h-[466px] mb-12 mx-auto border-neutral dark:border-dark-neutral-border p-[23.8px]"
                      src={img.url}
                      alt="product"
                      width={466}
                      height={48}
                      key={idx}
                    />
                  </>
                ))}
            </Slider>
          )}

          {imagesPreview.length !== 0 && (
            <Slider {...settings} className="w-[466px]  relative">
              {imagesPreview.length > 0 &&
                imagesPreview.map((img: string, idx: number) => (
                  <>
                    <Image
                      className="block border rounded-lg max-w-[466px] max-h-[466px] mb-12 mx-auto border-neutral dark:border-dark-neutral-border p-[23.8px]"
                      src={img}
                      alt="product"
                      width={466}
                      height={48}
                      key={idx}
                    />
                  </>
                ))}
            </Slider>
          )}

          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
            product gallery
          </p>
          <label
            htmlFor="img"
            className="border-dashed border-2 block cursor-pointer text-center mb-12 border-neutral py-[26px] dark:border-dark-neutral-border"
          >
            <Image
              className="mx-auto inline-block mb-[15px]"
              src="/imgs/icons/icon-image.svg"
              alt="image icon"
              width={36}
              height={36}
            />
            <p className="text-sm leading-6 text-gray-500 font-normal mb-[5px]">
              Drop your image here, or browse
            </p>
            <p className="leading-6 text-gray-400 text-[13px]">
              JPG,PNG and GIF files are allowed
            </p>
            <input
              className="form-control hidden !bg-[#f4f5f9]   !text-[13px]  !h-[34px]  !rounded"
              id="img"
              type="file"
              multiple
              onChange={onChangeImage}
            />
          </label>
          <div className="flex flex-col mb-12 gap-y-[10px]">
            {imagesPreview.length === 0 &&
              oldImages.map((img: any, idx: any) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 border pl-3 pr-3 transition-all duration-300 border-[#E8EDF2] dark:border-[#313442] rounded-[5px] gap-x-[10px] hover:shadow-xl sm:pr-8 lg:pr-3 xl:pr-8"
                >
                  <Image
                    className="hidden sm:block lg:hidden xl:block"
                    src={img.url}
                    alt="product"
                    width={82}
                    height={82}
                  />
                  <div className="flex flex-col flex-1 gap-y-[10px]">
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="text-gray-1100 text-sm leading-4 dark:text-gray-dark-1100">
                        Product_thumbnail_1.png
                      </span>
                    </div>
                    {/* <progress
                    className="progress progress-accent"
                    value="1"
                    max="100"
                  ></progress> */}
                  </div>
                  <Image
                    src="/imgs/icons/icon-close-circle.svg"
                    alt="close circle icon"
                    className="cursor-pointer"
                    width={20}
                    height={20}
                    onClick={() => removeImage(idx)}
                  />
                </div>
              ))}
            {imagesPreview.length > 0 &&
              imagesPreview.map((img: any, idx: any) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 border pl-3 pr-3 transition-all duration-300 border-[#E8EDF2] dark:border-[#313442] rounded-[5px] gap-x-[10px] hover:shadow-xl sm:pr-8 lg:pr-3 xl:pr-8"
                >
                  <Image
                    className="hidden sm:block lg:hidden xl:block"
                    src={img}
                    alt="product"
                    width={82}
                    height={82}
                  />
                  <div className="flex flex-col flex-1 gap-y-[10px]">
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="text-gray-1100 text-sm leading-4 dark:text-gray-dark-1100">
                        Product_thumbnail_1.png
                      </span>
                    </div>
                    {/* <progress
                    className="progress progress-accent"
                    value="1"
                    max="100"
                  ></progress> */}
                  </div>
                  <Image
                    src="/imgs/icons/icon-close-circle.svg"
                    alt="close circle icon"
                    className="cursor-pointer"
                    width={20}
                    height={20}
                    onClick={() => removeImage(idx)}
                  />
                </div>
              ))}
          </div>
          <div className="flex items-center gap-x-4 flex-wrap gap-y-4">
            <button
              className="btn normal-case h-fit min-h-fit transition-all duration-300 px-6 border-0 text-white bg-[#000dbe] hover:!bg-[#354884] hover:text-white py-[14px]"
              onClick={onSubmit}
            >
              Modifier
            </button>
            <Link
              href="/"
              className="btn normal-case h-fit min-h-fit transition-all duration-300 px-6 border-0 bg-[#E8EDF2] text-[#B8B1E4] hover:!bg-[#bdbec0] hover:text-white dark:bg-[#313442] dark:hover:!bg-[#424242] py-[14px]"
            >
              Retour
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;

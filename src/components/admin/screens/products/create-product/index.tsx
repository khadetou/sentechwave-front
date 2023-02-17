import ButtonLoading from "components/Loadingbutton";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import { useState, ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";

import { createProducts, reset } from "redux/products/productSlice";

const CreateProductPage = () => {
  const { isError, isLoading, isSuccess, message, categories } = useAppSelector(
    (state) => state.product
  );
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
  });

  const [imagesPreview, setImagesPreview] = useState<any>([]);
  const [images, setImages] = useState<any>([]);

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
  } = values;

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
      dispatch(reset());
    }
    // dispatch(reset());
  }, [isError, dispatch, message, isSuccess]);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const productData = {
      brand,
      price: Number(price),
      oldPrice: Number(oldPrice),
      countInStock: Number(countInStock),
      description,
      name,
      rating: Number(rating),
      category: categori._id,
      subcategory: sousCategory._id,
      subsubcategory: ssousCategory._id,
      images,
      sizes,
    };

    if (images.length === 0) {
      return toast.error("Upload an image");
    }

    dispatch(createProducts(productData));
  };

  return (
    <div>
      <h2 className="capitalize text-gray-1100 font-bold text-[8px] leading-[35px] dark:text-gray-dark-1100 mb-[13px]">
        product details
      </h2>
      <div className="flex items-center text-xs text-gray-500 gap-x-[11px] mb-[17px]">
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
        <span className="capitalize text-color-brands">product details</span>
      </div>
      <div className="flex gap-x-12 border rounded-2xl justify-between flex-col gap-y-12 bg-white border-neutral pt-[50px] pb-[132px] px-[29px] dark:border-dark-neutral-border lg:flex-row lg:gap-y-0 dark:bg-[#1F218]">
        <div className="lg:max-w-[610px]">
          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
            product name
          </p>
          <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
            <input
              className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
              type="text"
              placeholder="Type name here"
            />
          </div>
          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
            Description
          </p>
          <div className="rounded-lg mb-12 border border-neutral dark:border-dark-neutral-border p-[13px]">
            <div className="flex items-center gap-y-4 flex-col gap-x-[27px] mb-[31px] xl:flex-row xl:gap-y-0">
              <div className="flex items-center gap-x-[20px]">
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-bold.svg"
                  alt="bold icon"
                  width={7}
                  height={9}
                />
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-italicized.svg"
                  alt="italicized icon"
                  width={4}
                  height={9}
                />
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-underlined.svg"
                  alt="underlined icon"
                  width={9}
                  height={11}
                />
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-strikethrough.svg"
                  alt="strikethrough icon"
                  width={11}
                  height={9}
                />
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-textcolor.svg"
                  alt="textcolor icon"
                  width={9}
                  height={12}
                />
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-backgroundcolor.svg"
                  alt="backgroundcolor icon"
                  width={9}
                  height={11}
                />
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-smile.svg"
                  alt="smile icon"
                  width={11}
                  height={11}
                />
              </div>
              <div className="flex items-center gap-x-[20px]">
                <div className="flex items-center cursor-pointer gap-x-[1.5px]">
                  <Image
                    src="/imgs/icons/icon-paragraphformat.svg"
                    alt="paragraphformat icon"
                    width={8}
                    height={9}
                  />
                  <Image
                    src="/imgs/icons/icon-arrow-down-triangle.svg"
                    alt="arrow down triangle icon"
                    width={5}
                    height={4}
                  />
                </div>
                <div className="flex items-center cursor-pointer gap-x-[1.5px]">
                  <Image
                    src="/imgs/icons/icon-align-left.svg"
                    alt="align left icon"
                    width={11}
                    height={7}
                  />
                  <Image
                    src="/imgs/icons/icon-arrow-down-triangle.svg"
                    alt="arrow down triangle icon"
                    width={5}
                    height={4}
                  />
                </div>
                <div className="flex items-center cursor-pointer gap-x-[1.5px]">
                  <Image
                    src="/imgs/icons/icon-ordered-list.svg"
                    alt="ordered list icon"
                    width={9}
                    height={11}
                  />
                  <Image
                    src="/imgs/icons/icon-arrow-down-triangle.svg"
                    alt="arrow down triangle icon"
                    width={5}
                    height={9}
                  />
                </div>
                <div className="flex items-center cursor-pointer gap-x-[1.5px]">
                  <Image
                    src="/imgs/icons/icon-unordered-list.svg"
                    alt="unordered list icon"
                    width={11}
                    height={9}
                  />
                  <Image
                    src="/imgs/icons/icon-arrow-down-triangle.svg"
                    alt="arrow down triangle icon"
                    width={5}
                    height={4}
                  />
                </div>
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-indent.svg"
                  alt="indent icon"
                  width={7}
                  height={9}
                />
                <Image
                  className="cursor-pointer opacity-40"
                  src="/imgs/icons/icon-indent.svg"
                  alt="outdent icon"
                  width={7}
                  height={9}
                />
              </div>
              <div className="flex items-center gap-x-[20px]">
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-insert-image.svg"
                  alt="insert image icon"
                  width={7}
                  height={9}
                />
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-insert-link.svg"
                  alt="insert link icon"
                  width={7}
                  height={9}
                />
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-insert-file.svg"
                  alt="insert-file icon"
                  width={7}
                  height={9}
                />
                <Image
                  className="cursor-pointer"
                  src="/imgs/icons/icon-insert-video.svg"
                  alt="insert video icon"
                  width={7}
                  height={9}
                />
                <Image
                  className="cursor-pointer opacity-40"
                  src="/imgs/icons/icon-undo.svg"
                  alt="undo icon"
                  width={7}
                  height={9}
                />
                <Image
                  className="cursor-pointer opacity-40"
                  src="/imgs/icons/icon-redo.svg"
                  alt="redo icon"
                  width={7}
                  height={9}
                />
              </div>
            </div>
            <textarea
              className="textarea w-full p-0 text-gray-400 resize-none rounded-none bg-transparent min-h-[140px] focus:outline-none"
              placeholder="Type description here"
            ></textarea>
          </div>
          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
            category
          </p>
          <select className="select w-full border rounded-lg font-normal text-sm leading-4 text-gray-400 !py-4 h-fit min-h-fit border-[#E8EDF2] dark:border-[#313442] focus:outline-none pl-[13px] min-w-[252px] dark:text-gray-dark-400 mb-12">
            <option disabled selected>
              Type Category here
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
          </select>
          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
            brand
          </p>
          <select className="select w-full border rounded-lg font-normal text-sm leading-4 text-gray-400 !py-4 h-fit min-h-fit border-[#E8EDF2] dark:border-[#313442] focus:outline-none pl-[13px] min-w-[252px] dark:text-gray-dark-400 mb-12">
            <option disabled selected>
              Type Brand name here
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
          </select>
          <div className="flex justify-between flex-col lg:flex-row">
            <div>
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                SKU
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                  type="text"
                  placeholder="FOX-2983"
                />
              </div>
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Regular Price
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                  type="text"
                  placeholder="$500"
                />
              </div>
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Tax status
              </p>
              <select className="select w-full border rounded-lg font-normal text-sm leading-4 text-gray-400 !py-4 h-fit min-h-fit border-[#E8EDF2] dark:border-[#313442] focus:outline-none pl-[13px] min-w-[252px] dark:text-gray-dark-400 mb-12">
                <option disabled selected>
                  Taxable
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
              </select>
            </div>
            <div>
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Stock quantity
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                  type="text"
                  placeholder="1258"
                />
              </div>
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Sale price
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-12">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit !py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                  type="text"
                  placeholder="$450"
                />
              </div>
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
                Tax className
              </p>
              <select className="select w-full border rounded-lg font-normal text-sm leading-4 text-gray-400 !py-4 h-fit min-h-fit border-[#E8EDF2] dark:border-[#313442] focus:outline-none pl-[13px] min-w-[252px] dark:text-gray-dark-400 mb-12">
                <option disabled selected>
                  Standard
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
              </select>
            </div>
          </div>
          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
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
          </div>
        </div>
        <div>
          <Image
            className="block border rounded-lg mb-12 mx-auto border-neutral dark:border-dark-neutral-border p-[23.8px]"
            src="/imgs/product-12.png"
            alt="product"
            width={466}
            height={48}
          />
          <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100">
            product gallery
          </p>
          <div className="border-dashed border-2 text-center mb-12 border-neutral py-[26px] dark:border-dark-neutral-border">
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
          </div>
          <div className="flex flex-col mb-12 gap-y-[10px]">
            <div className="flex items-center justify-between py-3 border pl-3 pr-3 transition-all duration-300 border-[#E8EDF2] dark:border-[#313442] rounded-[5px] gap-x-[10px] hover:shadow-xl sm:pr-8 lg:pr-3 xl:pr-8">
              <Image
                className="hidden sm:block lg:hidden xl:block"
                src="/imgs/product-1.png"
                alt="product"
                width={82}
                height={82}
              />
              <div className="flex flex-col flex-1 gap-y-[10px]">
                <div className="flex items-center justify-between text-[13px]">
                  {" "}
                  <span className="text-gray-1100 text-sm leading-4 dark:text-gray-dark-1100">
                    Product_thumbnail_1.png
                  </span>
                  <span className="text-xs text-gray-1100 dark:text-gray-dark-1100">
                    1%
                  </span>
                </div>
                <progress
                  className="progress progress-accent"
                  value="1"
                  max="100"
                ></progress>
              </div>
              <Image
                src="/imgs/icons/icon-close-circle.svg"
                alt="close circle icon"
                width={20}
                height={20}
              />
            </div>
            <div className="flex items-center justify-between py-3 border pl-3 pr-3 transition-all duration-300 border-[#E8EDF2] dark:border-[#313442] rounded-[5px] gap-x-[10px] hover:shadow-xl sm:pr-8 lg:pr-3 xl:pr-8">
              <Image
                className="hidden sm:block lg:hidden xl:block"
                src="/imgs/product-2.png"
                alt="product"
                width={82}
                height={82}
              />
              <div className="flex flex-col flex-1 gap-y-[10px]">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-gray-1100 text-sm leading-4 dark:text-gray-dark-1100">
                    Product_thumbnail_2.png
                  </span>
                </div>
                <progress
                  className="progress progress-accent"
                  value="100"
                  max="100"
                ></progress>
              </div>
              <Image
                src="/imgs/icons/icon-check-circle.svg"
                alt="check circle icon"
                width={20}
                height={20}
              />
            </div>
            <div className="flex items-center justify-between py-3 border pl-3 pr-3 transition-all duration-300 border-[#E8EDF2] dark:border-[#313442] rounded-[5px] gap-x-[10px] hover:shadow-xl sm:pr-8 lg:pr-3 xl:pr-8">
              <Image
                className="hidden sm:block lg:hidden xl:block"
                src="/imgs/product-3.png"
                alt="product"
                width={82}
                height={82}
              />
              <div className="flex flex-col flex-1 gap-y-[10px]">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-gray-1100 text-sm leading-4 dark:text-gray-dark-1100">
                    Product_thumbnail_3.png
                  </span>
                </div>
                <progress
                  className="progress progress-accent"
                  value="100"
                  max="100"
                ></progress>
              </div>
              <Image
                src="/imgs/icons/icon-check-circle.svg"
                alt="check circle icon"
                width={20}
                height={20}
              />
            </div>
            <div className="flex items-center justify-between py-3 border pl-3 pr-3 transition-all duration-300 border-[#E8EDF2] dark:border-[#313442] rounded-[5px] gap-x-[10px] hover:shadow-xl sm:pr-8 lg:pr-3 xl:pr-8">
              <Image
                className="hidden sm:block lg:hidden xl:block"
                src="/imgs/product-4.png"
                alt="product"
                width={82}
                height={82}
              />
              <div className="flex flex-col flex-1 gap-y-[10px]">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-gray-1100 text-sm leading-4 dark:text-gray-dark-1100">
                    Product_thumbnail_4.png
                  </span>
                </div>
                <progress
                  className="progress progress-accent"
                  value="100"
                  max="100"
                ></progress>
              </div>
              <Image
                src="/imgs/icons/icon-check-circle.svg"
                alt="check circle icon"
                width={20}
                height={20}
              />
            </div>
            <div className="flex items-center justify-between py-3 border pl-3 pr-3 transition-all duration-300 border-[#E8EDF2] dark:border-[#313442] rounded-[5px] gap-x-[10px] hover:shadow-xl sm:pr-8 lg:pr-3 xl:pr-8">
              <Image
                className="hidden sm:block lg:hidden xl:block"
                src="/imgs/product-5.png"
                alt="product"
                width={82}
                height={82}
              />
              <div className="flex flex-col flex-1 gap-y-[10px]">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-gray-1100 text-sm leading-4 dark:text-gray-dark-1100">
                    Product_thumbnail_5.png
                  </span>
                </div>
                <progress
                  className="progress progress-accent"
                  value="100"
                  max="100"
                ></progress>
              </div>
              <Image
                src="/imgs/icons/icon-check-circle.svg"
                alt="check circle icon"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="flex items-center gap-x-4 flex-wrap gap-y-4">
            <button className="btn normal-case h-fit min-h-fit text-white transition-all duration-300 border-4 bg-[#B2A7FF] hover:bg-[#B2A7FF] hover:border-[#B2A7FF] border-white !px-6 py-[14px]">
              Update
            </button>
            <button className="btn normal-case h-fit min-h-fit transition-all duration-300 px-6 border-0 text-white bg-[#E23738] hover:!bg-[#ef6364] hover:text-white py-[14px]">
              Delete
            </button>
            <button className="btn normal-case h-fit min-h-fit transition-all duration-300 px-6 border-0 bg-[#E8EDF2] text-[#B8B1E4] hover:!bg-[#bdbec0] hover:text-white dark:bg-[#313442] dark:hover:!bg-[#424242] py-[14px]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;

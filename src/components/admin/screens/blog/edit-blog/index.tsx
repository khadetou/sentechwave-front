import { useAppDispatch, useAppSelector } from "hooks/index";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createBlogs, reset, updateBlog } from "redux/blog/blogSlice";
import { stripHtml } from "string-strip-html";
import Image from "next/image";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import { QuillFormats, QuillModules } from "../quill";
import ButtonLoading from "components/Loadingbutton";
import { useRouter } from "next/router";
import TopEdit from "../top-blog/top-edit";

const EditBlogPage = () => {
  const { blog } = useAppSelector((store) => store.blog);
  const { isError, isSuccess, message, isLoading } = useAppSelector(
    (store) => store.blog
  );
  const { tags: T } = useAppSelector((store) => store.tag);
  const { categories: C } = useAppSelector((store) => store.category);
  const dispatch = useAppDispatch();
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState<any>([]);
  const [tags, setTags] = useState<any>([]);
  const [checked, setChecked] = useState<any>([]);
  const [checkedTag, setCheckedTag] = useState<any>([]);
  const [imagePreview, setImagePreview] = useState<any>("");
  const [image, setImage] = useState<any>("");
  const [oldImage, setOldImage] = useState<any>([]);

  const onChangeImage = (e: any) => {
    const files = Array.from(e.target.files);
    setImage([]);
    setImagePreview([]);

    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const setCategoriesArray = (blogCat: any) => {
    let ca: any = [];
    blogCat.map((cat: any) => {
      ca.push(cat._id);
    });
    setChecked(ca);
  };

  const setTagsArray = (blogTags: any) => {
    let ta: any = [];
    blogTags.map((tag: any) => {
      ta.push(tag._id);
    });
    setCheckedTag(ta);
  };
  const findOutCategory = (c: any) => {
    const result = checked.indexOf(c);

    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const findOutTag = (t: any) => {
    const result = checkedTag.indexOf(t);
    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const handleToggle = (_id: string) => () => {
    const clickedCategory = checked.indexOf(_id);
    const all = [...checked];
    if (clickedCategory === -1) {
      all.push(_id);
    } else {
      all.splice(clickedCategory, 1);
    }

    setChecked(all);
    setCategories(all);
  };

  const handleTagsToggle = (_id: string) => () => {
    const clickedTag = checkedTag.indexOf(_id);
    const all = [...checkedTag];

    if (clickedTag === -1) {
      all.push(_id);
    } else {
      all.splice(clickedTag, 1);
    }

    setCheckedTag(all);
    setTags(all);
  };

  useEffect(() => {
    if (blog) {
      setBody(blog.body);
      setCheckedTag(blog.tags);
      setOldImage(blog.image);
      setTitle(blog.title);
      setChecked(blog.category);
      setCategoriesArray(blog.category);
      setTagsArray(blog.tags);
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
      toast.success("Blog créé avec succées!");
    }
  }, [isError, dispatch, message, isSuccess, blog]);
  const {
    query: { slug },
  } = useRouter();

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      body,
      title,
      image,
      mdesc: stripHtml(body.substring(0, 160)).result,
      category: categories ? categories.join(",") : "",
      tags: tags ? tags.join(",") : "",
    };

    console.log(data);
    const dataBlog = { data, slug };
    dispatch(updateBlog(dataBlog));
  };

  return (
    <div>
      <TopEdit />
      <div className="border bg-white border-neutral   rounded-2xl px-[25px] pt-[25px] pb-[68px]">
        <div className="flex justify-between gap-x-5 flex-col xl:flex-row">
          <div className="xl:w-[70%]">
            <div className="mb-12">
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] ">
                Post title
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2]  sm:min-w-[252px]">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit py-4 focus:outline-none pl-[13px]  placeholder:text-inherit"
                  type="text"
                  placeholder="Add title"
                />
              </div>
            </div>
            <div className="mb-12">
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] ">
                Content
              </p>
              <div className="rounded-lg border border-neutral  p-[13px]">
                <textarea
                  className="textarea w-full p-0 text-gray-400 resize-none rounded-none bg-transparent min-h-[262px] focus:outline-none"
                  placeholder="Content here"
                ></textarea>
              </div>
            </div>
            <div className="mb-12">
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] ">
                Thumbnail / Gallery
              </p>
              <div className="border-dashed border-2 text-center border-neutral py-[26px] ">
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
            </div>
            <div className="mb-12">
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] ">
                Excerpt
              </p>
              <textarea
                className="textarea w-full text-gray-400 resize-none rounded-lg bg-transparent border border-neutral pt-2 min-h-[131px] focus:outline-none  pl-[13px]"
                placeholder="The excerpt"
              ></textarea>
            </div>
            <div>
              <p className="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] ">
                Tag
              </p>
              <div className="input-group border rounded-lg border-[#E8EDF2]  sm:min-w-[252px]">
                <input
                  className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit py-4 focus:outline-none pl-[13px]  placeholder:text-inherit"
                  type="text"
                  placeholder="Add tags"
                />
              </div>
              <div className="border bg-white border-neutral   rounded-lg p-[15px] mt-[10px]">
                <div className="flex flex-wrap gap-[10px]">
                  <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2]  rounded-[5px]">
                    <span className="text-xs text-gray-400">smartwatch</span>
                    <Image
                      className="cursor-pointer"
                      src="/imgs/icons/icon-close.svg"
                      alt="close icon"
                      width={8}
                      height={8}
                    />
                  </div>
                  <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2]  rounded-[5px]">
                    <span className="text-xs text-gray-400">Apple</span>
                    <Image
                      className="cursor-pointer"
                      src="/imgs/icons/icon-close.svg"
                      alt="close icon"
                      width={8}
                      height={8}
                    />
                  </div>
                  <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2]  rounded-[5px]">
                    <span className="text-xs text-gray-400">Watch</span>
                    <Image
                      className="cursor-pointer"
                      src="/imgs/icons/icon-close.svg"
                      alt="close icon"
                      width={8}
                      height={8}
                    />
                  </div>
                  <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2]  rounded-[5px]">
                    <span className="text-xs text-gray-400">smartphone</span>
                    <Image
                      className="cursor-pointer"
                      src="/imgs/icons/icon-close.svg"
                      alt="close icon"
                      width={8}
                      height={8}
                    />
                  </div>
                  <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2]  rounded-[5px]">
                    <span className="text-xs text-gray-400">iPhone14 max</span>
                    <Image
                      className="cursor-pointer"
                      src="/imgs/icons/icon-close.svg"
                      alt="close icon"
                      width={8}
                      height={8}
                    />
                  </div>
                  <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2]  rounded-[5px]">
                    <span className="text-xs text-gray-400">iPhone14 max</span>
                    <Image
                      className="cursor-pointer"
                      src="/imgs/icons/icon-close.svg"
                      alt="close icon"
                      width={8}
                      height={8}
                    />
                  </div>
                  <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2]  rounded-[5px]">
                    <span className="text-xs text-gray-400">iPhone14 max</span>
                    <Image
                      className="cursor-pointer"
                      src="/imgs/icons/icon-close.svg"
                      alt="close icon"
                      width={8}
                      height={8}
                    />
                  </div>
                  <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2]  rounded-[5px]">
                    <span className="text-xs text-gray-400">smartwatch</span>
                    <Image
                      className="cursor-pointer"
                      src="/imgs/icons/icon-close.svg"
                      alt="close icon"
                      width={8}
                      height={8}
                    />
                  </div>
                  <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2]  rounded-[5px]">
                    <span className="text-xs text-gray-400">Apple</span>
                    <Image
                      className="cursor-pointer"
                      src="/imgs/icons/icon-close.svg"
                      alt="close icon"
                      width={8}
                      height={8}
                    />
                  </div>
                  <div className="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2]  rounded-[5px]">
                    <span className="text-xs text-gray-400">Watch</span>
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
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-[15px] mt-[25px]">
            <div className="border border-neutral rounded-lg bg-white  pb-[31px] ">
              <div className="bg-neutral rounded-t-lg py-[15px] pl-[18px] mb-[27px] ">
                <p className="text-gray-1100 leading-4 font-semibold  text-[14px]">
                  Publish
                </p>
              </div>
              <div className="flex flex-col pl-[18px] gap-y-[15px] mb-[25px]">
                <div className="flex items-center gap-x-[6px]">
                  <Image
                    src="/imgs/icons/icon-tree.svg"
                    alt="tree icon"
                    width={12}
                    height={12}
                  />
                  <span className="text-gray-500 text-xs ">Status:</span>
                  <span className="text-gray-1100 text-xs ">Draft</span>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <Image
                    src="/imgs/icons/icon-eye.svg"
                    alt="eye icon"
                    width={16}
                    height={16}
                  />
                  <span className="text-gray-500 text-xs ">Visibility:</span>
                  <span className="text-gray-1100 text-xs ">Publish</span>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <Image
                    src="/imgs/icons/icon-calendar-1.svg"
                    alt="calendar icon"
                    width={16}
                    height={16}
                  />
                  <span className="text-gray-500 text-xs ">Schedule:</span>
                  <span className="text-gray-1100 text-xs ">Immediately</span>
                </div>
              </div>
              <div className="px-[18px] mb-[25px]">
                <div className="w-full bg-neutral h-[1px] "></div>
              </div>
              <div className="flex justify-between px-[18px]">
                <button className="btn normal-case h-fit min-h-fit transition-all duration-300 border-4 border-neutral-bg bg-gray-200 font-medium text-gray-500  text-[12px] leading-[18px]  hover:bg-gray-200  hover:border-gray-300">
                  Save Draft
                </button>
                <button className="btn normal-case h-fit min-h-fit transition-all duration-300 border-4 bg-color-brands hover:bg-color-brands hover:border-[#B2A7FF]  border-neutral-bg font-medium  py-[7px] px-[14px] text-[12px] leading-[18px]">
                  Publish
                </button>
              </div>
            </div>
            <div className="border border-neutral rounded-lg  pb-[31px]">
              <div className="bg-neutral rounded-t-lg py-[15px] pl-[18px] mb-[27px] ">
                <p className="text-gray-1100 leading-4 font-semibold  text-[14px]">
                  Categories
                </p>
              </div>
              <div className="flex flex-col gap-y-[22px] px-[18px] mb-[25px]">
                <div className="flex items-center gap-x-[11px]">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px]"
                    type="checkbox"
                  />
                  <span className="text-gray-500 leading-4  text-[14px] max-w-[183px]">
                    Laptops
                  </span>
                </div>
                <div className="flex items-center gap-x-[11px]">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px]"
                    type="checkbox"
                  />
                  <span className="text-gray-500 leading-4  text-[14px] max-w-[183px]">
                    Mobile phones
                  </span>
                </div>
                <div className="flex items-center gap-x-[11px]">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px]"
                    type="checkbox"
                  />
                  <span className="text-gray-500 leading-4  text-[14px] max-w-[183px]">
                    Desktops
                  </span>
                </div>
                <div className="flex items-center gap-x-[11px]">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px]"
                    type="checkbox"
                  />
                  <span className="text-gray-500 leading-4  text-[14px] max-w-[183px]">
                    Accessories
                  </span>
                </div>
                <div className="flex items-center gap-x-[11px]">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px]"
                    type="checkbox"
                  />
                  <span className="text-gray-500 leading-4  text-[14px] max-w-[183px]">
                    Portable storage
                  </span>
                </div>
                <div className="flex items-center gap-x-[11px]">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px]"
                    type="checkbox"
                  />
                  <span className="text-gray-500 leading-4  text-[14px] max-w-[183px]">
                    Networking
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center cursor-pointer gap-x-[13px]">
                <Image
                  src="/imgs/icons/icon-add-square.svg"
                  alt="add square icon"
                  width={16}
                  height={16}
                />
                <span className="font-semibold text-xs text-gray-1100 ">
                  Add category
                </span>
              </div>
            </div>
            <div className="border border-neutral rounded-lg  pb-[31px]">
              <div className="bg-neutral rounded-t-lg py-[15px] pl-[18px] mb-[27px] ">
                <p className="text-gray-1100 leading-4 font-semibold  text-[14px]">
                  Format
                </p>
              </div>
              <div className="flex flex-col gap-y-[15px] px-[18px] mb-[25px]">
                <div className="flex items-center gap-x-[12px]">
                  <input
                    className="radio radio-primary border-2"
                    type="radio"
                  />
                  <div className="flex items-center gap-x-[7px]">
                    <Image
                      src="/imgs/icons/icon-flag.svg"
                      alt="flag icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-gray-500 leading-4  text-[14px]">
                      Standard
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-[12px]">
                  <input
                    className="radio radio-primary border-2"
                    type="radio"
                  />
                  <div className="flex items-center gap-x-[7px]">
                    <Image
                      src="/imgs/icons/icon-flash.svg"
                      alt="flash icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-gray-500 leading-4  text-[14px]">
                      Aside
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-[12px]">
                  <input
                    className="radio radio-primary border-2"
                    type="radio"
                  />
                  <div className="flex items-center gap-x-[7px]">
                    <Image
                      src="/imgs/icons/icon-gallery.svg"
                      alt="gallery icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-gray-500 leading-4  text-[14px]">
                      Image
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-[12px]">
                  <input
                    className="radio radio-primary border-2"
                    type="radio"
                  />
                  <div className="flex items-center gap-x-[7px]">
                    <Image
                      src="/imgs/icons/icon-subtitle.svg"
                      alt="subtitle icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-gray-500 leading-4  text-[14px]">
                      Gallery
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-[12px]">
                  <input
                    className="radio radio-primary border-2"
                    type="radio"
                  />
                  <div className="flex items-center gap-x-[7px]">
                    <Image
                      src="/imgs/icons/icon-video-square.svg"
                      alt="video square icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-gray-500 leading-4  text-[14px]">
                      Video
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-[12px]">
                  <input
                    className="radio radio-primary border-2"
                    type="radio"
                  />
                  <div className="flex items-center gap-x-[7px]">
                    <Image
                      src="/imgs/icons/icon-music-square.svg"
                      alt="music square icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-gray-500 leading-4  text-[14px]">
                      Audio
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-neutral rounded-lg  pb-[31px]">
              <div className="bg-neutral rounded-t-lg py-[15px] pl-[18px] mb-[27px] ">
                <p className="text-gray-1100 leading-4 font-semibold  text-[14px]">
                  Discussion
                </p>
              </div>
              <div className="flex flex-col gap-y-[22px] px-[18px] mb-[25px]">
                <div className="flex items-center gap-x-[11px]">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px]"
                    type="checkbox"
                  />
                  <span className="text-gray-500 leading-4  text-[14px] max-w-[183px]">
                    Allow comments
                  </span>
                </div>
                <div className="flex items-center gap-x-[11px]">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px]"
                    type="checkbox"
                  />
                  <span className="text-gray-500 leading-4  text-[14px] max-w-[183px]">
                    Allow trackbacks and pingbacks on this page
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlogPage;

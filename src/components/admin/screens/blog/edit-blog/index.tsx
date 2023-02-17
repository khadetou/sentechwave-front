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
    <section className="content-main">
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="text-muted">Title</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="form-group">
              <ReactQuill
                modules={QuillModules}
                formats={QuillFormats}
                value={body}
                onChange={(e) => setBody(e)}
                className="tw-bg-white"
                placeholder="Write something amazing..."
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                {isLoading ? <ButtonLoading /> : "Publish"}
              </button>
            </div>
          </form>
          <div className="pt-3"></div>
        </div>
        <div className="col-md-4">
          <div>
            <div className="form-group pb-2">
              <h5 className="tw-text-xl tw-font-bold">Featured image</h5>
              {imagePreview === "" && oldImage !== "" && (
                <div className="flex flex-wrap items-center w-full h-full">
                  <div className="max-w-[148px] mr-1">
                    {oldImage.url && (
                      <Image
                        src={oldImage.url}
                        alt=""
                        className="rounded-md mr-1"
                        width={200}
                        height={200}
                      />
                    )}
                  </div>
                </div>
              )}
              {imagePreview !== "" && (
                <div className="flex flex-wrap items-center w-full h-full">
                  <div className="max-w-[148px] mr-1">
                    <Image
                      src={imagePreview}
                      alt=""
                      className="rounded-md mr-1"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              )}
              <hr />
              <small className="text-muted">Max size: 1mb</small>
              <br />
              <label className="btn btn-outline-info">
                Upload Featured Image
                <input
                  type="file"
                  onChange={onChangeImage}
                  accept="image/*"
                  hidden
                />
              </label>
            </div>
          </div>
          <div>
            <h5 className="tw-text-xl tw-font-bold">Categories</h5>
            <hr />
            <ul className="tw-max-h-[200px] tw-overflow-auto">
              {C &&
                C.map((category: any) => (
                  <li
                    key={category._id}
                    className="tw-flex tw-items-center tw-my-3 "
                  >
                    <input
                      onChange={handleToggle(category._id)}
                      checked={findOutCategory(category._id)}
                      type="checkbox"
                      className="tw-mr-2 tw-w-4 tw-h-4"
                      id={category._id}
                    />
                    <label
                      htmlFor={category._id}
                      className="form-check-label tw-cursor-pointer hover:tw-text-primary !tw-mb-0"
                    >
                      {category.name}
                    </label>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h5 className="tw-text-xl tw-font-bold">Tags</h5>
            <hr />
            <ul className="tw-max-h-[200px] tw-overflow-auto">
              {T &&
                T.map((tag: any) => (
                  <li key={tag._id} className="tw-flex tw-items-center tw-my-3">
                    <input
                      onChange={handleTagsToggle(tag._id)}
                      checked={findOutTag(tag._id)}
                      type="checkbox"
                      className="tw-mr-2 tw-w-4 tw-h-4"
                    />
                    <label className="form-check-label form-check-label tw-cursor-pointer hover:tw-text-primary !tw-mb-0">
                      {tag.name}
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditBlogPage;

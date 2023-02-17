import { useAppDispatch, useAppSelector } from "hooks/index";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {} from "redux/blog/blogSlice";
import { createTag, deleteTag, getAllTags, reset } from "redux/tag/tagSlice";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CreateTagPage = () => {
  const { tags, isError, isSuccess, isLoading, message } = useAppSelector(
    (state) => state.tag
  );

  const dispatch = useAppDispatch();
  const [name, setName] = useState("");

  const onDelete = (slug: any) => {
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
        dispatch(deleteTag(slug));
      }
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(createTag({ name }));
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

  useEffect(() => {
    dispatch(getAllTags());
  }, [dispatch]);

  return (
    <section className="content-main">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="text-muted">Tag</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <button type="submit" className="!tw-bg-primary">
            Create
          </button>
        </div>
      </form>
      {tags &&
        tags.map((t: any, i: any) => (
          <button
            key={i}
            title="Double click to delete"
            onDoubleClick={() => onDelete(t.slug)}
            className="btn btn-outline tw-border-secondary tw-text-secondary hover:!tw-bg-secondary tw-mr-1 tw-ml-1 tw-mt-3"
          >
            {t.name}
          </button>
        ))}
    </section>
  );
};

export default CreateTagPage;

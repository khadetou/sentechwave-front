import { useAppDispatch, useAppSelector } from "hooks/index";
import "moment/locale/fr";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteBlog } from "redux/blog/blogSlice";

const MySwal = withReactContent(Swal);

moment.locale("fr");
const BlogPage = () => {
  const { blogs } = useAppSelector((store) => store.blog);
  const dispatch = useAppDispatch();
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
        dispatch(deleteBlog(slug));
      }
    });
  };
  return (
    <section className="content-main">
      <div className="row">
        <div className="col-md-12">
          <div className="pb-5 row ">
            {blogs &&
              blogs.map((blog: any) => (
                <article
                  key={blog._id}
                  className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated"
                >
                  <div className="post-thumb">
                    <Link href="/">
                      <Image
                        width={345}
                        height={248}
                        className="border-radius-15 tw-mx-auto tw-max-h-[248px]"
                        src={blog.image.url}
                        alt=""
                      />
                    </Link>
                    <div className="entry-meta">
                      <a
                        className="entry-meta tw-ml-3 meta-2"
                        href="blog-category-grid.html"
                      >
                        <i className="fi-rs-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="entry-content-2 tw-px-[30px] tw-py-[20px]">
                    <h6 className="mb-10 font-sm">
                      <Link
                        className="entry-meta text-muted tw-font-bold"
                        href={`/blog/${blog.slug}`}
                      >
                        {blog.category[0].name}
                      </Link>
                    </h6>
                    <h4 className="post-title mb-15 tw-font-bold tw-text-[24px]">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h4>
                    <div className="entry-meta font-xs color-grey mt-10 pb-10">
                      <div>
                        <span className="post-on mr-10">
                          {moment(blog.createdAt).fromNow()}
                        </span>
                        <span className="hit-count has-dot mr-10">
                          126k Views
                        </span>
                        <span className="hit-count has-dot">4 mins read</span>
                      </div>
                    </div>
                  </div>
                  <div className="tw-flex tw-justify-center">
                    <button
                      className="btn btn-sm btn-danger tw-mr-2"
                      onClick={() => onDelete(blog.slug)}
                    >
                      Delete
                    </button>
                    <Link
                      className="btn tw-bg-transparent tw-border-secondary tw-text-secondary"
                      href={`/admin/blog/${blog.slug}`}
                    >
                      update
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

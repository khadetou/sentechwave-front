import Layout from "components/admin/Layout";
import EditBlogPage from "components/admin/screens/blog/edit-blog";
import SEO from "components/SEO";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { ToastContainer } from "react-toastify";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import { getBlogById } from "redux/blog/blogSlice";
import { getAllCategories } from "redux/category/categorySlice";
import { getAllProducts } from "redux/products/productSlice";
import { wrapper } from "redux/store";
import { getAllTags } from "redux/tag/tagSlice";
import { Data } from "utils/interface";

const EditProduct = () => {
  return (
    <Layout>
      <SEO />
      <EditBlogPage />
      <ToastContainer />
    </Layout>
  );
};

export default EditProduct;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);

    const data: Data = {
      req: context.req,
      keyword: context.query.keyword ? context.query.keyword : "",
      max: context.query.max ? context.query.max : "",
      min: context.query.min ? context.query.min : "",
      pageNumber: context.query.pageNumber ? context.query.pageNumber : "",
      category: context.query.category ? context.query.category : "",
      souscategory: context.query.souscategory
        ? context.query.souscategory
        : "",
      ssouscategory: context.query.ssouscategory
        ? context.query.ssouscategory
        : "",
      qty: context.query.qty ? context.query.qty : "",
      pageSize: context.query.pageSize ? context.query.pageSize : "",
    };

    const {
      query: { slug },
    } = context;

    await store.dispatch<any>(getAllProducts(data));
    await store.dispatch<any>(getAllTags());
    await store.dispatch<any>(getAllCategories());
    await store.dispatch<any>(getBlogById(slug as string));

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        const user = await store.dispatch<any>(getUser(token));

        if (user && user.payload.data.roles[0] !== "admin") {
          return {
            redirect: {
              destination: "/",
              permanent: false,
            },
          };
        }
      }
    } else {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  });

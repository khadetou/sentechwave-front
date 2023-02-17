import Layout from "components/admin/Layout";
import EditProductPage from "components/admin/screens/products/edit-product";
import SEO from "components/SEO";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React from "react";
import { ToastContainer } from "react-toastify";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import {
  getAllItemCategories,
  getAllProductCategories,
  getAllSubCategories,
  getAllSubSubCategories,
  getProductById,
} from "redux/products/productSlice";
import { wrapper } from "redux/store";

const EditProduct = () => {
  return (
    <Layout>
      <SEO />
      <EditProductPage />
      <ToastContainer />
    </Layout>
  );
};

export default EditProduct;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);

    const {
      query: { id },
    } = context;

    await store.dispatch<any>(getProductById(id as string));
    await store.dispatch(getAllProductCategories());
    await store.dispatch(getAllSubCategories());
    await store.dispatch(getAllSubSubCategories());

    await store.dispatch(getAllItemCategories());
    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
        if (
          store.getState().auth.user &&
          store.getState().auth.user.roles[0] !== "admin"
        ) {
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
          destination: "/login",
          permanent: false,
        },
      };
    }
  });

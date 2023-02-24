import Layout from "components/admin/Layout";
import DashFooter from "components/admin/screens/dashboard/dash-footter";
import MyProfilePage from "components/admin/screens/profile";
import SEO from "components/SEO";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React from "react";
import { ToastContainer } from "react-toastify";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import {
  getAllProductCategories,
  getAllSubCategories,
  getAllSubSubCategories,
  getAllItemCategories,
} from "redux/products/productSlice";
import { wrapper } from "redux/store";

const MyProfile = () => {
  return (
    <Layout>
      <SEO />
      <main className="overflow-x-scroll scrollbar-hide flex flex-col justify-between pt-[42px] px-[23px] pb-[28px]">
        <MyProfilePage />
        <DashFooter />
      </main>
      <ToastContainer />
    </Layout>
  );
};

export default MyProfile;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);
    await store.dispatch(getAllProductCategories());
    await store.dispatch(getAllSubCategories());
    await store.dispatch(getAllSubSubCategories());

    await store.dispatch(getAllItemCategories());
    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
      }
    } else {
      return {
        redirect: {
          destination: "/authenticate",
          permanent: false,
        },
      };
    }
  });

import Layout from "components/admin/Layout";
import DashFooter from "components/admin/screens/dashboard/dash-footter";
import OrderPage from "components/admin/screens/orders/order";

import SEO from "components/SEO";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React from "react";
import { ToastContainer } from "react-toastify";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import { getOrderById } from "redux/order/orderSlice";
import {
  getAllProductCategories,
  getAllSubCategories,
  getAllSubSubCategories,
  getAllItemCategories,
} from "redux/products/productSlice";
import { wrapper } from "redux/store";

const Order = () => {
  return (
    <Layout>
      <SEO />
      <main className="overflow-x-scroll scrollbar-hide flex flex-col justify-between pt-[42px] px-[23px] pb-[28px]">
        <OrderPage />
        <DashFooter />
      </main>
      <ToastContainer />
    </Layout>
  );
};

export default Order;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);
    await store.dispatch(getAllProductCategories());
    await store.dispatch(getAllSubCategories());
    await store.dispatch(getAllSubSubCategories());

    await store.dispatch(getAllItemCategories());
    const { id } = context.query;
    const data = {
      id,
      token,
    };
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
        } else {
          await store.dispatch(getOrderById(data));
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

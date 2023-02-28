import Header from "components/header";
import Layout from "components/Layout";
import OrderPage from "components/screens/dashboard/order";
import OrderHeader from "components/screens/dashboard/order/order-header";
import SEO from "components/SEO";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import { getOrderById } from "redux/order/orderSlice";
import { wrapper } from "redux/store";
import NewsletterProduct from "components/newsletter";
import Advantages from "components/advantages";
import Footer from "components/Footer";

const Order = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isOpenCat, setIsOpenCat] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Layout
      isLocationOpen={isLocationOpen}
      setIsLocationOpen={setIsLocationOpen}
      isOpenCat={isOpenCat}
      setIsOpenCat={setIsOpenCat}
      setOpen={setOpen}
      open={open}
    >
      <SEO />

      <Header
        isOpenCat={isOpenCat}
        setIsOpenCat={setIsOpenCat}
        setOpen={setOpen}
        open={open}
      />

      <main className="main">
        <OrderHeader />
        <OrderPage />
        <Advantages />
        <NewsletterProduct />
        <Footer />
      </main>
    </Layout>
  );
};

export default Order;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);

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

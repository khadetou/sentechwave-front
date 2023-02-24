import Layout from "components/admin/Layout";
import DashFooter from "components/admin/screens/dashboard/dash-footter";
import UsersPage from "components/admin/screens/users";
import SEO from "components/SEO";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React from "react";
import { getCookie } from "redux/auth/authService";
import { getAllUsers, logout, getUser } from "redux/auth/authSlice";
import { wrapper } from "redux/store";

const Users = () => {
  return (
    <Layout>
      <SEO />
      <main className="overflow-x-scroll scrollbar-hide flex flex-col justify-between pt-[42px] px-[23px] pb-[28px]">
        <UsersPage />
        <DashFooter />
      </main>
    </Layout>
  );
};

export default Users;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);
    await store.dispatch<any>(getAllUsers(token));
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
          destination: "/authenticate",
          permanent: false,
        },
      };
    }
  });

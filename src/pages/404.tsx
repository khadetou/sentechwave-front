import Header from "components/header";
import Mobile from "components/header/mobile/mobile";
import Layout from "components/Layout";
import NotFoundPage from "components/not-found-page";
import SEO from "components/SEO";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import { wrapper } from "redux/store";

const NotFound = () => {
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
      <NotFoundPage />
    </Layout>
  );
};

export default NotFound;
// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps((store) => async (context): Promise<any> => {
//     const token: string = getCookie("token", context.req);

//     if (token) {
//       if (jwtDecode<any>(token).exp < Date.now() / 1000) {
//         await store.dispatch<any>(logout());
//       } else {
//         await store.dispatch<any>(getUser(token));
//       }
//     }
//   });

import Header from "components/header";
import Mobile from "components/header/mobile/mobile";
import Layout from "components/Layout";
import RegisterScreen from "components/screens/register";
import SEO from "components/SEO";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { getCookie } from "redux/auth/authService";
import jwtDecode from "jwt-decode";
import Footer from "components/Footer";

const Register = () => {
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
        isLocationOpen={isLocationOpen}
        setIsLocationOpen={setIsLocationOpen}
        isOpenCat={isOpenCat}
        setIsOpenCat={setIsOpenCat}
        setOpen={setOpen}
        open={open}
      />

      <main className="main pages">
        <RegisterScreen />
        <Footer />
      </main>
    </Layout>
  );
};

export default Register;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = getCookie("token", context.req);
  if (token) {
    if (jwtDecode<any>(token).exp > Date.now() / 1000) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
  return { props: {} };
};

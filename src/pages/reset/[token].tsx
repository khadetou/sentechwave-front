import Footer from "components/Footer";
import Header from "components/header";
import Layout from "components/Layout";
import ResetPassPage from "components/screens/reset-pass";
import SEO from "components/SEO";
import React, { useState } from "react";

const ResetPass = () => {
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
      <main className="main">
        <ResetPassPage />
        <Footer />
      </main>
    </Layout>
  );
};

export default ResetPass;

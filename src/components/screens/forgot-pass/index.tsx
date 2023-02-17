import React from "react";
import { ToastContainer } from "react-toastify";

import PageMain from "./page-main";
import Advantages from "components/advantages";
import NewsletterProduct from "components/newsletter";

const ForgotPassPage = () => {
  return (
    <>
      <PageMain />
      <Advantages />
      <NewsletterProduct />
      <ToastContainer />
    </>
  );
};

export default ForgotPassPage;

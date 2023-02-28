import React from "react";
import Advantages from "./advantages";
import Main from "./main";
import NewsletterProduct from "components/newsletter";
import Modal from "components/modal";

const ProductBody = () => {
  return (
    <>
      <Main />
      <Modal />
      <Advantages />
      <NewsletterProduct />
    </>
  );
};

export default ProductBody;

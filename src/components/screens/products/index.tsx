import React from "react";
import Main from "./main";
import FilterModal from "../filter-modal";
import Advantages from "../../advantages";
import NewsletterProduct from "../../newsletter";
import Modal from "../../modal";

const ProductsBody = () => {
  return (
    <>
      <Main />
      <Advantages />
      <NewsletterProduct />
      <FilterModal />
      <Modal />
    </>
  );
};

export default ProductsBody;

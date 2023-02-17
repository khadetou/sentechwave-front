import Modal from "components/modal";
import React from "react";
import NewsLetter from "../home/newsletter";
import Advantages from "./advantages";
import MainCart from "./main";
import PageHeader from "./page-header";

const CartPage = () => {
  return (
    <>
      <PageHeader />
      <MainCart />
      <Advantages />
      <NewsLetter />
      <Modal />
    </>
  );
};

export default CartPage;

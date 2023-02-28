import React from "react";
import FilterModal from "../filter-modal";
import Modal from "../../modal";
import Advantages from "./advantages";
import PageContent from "./page-content";
import PageHeader from "./page-header";
import { ToastContainer } from "react-toastify";
import NewsletterProduct from "components/newsletter";

const WishlistPage = () => {
  return (
    <>
      <PageHeader />
      <PageContent />
      <Advantages />
      <NewsletterProduct />
      <Modal />
      <FilterModal />
      <ToastContainer />
    </>
  );
};

export default WishlistPage;

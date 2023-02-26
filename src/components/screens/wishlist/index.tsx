import React from "react";
import FilterModal from "../filter-modal";
import Modal from "../../modal";
import Advantages from "./advantages";
import Newsletter from "./newsletter";
import PageContent from "./page-content";
import PageHeader from "./page-header";
import { ToastContainer } from "react-toastify";

const WishlistPage = () => {
  return (
    <>
      <PageHeader />
      <PageContent />
      <Advantages />
      <Newsletter />
      <Modal />
      <FilterModal />
      <ToastContainer />
    </>
  );
};

export default WishlistPage;

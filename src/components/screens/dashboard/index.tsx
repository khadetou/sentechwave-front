import React from "react";
import FilterModal from "../filter-modal";
import Modal from "../../modal";
import MainPage from "./main";
import Newsletter from "./newsletter";

const DashboardPage = () => {
  return (
    <>
      <MainPage />
      <Newsletter />
      <FilterModal />
      <Modal />
    </>
  );
};

export default DashboardPage;

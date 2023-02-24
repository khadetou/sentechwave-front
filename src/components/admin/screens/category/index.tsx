import React from "react";
import { ToastContainer } from "react-toastify";
import CatCard from "./cat-card";
import CatHeader from "./cat-header";

const CategoryPage = () => {
  return (
    <div>
      <CatHeader />
      <CatCard />
      <ToastContainer />
    </div>
  );
};

export default CategoryPage;

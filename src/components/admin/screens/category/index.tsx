import React from "react";
import { ToastContainer } from "react-toastify";
import CatCard from "./cat-card";
import CatHeader from "./cat-header";

const CategoryPage = () => {
  return (
    <section className="content-main">
      <CatHeader />
      <CatCard />
      <ToastContainer />
    </section>
  );
};

export default CategoryPage;

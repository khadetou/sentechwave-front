import React from "react";
import MainCheckout from "./main";
import PageHeader from "./page-header";
import Advantages from "components/advantages";
import NewsletterProduct from "components/newsletter";

const CheckoutPage = () => {
  return (
    <>
      <PageHeader />
      <MainCheckout />
      <Advantages />
      <NewsletterProduct />
    </>
  );
};

export default CheckoutPage;

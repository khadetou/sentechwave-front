import React from "react";
import PageContent from "./page-content";
import PageHeader from "./page-header";
import Footer from "components/Footer";
import Advantages from "components/advantages";
import NewsletterProduct from "components/newsletter";

const AboutPage = () => {
  return (
    <>
      <PageHeader />
      <PageContent />
      <Advantages />
      <NewsletterProduct />
      <Footer />
    </>
  );
};

export default AboutPage;

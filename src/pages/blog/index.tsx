import Header from "components/header";
import Mobile from "components/header/mobile/mobile";
import Layout from "components/Layout";
import BlogsPage from "components/screens/blog/blogs";
import PageHeader from "components/screens/blog/blogs/page-header";
import SEO from "components/SEO";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import { getAllblogs } from "redux/blog/blogSlice";
import { getAllProducts } from "redux/products/productSlice";
import { wrapper } from "redux/store";
import { getAllTags } from "redux/tag/tagSlice";
import { Data } from "utils/interface";
import Advantages from "components/advantages";
import NewsletterProduct from "components/newsletter";
import Footer from "components/Footer";

const Blog = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isOpenCat, setIsOpenCat] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Layout
      isLocationOpen={isLocationOpen}
      setIsLocationOpen={setIsLocationOpen}
      isOpenCat={isOpenCat}
      setIsOpenCat={setIsOpenCat}
      setOpen={setOpen}
      open={open}
    >
      <SEO />
      <Header
        isLocationOpen={isLocationOpen}
        setIsLocationOpen={setIsLocationOpen}
        isOpenCat={isOpenCat}
        setIsOpenCat={setIsOpenCat}
        setOpen={setOpen}
        open={open}
      />
      <main className="main">
        <PageHeader />
        <BlogsPage />
        <Advantages />
        <NewsletterProduct />
        <Footer />
      </main>
    </Layout>
  );
};

export default Blog;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);

    const data: Data = {
      req: context.req,
      keyword: context.query.keyword ? context.query.keyword : "",
      max: context.query.max ? context.query.max : "",
      min: context.query.min ? context.query.min : "",
      pageNumber: context.query.pageNumber ? context.query.pageNumber : "",
      category: context.query.category ? context.query.category : "",
      souscategory: context.query.souscategory
        ? context.query.souscategory
        : "",
      ssouscategory: context.query.ssouscategory
        ? context.query.ssouscategory
        : "",
      qty: context.query.qty ? context.query.qty : "",
      pageSize: context.query.pageSize ? context.query.pageSize : "",
    };

    await store.dispatch<any>(getAllProducts(data));
    await store.dispatch<any>(getAllTags());
    await store.dispatch<any>(getAllTags());
    await store.dispatch<any>(getAllblogs());

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
      }
    }
  });

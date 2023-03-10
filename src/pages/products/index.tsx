import Footer from "components/Footer";
import Header from "components/header";
import Mobile from "components/header/mobile/mobile";
import Layout from "components/Layout";
import ProductsBody from "components/screens/products";
import PageHeader from "components/screens/products/page-header";
import SEO from "components/SEO";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import {
  getAllItemCategories,
  getAllProductCategories,
  getAllProducts,
  getAllSubCategories,
  getAllSubSubCategories,
  getFiltersProducts,
  getTopProducts,
} from "redux/products/productSlice";
import { wrapper } from "redux/store";
import { Data } from "utils/interface";

const Products = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isOpenCat, setIsOpenCat] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Layout
      isLocationOpen={isLocationOpen}
      setIsLocationOpen={setIsLocationOpen}
      isOpenCat={isOpenCat}
      setIsOpenCat={setIsOpenCat}
      open={open}
      setOpen={setOpen}
    >
      <SEO />
      <Header
        isOpenCat={isOpenCat}
        setIsOpenCat={setIsOpenCat}
        setOpen={setOpen}
        open={open}
      />
      <main className="main">
        <PageHeader />
        <ProductsBody />
        <Footer />
      </main>
      <ToastContainer />
    </Layout>
  );
};

export default Products;
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

    const dataf: Data = {
      req: context.req,
      keyword: "",
      max: "",
      min: "",
      pageNumber: "",
      category: "",
      souscategory: "",
      ssouscategory: "",
      qty: "",
      pageSize: "",
    };
    await store.dispatch<any>(getAllProducts(data));
    await store.dispatch<any>(getFiltersProducts(dataf));
    await store.dispatch(getAllProductCategories());
    await store.dispatch(getAllSubCategories());
    await store.dispatch(getAllSubSubCategories());
    await store.dispatch(getAllItemCategories());
    await store.dispatch<any>(getTopProducts());

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
      }
    }
  });

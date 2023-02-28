import Footer from "components/Footer";
import Header from "components/header";
import Mobile from "components/header/mobile/mobile";
import Layout from "components/Layout";
import WishlistPage from "components/screens/wishlist";
import SEO from "components/SEO";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import {
  getAllProducts,
  getProductById,
  getFiltersProducts,
  getAllProductCategories,
  getAllSubCategories,
  getAllSubSubCategories,
  getAllItemCategories,
  getTopProducts,
} from "redux/products/productSlice";
import { wrapper } from "redux/store";
import { Data } from "utils/interface";

const Wishlist = () => {
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
        isOpenCat={isOpenCat}
        setIsOpenCat={setIsOpenCat}
        setOpen={setOpen}
        open={open}
      />
      <main className="main">
        <WishlistPage />
        <Footer />
      </main>
    </Layout>
  );
};

export default Wishlist;
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
    // await store.dispatch<any>(getProductById(id as string));
    await store.dispatch<any>(getAllProducts(data));
    await store.dispatch<any>(getFiltersProducts(data));
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

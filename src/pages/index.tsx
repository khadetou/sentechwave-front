import { useState } from "react";
import Header from "components/header";
import Layout from "components/Layout";
import SEO from "components/SEO";
import type { GetServerSideProps, NextPage } from "next";
import Mobile from "components/header/mobile/mobile";
import Hero from "components/screens/home/hero";
import FeaturedCat from "components/screens/home/feature-cat";
import Banners from "components/screens/home/banners";
import ProductTabs from "components/screens/home/product-tabs";
import BestSells from "components/screens/home/bestsells";
import Deals from "components/screens/home/deals";
import Features from "components/screens/home/features";
import { wrapper } from "redux/store";
import { getCookie } from "redux/auth/authService";
import jwtDecode from "jwt-decode";
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
import { Data } from "utils/interface";
import { ToastContainer } from "react-toastify";
import Modal from "components/modal";
import BannerSec from "components/screens/home/banners/banner-sec";
import LatestNews from "components/screens/latest-news";
import Services from "components/screens/home/services";
import Newsletter from "components/screens/home/newsletter";
import Footer from "components/Footer";

const Home: NextPage = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isOpenCat, setIsOpenCat] = useState(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState("initials");
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
        <Hero />
        <FeaturedCat />
        <Banners />
        <BestSells />
        <Deals />
        <BannerSec />
        <Features />
        <ProductTabs />
        <LatestNews />
        <Services />
        <Newsletter />
        <Modal />
        <ToastContainer position="bottom-center" />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
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
    await store.dispatch(getAllProductCategories());
    await store.dispatch(getAllSubCategories());
    await store.dispatch(getAllSubSubCategories());

    await store.dispatch(getAllItemCategories());

    await store.dispatch<any>(getAllProducts(data));
    await store.dispatch<any>(getFiltersProducts(dataf));
    await store.dispatch<any>(getTopProducts());

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
      }
    }
  });

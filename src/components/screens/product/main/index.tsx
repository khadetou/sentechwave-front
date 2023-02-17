import { useWishlist } from "context/wishlistContext";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import { useState, MouseEvent, useEffect } from "react";
import Slick, { Settings } from "react-slick";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import NextArrow from "./arrows/next-arrow";
import PrevArrow from "./arrows/prev-arrow";
import moment from "moment";
import "moment/locale/fr";
import StarsRating from "react-star-rate";
import { useRouter } from "next/router";
import { createReviews, resetReviews } from "redux/products/productSlice";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { initials } from "utils/index";
import InputRange from "react-input-range";
import Top from "./top";
import Bottom from "./bottom";

moment.locale("fr");
const MainProduct = () => {
  return (
    <>
      <Top />
      <Bottom />
      <div className="containers mt-20">
        <div className="text-center">
          <a href="#">
            <Image
              width={1011}
              height={172}
              className="inline"
              src="/imgs/page/product/banner-ads.png"
              alt="Ecom"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default MainProduct;

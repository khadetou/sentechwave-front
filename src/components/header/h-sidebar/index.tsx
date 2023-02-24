import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { SlideDown } from "react-slidedown";

import { useWishlist } from "context/wishlistContext";
import { useCart, Item } from "react-use-cart";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from "hooks/index";
import {
  getAllProductCategories,
  getAllSubCategories,
} from "redux/products/productSlice";

interface HSidebarProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HSidebar: FC<HSidebarProps> = ({ setOpen }) => {
  const [catOpen, setCatOpen] = useState(false);
  const [slide, setSlide] = useState(true);
  const { pathname } = useRouter();
  const { totalItems, isEmpty, cartTotal, items, removeItem } = useCart();
  const { totalItems: totalWishlistItems } = useWishlist();
  const [totals, setTotals] = useState(0);
  const [empty, setEmpty] = useState(false);
  const [Items, setItems] = useState<Item[]>([]);
  const [totalsWishlist, setTotalsWishlist] = useState(0);
  const [cartTotals, setCartTotals] = useState(0);

  useEffect(() => {
    setTotals(totalItems);
    setTotalsWishlist(totalWishlistItems);
    setEmpty(isEmpty);
    setItems(items);
    setCartTotals(cartTotal);
  }, [totalItems, isEmpty, cartTotal, items, totalWishlistItems]);
  const ref = useRef<HTMLDivElement>(null);
  const [fixed, setFixed] = useState(false);
  const callback = () => {
    if (window.scrollY >= 80) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);
  const [openBtn, setOpenBtn] = useState(false);
  const refbtn = useRef<HTMLUListElement>(null);
  const refbtn2 = useRef<HTMLAnchorElement>(null);
  // CLOSE WHEN CLICKED OUTSIDE OF THE ELEMENT
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        refbtn.current &&
        !refbtn.current.contains(e.target) &&
        refbtn2.current &&
        !refbtn2.current.contains(e.target)
      ) {
        setOpenBtn(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refbtn, refbtn2]);

  const { categories } = useAppSelector((store) => store.product);

  const images = [
    "/imgs/template/monitor.svg",
    "/imgs/template/mobile.svg",
    "/imgs/template/game.svg",
    "/imgs/template/clock.svg",
    "/imgs/template/airpods.svg",
    "/imgs/template/mouse.svg",
    "/imgs/template/music-play.svg",
    "/imgs/template/bluetooth.svg",
    "/imgs/template/clound.svg",
    "/imgs/template/electricity.svg",
    "/imgs/template/cpu.svg",
    "/imgs/template/devices.svg",
    "/imgs/template/driver.svg",
    "/imgs/template/airpod.svg",
    "/imgs/template/lamp.svg",
    "/imgs/template/television.svg",
    "/imgs/template/tablets.svg",
    "/imgs/template/camera.svg",
  ];
  const newCategories: any = categories;

  const categoryList = newCategories.map((category: any, idx: any) => {
    return {
      ...category,
      image: images[idx],
    };
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProductCategories());
    dispatch(getAllSubCategories());
  }, [dispatch]);

  const isMobile = useMediaQuery({ query: "(max-width: 991.98px)" });
  return (
    <div ref={ref} className={`sidebar-left ${fixed ? "stick" : ""}`}>
      <a
        ref={refbtn2}
        className="btn btn-open"
        onClick={() => setOpenBtn(!openBtn)}
      ></a>
      <ul className="menu-icons hidden  ">
        <li>
          <a>
            <Image
              src="/imgs/template/monitor.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a>
            <Image
              src="/imgs/template/mobile.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/game.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/clock.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/airpod.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/airpods.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/mouse.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/music-play.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/bluetooth.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/clound.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/electricity.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/cpu.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/devices.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/driver.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/imgs/template/lamp.svg"
              alt="Ecom"
              className="inline"
              width={24}
              height={24}
            />
          </a>
        </li>
      </ul>
      <ul
        ref={refbtn}
        className={`menu-texts ${isMobile ? "menu-close" : ""}  ${
          openBtn ? "!block" : "menu-close"
        }`}
      >
        {categoryList.map((category: any, idx: any) => (
          <li key={category._id} className="has-children">
            <Link className="flex" href={`/products?category=${category._id}`}>
              <span className="img-link">
                <Image
                  src={category.image}
                  alt="Ecom"
                  className="inline"
                  width={24}
                  height={24}
                />
              </span>
              <span className="text-link whitespace-nowrap">
                {category.name}
              </span>
            </Link>
            <ul className="sub-menu">
              {category.subcategories.map((subcat: any) => (
                <li key={subcat._id}>
                  <Link href={`/products?souscategory=${subcat._id}`}>
                    {subcat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HSidebar;

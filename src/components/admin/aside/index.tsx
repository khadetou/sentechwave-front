import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { IoLinkSharp } from "react-icons/io5";
import SlideDown from "react-slidedown";

interface AsideProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Aside: FC<AsideProps> = ({ open, setOpen }) => {
  const [product, setProduct] = useState(false);
  const [order, setOrder] = useState(false);
  const [users, setUsers] = useState(false);
  const [profile, setProfile] = useState(false);
  const [blog, setBlog] = useState(false);
  const [active, setActive] = useState<string | null>("dashboard");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname.endsWith("products") || pathname.endsWith("create-product")) {
      setProduct(true);
      setOrder(false);
      setUsers(false);
      setProfile(false);
      setBlog(false);
    }
    if (pathname.endsWith("orders")) {
      setProduct(false);
      setOrder(true);
      setUsers(false);
      setProfile(false);
      setBlog(false);
    }
    if (pathname.endsWith("users")) {
      setProduct(false);
      setOrder(false);
      setUsers(true);
      setProfile(false);
      setBlog(false);
    }
    if (pathname.endsWith("profile")) {
      setProduct(false);
      setOrder(false);
      setUsers(false);
      setProfile(true);
      setBlog(false);
    }
    if (pathname.endsWith("blog")) {
      setProduct(false);
      setOrder(false);
      setUsers(false);
      setProfile(false);
      setBlog(true);
    }
  }, [product, pathname]);

  const setActiveSidebar = (name: string) => {
    setActive(name);
  };

  return (
    <aside className="bg-white h-full row-span-2 border-end border-neutral relative flex flex-col justify-between p-[25px] dark:bg-dark-neutral-bg dark:border-dark-neutral-border min-h-screen">
      <div
        className={`absolute p-2 border-neutral right-0 border bg-white rounded-full cursor-pointer duration-300 translate-x-1/2 hover:opacity-75 dark:bg-dark-neutral-bg dark:border-dark-neutral-border ${
          open ? "" : "reverse"
        }`}
        id="sidebar-btn"
        onClick={() => setOpen(!open)}
      >
        <Image
          src="/imgs/icons/icon-arrow-left.svg"
          width={16}
          height={16}
          alt="left chevron icon"
        />
      </div>
      <div>
        <a className="mb-10" href="index-2.html">
          <Image
            className="logo-maximize"
            src="/imgs/icons/icon-logo.svg"
            alt="Frox logo"
            width={113}
            height={30}
          />
          <Image
            className="logo-minimize  ml-[10px]"
            src="/imgs/icons/icon-favicon.svg"
            alt="Frox logo"
            width={28}
            height={24}
          />
        </a>
        <div className="pt-[106px] lg:pt-[35px] pb-[18px]">
          <div
            className={`sidemenu-item rounded-xl relative ${
              active === "dashboard" ? "active" : ""
            }`}
            onClick={() => setActive("dashboard")}
          >
            <input
              className="sr-only peer"
              type="checkbox"
              value="dashboard"
              name="sidemenu"
              id="dashboard"
            />
            <label
              className="flex items-center justify-between w-full cursor-pointer py-[17px] px-[21px] focus:outline-none peer-checked:border-transparent active"
              htmlFor="dashboard"
            >
              <div className="flex items-center gap-[10px]">
                <Image
                  src="/imgs/icons/icon-favorite-chart.svg"
                  alt="side menu icon"
                  width={22}
                  height={22}
                />
                <span className="text-normal font-semibold text-gray-500 sidemenu-title dark:text-gray-dark-500">
                  Dashboard
                </span>
              </div>{" "}
            </label>
          </div>
          <div
            className={`sidemenu-item rounded-xl relative ${
              active === "ecommerce" ? "active" : ""
            }`}
            onClick={() => setActive("ecommerce")}
          >
            <input
              className="sr-only peer"
              type="checkbox"
              value="ecommerce"
              name="sidemenu"
              id="ecommerce"
            />

            <label
              className="flex items-center justify-between w-full cursor-pointer py-[17px] px-[21px] focus:outline-none peer-checked:border-transparent"
              htmlFor="ecommerce"
            >
              <div className="flex items-center gap-[10px]">
                <Image
                  src="/imgs/icons/icon-products.svg"
                  alt="side menu icon"
                  width={22}
                  height={22}
                />
                <span className="text-normal font-semibold text-gray-500 sidemenu-title dark:text-gray-dark-500">
                  Ecommerce
                </span>
              </div>{" "}
            </label>

            <Image
              className="absolute right-2 transition-all duration-150 caret-icon pointer-events-none peer-checked:rotate-180 top-[22px]"
              src="/imgs/icons/icon-arrow-down.svg"
              alt="caret icon"
              width={12}
              height={12}
            />
            <div className="hidden peer-checked:block">
              <ul className="text-gray-500 child-menu z-10 pl-[53px]">
                <li className="pb-2 transition-opacity duration-150 hover:opacity-75">
                  <Link className="text-normal" href="/admin">
                    Dashboards
                  </Link>
                </li>
                <li className="pb-2 transition-opacity duration-150 hover:opacity-75">
                  <Link className="text-normal" href="/admin/products">
                    Produits
                  </Link>
                </li>
                <li className="pb-2 transition-opacity duration-150 hover:opacity-75">
                  <Link className="text-normal" href="/admin/create-product">
                    Créer un produit
                  </Link>
                </li>
                <li className="pb-2 transition-opacity duration-150 hover:opacity-75">
                  <Link className="text-normal" href="/admin/category">
                    Catégories
                  </Link>
                </li>
                <li className="pb-2 transition-opacity duration-150 hover:opacity-75">
                  <Link className="text-normal" href="/orders">
                    Commandes
                  </Link>
                </li>
                <li className="pb-2 transition-opacity duration-150 hover:opacity-75">
                  <Link className="text-normal" href="/admin/profile">
                    Profile
                  </Link>
                </li>
                <li className="pb-2 transition-opacity duration-150 hover:opacity-75">
                  <Link className="text-normal" href="/admin/users">
                    Clients
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`sidemenu-item rounded-xl relative ${
              active === "cms" ? "active" : ""
            }`}
            onClick={() => setActive("cms")}
          >
            <input
              className="sr-only peer"
              type="checkbox"
              value="cms"
              name="sidemenu"
              id="cms"
            />
            <label
              className="flex items-center justify-between w-full cursor-pointer py-[17px] px-[21px] focus:outline-none peer-checked:border-transparent"
              htmlFor="cms"
            >
              <div className="flex items-center gap-[10px]">
                <Image
                  src="/imgs/icons/icon-cms.svg"
                  alt="side menu icon"
                  width={22}
                  height={22}
                />
                <span className="text-normal font-semibold text-gray-500 sidemenu-title dark:text-gray-dark-500">
                  CMS
                </span>
              </div>{" "}
            </label>
            <Image
              className="absolute right-2 transition-all duration-150 caret-icon pointer-events-none peer-checked:rotate-180 top-[22px]"
              src="/imgs/icons/icon-arrow-down.svg"
              alt="caret icon"
              width={12}
              height={12}
            />
            <div className="hidden peer-checked:block">
              <ul className="text-gray-500 child-menu z-10 pl-[53px]">
                <li className="pb-2 transition-opacity duration-150 hover:opacity-75">
                  <Link className="text-normal" href="/admin/blog">
                    Blog
                  </Link>
                </li>
                <li className="pb-2 transition-opacity duration-150 hover:opacity-75">
                  <Link className="text-normal" href="/admin/blog/create-blog">
                    Créer blog
                  </Link>
                </li>
                <li className="pb-2 transition-opacity duration-150 hover:opacity-75">
                  <Link
                    className="text-normal"
                    href="/admin/blog/create-category"
                  >
                    Créer catégories
                  </Link>
                </li>
                <li className="pb-2 transition-opacity duration-150 hover:opacity-75">
                  <Link className="text-normal" href="/admin/blog/create-tag">
                    Créer tag
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;

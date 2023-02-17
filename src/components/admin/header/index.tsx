import { useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/authSlice";
import { initials } from "utils/index";
import Browse from "./browse";
import Profile from "./profile";
import Search from "./search-bar";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAppSelector((store) => store.auth);
  const { push } = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      push("/login");
    }
  }, [isAuthenticated, push]);
  return (
    <header className="flex items-center justify-between  flex-wrap-reverse bg-white !p-5 gap-5 md:py-6 md:!pl-[25px] md:!pr-[38px] lg:flex-nowrap  lg:gap-0">
      <a className="hidden logo" href="index-2.html">
        <Image
          className="md:mr-[100px] lg:mr-[133px]"
          src="/imgs/icons/icon-logo.svg"
          alt="Frox logo"
          width={113}
          height={30}
        />
      </a>
      <Search />
      <Browse />
      <Profile />
    </header>
  );
};

export default Header;

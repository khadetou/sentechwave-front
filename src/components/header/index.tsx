import React, { Dispatch, FC, SetStateAction, useState } from "react";
import HSidebar from "./h-sidebar";
import HTop from "./h-top";
import MainHeader from "./header";
import Mobile from "./mobile/mobile";

interface HeaderProps {
  isOpenCat: boolean;
  open: boolean;
  setIsOpenCat: (val: boolean) => void;
  setOpen: (val: boolean) => void;
}
const Header: FC<HeaderProps> = ({
  isOpenCat,
  setIsOpenCat,
  setOpen,
  open,
}) => {
  return (
    <>
      <HTop />
      <MainHeader
        isOpenCat={isOpenCat}
        setIsOpenCat={setIsOpenCat}
        setOpen={setOpen}
        open={open}
      />
      <HSidebar />
      <Mobile open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;

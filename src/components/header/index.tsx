import React, { Dispatch, FC, SetStateAction, useState } from "react";
import HSidebar from "./h-sidebar";
import HTop from "./h-top";
import MainHeader from "./header";
import Mobile from "./mobile/mobile";
import Modal from "./modal";
import Qview from "./Qview";

interface HeaderProps {
  setIsLocationOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLocationOpen: boolean;
  isOpenCat: boolean;
  open: boolean;
  setIsOpenCat: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Header: FC<HeaderProps> = ({
  isLocationOpen,
  setIsLocationOpen,
  isOpenCat,
  setIsOpenCat,
  setOpen,
  open,
}) => {
  return (
    <>
      <HTop />
      <MainHeader
        isLocationOpen={isLocationOpen}
        setIsLocationOpen={setIsLocationOpen}
        isOpenCat={isOpenCat}
        setIsOpenCat={setIsOpenCat}
        setOpen={setOpen}
        open={open}
      />
      <HSidebar setOpen={setOpen} />
      <Mobile open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;

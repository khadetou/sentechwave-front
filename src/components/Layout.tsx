import { Dispatch, FC, SetStateAction, useEffect } from "react";
import Footer from "./Footer";

interface LayoutProp {
  children: React.ReactNode;
  openModal?: boolean;
  setOpenModal?: any;
  bg?: any;
  setIsLocationOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLocationOpen: boolean;
  setIsOpenCat: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenCat: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Layout: FC<LayoutProp> = ({
  children,
  setIsLocationOpen,
  isLocationOpen,
  setIsOpenCat,
  isOpenCat,
  open,
  setOpen,
}) => {
  useEffect(() => {
    open
      ? document.body.classList.add("mobile-menu-active")
      : document.body.classList.remove("mobile-menu-active");
  }, [open]);

  return (
    <div className="relative overflow-hidden">
      {open && (
        <div className="body-overlay-1" onClick={() => setOpen(false)}></div>
      )}
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 z-10 ${
          isLocationOpen || isOpenCat ? "block" : "hidden"
        }`}
        onClick={() => {
          setIsLocationOpen(false);
          setIsOpenCat(false);
        }}
      ></div>
      <main id="scroll" className="h-full relative overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;

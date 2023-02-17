import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import HTop from "./h-top";
import HMiddle from "./h-middle";
import HBottom from "./h-sidebar";

interface MainHeaderProps {
  setIsLocationOpen: Dispatch<SetStateAction<boolean>>;
  isLocationOpen: boolean;
  isOpenCat: boolean;
  open: boolean;
  setIsOpenCat: Dispatch<SetStateAction<boolean>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MainHeader: FC<MainHeaderProps> = ({
  setIsLocationOpen,
  isLocationOpen,
  isOpenCat,
  setIsOpenCat,
  setOpen,
  open,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [fixed, setFixed] = useState(false);
  const callback = () => {
    if (window.scrollY >= ref.current!.offsetHeight) {
      setFixed(true);
    } else {
      setFixed(false);
    }
    // const main = document.getElementById("scroll");
    // if (main!.scrollTop >= ref.current!.offsetHeight) {
    //   setFixed(true);
    // } else {
    //   setFixed(false);
    // }
  };
  useEffect(() => {
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
    // const main = document.getElementById("scroll");
    // main!.addEventListener("scroll", callback);
    // return () => main!.removeEventListener("scroll", callback);
  }, []);
  return (
    <header ref={ref} className={`header sticky-bar ${fixed ? "stick" : ""}`}>
      <HMiddle
        setIsLocationOpen={setIsLocationOpen}
        isLocationOpen={isLocationOpen}
        isOpenCat={isOpenCat}
        setIsOpenCat={setIsOpenCat}
        setOpen={setOpen}
        open={open}
      />
    </header>
  );
};

export default MainHeader;

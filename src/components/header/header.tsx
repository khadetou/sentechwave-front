import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import HMiddle from "./h-middle";

interface MainHeaderProps {
  isOpenCat: boolean;
  open: boolean;
  setIsOpenCat: (val: boolean) => void;
  setOpen: (val: boolean) => void;
}

const MainHeader: FC<MainHeaderProps> = ({
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
        isOpenCat={isOpenCat}
        setIsOpenCat={setIsOpenCat}
        setOpen={setOpen}
        open={open}
      />
    </header>
  );
};

export default MainHeader;

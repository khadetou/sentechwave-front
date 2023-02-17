import React, { FC } from "react";

const NextArrow: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <span
      onClick={onClick}
      id="nextel"
      className="swiper-button-next swiper-button-next-style-2 swiper-button-next-bestseller"
    ></span>
  );
};

export default NextArrow;

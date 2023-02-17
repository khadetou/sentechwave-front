import React, { FC } from "react";

const NextArrow: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <span
      onClick={onClick}
      id="nextn"
      className="swiper-button-next swiper-button-next-group-1"
    ></span>
  );
};

export default NextArrow;

import { FC } from "react";

const PrevArrow: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <span
      onClick={onClick}
      id="prevel"
      className="swiper-button-prev swiper-button-prev-style-2 swiper-button-prev-bestseller"
    ></span>
  );
};

export default PrevArrow;

import { FC } from "react";

const PrevArrow: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <span
      onClick={onClick}
      id="prev"
      className="swiper-button-prev swiper-button-prev-group-1"
    ></span>
  );
};

export default PrevArrow;

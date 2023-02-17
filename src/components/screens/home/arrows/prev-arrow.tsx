import { FC } from "react";

const PrevArrow: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <span onClick={onClick} id="prev" className="slider-btn slider-prev">
      <i className="fi-rs-arrow-small-left"></i>
    </span>
  );
};

export default PrevArrow;

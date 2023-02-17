import React, { FC } from "react";

interface RightArrowProps {
  className?: string;
  onClick?: () => void;
}

const RightArrow: FC<RightArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="slider-arrow hero-slider-1-arrow">
      <span className="slider-btn slider-next slick-arrow">
        <i className="fi-rs-angle-right"></i>
      </span>
    </div>
  );
};

export default RightArrow;

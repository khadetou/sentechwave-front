import { FC } from "react";

interface LeftArrowProps {
  className?: string;
  onClick?: () => void;
}

const LeftArrow: FC<LeftArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="slider-arrow hero-slider-1-arrow">
      <span className="slider-btn slider-prev slick-arrow">
        <i className="fi-rs-angle-left"></i>
      </span>
    </div>
  );
};

export default LeftArrow;

import React, { FC } from "react";

const NextArrow: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <span onClick={onClick} id="next" className="slider-btn slider-next">
      <i className="fi-rs-arrow-small-right"></i>
    </span>
  );
};

export default NextArrow;

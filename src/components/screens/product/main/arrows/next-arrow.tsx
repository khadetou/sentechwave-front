import React, { FC } from "react";

const NextArrow: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      id="next"
      className="slick-next slick-arrow before:!tw-content-['']"
    >
      <i className="fi-rs-arrow-small-right"></i>
    </button>
  );
};

export default NextArrow;

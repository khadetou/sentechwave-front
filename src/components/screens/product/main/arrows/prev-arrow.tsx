import { FC } from "react";

const PrevArrow: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      id="prev"
      className="slick-prev slick-arrow before:!tw-content-['']"
    >
      <i className="fi-rs-arrow-small-left"></i>
    </button>
  );
};

export default PrevArrow;

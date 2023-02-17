import { FC, MutableRefObject, useEffect, useRef } from "react";

const PrevArrow: FC<{ onClick?: () => void; refde: MutableRefObject<any> }> = ({
  onClick,
  refde,
}) => {
  const nextArrowRef = useRef<any>(null);
  useEffect(() => {
    if (
      nextArrowRef.current !== null &&
      nextArrowRef.current.parentNode === refde.current
    ) {
      refde.current.appendChild(nextArrowRef.current!);
    }
  }, [refde]);
  return (
    <span
      onClick={onClick}
      id="prevs"
      ref={nextArrowRef}
      className="slider-btn slider-prev"
    >
      <i className="fi-rs-arrow-small-left"></i>
    </span>
  );
};

export default PrevArrow;

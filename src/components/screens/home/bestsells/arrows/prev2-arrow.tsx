import { FC, MutableRefObject, useEffect, useRef } from "react";

const Prev2Arrow: FC<{
  onClick?: () => void;
  refde2: MutableRefObject<any>;
}> = ({ onClick, refde2 }) => {
  const nextArrowRef = useRef(null);
  useEffect(() => {
    if (nextArrowRef.current) {
      refde2.current.appendChild(nextArrowRef.current!);
    }
  }, [refde2]);
  return (
    <span
      onClick={onClick}
      id="prev2"
      ref={nextArrowRef}
      className="slider-btn slider-prev"
    >
      <i className="fi-rs-arrow-small-left"></i>
    </span>
  );
};

export default Prev2Arrow;

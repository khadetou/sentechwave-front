import { FC, MutableRefObject, useEffect, useRef } from "react";

const Prev1Arrow: FC<{
  onClick?: () => void;
  refde1: MutableRefObject<any>;
}> = ({ onClick, refde1 }) => {
  const nextArrowRef = useRef(null);
  useEffect(() => {
    if (nextArrowRef.current) {
      refde1.current.appendChild(nextArrowRef.current!);
    }
  }, [refde1]);
  return (
    <span
      onClick={onClick}
      id="prev1"
      ref={nextArrowRef}
      className="slider-btn slider-prev"
    >
      <i className="fi-rs-arrow-small-left"></i>
    </span>
  );
};

export default Prev1Arrow;

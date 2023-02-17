import React, { FC, MutableRefObject, useEffect, useRef } from "react";

const Next1Arrow: FC<{
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
      id="next1"
      ref={nextArrowRef}
      className="slider-btn slider-next"
    >
      <i className="fi-rs-arrow-small-right"></i>
    </span>
  );
};

export default Next1Arrow;

import React, { FC, MutableRefObject, useEffect, useRef } from "react";

const Next2Arrow: FC<{
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
      id="next2"
      ref={nextArrowRef}
      className="slider-btn slider-next"
    >
      <i className="fi-rs-arrow-small-right"></i>
    </span>
  );
};

export default Next2Arrow;

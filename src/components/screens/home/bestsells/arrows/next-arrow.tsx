import React, { FC, MutableRefObject, useEffect, useRef } from "react";

const NextArrow: FC<{ onClick?: () => void; refde: MutableRefObject<any> }> = ({
  onClick,
  refde,
}) => {
  const nextArrowRef = useRef<any>(null);
  useEffect(() => {
    refde.current.appendChild(nextArrowRef.current!);
  }, [refde]);
  return (
    <span
      onClick={onClick}
      id="nexts"
      ref={nextArrowRef}
      className="slider-btn slider-next"
    >
      <i className="fi-rs-arrow-small-right"></i>
    </span>
  );
};

export default NextArrow;

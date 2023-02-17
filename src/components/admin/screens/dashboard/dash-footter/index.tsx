import React from "react";

const DashFooter = () => {
  return (
    <footer className="mt-[37px]">
      <div className="w-full bg-neutral h-[1px]  mb-[25px]"></div>
      <div className="flex items-center justify-between text-desc text-gray-400 flex-wrap gap-5 ">
        <div className="flex items-center gap-2 flex-wrap">
          <p>
            <span>© 2022 -</span>
            <span className="text-color-brands">&nbsp;Frox</span>
            <span>&nbsp;Dashboard</span>
          </p>
          <div className="bg-color-brands rounded-full hidden w-[2px] h-[2px] md:block"></div>
          <p>
            <span>Made by</span>
            <a className="text-color-brands" target="_blank">
              &nbsp;AliThemes
            </a>
          </p>
        </div>
        <div className="flex items-center gap-[15px]">
          <a
            className="transition-colors duration-300 hover:text-color-brands"
            href="#"
          >
            About
          </a>
          <a
            className="transition-colors duration-300 hover:text-color-brands"
            href="#"
          >
            Careers
          </a>
          <a
            className="transition-colors duration-300 hover:text-color-brands"
            href="#"
          >
            Policy
          </a>
          <a
            className="transition-colors duration-300 hover:text-color-brands"
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default DashFooter;

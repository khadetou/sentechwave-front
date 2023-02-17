import React from "react";

const PageHeader = () => {
  return (
    <div className="section-box">
      <div className="breadcrumbs-div">
        <div className="containers">
          <ul className="breadcrumb">
            <li>
              <a className="font-xs color-gray-1000" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a className="font-xs color-gray-500" href="shop-grid.html">
                Electronics
              </a>
            </li>
            <li>
              <a className="font-xs color-gray-500" href="shop-grid.html">
                Cell phone
              </a>
            </li>
            <li>
              <a className="font-xs color-gray-500" href="shop-grid.html">
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

import Link from "next/link";
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
              <a className="font-xs color-gray-500" href="blog.html">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

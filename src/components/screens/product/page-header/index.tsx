import Link from "next/link";
import React from "react";

const PageHeader = () => {
  return (
    <div className="section-box">
      <div className="breadcrumbs-div">
        <div className="containers">
          <ul className="breadcrumb">
            <li>
              <Link className="font-xs color-gray-1000" href="/">
                Acueil
              </Link>
            </li>
            <li>
              <Link
                className="font-xs color-gray-500"
                href="/products?category=electroniques"
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link
                className="font-xs color-gray-500"
                href="/products?category=telephone"
              >
                Cell phone
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

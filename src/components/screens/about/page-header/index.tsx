import Link from "next/link";
import React from "react";

const PageHeader = () => {
  return (
    <div className="section-box">
      <div className="breadcrumbs-div">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link className="font-xs color-gray-1000" href="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="font-xs color-gray-500" href="/products">
                Produits
              </Link>
            </li>
            <li>
              <a className="font-xs color-gray-500">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

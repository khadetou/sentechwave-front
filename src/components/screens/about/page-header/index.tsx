import Link from "next/link";
import React from "react";

const PageHeader = () => {
  return (
    <div className="page-header breadcrumb-wrap">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/" rel="nofollow">
            <i className="fi-rs-home mr-5"></i>Home
          </Link>
          <span></span> Pages <span></span> About us
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

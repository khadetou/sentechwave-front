import React from "react";

const PageHeader = () => {
  return (
    <div className="page-header breadcrumb-wrap">
      <div className="container">
        <div className="breadcrumb">
          <a href="index.html" rel="nofollow">
            <i className="fi-rs-home mr-5"></i>Home
          </a>
          <span></span> Pages <span></span> My Account
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

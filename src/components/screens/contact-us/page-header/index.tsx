const PageHeader = () => {
  return (
    <div className="section-box">
      <div className="breadcrumbs-div mb-0">
        <div className="containers">
          <ul className="breadcrumb">
            <li>
              <a className="font-xs color-gray-1000" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a className="font-xs color-gray-500" href="index.html">
                Page
              </a>
            </li>
            <li>
              <a className="font-xs color-gray-500" href="page-contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

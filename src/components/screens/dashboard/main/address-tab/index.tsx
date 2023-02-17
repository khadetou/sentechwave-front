import React from "react";

const AddressTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="address"
      role="tabpanel"
      aria-labelledby="address-tab"
    >
      <div className="row">
        <div className="col-lg-6">
          <div className="card mb-3 mb-lg-0">
            <div className="card-header">
              <h3 className="mb-0">Billing Address</h3>
            </div>
            <div className="card-body">
              <address>
                3522 Interstate
                <br />
                75 Business Spur,
                <br />
                Sault Ste. <br />
                Marie, MI 49783
              </address>
              <p>New York</p>
              <a href="#" className="btn-small">
                Edit
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Shipping Address</h5>
            </div>
            <div className="card-body">
              <address>
                4299 Express Lane
                <br />
                Sarasota, <br />
                FL 34249 USA <br />
                Phone: 1.941.227.4444
              </address>
              <p>Sarasota</p>
              <a href="#" className="btn-small">
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressTab;

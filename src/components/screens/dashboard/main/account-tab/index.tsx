import React from "react";

const AccountTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="tab-setting"
      role="tabpanel"
      aria-labelledby="tab-setting"
    >
      <div className="row">
        <div className="col-lg-6 mb-20">
          <form action="#" method="get">
            <div className="row">
              <div className="col-lg-12 mb-20">
                <h5 className="font-md-bold color-brand-3 text-sm-start text-center">
                  Contact information
                </h5>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Fullname *"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Username *"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Phone Number *"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Email *"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    className="font-sm color-brand-3"
                    htmlFor="checkboxOffers"
                  >
                    <input
                      className="checkboxOffer"
                      id="checkboxOffers"
                      type="checkbox"
                    />
                    Keep me up to date on news and exclusive offers
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <h5 className="font-md-bold color-brand-3 mt-15 mb-20">
                  Shipping address
                </h5>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="First name*"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Last name*"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Address 1*"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Address 2*"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <select className="form-control font-sm select-style1 color-gray-700">
                    <option value="">Select an option...</option>
                    <option value="1">Option 1</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="City*"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="PostCode / ZIP*"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Phone*"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-0">
                  <textarea
                    className="form-control font-sm"
                    placeholder="Additional Information"
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-20">
                  <input
                    className="btn btn-buy w-auto h54 font-md-bold"
                    value="Save change"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-1 mb-20"></div>
        <div className="col-lg-5 mb-20">
          <div className="mt-40">
            <h4 className="mb-10">Steven Job</h4>
            <div className="mb-10">
              <p className="font-sm color-brand-3 font-medium">Home Address:</p>
              <span className="font-sm color-gray-500 font-medium">
                205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
              </span>
            </div>
            <div className="mb-10">
              <p className="font-sm color-brand-3 font-medium">
                Delivery address:
              </p>
              <span className="font-sm color-gray-500 font-medium">
                205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
              </span>
            </div>
            <div className="mb-10">
              <p className="font-sm color-brand-3 font-medium">Phone Number:</p>
              <span className="font-sm color-gray-500 font-medium">
                (+01) 234 567 89 - (+01) 688 866 99
              </span>
            </div>
            <div className="mb-10 mt-15">
              <a className="btn btn-cart w-auto">Set as Default</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;

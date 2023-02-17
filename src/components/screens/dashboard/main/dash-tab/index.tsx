import React from "react";

const DashTab = () => {
  return (
    <div
      className="tab-pane fade active show"
      id="dashboard"
      role="tabpanel"
      aria-labelledby="dashboard-tab"
    >
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0">Hello Rosie!</h3>
        </div>
        <div className="card-body">
          <p>
            From your account dashboard. you can easily check &amp; view your{" "}
            <a href="#">recent orders</a>,<br />
            manage your <a href="#">shipping and billing addresses</a> and{" "}
            <a href="#">edit your password and account details.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashTab;

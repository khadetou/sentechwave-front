import React from "react";

const NewsletterProduct = () => {
  return (
    <section className="section-box box-newsletter">
      <div className="containers">
        <div className="row">
          <div className="col-lg-6 col-md-7 col-sm-12">
            <h3 className="color-white">
              Subscrible &amp; Get <span className="color-warning">10%</span>{" "}
              Discount
            </h3>
            <p className="font-lg color-white">
              Get E-mail updates about our latest shop and{" "}
              <span className="font-lg-bold">special offers.</span>
            </p>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="box-form-newsletter mt-15">
              <form className="form-newsletter">
                <input
                  className="input-newsletter font-xs"
                  value=""
                  placeholder="Your email Address"
                  readOnly
                />
                <button className="btn btn-brand-2">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterProduct;

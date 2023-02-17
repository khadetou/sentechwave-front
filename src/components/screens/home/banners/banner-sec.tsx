import React from "react";

const BannerSec = () => {
  return (
    <section className="section-box mt-50">
      <div className="containers">
        <div className="row">
          <div className="col-xl-4 col-lg-12">
            <div className="banner-2 bg-xbox">
              <span className="color-danger text-uppercase">Flat 20% off</span>
              <h3 className="font-30">Microsoft</h3>
              <h4 className="font-59">Xbox</h4>
              <h5 className="font-55 mb-15">Series S</h5>
              <span className="font-16">From $3500.00</span>
              <div className="mt-25">
                <a
                  className="btn btn-brand-2 btn-arrow-right"
                  href="shop-fullwidth.html"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12">
            <div className="image-gallery">
              <div className="image-big">
                <div className="banner-img-left bg-controller">
                  <h3 className="font-33 mb-10">
                    Xbox Core Wireless Controller
                  </h3>
                  <p className="font-18">Aqua Shift Special Edition</p>
                  <div className="mt-25">
                    <a
                      className="btn btn-info btn-arrow-right"
                      href="shop-fullwidth.html"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="image-small">
                <div className="bg-metaverse">
                  <h3 className="mb-10 font-32">Metaverse</h3>
                  <p className="font-16">
                    The Future of
                    <br className="d-none d-lg-block" /> Creativity
                  </p>
                  <div className="mt-15">
                    <a
                      className="btn btn-link-brand-2 btn-arrow-brand-2"
                      href="shop-fullwidth.html"
                    >
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-gallery">
              <div className="image-small">
                <div className="bg-electronic">
                  <h3 className="font-32">Electronic</h3>
                  <p className="font-16 color-brand-3">
                    Hot devices, Latest trending
                  </p>
                </div>
              </div>
              <div className="image-big">
                <div className="bg-phone">
                  <h3 className="font-33 mb-15">
                    Super discount for your first purchase
                  </h3>
                  <p className="font-18">Use discount code in checkout page.</p>
                  <div className="mt-25">
                    <a
                      className="btn btn-brand-2 btn-arrow-right"
                      href="shop-fullwidth.html"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSec;

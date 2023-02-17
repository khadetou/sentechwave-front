import Image from "next/image";

const Banners = () => {
  return (
    <section className="section-box pt-50">
      <div className="containers">
        <div className="row">
          <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 mb-30">
            <div className="bg-5 block-iphone">
              <span className="color-brand-3 font-sm-lh32">
                Starting from $899
              </span>
              <h3 className="font-xl mb-10">iPhone 12 Pro 128Gb</h3>
              <p className="font-base color-brand-3 mb-10">Special Sale</p>
              <a className="btn btn-arrow" href="shop-grid.html">
                learn more
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-7 col-md-7 col-sm-12 mb-30">
            <div className="bg-4 block-samsung">
              <span className="color-brand-3 font-sm-lh32">New Arrivals</span>
              <h3 className="font-xl mb-10">Samsung 2022 Led TV</h3>
              <p className="font-base color-brand-3 mb-20">Special Sale</p>
              <a
                className="btn btn-brand-2 btn-arrow-right"
                href="shop-grid.html"
              >
                learn more
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12">
            <div className="bg-6 block-drone">
              <h3 className="font-33 mb-20">
                Drone Quadcopter UAV - DJI Air 2S
              </h3>
              <div className="mb-30">
                <strong className="font-18">Gimbal Camera, 5.4K Video</strong>
              </div>
              <a
                className="btn btn-brand-2 btn-arrow-right"
                href="shop-grid.html"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
{
  /* <section className="banners mb-25">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="banner-img wow animate__animated animate__fadeInUp"
              data-wow-delay="0"
            >
              <Image
                src="/imgs/banner/banner-1.png"
                width={768}
                height={450}
                alt=""
              />
              <div className="banner-text">
                <h4 className="!tw-text-2xl">
                  Toujours Frais et <br />
                  Propres avec nos
                  <br />
                  Produits
                </h4>
                <a href="shop-grid-right.html" className="btn btn-xs">
                  Acheter maintenant<i className="fi-rs-arrow-small-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="banner-img wow animate__animated animate__fadeInUp"
              data-wow-delay=".2s"
            >
              <Image
                src="/imgs/banner/banner-2.png"
                width={768}
                height={450}
                alt=""
              />
              <div className="banner-text">
                <h4 className="!tw-text-2xl">
                  Rendez votre Petit-déjeuner
                  <br />
                  Sain et Facile
                </h4>
                <a href="shop-grid-right.html" className="btn btn-xs">
                  Acheter maintenant <i className="fi-rs-arrow-small-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-md-none d-lg-flex">
            <div
              className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
              data-wow-delay=".4s"
            >
              <Image
                src="/imgs/banner/banner-3.png"
                width={768}
                height={450}
                alt=""
              />
              <div className="banner-text">
                <h4 className="!tw-text-2xl">
                  Les meilleurs produits <br />
                  Biologiques en ligne
                </h4>
                <a href="shop-grid-right.html" className="btn btn-xs">
                  Acheter maintenant <i className="fi-rs-arrow-small-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */
}

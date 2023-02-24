import React from "react";

const BannerSec = () => {
  return (
    <section className="section-box mt-50">
      <div className="containers">
        <div className="row">
          <div className="col-xl-4 col-lg-12">
            <div className="banner-2 bg-xbox">
              <span className="color-danger text-uppercase">
                20% de réduction
              </span>
              <h3 className="font-30">sur les produits Microsoft </h3>
              <h4 className="font-59">Xbox</h4>
              <h5 className="font-55 mb-2">Série S</h5>
              <span className="font-16">From $3500.00</span>
              <div className="mt-25">
                <a
                  className="btn btn-brand-2 btn-arrow-right"
                  href="shop-fullwidth.html"
                >
                  Commandez!
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12">
            <div className="image-gallery">
              <div className="image-big">
                <div className="banner-img-left bg-controller">
                  <h3 className="font-33 mb-10">Manette sans fil Xbox Core</h3>
                  <p className="font-18">Édition spéciale Aqua Shift</p>
                  <div className="mt-25">
                    <a
                      className="btn btn-info btn-arrow-right"
                      href="shop-fullwidth.html"
                    >
                      Commandez!
                    </a>
                  </div>
                </div>
              </div>
              <div className="image-small">
                <div className="bg-metaverse">
                  <h3 className="mb-10 font-32">Métaverse</h3>
                  <p className="font-16">
                    L&lsquo;avenir de la
                    <br className="d-none d-lg-block" /> Créativité
                  </p>
                  <div className="mt-15">
                    <a
                      className="btn btn-link-brand-2 btn-arrow-brand-2"
                      href="shop-fullwidth.html"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-gallery">
              <div className="image-small">
                <div className="bg-electronic">
                  <h3 className="font-32">Électronique</h3>
                  <p className="font-16 color-brand-3">
                    Appareils tendance, dernières nouveautés
                  </p>
                </div>
              </div>
              <div className="image-big">
                <div className="bg-phone">
                  <h3 className="font-33 !mb-2">
                    Super remise pour votre premier achat
                  </h3>
                  <p className="font-18">
                    Utilisez le code de réduction sur la page de paiement.
                  </p>
                  <div className="!mt-1">
                    <a
                      className="btn btn-brand-2 btn-arrow-right"
                      href="shop-fullwidth.html"
                    >
                      Commandez!
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

import React from "react";

const NewsletterProduct = () => {
  return (
    <section className="section-box box-newsletter">
      <div className="containers">
        <div className="row">
          <div className="col-lg-6 col-md-7 col-sm-12">
            <h3 className="color-white">
              Abonnez-vous et obtenez une réduction de
              <span className="color-warning"> 10%</span>
            </h3>
            <p className="font-lg color-white">
              Recevez des mises à jour par e-mail sur notre dernière boutique et
              <span className="font-lg-bold"> nos offres spéciales</span>
            </p>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="box-form-newsletter mt-15">
              <form className="form-newsletter">
                <input
                  className="input-newsletter font-xs"
                  value=""
                  placeholder="Your email Address"
                />
                <button className="btn btn-brand-2">S&apos;inscrire</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterProduct;

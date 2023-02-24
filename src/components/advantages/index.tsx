import Image from "next/image";
const Advantages = () => {
  return (
    <section className="section-box mt-90 mb-50">
      <div className="containers">
        <ul className="list-col-5">
          <li>
            <div className="item-list">
              <div className="icon-left">
                <Image
                  src="/imgs/template/delivery.svg"
                  alt="Ecom"
                  width={40}
                  height={40}
                />
              </div>
              <div className="info-right">
                <h5 className="font-lg-bold text-base color-gray-100">
                  Livraison gratuite
                </h5>
                <p className="text-xs color-gray-500">
                  Commandes {">"} 90 000 FCFA .
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-list">
              <div className="icon-left">
                <Image
                  src="/imgs/template/support.svg"
                  alt="Ecom"
                  width={40}
                  height={40}
                />
              </div>
              <div className="info-right">
                <h5 className="font-lg-bold text-base color-gray-100">
                  Support 24/7
                </h5>
                <p className="text-xs color-gray-500">Achetez avec un expert</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-list">
              <div className="icon-left">
                <Image
                  src="/imgs/template/voucher.svg"
                  alt="Ecom"
                  width={40}
                  height={40}
                />
              </div>
              <div className="info-right">
                <h5 className="font-lg-bold text-base color-gray-100">
                  Bon cadeau
                </h5>
                <p className="text-xs color-gray-500">Parrainez un ami</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-list">
              <div className="icon-left">
                <Image
                  src="/imgs/template/return.svg"
                  alt="Ecom"
                  width={40}
                  height={40}
                />
              </div>
              <div className="info-right">
                <h5 className="font-lg-bold text-base color-gray-100">
                  Retour & remb.
                </h5>
                <p className="text-xs color-gray-500">
                  Retour gratuit {">"} 50 000 FCFA.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-list">
              <div className="icon-left">
                <Image
                  src="/imgs/template/secure.svg"
                  alt="Ecom"
                  width={40}
                  height={40}
                />
              </div>
              <div className="info-right">
                <h5 className="font-lg-bold text-base color-gray-100">
                  Paiement sécurisé
                </h5>
                <p className="text-xs color-gray-500">100% protégé</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;

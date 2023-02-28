import React, { useState } from "react";
import SlideDown from "react-slidedown";
import Image from "next/image";

const FilterModal = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className="modal fade"
      id="ModalFiltersForm"
      tabIndex={-1}
      aria-hidden="true"
      style={{ display: "none" }}
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content apply-job-form">
          <div className="modal-header">
            <h5 className="modal-title color-gray-1000 filters-icon text-xl font-bold">
              Filtres Avancés
            </h5>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-30">
            <div className="row">
              <div className="col-w-1">
                <h6 className="color-gray-900 mb-0 font-bold text-base">
                  Marques
                </h6>
                <ul className="list-checkbox">
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly checked />
                      <span className="text-small">Apple</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Samsung</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Baseus</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Remax</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Handtown</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Elecom</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Razer</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Auto Focus</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Nillkin</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Logitech</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">ChromeBook</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="col-w-1">
                <h6 className="color-gray-900 mb-0 font-bold text-base">
                  Offres spéciales
                </h6>
                <ul className="list-checkbox">
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">En solde</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly checked />
                      <span className="text-small">Livraison GRATUITE</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Grosses affaires</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Shop Mall</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
                <h6 className="color-gray-900 mb-0 font-bold text-base mt-40">
                  Expédition prête en
                </h6>
                <ul className="list-checkbox">
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">1 jour ouvrable</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly checked />
                      <span className="text-small">1 à 3 jours ouvrables</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">en 1 semaine</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Expédition immédiate</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="col-w-1">
                <h6 className="color-gray-900 mb-0 font-bold text-base">
                  Options de commande
                </h6>
                <ul className="list-checkbox">
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">
                        Accepte les cartes-cadeaux
                      </span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Personnalisable</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly checked />
                      <span className="text-small">
                        Peut être emballé en cadeau
                      </span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">
                        0% d&rsquo;intérêt sur versements
                      </span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
                <h6 className="color-gray-900 mb-0 font-bold text-base mt-40">
                  Évaluation
                </h6>
                <ul className="list-checkbox">
                  <li className="mb-5">
                    <a href="#">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                        (5 stars)
                      </span>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                        (4 stars)
                      </span>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                        (3 stars)
                      </span>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                        (2 stars)
                      </span>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <Image
                        src="/imgs/template/icons/star-gray.svg"
                        alt="Ecom"
                        width={12}
                        height={12}
                        className="inline"
                      />
                      <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                        (1 star)
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-w-2">
                <h6 className="color-gray-900 mb-0 font-bold text-base">
                  Matériau
                </h6>
                <ul className="list-checkbox">
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Nylon (8)</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">Verre trempé (5)</span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly checked />
                      <span className="text-small">
                        Caoutchouc de silicone liquide (5)
                      </span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cb-container">
                      <input type="checkbox" readOnly />
                      <span className="text-small">
                        Alliage d&rsquo;aluminium (3)
                      </span>
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
                <h6 className="color-gray-900 mb-20 mt-40">
                  Étiquettes de produit
                </h6>
                <div>
                  <a className="btn btn-border mr-5" href="#">
                    Jeux
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Électronique
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Vidéo
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Téléphone portable
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Intérieur
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Carte VGA
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    USB
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Lightning
                  </a>
                  <a className="btn btn-border mr-5" href="#">
                    Caméra
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-start pl-30">
            <a className="btn btn-buy w-auto" href="#">
              Appliquer le filtre
            </a>
            <a className="btn font-sm-bold color-gray-500" href="#">
              Réinitialiser le filtre
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

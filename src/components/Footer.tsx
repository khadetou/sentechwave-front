import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="containers">
          <div className="row">
            <div className="col-lg-3 width-25 mb-30">
              <h4 className="mb-30 color-gray-1000 text-2xl font-bold">
                Contactez-nous
              </h4>
              <div className="font-md mb-20 color-gray-900">
                <strong className="font-md-bold">Adresse:</strong> 39 Castor 1
                Dakar Sénégal
              </div>
              <div className="font-md mb-20 color-gray-900">
                <strong className="font-md-bold">Téléphone:</strong> 77 586 79
                68
              </div>
              <div className="font-md mb-20 color-gray-900">
                <strong className="font-md-bold">E-mail:</strong>
                <a
                  href="http://wp.alithemes.com/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="84e7ebeaf0e5e7f0c4e1e7ebe9a9e9e5f6efe1f0aae7ebe9"
                >
                  contact@hotcodesagency.com
                </a>
              </div>
              <div className="font-md mb-20 color-gray-900">
                <strong className="font-md-bold">Hours:</strong> 8:00 - 17:00,
                Mon - Sat
              </div>
              <div className="mt-30">
                <a className="icon-socials icon-facebook" href="#"></a>
                <a className="icon-socials icon-instagram" href="#"></a>
                <a className="icon-socials icon-twitter" href="#"></a>
                <a className="icon-socials icon-linkedin" href="#"></a>
              </div>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="mb-30 color-gray-1000 text-2xl font-bold">
                Gagnez de l&apos;argent avec nous
              </h4>
              <ul className="menu-footer">
                <li>
                  <a href="page-about-us.html">Notre mission et vision</a>
                </li>
                <li>
                  <a href="page-about-us.html">Notre équipe</a>
                </li>
                <li>
                  <a href="page-careers.html">Carrières</a>
                </li>
                <li>
                  <a href="#">Presse et médias</a>
                </li>
                <li>
                  <a href="#">Publicité</a>
                </li>
                <li>
                  <a href="#">Témoignages</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000 text-2xl font-bold">
                Entreprise
              </h4>
              <ul className="menu-footer">
                <li>
                  <a href="blog-2.html">Notre blog</a>
                </li>
                <li>
                  <a href="#">Plans et tarification</a>
                </li>
                <li>
                  <a href="#">Base de connaissances</a>
                </li>
                <li>
                  <a href="#">Politique de cookies</a>
                </li>
                <li>
                  <a href="#">Centre de bureaux</a>
                </li>
                <li>
                  <a href="blog.html">Actualités et événements</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000 text-2xl font-bold">
                Mon compte
              </h4>
              <ul className="menu-footer">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Aide éditoriale</a>
                </li>
                <li>
                  <a href="#">Communauté</a>
                </li>
                <li>
                  <a href="#">Chat en direct</a>
                </li>
                <li>
                  <a href="page-contact.html">Contactez-nous</a>
                </li>
                <li>
                  <a href="#">Centre de support</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-23">
              <h4 className="mb-30 color-gray-1000 text-2xl font-bold">
                Application et paiement
              </h4>
              <div>
                <p className="font-md color-gray-900">
                  Téléchargez nos applications et obtenez une remise
                  supplémentaire de 15% sur votre première commande !
                </p>
                <div className="mt-20">
                  <a className="mr-10" href="#">
                    <Image
                      src="/imgs/template/appstore.png"
                      alt="Ecom"
                      className="inline"
                      width={128}
                      height={39}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/imgs/template/google-play.png"
                      alt="Ecom"
                      className="inline"
                      width={128}
                      height={39}
                    />
                  </a>
                </div>
                <p className="font-md color-gray-900 mt-20 mb-10">
                  Passerelle de paiement sécurisée
                </p>
                <Image
                  src="/imgs/template/payment-method.png"
                  alt="Ecom"
                  width={224}
                  height={33}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div className="footer-bottom-1">
          <div className="containers">
            <div className="footer-2-top mb-20">
              <a href="index.html">
                <Image
                  alt="Ecom"
                  src="/imgs/template/logo-2.svg"
                  width={159}
                  height={53}
                />
              </a>
              <a className="font-xs color-gray-1000" href="#">
                EcomMarket.com
              </a>
              <a className="font-xs color-gray-1000" href="#">
                Partenaires Ecom
              </a>
              <a className="font-xs color-gray-1000" href="#">
                Entreprise Ecom
              </a>
              <a className="font-xs color-gray-1000" href="#">
                Usine Ecom
              </a>
            </div>
            <div className="footer-2-bottom">
              <div className="head-left-footer">
                <h6 className="color-gray-1000 font-bold">Électronique:</h6>
              </div>
              <div className="tags-footer">
                <a href="shop-fullwidth.html">Téléphones portables</a>
                <a href="shop-grid.html">Casques</a>
                <a href="shop-grid-2.html">Télévision et vidéo</a>
                <a href="shop-list.html">Manette de jeu</a>
                <a href="shop-list-2.html">Apple Watch</a>
                <a href="shop-grid.html">HTC</a>
                <a href="shop-grid.html">Ipad</a>
                <a href="shop-grid.html">Clavier</a>
                <a href="shop-grid.html">Samsung</a>
                <a href="shop-grid.html">Haut-parleur sans fil</a>
                <a href="shop-grid.html">Samsung Galaxy</a>
                <a href="shop-grid.html">Souris de jeu</a>
                <a href="shop-grid.html">Lecteurs d&rsquo;ebook</a>
                <a href="shop-grid.html">Service Plans</a>
                <a href="shop-grid.html">Systèmes audio pour la maison</a>
                <a href="shop-grid.html">Électronique de bureau</a>
                <a href="shop-grid.html">Lenovo</a>
                <a href="shop-grid.html">Mackbook Pro M1</a>
                <a href="shop-grid.html">Lecteur vidéo HD</a>
              </div>
            </div>
            <div className="footer-2-bottom">
              <div className="head-left-footer">
                <h6 className="color-gray-1000 font-bold">Meubles:</h6>
              </div>
              <div className="tags-footer">
                <a href="shop-grid.html">Canapé</a>
                <a href="shop-grid.html">Chaise</a>
                <a href="shop-grid.html">Table à manger</a>
                <a href="shop-grid.html">Salle de séjour</a>
                <a href="shop-grid.html">Lampe de table</a>
                <a href="shop-grid.html">Table de nuit</a>
                <a href="shop-grid.html">Bureau d&rsquo;ordinateur</a>
                <a href="shop-grid.html">Table de bar</a>
                <a href="shop-grid.html">Oreiller</a>
                <a href="shop-grid.html">Radio</a>
                <a href="shop-grid.html">Horloge</a>
                <a href="shop-grid.html">Chambre à coucher</a>
                <a href="shop-grid.html">Tabouret</a>
                <a href="shop-grid.html">Television</a>
              </div>
            </div>
          </div>
        </div>
        <div className="containers">
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-lg-6 col-md-12 text-center text-lg-start">
                <span className="color-gray-900 font-sm">
                  Copyright © 2022 Ecom Market. Tous droits réservés.
                </span>
              </div>
              <div className="col-lg-6 col-md-12 text-center text-lg-end">
                <ul className="menu-bottom">
                  <li>
                    <a className="font-sm color-gray-900" href="page-term.html">
                      Conditions d&rsquo;utilisation
                    </a>
                  </li>
                  <li>
                    <a className="font-sm color-gray-900" href="page-term.html">
                      Avis de confidentialité
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-sm color-gray-900"
                      href="page-careers.html"
                    >
                      Annonces basées sur les centres d&rsquo;intérêt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

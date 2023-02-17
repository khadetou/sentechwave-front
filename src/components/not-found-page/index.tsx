import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="main page-404">
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
              <p className="mb-20">
                <Image
                  width={310}
                  height={194}
                  src="/imgs/page/page-404.png"
                  alt=""
                  className="hover-up tw-mx-auto"
                />
              </p>
              <h1 className="display-2 mb-30 ">Oups! Page introuvable</h1>
              <p className="font-lg text-grey-700 mb-30">
                Le lien sur lequel vous avez cliqué est peut-être rompu ou la
                page a peut-être été supprimée.
                <br />
                Visitez la{" "}
                <a href="index.html">
                  {" "}
                  <span> page d’accueil </span>
                </a>{" "}
                ou{" "}
                <a href="page-contact.html">
                  <span> contactez-nous </span>
                </a>{" "}
                à propos du problème.
              </p>
              <div className="search-form">
                <form action="#">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="tw-pl-5"
                  />
                  <button type="submit">
                    <i className="fi-rs-search"></i>
                  </button>
                </form>
              </div>
              <Link
                className="btn btn-default submit-auto-width font-xs hover-up mt-30"
                href="/"
              >
                <i className="fi-rs-home mr-5"></i> Retour à la page principale
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;

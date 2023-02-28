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
                  src="/imgs/page/404.svg"
                  alt=""
                  className="inline"
                />
              </p>
              <h1 className="display-2 mb-30 ">Oups! Page introuvable</h1>
              <p className="font-lg text-grey-700 mb-30">
                Le lien sur lequel vous avez cliqué est peut-être rompu ou la
                page a peut-être été supprimée.
                <br />
                Visitez la{" "}
                <Link href="/">
                  {" "}
                  <span> page d’accueil </span>
                </Link>{" "}
                ou{" "}
                <Link href="/contact-us">
                  <span> contactez-nous </span>
                </Link>{" "}
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
                className="btn btn-default bg-slate-900 text-white font-bold text-base mt-30"
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

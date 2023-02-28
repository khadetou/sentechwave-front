import Link from "next/link";
const PageHeader = () => {
  return (
    <div className="section-box">
      <div className="breadcrumbs-div">
        <div className="containers">
          <ul className="breadcrumb">
            <li>
              <Link className="font-xs color-gray-1000" href="/">
                Acceuil
              </Link>
            </li>
            <li>
              <Link className="font-xs color-gray-500" href="/cart">
                Panier
              </Link>
            </li>
            <li>
              <a className="font-xs color-gray-500">Checkout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

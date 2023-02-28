import Link from "next/link";
const OrderHeader = () => {
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
              <Link className="font-xs color-gray-500" href="/dashboard">
                Tableau de bord
              </Link>
            </li>
            <li>
              <a className="font-xs color-gray-500">Commande</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;

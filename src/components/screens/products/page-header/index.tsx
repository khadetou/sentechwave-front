import Link from "next/link";
import { useRouter } from "next/router";

const PageHeader = () => {
  const { pathname } = useRouter();

  return (
    <div className="section-box">
      <div className="breadcrumbs-div">
        <div className="containers">
          <ul className="breadcrumb">
            <li>
              <Link className="font-xs color-gray-1000" href="/">
                Acueil
              </Link>
            </li>
            <li>
              <Link
                className="font-xs color-gray-500"
                href="/products?category=electronic"
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link
                className="font-xs color-gray-500"
                href="/products?category=telephone"
              >
                Téléphones
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

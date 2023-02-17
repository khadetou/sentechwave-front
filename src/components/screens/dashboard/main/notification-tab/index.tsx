import Image from "next/image";

const NotificationTab = () => {
  return (
    <div
      className="tab-pane fade active show"
      id="tab-notification"
      role="tabpanel"
      aria-labelledby="tab-notification"
    >
      <div className="list-notifications">
        <div className="item-notification">
          <div className="image-notification">
            <Image
              src="/imgs/page/account/img-1.png"
              width={130}
              height={103}
              alt="Ecom"
            />
          </div>
          <div className="info-notification">
            <h5 className="mb-5">COD payment confirmed</h5>
            <p className="font-md color-brand-3">
              Order<span className="font-md-bold"> 220914QR92BXNH</span> has
              been confirmed. Please check the estimated delivery time in the
              order details section!
            </p>
          </div>
          <div className="button-notification">
            <a className="btn btn-buy w-auto">View Details</a>
          </div>
        </div>
        <div className="item-notification">
          <div className="image-notification">
            <Image
              src="/imgs/page/account/img-2.png"
              alt="Ecom"
              width={130}
              height={103}
            />
          </div>
          <div className="info-notification">
            <h5 className="mb-5">COD payment confirmed</h5>
            <p className="font-md color-brand-3">
              Order<span className="font-md-bold"> 220914QR92BXNH</span> has
              been confirmed. Please check the estimated delivery time in the
              order details section!
            </p>
          </div>
          <div className="button-notification">
            <a className="btn btn-buy w-auto">View Details</a>
          </div>
        </div>
        <div className="item-notification">
          <div className="image-notification">
            <Image
              src="/imgs/page/account/img-3.png"
              alt="Ecom"
              width={130}
              height={103}
            />
          </div>
          <div className="info-notification">
            <h5 className="mb-5">COD payment confirmed</h5>
            <p className="font-md color-brand-3">
              Order<span className="font-md-bold"> 220914QR92BXNH</span> has
              been confirmed. Please check the estimated delivery time in the
              order details section!
            </p>
          </div>
          <div className="button-notification">
            <a className="btn btn-buy w-auto">View Details</a>
          </div>
        </div>
        <div className="item-notification">
          <div className="image-notification">
            <Image
              src="/imgs/page/account/img-4.png"
              width={130}
              height={103}
              alt="Ecom"
            />
          </div>
          <div className="info-notification">
            <h5>COD payment confirmed</h5>
            <p className="font-md color-brand-3">
              Order<span className="font-md-bold"> 220914QR92BXNH</span> has
              been confirmed. Please check the estimated delivery time in the
              order details section!
            </p>
          </div>
          <div className="button-notification">
            <a className="btn btn-buy w-auto">View Details</a>
          </div>
        </div>
      </div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link page-prev" href="#"></a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link active" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link page-next" href="#"></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NotificationTab;

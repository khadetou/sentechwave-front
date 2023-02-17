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
                <h5 className="font-lg-bold color-gray-100">Free Delivery</h5>
                <p className="font-sm color-gray-500">
                  From all orders over $10
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
                <h5 className="font-lg-bold color-gray-100">Support 24/7</h5>
                <p className="font-sm color-gray-500">Shop with an expert</p>
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
                <h5 className="font-lg-bold color-gray-100">Gift voucher</h5>
                <p className="font-sm color-gray-500">Refer a friend</p>
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
                <h5 className="font-lg-bold color-gray-100">
                  Return &amp; Refund
                </h5>
                <p className="font-sm color-gray-500">Free return over $200</p>
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
                <h5 className="font-lg-bold color-gray-100">Secure payment</h5>
                <p className="font-sm color-gray-500">100% Protected</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;

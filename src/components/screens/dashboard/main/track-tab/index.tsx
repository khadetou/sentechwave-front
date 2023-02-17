import React from "react";

const TrackTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="tab-order-tracking"
      role="tabpanel"
      aria-labelledby="tab-order-tracking"
    >
      <p className="font-md color-gray-600">
        To track your order please enter your OrderID in the box below and press
        &rdquo;Track&rdquo; button. This was given to you on
        <br className="d-none d-lg-block" />
        your receipt and in the confirmation email you should have received.
      </p>
      <div className="row mt-30">
        <div className="col-lg-6">
          <div className="form-tracking">
            <form action="#" method="get">
              <div className="d-flex">
                <div className="form-group box-input">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="FDSFWRFAF13585"
                  />
                </div>
                <div className="form-group box-button">
                  <button className="btn btn-buy font-md-bold" type="submit">
                    Tracking Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="border-bottom mb-20 mt-20"></div>
      <h3 className="mb-10">
        Order Status:
        <span className="color-success">International shipping</span>
      </h3>
      <h6 className="color-gray-500">
        Estimated Delivery Date: 27 August - 29 August
      </h6>
      <div className="table-responsive">
        <div className="list-steps">
          <div className="item-step">
            <div className="rounded-step">
              <div className="icon-step step-1 active"></div>
              <h6 className="mb-5">Order Placed</h6>
              <p className="font-md color-gray-500">15 August 2022</p>
            </div>
          </div>
          <div className="item-step">
            <div className="rounded-step">
              <div className="icon-step step-2 active"></div>
              <h6 className="mb-5">In Producttion</h6>
              <p className="font-md color-gray-500">16 August 2022</p>
            </div>
          </div>
          <div className="item-step">
            <div className="rounded-step">
              <div className="icon-step step-3 active"></div>
              <h6 className="mb-5">International shipping</h6>
              <p className="font-md color-gray-500">17 August 2022</p>
            </div>
          </div>
          <div className="item-step">
            <div className="rounded-step">
              <div className="icon-step step-4"></div>
              <h6 className="mb-5">Shipping Final Mile</h6>
              <p className="font-md color-gray-500">18 August 2022</p>
            </div>
          </div>
          <div className="item-step">
            <div className="rounded-step">
              <div className="icon-step step-5"></div>
              <h6 className="mb-5">Delivered</h6>
              <p className="font-md color-gray-500">19 August 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="list-features">
        <ul>
          <li>09:10 25 August 2022: Delivery in progress</li>
          <li>
            08:25 25 August 2022: The order has arrived at warehouse 05-YBI
            Marvel LM Hub
          </li>
          <li>05:44 25 August 2022: Order has been shipped</li>
          <li>
            04:51 25 August 2022: The order has arrived at Marvel SOC warehouse
          </li>
          <li>20:54 18 August 2022: Order has been shipped</li>
          <li>
            18:21 17 August 2022: The order has arrived at Marvel SOC warehouse
          </li>
          <li>17:09 17 August 2022: Order has been shipped</li>
          <li>
            15:23 17 August 2022: The order has arrived at warehouse 20-HNI
            Marvel 2 SOC
          </li>
          <li>12:42 16 August 2022: Successful pick up</li>
          <li>10:44 15 August 2022: The sender is preparing the goods</li>
        </ul>
      </div>
      <h3>Package Location</h3>
      <div className="map-account">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193548.25784139088!2d-74.12251055507726!3d40.71380001554004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1664974174994!5m2!1svi!2s"
          style={{ border: "0;" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p className="color-gray-500 mb-20">
            Maecenas porttitor augue sit amet nibh venenatis bibendum. Morbi
            lorem elit, fringilla quis libero vitae, tincidunt commodo purus.
            Quisque diam nisi, tincidunt sed vehicula nec, fermentum vitae
            lectus. Curabitur sit amet sagittis libero. Pellentesque cursus
            turpis at ipsum luctus tempor.
          </p>
        </div>
        <div className="col-lg-6">
          <p className="color-gray-500 mb-20">
            Ut auctor varius nisl, scelerisque dictum justo maximus ut. Fusce
            rhoncus, augue sed molestie consectetur, leo felis ultricies erat,
            nec lobortis enim dui eu justo. Pellentesque aliquam hendrerit
            venenatis. Integer efficitur bibendum lectus sed sollicitudin.
            Suspendisse faucibus posuere euismod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackTab;

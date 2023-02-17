import Image from "next/image";

const PageContent = () => {
  return (
    <section className="section-box shop-template mt-0">
      <div className="containers">
        <div className="box-contact">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form">
                <h3 className="color-brand-3 mt-60">Contact Us</h3>
                <p className="font-sm color-gray-700 mb-30">
                  Our team would love to hear from you!
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        rows={5}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        className="btn btn-buy w-auto"
                        type="submit"
                        value="Send message"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325467.51371614134!2d-73.98947743776016!3d40.72209526768085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1svi!2s!4v1664373110059!5m2!1svi!2s"
                  height="550"
                  style={{ border: "0;" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="box-contact-address pt-80 pb-50">
          <div className="row">
            <div className="col-lg-3 mb-30">
              <h3 className="mb-5">Visit our stores</h3>
              <p className="font-sm color-gray-700 mb-30">
                Find us at these locations
              </p>
              <a className="btn btn-buy w-auto">View map</a>
            </div>
            <div className="col-lg-3">
              <div className="mb-30">
                <h4>Melbourne</h4>
                <p className="font-sm color-gray-700">
                  205 North Michigan Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                </p>
              </div>
              <div className="mb-30">
                <h4>San Francisco</h4>
                <p className="font-sm color-gray-700">
                  205 North Michigan Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                </p>
              </div>
              <div className="mb-30">
                <h4>Byron Bay</h4>
                <p className="font-sm color-gray-700">
                  205 North Michigan Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mb-30">
                <h4>Sydney</h4>
                <p className="font-sm color-gray-700">
                  205 North Michigan Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                </p>
              </div>
              <div className="mb-30">
                <h4>Sweden</h4>
                <p className="font-sm color-gray-700">
                  205 North Michigan Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                </p>
              </div>
              <div className="mb-30">
                <h4>Ha Noi</h4>
                <p className="font-sm color-gray-700">
                  205 North Michigan Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mb-30">
                <h4>Bangkok</h4>
                <p className="font-sm color-gray-700">
                  205 North Michigan Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                </p>
              </div>
              <div className="mb-30">
                <h4>Seoul</h4>
                <p className="font-sm color-gray-700">
                  205 North Michigan Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                </p>
              </div>
              <div className="mb-30">
                <h4>Paris</h4>
                <p className="font-sm color-gray-700">
                  205 North Michigan Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-contact-support pt-80 pb-50 background-gray-50">
        <div className="containers">
          <div className="row">
            <div className="col-lg-3 mb-30 text-center text-lg-start">
              <h3 className="mb-5">We‘d love to here from you</h3>
              <p className="font-sm color-gray-700">
                Chat with our friendly team
              </p>
            </div>
            <div className="col-lg-3 text-center mb-30">
              <div className="box-image mb-20">
                <Image
                  width={50}
                  height={50}
                  src="/imgs/page/contact/chat.svg"
                  alt="Ecom"
                />
              </div>
              <h4 className="mb-5">Chat to sales</h4>
              <p className="font-sm color-gray-700 mb-5">Speak to our team.</p>
              <a
                className="font-sm color-gray-900"
                href="http://wp.alithemes.com/cdn-cgi/l/email-protection#4c3f2d20293f0c292f2321622f2321"
              >
                <span
                  className="__cf_email__"
                  data-cfemail="f784969b9284b79294989ad994989a"
                >
                  [email&#160;protected]
                </span>
              </a>
            </div>
            <div className="col-lg-3 text-center mb-30">
              <div className="box-image mb-20">
                <Image
                  width={50}
                  height={50}
                  src="/imgs/page/contact/call.svg"
                  alt="Ecom"
                />
              </div>
              <h4 className="mb-5">Call us</h4>
              <p className="font-sm color-gray-700 mb-5">
                Mon-Fri from 8am to 5pm
              </p>
              <a className="font-sm color-gray-900" href="tel:+1(555)000-0000">
                +1(555)000-0000
              </a>
            </div>
            <div className="col-lg-3 text-center mb-30">
              <div className="box-image mb-20">
                <Image
                  width={50}
                  height={50}
                  src="/imgs/page/contact/map.svg"
                  alt="Ecom"
                />
              </div>
              <h4 className="mb-5">Visit us</h4>
              <p className="font-sm color-gray-700 mb-5">Visit our office</p>
              <span className="font-sm color-gray-900">
                205 North Michigan Avenue, Suite 810
                <br />
                Chicago, 60601, USA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;

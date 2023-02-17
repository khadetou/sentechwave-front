import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="containers">
          <div className="row">
            <div className="col-lg-3 width-25 mb-30">
              <h4 className="mb-30 color-gray-1000">Contact</h4>
              <div className="font-md mb-20 color-gray-900">
                <strong className="font-md-bold">Address:</strong> 502 New
                Design Str, Melbourne, San Francisco, CA 94110, United States
              </div>
              <div className="font-md mb-20 color-gray-900">
                <strong className="font-md-bold">Phone:</strong> (+01)
                123-456-789
              </div>
              <div className="font-md mb-20 color-gray-900">
                <strong className="font-md-bold">E-mail:</strong>
                <a
                  href="http://wp.alithemes.com/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="84e7ebeaf0e5e7f0c4e1e7ebe9a9e9e5f6efe1f0aae7ebe9"
                >
                  [email&#160;protected]
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
              <h4 className="mb-30 color-gray-1000">Make Money with Us</h4>
              <ul className="menu-footer">
                <li>
                  <a href="page-about-us.html">Mission &amp; Vision</a>
                </li>
                <li>
                  <a href="page-about-us.html">Our Team</a>
                </li>
                <li>
                  <a href="page-careers.html">Careers</a>
                </li>
                <li>
                  <a href="#">Press &amp; Media</a>
                </li>
                <li>
                  <a href="#">Advertising</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000">Company</h4>
              <ul className="menu-footer">
                <li>
                  <a href="blog-2.html">Our Blog</a>
                </li>
                <li>
                  <a href="#">Plans &amp; Pricing</a>
                </li>
                <li>
                  <a href="#">Knowledge Base</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Office Center</a>
                </li>
                <li>
                  <a href="blog.html">News &amp; Events</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000">My account</h4>
              <ul className="menu-footer">
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Editor Help</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Live Chatting</a>
                </li>
                <li>
                  <a href="page-contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-23">
              <h4 className="mb-30 color-gray-1000">App &amp; Payment</h4>
              <div>
                <p className="font-md color-gray-900">
                  Download our Apps and get extra 15% Discount on your first
                  Order&mldr;!
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
                  Secured Payment Gateways
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
                Ecom Partners
              </a>
              <a className="font-xs color-gray-1000" href="#">
                Ecom Bussiness
              </a>
              <a className="font-xs color-gray-1000" href="#">
                Ecom Factory
              </a>
            </div>
            <div className="footer-2-bottom">
              <div className="head-left-footer">
                <h6 className="color-gray-1000">Electronic:</h6>
              </div>
              <div className="tags-footer">
                <a href="shop-fullwidth.html">Cell Phones</a>
                <a href="shop-grid.html">Headphones</a>
                <a href="shop-grid-2.html">Television &amp; Video</a>
                <a href="shop-list.html">Game Controller</a>
                <a href="shop-list-2.html">Apple Watch</a>
                <a href="shop-grid.html">HTC</a>
                <a href="shop-grid.html">Ipad</a>
                <a href="shop-grid.html">Keyboard</a>
                <a href="shop-grid.html">Samsung</a>
                <a href="shop-grid.html">Wireless Speaker</a>
                <a href="shop-grid.html">Samsung Galaxy</a>
                <a href="shop-grid.html">Gaming Mouse</a>
                <a href="shop-grid.html">eBook Readers</a>
                <a href="shop-grid.html">Service Plans</a>
                <a href="shop-grid.html">Home Audio</a>
                <a href="shop-grid.html">Office Electronics</a>
                <a href="shop-grid.html">Lenovo</a>
                <a href="shop-grid.html">Mackbook Pro M1</a>
                <a href="shop-grid.html">HD Videos Player</a>
              </div>
            </div>
            <div className="footer-2-bottom">
              <div className="head-left-footer">
                <h6 className="color-gray-1000">Furniture:</h6>
              </div>
              <div className="tags-footer">
                <a href="shop-grid.html">Sofa</a>
                <a href="shop-grid.html">Chair</a>
                <a href="shop-grid.html">Dining Table</a>
                <a href="shop-grid.html">Living Room</a>
                <a href="shop-grid.html">Table Lamp</a>
                <a href="shop-grid.html">Night Stand</a>
                <a href="shop-grid.html">Computer Desk</a>
                <a href="shop-grid.html">Bar Table</a>
                <a href="shop-grid.html">Pillow</a>
                <a href="shop-grid.html">Radio</a>
                <a href="shop-grid.html">Clock</a>
                <a href="shop-grid.html">Bad Room</a>
                <a href="shop-grid.html">Stool</a>
                <a href="shop-grid.html">Television</a>
                <a href="shop-grid.html">wardrobe</a>
                <a href="shop-grid.html">Living Room Tables</a>
                <a href="shop-grid.html">Dressers</a>
                <a href="shop-grid.html">Patio Sofas</a>
                <a href="shop-grid.html">Nursery</a>
                <a href="shop-grid.html">Kitchen</a>
                <a href="shop-grid.html">Accent Furniture</a>
                <a href="shop-grid.html">Replacement Parts</a>
              </div>
            </div>
          </div>
        </div>
        <div className="containers">
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-lg-6 col-md-12 text-center text-lg-start">
                <span className="color-gray-900 font-sm">
                  Copyright &copy; 2022 Ecom Market. All rights reserved.
                </span>
              </div>
              <div className="col-lg-6 col-md-12 text-center text-lg-end">
                <ul className="menu-bottom">
                  <li>
                    <a className="font-sm color-gray-900" href="page-term.html">
                      Conditions of Use
                    </a>
                  </li>
                  <li>
                    <a className="font-sm color-gray-900" href="page-term.html">
                      Privacy Notice
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-sm color-gray-900"
                      href="page-careers.html"
                    >
                      Interest-Based Ads
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

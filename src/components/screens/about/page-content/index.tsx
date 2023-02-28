import Image from "next/image";

const PageContent = () => {
  return (
    <section className="section-box shop-template mt-30">
      <div className="containers">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h5 className="color-gray-500 mb-10 font-bold text-[20px]">
              About us
            </h5>
            <h2 className="font-bold text-[45px]">
              Global Leading Online Shop
            </h2>
            <div className="row mt-20">
              <div className="col-lg-6">
                <p className="font-sm font-medium color-gray-700 mb-15">
                  Ecom expands global footprint, delivering entertaining
                  experiences customised to each user. Branches are expanding
                  both in size and number.
                </p>
                <p className="font-sm font-medium color-gray-700 mb-15">
                  Nunc vel risus commodo viverra maecenas accumsan lacus vel
                  facilisis. Lacus vel facilisis volutpat est velit. Urna neque
                  viverra justo nec. Suspendisse faucibus interdum posuere lorem
                  ipsum dolor. Ut aliquam purus sit amet luctus venenatis lectus
                  magna fringilla. Tortor vitae purus faucibus ornare.
                </p>
                <p className="font-sm font-medium color-gray-700 mb-15">
                  Tempus iaculis urna id volutpat lacus laoreet. Id neque
                  aliquam vestibulum morbi blandit. Lacinia quis vel eros donec
                  ac odio tempor orci. Lectus sit amet est placerat in egestas
                  erat imperdiet. Nunc congue nisi vitae suscipit. Sed
                  adipiscing diam donec adipiscing tristique risus.
                </p>
                <ul className="list-services mt-20">
                  <li className="hover-up">We provide qualified & expert</li>
                  <li className="hover-up">Modern tools & technology use</li>
                  <li className="hover-up">Neat & cleaning top Services</li>
                  <li className="hover-up">We Develop Digital Future</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <Image
                  src="/imgs/page/about/img.png"
                  alt="Ecom"
                  width={543}
                  height={349}
                />
              </div>
            </div>
            <div className="box-contact-support pt-80 pb-50 pl-50 pr-50 background-gray-50 mt-50 mb-90">
              <div className="row">
                <div className="col-lg-3 mb-30 text-center text-lg-start">
                  <h4 className="mb-5">12 Years</h4>
                  <p className="font-md color-gray-700">
                    We’ve more than 12 years working experience.
                  </p>
                </div>
                <div className="col-lg-3 mb-30 text-center text-lg-start">
                  <h4 className="mb-5">2000+ Employee</h4>
                  <p className="font-md color-gray-700 mb-5">
                    We’ve more than 2000 employees working near you.
                  </p>
                </div>
                <div className="col-lg-3 mb-30 text-center text-lg-start">
                  <h4 className="mb-5">68 Branches</h4>
                  <p className="font-md color-gray-700 mb-5">
                    We have 68 branches across the country and are expanding
                  </p>
                </div>
                <div className="col-lg-3 mb-30 text-center text-lg-start">
                  <h4 className="mb-5">15 Countries</h4>
                  <p className="font-md color-gray-700 mb-5">
                    We are present in 15 countries around the world
                  </p>
                </div>
              </div>
            </div>
            <h5 className="color-gray-500 mb-10">Behind The Brands</h5>
            <h2 className="mb-40">
              The people who work at Ecom share the vision and values of our
              community.
            </h2>
            <div className="row mb-50">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card-staff hover-up">
                  <div className="image-staff">
                    <Image
                      src="/imgs/page/about/staft1.png"
                      width={257}
                      height={310}
                      alt="Ecom"
                    />
                  </div>
                  <div className="info-staff">
                    <h5>Ronald Richards</h5>
                    <p className="font-md color-gray-500">
                      Chief Executive Officer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card-staff hover-up">
                  <div className="image-staff">
                    <Image
                      src="/imgs/page/about/staft2.png"
                      width={257}
                      height={310}
                      alt="Ecom"
                    />
                  </div>
                  <div className="info-staff">
                    <h5>Jenny Wilson</h5>
                    <p className="font-md color-gray-500">
                      Chief Financial Officer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card-staff hover-up">
                  <div className="image-staff">
                    <Image
                      src="/imgs/page/about/staft3.png"
                      width={257}
                      height={310}
                      alt="Ecom"
                    />
                  </div>
                  <div className="info-staff">
                    <h5>Cody Fisher</h5>
                    <p className="font-md color-gray-500">
                      Chief Operating Officer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card-staff hover-up">
                  <div className="image-staff">
                    <Image
                      src="/imgs/page/about/staft4.png"
                      width={257}
                      height={310}
                      alt="Ecom"
                    />
                  </div>
                  <div className="info-staff">
                    <h5>Jacob Jones</h5>
                    <p className="font-md color-gray-500">
                      Chief Technology Officer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card-staff hover-up">
                  <div className="image-staff">
                    <Image
                      src="/imgs/page/about/staft5.png"
                      width={257}
                      height={310}
                      alt="Ecom"
                    />
                  </div>
                  <div className="info-staff">
                    <h5>Leslie Alexander</h5>
                    <p className="font-md color-gray-500">
                      Chief Marketing Officer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card-staff hover-up">
                  <div className="image-staff">
                    <Image
                      src="/imgs/page/about/staft6.png"
                      width={257}
                      height={310}
                      alt="Ecom"
                    />
                  </div>
                  <div className="info-staff">
                    <h5>Ralph Edwards</h5>
                    <p className="font-md color-gray-500">
                      Chief Human Resources Officer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card-staff hover-up">
                  <div className="image-staff">
                    <Image
                      src="/imgs/page/about/staft7.png"
                      width={257}
                      height={310}
                      alt="Ecom"
                    />
                  </div>
                  <div className="info-staff">
                    <h5>Eleanor Pena</h5>
                    <p className="font-md color-gray-500">
                      Chief Legal Officer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card-staff hover-up">
                  <div className="image-staff">
                    <Image
                      src="/imgs/page/about/staft8.png"
                      width={257}
                      height={310}
                      alt="Ecom"
                    />
                  </div>
                  <div className="info-staff">
                    <h5>Theresa Webb</h5>
                    <p className="font-md color-gray-500">
                      Chief Product Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="color-gray-500 mb-10">Our Partners</h5>
            <h2 className="mb-40">Trusted by 18.000+ Vendors</h2>
            <div className="box-images-logo">
              <a className="hover-up" href="shop-vendor-single.html">
                <Image
                  src="/imgs/page/about/microsoft.svg"
                  alt="Ecom"
                  width={171}
                  height={28}
                  className="inline"
                />
              </a>
              <a className="hover-up" href="shop-vendor-single.html">
                <Image
                  src="/imgs/page/about/sony.svg"
                  alt="Ecom"
                  width={171}
                  height={28}
                  className="inline"
                />
              </a>
              <a className="hover-up" href="shop-vendor-single.html">
                <Image
                  src="/imgs/page/about/acer.svg"
                  alt="Ecom"
                  width={171}
                  height={28}
                  className="inline"
                />
              </a>
              <a className="hover-up" href="shop-vendor-single.html">
                <Image
                  src="/imgs/page/about/nokia.svg"
                  alt="Ecom"
                  width={171}
                  height={28}
                  className="inline"
                />
              </a>
              <a className="hover-up" href="shop-vendor-single.html">
                <Image
                  src="/imgs/page/about/asus.svg"
                  alt="Ecom"
                  width={171}
                  height={28}
                  className="inline"
                />
              </a>
              <a className="hover-up" href="shop-vendor-single.html">
                <Image
                  src="/imgs/page/about/casio.svg"
                  alt="Ecom"
                  width={171}
                  height={28}
                  className="inline"
                />
              </a>
              <a className="hover-up" href="shop-vendor-single.html">
                <Image
                  src="/imgs/page/about/dell.svg"
                  alt="Ecom"
                  width={171}
                  height={28}
                  className="inline"
                />
              </a>
              <a className="hover-up" href="shop-vendor-single.html">
                <Image
                  src="/imgs/page/about/panasonic.svg"
                  alt="Ecom"
                  width={171}
                  height={28}
                  className="inline"
                />
              </a>
              <a className="hover-up" href="shop-vendor-single.html">
                <Image
                  src="/imgs/page/about/vaio.svg"
                  alt="Ecom"
                  width={171}
                  height={28}
                  className="inline"
                />
              </a>
              <a className="hover-up" href="shop-vendor-single.html">
                <Image
                  src="/imgs/page/about/sharp.svg"
                  alt="Ecom"
                  width={171}
                  height={28}
                  className="inline"
                />
              </a>
            </div>
            <div className="border-1 mb-80 mt-50"></div>
            <h2 className="mb-5">Visit our stores</h2>
            <p className="font-sm color-gray-700">Find us at these locations</p>
            <div className="box-contact-address pt-30 pb-50">
              <div className="row">
                <div className="col-lg-4">
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
                <div className="col-lg-4">
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
                <div className="col-lg-4">
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
        </div>
      </div>
      <div className="box-contact-support pt-80 pb-50 background-gray-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
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
                      src="/imgs/page/contact/chat.svg"
                      alt="Ecom"
                      width={50}
                      height={50}
                      className="inline"
                    />
                  </div>
                  <h4 className="mb-5">Chat to sales</h4>
                  <p className="font-sm color-gray-700 mb-5">
                    Speak to our team.
                  </p>
                  <a
                    className="font-sm color-gray-900"
                    href="http://wp.alithemes.com/cdn-cgi/l/email-protection#6714060b0214270204080a4904080a"
                  >
                    <span
                      className="__cf_email__"
                      data-cfemail="4330222f26300326202c2e6d202c2e"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </div>
                <div className="col-lg-3 text-center mb-30">
                  <div className="box-image mb-20">
                    <Image
                      src="/imgs/page/contact/call.svg"
                      alt="Ecom"
                      width={50}
                      height={50}
                      className="inline"
                    />
                  </div>
                  <h4 className="mb-5">Call us</h4>
                  <p className="font-sm color-gray-700 mb-5">
                    Mon-Fri from 8am to 5pm
                  </p>
                  <a
                    className="font-sm color-gray-900"
                    href="tel:+1(555)000-0000"
                  >
                    +1(555)000-0000
                  </a>
                </div>
                <div className="col-lg-3 text-center mb-30">
                  <div className="box-image mb-20">
                    <Image
                      src="/imgs/page/contact/map.svg"
                      alt="Ecom"
                      width={50}
                      height={50}
                      className="inline"
                    />
                  </div>
                  <h4 className="mb-5">Visit us</h4>
                  <p className="font-sm color-gray-700 mb-5">
                    Visit our office
                  </p>
                  <span className="font-sm color-gray-900">
                    205 North Michigan Avenue, Suite 810
                    <br />
                    Chicago, 60601, USA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;

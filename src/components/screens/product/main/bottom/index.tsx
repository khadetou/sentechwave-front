import { useAppSelector } from "hooks/index";
import Image from "next/image";
const Bottom = () => {
  const { product } = useAppSelector((store) => store.product);
  return (
    <section className="section-box shop-template">
      <div className="containers">
        <div className="pt-30 mb-10">
          <ul className="nav nav-tabs nav-tabs-product" role="tablist">
            <li>
              <a
                className="active"
                href="#tab-description"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-description"
                aria-selected="true"
              >
                Description
              </a>
            </li>
            <li>
              <a
                href="#tab-specification"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-specification"
                aria-selected="true"
              >
                Spécifications
              </a>
            </li>
            <li>
              <a
                href="#tab-additional"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-additional"
                aria-selected="true"
              >
                Informations supplémentaires
              </a>
            </li>
            <li>
              <a
                href="#tab-reviews"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-reviews"
                aria-selected="true"
              >
                Avis (2)
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="tab-description"
              role="tabpanel"
              aria-labelledby="tab-description"
            >
              <div className="display-text-short">
                <p>{product && product.description}</p>
              </div>
              {/* <div className="mt-20 text-center">
                <a className="btn btn-border font-sm-bold pl-80 pr-80 btn-expand-more">
                  More Details
                </a>
              </div> */}
            </div>
            <div
              className="tab-pane fade"
              id="tab-specification"
              role="tabpanel"
              aria-labelledby="tab-specification"
            >
              <h5 className="mb-25">Specification</h5>
              <div className="table-responsive">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Mode</td>
                      <td>#SK10923</td>
                    </tr>
                    <tr>
                      <td>Brand</td>
                      <td>SamSung</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>6.7&rdquo;</td>
                    </tr>
                    <tr>
                      <td>Finish</td>
                      <td>Pacific Blue</td>
                    </tr>
                    <tr>
                      <td>Origin of Country</td>
                      <td>United States</td>
                    </tr>
                    <tr>
                      <td>Manufacturer</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>Released Year</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <td>Warranty</td>
                      <td>International</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab-additional"
              role="tabpanel"
              aria-labelledby="tab-additional"
            >
              <h5 className="mb-25">Additional information</h5>
              <div className="table-responsive">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Weight</td>
                      <td>
                        <p>0.240 kg</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Dimensions</td>
                      <td>
                        <p>0.74 x 7.64 x 16.08 cm</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab-reviews"
              role="tabpanel"
              aria-labelledby="tab-reviews"
            >
              <div className="comments-area">
                <div className="row">
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

                  <div className="col-lg-8">
                    <h4 className="mb-30 title-question font-bold">
                      Customer questions &amp; answers
                    </h4>
                    <div className="comment-list">
                      <div className="single-comment justify-content-between d-flex mb-30 hover-up">
                        <div className="user justify-content-between d-flex">
                          <div className="thumb text-center">
                            <Image
                              src="/imgs/page/product/author-2.png"
                              alt="Ecom"
                              width={165}
                              height={168}
                            />
                            <a className="font-heading text-brand" href="#">
                              Sienna
                            </a>
                          </div>
                          <div className="desc">
                            <div className="d-flex justify-content-between mb-10">
                              <div className="d-flex align-items-center">
                                <span className="font-xs color-gray-700">
                                  December 4, 2022 at 3:12 pm
                                </span>
                              </div>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </div>
                            <p className="mb-10 font-sm color-gray-900">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus, suscipit
                              exercitationem accusantium obcaecati quos
                              voluptate nesciunt facilis itaque modi commodi
                              dignissimos sequi repudiandae minus ab deleniti
                              totam officia id incidunt?
                              <a className="reply" href="#">
                                {" "}
                                Reply
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-comment justify-content-between d-flex mb-30 ml-30 hover-up">
                        <div className="user justify-content-between d-flex">
                          <div className="thumb text-center">
                            <Image
                              src="/imgs/page/product/author-3.png"
                              alt="Ecom"
                              width={165}
                              height={168}
                            />
                            <a className="font-heading text-brand" href="#">
                              Brenna
                            </a>
                          </div>
                          <div className="desc">
                            <div className="d-flex justify-content-between mb-10">
                              <div className="d-flex align-items-center">
                                <span className="font-xs color-gray-700">
                                  December 4, 2022 at 3:12 pm
                                </span>
                              </div>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                ></div>
                              </div>
                            </div>
                            <p className="mb-10 font-sm color-gray-900">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus, suscipit
                              exercitationem accusantium obcaecati quos
                              voluptate nesciunt facilis itaque modi commodi
                              dignissimos sequi repudiandae minus ab deleniti
                              totam officia id incidunt?
                              <a className="reply" href="#">
                                {" "}
                                Reply
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-comment justify-content-between d-flex hover-up">
                        <div className="user justify-content-between d-flex">
                          <div className="thumb text-center">
                            <Image
                              src="/imgs/page/product/author-4.png"
                              alt="Ecom"
                              width={165}
                              height={168}
                            />
                            <a className="font-heading text-brand" href="#">
                              Gemma
                            </a>
                          </div>
                          <div className="desc">
                            <div className="d-flex justify-content-between mb-10">
                              <div className="d-flex align-items-center">
                                <span className="font-xs color-gray-700">
                                  December 4, 2022 at 3:12 pm
                                </span>
                              </div>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                ></div>
                              </div>
                            </div>
                            <p className="mb-10 font-sm color-gray-900">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus, suscipit
                              exercitationem accusantium obcaecati quos
                              voluptate nesciunt facilis itaque modi commodi
                              dignissimos sequi repudiandae minus ab deleniti
                              totam officia id incidunt?
                              <a className="reply" href="#">
                                {" "}
                                Reply
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h4 className="mb-30 title-question font-bold">
                      Customer reviews
                    </h4>
                    <div className="d-flex mb-30">
                      <div className="product-rate d-inline-block mr-15">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <h6>4.8 out of 5</h6>
                    </div>
                    <div className="progress">
                      <span>5 star</span>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                      >
                        50%
                      </div>
                    </div>
                    <div className="progress">
                      <span>4 star</span>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                      >
                        25%
                      </div>
                    </div>
                    <div className="progress">
                      <span>3 star</span>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "45%" }}
                      >
                        45%
                      </div>
                    </div>
                    <div className="progress">
                      <span>2 star</span>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "65%" }}
                      >
                        65%
                      </div>
                    </div>
                    <div className="progress mb-30">
                      <span>1 star</span>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                      >
                        85%
                      </div>
                    </div>
                    <a className="font-xs text-muted" href="#">
                      How are ratings calculated?
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-bottom pt-30 mb-50"></div>
            <h4 className="color-brand-3 text-2xl font-bold">
              Related Products
            </h4>
            <div className="list-products-5 mt-20">
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-2.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp3.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Dell
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-2.html"
                    >
                      Dell Optiplex 9020 Small Form Business Desktop Tower
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-2.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp4.png"
                        alt="Ecom"
                        width={648}
                        height={438}
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      HP
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-2.html"
                    >
                      HP 24 All-in-One PC, Intel Core i3-1115G4, 4GB RAM
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-2.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp5.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Gateway
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-2.html"
                    >
                      Gateway 23.8&quot; All-in-one Desktop, Fully Adjustable
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-2.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp6.png"
                        alt="Ecom"
                        width={648}
                        height={438}
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      HP
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-2.html"
                    >
                      HP 22 All-in-One PC, Intel Pentium Silver J5040, 4GB RAM
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-2.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp7.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Sceptre
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-2.html"
                    >
                      Sceptre 24&quot; Professional Thin 75Hz 1080p LED Monitor
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom pt-20 mb-40"></div>
            <h4 className="color-brand-3 text-2xl font-bold">
              You may also like
            </h4>
            <div className="list-products-5 mt-20">
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp3.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Apple
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-3.html"
                    >
                      HP DeskJet 2755e Wireless Color All-in-One Printer
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp4.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Apple
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-3.html"
                    >
                      Razer Power Up Gaming Bundle V2 - Cynosa Lite
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp5.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Apple
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-3.html"
                    >
                      Apple AirPods Pro with MagSafe Charging Case
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp6.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Apple
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-3.html"
                    >
                      SAMSUNG Galaxy Tab A7 Lite, 8.7&quot; Tablet 32GB
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp7.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Apple
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-3.html"
                    >
                      HP 24mh FHD Monitor - Computer Monitor
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom pt-20 mb-40"></div>
            <h4 className="color-brand-3 text-2xl font-bold">
              Recently viewed items
            </h4>
            <div className="row mt-40">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card-grid-style-2 card-grid-none-border hover-up">
                  <div className="image-box">
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp1.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <span className="font-xs color-gray-500">Apple</span>
                    <br />
                    <a
                      className="color-brand-3 font-xs-bold"
                      href="shop-single-product-3.html"
                    >
                      SAMSUNG Galaxy Tab A7 Lite, 8.7&quot; Tablet 32GB
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2556.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card-grid-style-2 card-grid-none-border hover-up">
                  <div className="image-box">
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp2.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <span className="font-xs color-gray-500">Apple</span>
                    <br />
                    <a
                      className="color-brand-3 font-xs-bold"
                      href="shop-single-product-3.html"
                    >
                      Class 4K UHD (2160P) LED Roku Smart TV HDR
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2556.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card-grid-style-2 card-grid-none-border hover-up">
                  <div className="image-box">
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp1.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <span className="font-xs color-gray-500">Apple</span>
                    <br />
                    <a
                      className="color-brand-3 font-xs-bold"
                      href="shop-single-product-3.html"
                    >
                      HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2556.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card-grid-style-2 card-grid-none-border hover-up">
                  <div className="image-box">
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp2.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <span className="font-xs color-gray-500">Apple</span>
                    <br />
                    <a
                      className="color-brand-3 font-xs-bold"
                      href="shop-single-product-3.html"
                    >
                      Logitech H390 Wired Headset, Stereo Headphones
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500"> (65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2556.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom pt-20 mb-40"></div>
            <h4 className="color-brand-3 text-2xl font-bold">
              Similar products to compare
            </h4>
            <div className="list-products-5 mt-20">
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp3.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Apple
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-3.html"
                    >
                      Logitech MK345 Wireless Combo Full-Sized Keyboard
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp4.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Apple
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-3.html"
                    >
                      Logitech Brio 4K Webcam, Ultra 4K HD Video Calling
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp5.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Apple
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-3.html"
                    >
                      HP 24mh FHD Monitor - Computer Monitor
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp6.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Apple
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-3.html"
                    >
                      2022 Apple iMac with Retina 5K Display 8GB RAM
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools">
                    <a
                      className="btn btn-trend btn-tooltip mb-10"
                      href="#"
                      aria-label="Trend"
                      data-bs-placement="left"
                    ></a>
                    <a
                      className="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html"
                      aria-label="Add To Wishlist"
                    ></a>
                    <a
                      className="btn btn-compare btn-tooltip mb-10"
                      href="shop-compare.html"
                      aria-label="Compare"
                    ></a>
                    <a
                      className="btn btn-quickview btn-tooltip"
                      aria-label="Quick view"
                      href="#ModalQuickview"
                      data-bs-toggle="modal"
                    ></a>
                  </div>
                  <div className="image-box">
                    <span className="label bg-brand-2">-17%</span>
                    <a href="shop-single-product-3.html">
                      <Image
                        src="/imgs/page/homepage1/imgsp7.png"
                        width={648}
                        height={438}
                        alt="Ecom"
                      />
                    </a>
                  </div>
                  <div className="info-right">
                    <a
                      className="font-xs color-gray-500"
                      href="shop-vendor-single.html"
                    >
                      Apple
                    </a>
                    <br />
                    <a
                      className="color-brand-3 font-sm-bold"
                      href="shop-single-product-3.html"
                    >
                      Seagate Portable 2TB External Hard Drive
                    </a>
                    <div className="rating">
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <Image
                        src="/imgs/template/icons/star.svg"
                        alt="Ecom"
                        className="inline"
                        width={12}
                        height={12}
                      />
                      <span className="font-xs color-gray-500">(65)</span>
                    </div>
                    <div className="price-info">
                      <strong className="font-lg-bold color-brand-3 price-main">
                        $2856.3
                      </strong>
                      <span className="color-gray-500 price-line">$3225.6</span>
                    </div>
                    <div className="mt-20 box-btn-cart">
                      <a className="btn btn-cart" href="shop-cart.html">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;

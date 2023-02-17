import { useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import "moment/locale/fr";
import moment from "moment";

moment.locale("fr");
const BlogsPage = () => {
  const { blogs } = useAppSelector((store) => store.blog);
  return (
    <section className="section-box shop-template mt-30">
      <div className="containers">
        <div className="row">
          <div className="col-lg-12">
            <div className="box-filters mt-0 pb-5 border-bottom">
              <div className="row">
                <div className="col-xl-2 col-lg-3 mb-0 text-lg-start text-center">
                  <h5 className="color-brand-3 text-uppercase">Blogs</h5>
                </div>
                <div className="col-xl-10 col-lg-9 mb-0 text-lg-end text-center">
                  <span className="font-sm color-gray-900 font-medium border-1-right span">
                    Showing 1&ndash;16 of 17 results
                  </span>
                  <div className="d-inline-block">
                    <span className="font-sm color-gray-500 font-medium">
                      Sort by:
                    </span>
                    <div className="dropdown dropdown-sort border-1-right">
                      <button
                        className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                        id="dropdownSort"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Latest posts
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-light"
                        aria-labelledby="dropdownSort"
                        style={{ margin: "0px;" }}
                      >
                        <li>
                          <a className="dropdown-item active" href="#">
                            Latest posts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Oldest posts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Comments posts
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-inline-block">
                    <span className="font-sm color-gray-500 font-medium">
                      Show
                    </span>
                    <div className="dropdown dropdown-sort border-1-right">
                      <button
                        className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                        id="dropdownSort2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-display="static"
                      >
                        <span>30 items</span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-light"
                        aria-labelledby="dropdownSort2"
                      >
                        <li>
                          <a className="dropdown-item active" href="#">
                            30 items
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            50 items
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            100 items
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-inline-block">
                    <a
                      className="view-type-grid mr-5 active"
                      href="blog.html"
                    ></a>
                    <a className="view-type-list" href="blog-list.html"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-1.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Apple unveils iPhone 14 at far out event</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-2.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Walmart enters the metaverse with Roblox </h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-3.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Take no prisoners: In the Feds inflation fight</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-4.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Amazon raising hourly pay for warehouse</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-5.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Who is who: Meet the Murdoch Family </h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-6.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>NFL has a new halftime show sponsor </h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-7.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Actress details sexual harassment on sitcom set</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-8.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Selma Blair stuns in Dancing with the Stars</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-40">
            <div className="text-center">
              <a href="#">
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/product/banner-ads.png"
                  alt="Ecom"
                  className="inline"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-9.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Apple unveils iPhone 14 at far out event</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-10.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>The Twitter-Musk trial is now on pause</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-11.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Binance blockchain hit by $570 million crypto</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-12.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Binance blockchain hit by $570 million crypto</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-13.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>The Twitter-Musk trial is now on pause</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-14.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Apple unveils iPhone 14 at far out event</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-15.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Walmart enters the metaverse with Roblox</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-16.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Take no prisoners: In the Feds inflation fight</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-17.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Amazon raising hourly pay for warehouse</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-9.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Who is who: Meet the Murdoch Family </h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-8.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>NFL has a new halftime show sponsor </h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-7.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>The latest technologies to be used for VR in 2022</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-40">
            <div className="text-center">
              <a href="#">
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/product/banner-ads2.png"
                  alt="Ecom"
                  className="inline"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-6.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Actress details sexual harassment on sitcom set</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-5.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>Selma Blair stuns in Dancing with the Stars</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-4.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>The Woman King surprises at the box office</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-40">
            <div className="card-grid-style-1">
              <div className="image-box">
                <a href="blog-single.html"></a>
                <Image
                  width={1000}
                  height={750}
                  src="/imgs/page/blog/blog-3.jpg"
                  alt="Ecom"
                />
              </div>
              <a className="tag-dot font-xs" href="#">
                Technology
              </a>
              <a className="color-gray-1100" href="blog-single.html">
                <h4>The fate of Elon Musks deal to buy Twitter</h4>
              </a>
              <div className="mt-20">
                <span className="color-gray-500 font-xs mr-30">
                  August 30, 2022
                </span>
                <span className="color-gray-500 font-xs">
                  4<span>Mins read</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-center">
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
      </div>
    </section>
  );
};

export default BlogsPage;

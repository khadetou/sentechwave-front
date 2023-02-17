import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "hooks/index";
import "moment/locale/fr";
import moment from "moment";
import { renderToHTML } from "next/dist/server/render";
import ReactHtmlParser from "react-html-parser";
import Trending from "./trending";

moment.locale("fr");
const BlogSinglePage = () => {
  const { blog } = useAppSelector((store) => store.blog);
  return (
    <section className="section-box shop-template mt-10">
      <div className="containers">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12 mb-50 display-list">
                <a className="tag-dot font-xs" href="#">
                  Technology
                </a>
                <h3 className="mt-15 mb-25">
                  The latest technologies to be used for VR in 2022
                </h3>
                <div className="box-author mb-5">
                  <div className="img-author mr-30">
                    <Image
                      width={40}
                      height={40}
                      src="/imgs/page/blog/author.png"
                      alt="Ecom"
                    />
                    <span className="font-md-bold">By Sugar Rosie</span>
                  </div>
                  <span className="datepost color-gray-500 font-sm mr-30">
                    August 30, 2022
                  </span>
                  <span className="timeread color-gray-500 font-sm">
                    4 Mins read
                  </span>
                </div>
                <div className="image-feature">
                  <Image
                    width={996}
                    height={450}
                    src="/imgs/page/blog/img-big.png"
                    alt="Ecom"
                  />
                </div>
                <div className="content-text">
                  <p>
                    Nibiru, a new crypto derivatives protocol co-founded by
                    Tribe Capital GP Arjun Sethi, has raised $7.5 million in
                    seed funding at a valuation of $100 million, two sources
                    familiar with the matter told TechCrunch.
                    <br />
                    Tribe Capital, Republic Crypto and Kraken invested in the
                    seed round, a source said, requesting anonymity as the
                    information is not public.
                    <br />
                    Sethi co-founded the startups with four industry veterans —
                    including Sankha Banerjee, formerly with Credence Capital
                    and Binance; and Boris Revsin, who co-founded Republic
                    Capital. Nibiru has attracted nearly two dozen contributors
                    from firms including Meta, Reddit, JP Morgan and Yahoo, an
                    investor deck obtained by TechCrunch showed.
                  </p>
                  <p>
                    The crypto market is flooded with centralized (Binance, FTX)
                    and decentralized ETH-based perpetuals and options trading
                    platforms (Dydx, Opyn, Perpetual Protocol). Nibiru is
                    attempting to build the first mainstream decentralized
                    multichain solution, according to its website.
                    <br />
                    Currently in private testnet, Nibiru’s decentralized
                    protocol unifies derivatives trading, spot trading, staking
                    and bonded liquidity, and aims to serve users across over 40
                    blockchains, it says on the website.
                    <br />
                    On its investor deck, Nibiru says it will provide customers
                    with unlocked hedging opportunities, extremely low gas
                    costs, MEV resistance and high futures volume. It is also
                    creating composable yield in rising/falling regimes using
                    decentralized perps and options, the deck added.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Nibiru, a new crypto derivatives
                    protocol co-founded by Tribe Capital GP Arjun Sethi, has
                    raised $7.5 million in seed funding at a valuation of $100
                    million, two sources familiar with the matter told
                    TechCrunch. has raised $7.5 million in seed funding at a
                    valuation of $100 million, two sources familiar with the
                    matter told TechCrunch.
                  </p>
                  <h4 className="mt-20 mb-20">
                    The FTC Is Closing in on Runaway AI
                  </h4>
                  <p>
                    Nibiru, a new crypto derivatives protocol co-founded by
                    Tribe Capital GP Arjun Sethi, has raised $7.5 million in
                    seed funding at a valuation of $100 million, two sources
                    familiar with the matter told TechCrunch.
                    <br />
                    Tribe Capital, Republic Crypto and Kraken invested in the
                    seed round, a source said, requesting anonymity as the
                    information is not public.
                    <br />
                    Sethi co-founded the startups with four industry veterans —
                    including Sankha Banerjee, formerly with Credence Capital
                    and Binance; and Boris Revsin, who co-founded Republic
                    Capital. Nibiru has attracted nearly two dozen contributors
                    from firms including Meta, Reddit, JP Morgan and Yahoo, an
                    investor deck obtained by TechCrunch showed.
                  </p>
                  <div className="image-single">
                    <Image
                      width={996}
                      height={274}
                      src="/imgs/page/blog/img-single.png"
                      alt="Ecom"
                    />
                  </div>
                  <p>
                    Nibiru, a new crypto derivatives protocol co-founded by
                    Tribe Capital GP Arjun Sethi, has raised $7.5 million in
                    seed funding at a valuation of $100 million, two sources
                    familiar with the matter told TechCrunch.
                    <br />
                    Tribe Capital, Republic Crypto and Kraken invested in the
                    seed round, a source said, requesting anonymity as the
                    information is not public.
                    <br />
                    Sethi co-founded the startups with four industry veterans —
                    including Sankha Banerjee, formerly with Credence Capital
                    and Binance; and Boris Revsin, who co-founded Republic
                    Capital. Nibiru has attracted nearly two dozen contributors
                    from firms including Meta, Reddit, JP Morgan and Yahoo, an
                    investor deck obtained by TechCrunch showed.
                  </p>
                  <p>
                    The crypto market is flooded with centralized (Binance, FTX)
                    and decentralized ETH-based perpetuals and options trading
                    platforms (Dydx, Opyn, Perpetual Protocol). Nibiru is
                    attempting to build the first mainstream decentralized
                    multichain solution, according to its website.
                    <br />
                    Currently in private testnet, Nibiru’s decentralized
                    protocol unifies derivatives trading, spot trading, staking
                    and bonded liquidity, and aims to serve users across over 40
                    blockchains, it says on the website.
                    <br />
                    On its investor deck, Nibiru says it will provide customers
                    with unlocked hedging opportunities, extremely low gas
                    costs, MEV resistance and high futures volume. It is also
                    creating composable yield in rising/falling regimes using
                    decentralized perps and options, the deck added.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Nibiru, a new crypto derivatives
                    protocol co-founded by Tribe Capital GP Arjun Sethi, has
                    raised $7.5 million in seed funding at a valuation of $100
                    million, two sources familiar with the matter told
                    TechCrunch. has raised $7.5 million in seed funding at a
                    valuation of $100 million, two sources familiar with the
                    matter told TechCrunch.
                  </p>
                </div>
                <div className="border-bottom-4 mb-20"></div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box-tags">
                      <a className="btn btn-tags mr-10 hover-up">Technology</a>
                      <a className="btn btn-tags mr-10 hover-up">Devices</a>
                      <a className="btn btn-tags mr-10 hover-up">AI</a>
                    </div>
                  </div>
                  <div className="col-lg-6 text-end">
                    <div className="d-inline-block pt-5 pb-5">
                      <div className="share-link">
                        <span className="font-md-bold color-brand-3 mr-15">
                          Share
                        </span>
                        <a className="facebook hover-up" href="#">
                          {" "}
                        </a>
                        <a className="printest hover-up" href="#"></a>
                        <a className="twitter hover-up" href="#"></a>
                        <a className="instagram hover-up" href="#"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-bottom-4 mt-20 mb-30"></div>
                <div className="comment-box">
                  <div className="comment-item">
                    <div className="top-comment">
                      <div className="image-author">
                        {" "}
                        <Image
                          width={40}
                          height={40}
                          src="/imgs/page/blog/author.png"
                          alt="Ecom"
                        />
                      </div>
                      <div className="author-name">
                        {" "}
                        <span className="font-md-bold color-gray-900">
                          Sugar Rosie
                        </span>
                        <div className="info-author">
                          <span className="font-sm color-gray-500">
                            306 posts
                          </span>
                          <span className="font-sm color-gray-500">
                            Since 2012
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="comment-content font-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                  </div>
                </div>
                <div className="border-bottom-4 mt-40 mb-90"></div>
                <h5 className="font-md-bold mb-30">Leave a comment</h5>
                <div className="form-comment">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Write comment"
                          rows={5}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
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
                          className="btn btn-buy w-auto"
                          type="submit"
                          value="Post Comment"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="font-md-bold mb-30 mt-20">Comments</h5>
                <div className="comment-box mb-60">
                  <div className="comment-item comment-item-small">
                    <div className="top-comment">
                      <div className="image-author">
                        {" "}
                        <Image
                          width={40}
                          height={40}
                          src="/imgs/page/blog/author.png"
                          alt="Ecom"
                        />
                      </div>
                      <div className="author-name">
                        {" "}
                        <span className="font-md-bold color-gray-900 mr-20">
                          Siena Kim
                        </span>
                        <span className="font-sm color-gray-500">
                          August 30, 2022
                        </span>
                      </div>
                    </div>
                    <div className="comment-content font-md">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Nibiru, a new
                      crypto derivatives protocol co-founded by Tribe Capital GP
                      Arjun Sethi, has raised $7.5 million in seed funding at a
                      valuation of $100 million, two sources familiar with the
                      matter told TechCrunch.
                    </div>
                  </div>
                  <div className="comment-item comment-item-small">
                    <div className="top-comment">
                      <div className="image-author">
                        {" "}
                        <Image
                          width={40}
                          height={40}
                          src="/imgs/page/blog/author.png"
                          alt="Ecom"
                        />
                      </div>
                      <div className="author-name">
                        {" "}
                        <span className="font-md-bold color-gray-900 mr-20">
                          Siena Kim
                        </span>
                        <span className="font-sm color-gray-500">
                          August 30, 2022
                        </span>
                      </div>
                    </div>
                    <div className="comment-content font-md">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Nibiru, a new
                      crypto derivatives protocol co-founded by Tribe Capital GP
                      Arjun Sethi, has raised $7.5 million in seed funding at a
                      valuation of $100 million, two sources familiar with the
                      matter told TechCrunch.
                    </div>
                  </div>
                  <div className="comment-item comment-item-small">
                    <div className="top-comment">
                      <div className="image-author">
                        {" "}
                        <Image
                          width={40}
                          height={40}
                          src="/imgs/page/blog/author.png"
                          alt="Ecom"
                        />
                      </div>
                      <div className="author-name">
                        {" "}
                        <span className="font-md-bold color-gray-900 mr-20">
                          Siena Kim
                        </span>
                        <span className="font-sm color-gray-500">
                          August 30, 2022
                        </span>
                      </div>
                    </div>
                    <div className="comment-content font-md">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Nibiru, a new
                      crypto derivatives protocol co-founded by Tribe Capital GP
                      Arjun Sethi, has raised $7.5 million in seed funding at a
                      valuation of $100 million, two sources familiar with the
                      matter told TechCrunch.
                    </div>
                  </div>
                </div>
                <div className="nav-center text-end">
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
            </div>
          </div>
          <div className="col-lg-3">
            <div className="sidebar-ads">
              <div className="bg-electronic">
                <span className="big-deal mb-5">Big deal</span>
                <h4 className="font-25">Electronic</h4>
                <p className="font-16 color-brand-3">
                  Hot devices, Latest trending
                </p>
              </div>
            </div>
            <div className="sidebar-border">
              <div className="sidebar-head">
                <h6 className="color-gray-900">Blog Categories</h6>
              </div>
              <div className="sidebar-content">
                <ul className="list-nav-arrow">
                  <li>
                    <a href="blog.html">
                      Technology Trending<span className="number">09</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Entertainment<span className="number">12</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Tech Reviews<span className="number">24</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Gaming Blog<span className="number">34</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Crypto news<span className="number">65</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Software Development<span className="number">15</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      FinTech<span className="number">76</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Health Tech<span className="number">89</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Tips and Tricks<span className="number">23</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Make money online<span className="number">98</span>
                    </a>
                  </li>
                </ul>
                <div>
                  <div className="collapse" id="moreMenu">
                    <ul className="list-nav-arrow">
                      <li>
                        <a href="blog-2.html">
                          Home theater<span className="number">98</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-2.html">
                          Cameras & drones<span className="number">124</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-2.html">
                          PC gaming<span className="number">56</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="link-see-more mt-5"
                    data-bs-toggle="collapse"
                    href="#moreMenu"
                    role="button"
                    aria-expanded="false"
                    aria-controls="moreMenu"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
            <Trending />
            <div className="box-slider-item">
              <div className="head pb-15 border-brand-2">
                <h5 className="color-gray-900 text-xl font-bold">
                  Popular Tags
                </h5>
              </div>
              <div className="content-slider mb-50">
                <a className="btn btn-border mr-5" href="blog.html">
                  Games
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  Electronics
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  Video
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  Cellphone
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  Indoor
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  VGA Card
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  USB
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  Lightning
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  Camera
                </a>
                <a className="btn btn-border" href="blog.html">
                  Window
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  Air Vent
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  Bedroom
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  Laptop
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  Dashboard
                </a>
                <a className="btn btn-border mr-5" href="blog.html">
                  Keyboard
                </a>
              </div>
            </div>
            <div className="banner-right h-500 text-center mb-30">
              <span className="text-no font-11">No.9</span>
              <h5 className="font-23 mt-20">
                Sensitive Touch
                <br className="d-none d-lg-block" />
                without fingerprint
              </h5>
              <p className="text-desc font-16 mt-15">
                Smooth handle and accurate click
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSinglePage;

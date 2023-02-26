import { useAppDispatch, useAppSelector } from "hooks/index";
import StarsRating from "react-star-rate";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { createReviews } from "redux/products/productSlice";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";
import "moment/locale/fr";
import { initials } from "utils/index";
import RelatedProducts from "./relatedProducts";
import MayLike from "./maylike";
import RecViewed from "./recviewed";

moment.locale("fr");
const Bottom = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number | undefined>(0);
  const { product } = useAppSelector((store) => store.product);
  const { isAuthenticated } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const {
    query: { id },
    asPath,
  } = useRouter();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      rating,
      comment,
    };
    const reviewData = {
      data,
      id,
    };

    dispatch(createReviews(reviewData));
  };

  // CALCULATE THE PERCENTAGE FOR EACH BRACKETS
  const percentage = (n1: any, n2: any) => {
    if (
      product &&
      product.numbReviews !== 0 &&
      product &&
      product.rating !== 0
    ) {
      return (
        product &&
        (
          (product.reviews
            .map((review: any) => {
              if (review.rating >= n1 && review.rating <= n2) {
                return review;
              } else {
                return 0;
              }
            })
            .filter((count: any) => count != 0).length *
            100) /
          product.numbReviews
        ).toFixed(0)
      );
    } else {
      return 0;
    }
  };

  //  CALCULATE THE TOTAL PERCENTAGE OF RATINGS
  const calculate_the_percentage = (numbReviews: number, rating: number) => {
    if (numbReviews !== 0 && rating !== 0) {
      return (rating * 100) / numbReviews;
    } else {
      return 0;
    }
  };

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
                  <div className="col-lg-4">
                    <h4 className="mb-30 title-question font-bold">
                      Avis clients
                    </h4>
                    <div className="d-flex mb-30">
                      <div className="product-rate d-inline-block mr-15">
                        <div
                          className="product-rating"
                          style={{
                            width: `${
                              product &&
                              calculate_the_percentage(5, product.rating)
                            }%`,
                          }}
                        ></div>
                      </div>
                      <h6> {product && product.rating.toFixed(1)} sur 5</h6>
                    </div>
                    <div className="progress">
                      <span>5 star</span>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${percentage(5, 5.9)}%` }}
                      >
                        {percentage(5, 5.9)}%
                      </div>
                    </div>
                    <div className="progress">
                      <span>4 star</span>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${percentage(4, 4.9)}%` }}
                      >
                        {percentage(4, 4.9)}%
                      </div>
                    </div>
                    <div className="progress">
                      <span>3 star</span>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${percentage(3, 3.9)}%` }}
                      >
                        {percentage(3, 3.9)}%
                      </div>
                    </div>
                    <div className="progress">
                      <span>2 star</span>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${product && percentage(2, 2.9)}%` }}
                      >
                        {percentage(2, 2.9)}%
                      </div>
                    </div>
                    <div className="progress mb-30">
                      <span>1 star</span>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${percentage(1, 1.9)}%` }}
                      >
                        {percentage(1, 1.9)}%
                      </div>
                    </div>
                    <a className="font-xs text-muted" href="#">
                      Comment les évaluations sont-elles calculées ?
                    </a>

                    {isAuthenticated ? (
                      <>
                        <div className="border-bottom pt-20 mb-40"></div>
                        <div>
                          <h4 className="!mb-2 title-question font-bold">
                            Donnez une Note
                          </h4>
                          <StarsRating
                            value={rating}
                            onChange={(e) => setRating(e)}
                            symbol={<FaStar size="20px" />}
                            classNamePrefix="stars"
                          />
                          <h4 className="!mt-4 !mb-2 title-question font-bold">
                            Votre Commentaire
                          </h4>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              onChange={(e) => setComment(e.target.value)}
                              value={comment}
                              placeholder="Donnez votre avis ici..."
                              rows={5}
                            ></textarea>
                          </div>
                        </div>
                        <div>
                          <div className="form-group">
                            <input
                              className="btn btn-buy w-auto"
                              type="submit"
                              value="Soumettre son avis"
                              readOnly
                              onClick={onSubmit}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="border-bottom pt-20 mb-40"></div>

                        <div>
                          <h3 className="font-bold text-2xl">
                            Donnez votre avis sur ce produit.
                          </h3>
                          <div className="text-base font-medium !my-2">
                            Partagez vos réflexions avec d&rsquo;autres clients.
                          </div>
                          <Link
                            href={{
                              pathname: "/login",
                              query: { from: asPath },
                            }}
                            className="w-[300px] rounded-lg shadow bg-white  border border-[#d5d9d9] inline-block text-center align-middle px-3 leading-5 py-2 font-bold text-[13px]"
                          >
                            Écrire une évaluation client
                          </Link>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="col-lg-8">
                    <h4 className="mb-30 title-question font-bold">
                      Avis des clients sur le produit.
                    </h4>
                    <div className="comment-list">
                      {product && product.reviews.length > 0 ? (
                        product.reviews.map((review: any) => (
                          <div
                            key={review._id}
                            className="single-comment justify-content-between d-flex mb-30 hover-up"
                          >
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                {/* <Image
                             src="/imgs/page/product/author-2.png"
                             alt="Ecom"
                             width={165}
                             height={168}
                           /> */}
                                <div className="text-base font-bold p-4 border rounded-full shadow-sm ">
                                  {initials(
                                    review.user.firstname,
                                    review.user.lastname
                                  )}
                                </div>
                                <a className="font-heading text-brand">
                                  {review.user.firstname}
                                </a>
                              </div>
                              <div className="desc">
                                <div className="d-flex justify-content-between mb-10">
                                  <div className="d-flex align-items-center">
                                    <span className="font-xs color-gray-700">
                                      {moment(review.createdAt).format("LLL")}
                                    </span>
                                  </div>
                                  <div className="product-rate d-inline-block">
                                    <div
                                      className="product-rating"
                                      style={{
                                        width: `${calculate_the_percentage(
                                          5,
                                          review.rating
                                        )}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <p className="mb-10 font-sm color-gray-900">
                                  {review.comment}
                                  {/* <a className="reply" href="#">
                               {" "}
                               Reply
                             </a> */}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="">
                          <h3 className="font-bold text-xl">
                            No Comments yet!
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-bottom pt-30 mb-50"></div>
            <RelatedProducts />
            <div className="border-bottom pt-20 mb-40"></div>
            <MayLike />
            <div className="border-bottom pt-20 mb-40"></div>
            <RecViewed />
            <div className="border-bottom pt-20 mb-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;

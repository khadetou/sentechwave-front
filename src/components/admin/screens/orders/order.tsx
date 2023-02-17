import { useAppSelector } from "hooks/index";
import moment from "moment";
import Image from "next/image";
import "moment/locale/fr";
import Link from "next/link";
import { orderDelivered, orderPaid } from "redux/order/orderSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

moment.locale("fr");
const OrderPage = () => {
  const { order } = useAppSelector((state) => state.order);
  const dispatch = useDispatch();
  const {
    query: { id },
  } = useRouter();
  return (
    <section className="content-main">
      <div className="content-header">
        <div>
          <Link
            href="/dashboard"
            className="btn btn-primary tw-flex tw-items-center"
          >
            <i className="fi-rs-angle-left tw-text-[10px] !tw-mt-[2px]"></i>
            Retourner
          </Link>
        </div>
        <div>
          <h2 className="content-title card-title tw-text-xl tw-font-bold">
            Détails de la commande
          </h2>
          <p>Indentifiant ID: {order && order._id}</p>
        </div>
      </div>
      <div className="card">
        <header className="card-header !tw-bg-white">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 mb-lg-0 mb-15">
              <span>
                <i className="material-icons md-calendar_today"></i>
                <b>{order && moment(order.createdAt).format("LLL")}</b>
              </span>
              <br />
              <small className="text-muted">
                Identifiant ID: {order && order._id}
              </small>
            </div>
            <div className="col-lg-6 col-md-6 ms-auto text-md-end">
              <button
                disabled={order && order.isPaid && order.isShipped}
                className="btn btn-success tw-mr-1 !tw-bg-primary"
                onClick={() => {
                  if (!order.isShipped) {
                    dispatch(orderDelivered(id as string));
                  }
                  if (!order.isPaid) {
                    dispatch(orderPaid(id as string));
                  }
                  toast.success("Produit Livré & Payé !");
                }}
              >
                Livré & Payé
              </button>
              <a className="btn btn-primary" href="#">
                Enregistrer
              </a>
              <a
                className="btn btn-secondary !tw-bg-[#6c757d] print ms-2"
                href="#"
              >
                <i className="icon material-icons md-print"></i>
              </a>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="row mb-50 mt-20 order-info-wrap">
            <div className="col-md-4">
              <article className="icontext align-items-start">
                <span className="icon icon-sm rounded-circle bg-primary-light">
                  <i className="text-primary material-icons md-person"></i>
                </span>
                <div className="text">
                  <h6 className="mb-1 tw-font-bold tw-text-lg">Client</h6>
                  <p className="mb-1">
                    {order && order.user.firstname}{" "}
                    {order && order.user.lastname} <br />
                    <a
                      href="http://wp.alithemes.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="12737e776a52776a737f627e773c717d7f"
                    >
                      {order && order.user.email}
                    </a>
                    <br />
                    {order && order.shippingAddress.phone}
                  </p>
                  <a>Voir profile</a>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="icontext align-items-start">
                <span className="icon icon-sm rounded-circle bg-primary-light">
                  <i className="text-primary material-icons md-local_shipping"></i>
                </span>
                <div className="text">
                  <h6 className="mb-1 tw-font-bold tw-text-lg">
                    Info de commande
                  </h6>
                  <p className="mb-1">
                    Expédition: {order && order.shippingAddress.address}s <br />
                    Méthode de paiement: Payer à la livraison <br />
                    Status: {order && order.isShipped ? "En cours" : "Livré"}
                  </p>
                  <a href="#">Download info</a>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="icontext align-items-start">
                <span className="icon icon-sm rounded-circle bg-primary-light">
                  <i className="text-primary material-icons md-place"></i>
                </span>
                <div className="text">
                  <h6 className="mb-1 tw-font-bold tw-text-lg">Deliver to</h6>
                  <p className="mb-1">
                    Region: {order && order.shippingAddress.region},{" "}
                    {order && order.shippingAddress.ville} <br />
                    {order && order.shippingAddress.address} <br />
                    {order && order.shippingAddress.phone}
                  </p>
                  <a href="#">View profile</a>
                </div>
              </article>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th
                        style={{ width: "40%" }}
                        className="!tw-text-[13px] !tw-border-none"
                      >
                        Product
                      </th>
                      <th
                        style={{ width: "20%" }}
                        className="!tw-text-[13px] !tw-border-none"
                      >
                        Unit Price
                      </th>
                      <th
                        style={{ width: "20%" }}
                        className="!tw-text-[13px] !tw-border-none"
                      >
                        Quantity
                      </th>
                      <th
                        style={{ width: "20%" }}
                        className="text-end !tw-text-[13px] !tw-border-none"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order &&
                      order.orderItems.map((item: any) => (
                        <tr key={item._id}>
                          <td className="tw-border-none">
                            <a className="itemside" href="#">
                              <div className="left">
                                <Image
                                  src={item.images[0].url}
                                  width={40}
                                  height={40}
                                  className="img-xs"
                                  alt="Item"
                                />
                              </div>
                              <div className="info">{item.name}</div>
                            </a>
                          </td>
                          <td className="tw-border-none">
                            {Number(item.price).toLocaleString("fr-FR", {
                              style: "currency",
                              currency: "XOF",
                            })}
                          </td>
                          <td className="tw-border-none">{item.qty}</td>
                          <td className="text-end tw-border-none">
                            {Number(item.price * item.qty).toLocaleString(
                              "fr-FR",
                              {
                                style: "currency",
                                currency: "XOF",
                              }
                            )}
                          </td>
                        </tr>
                      ))}
                    <tr>
                      <td className="tw-border-none" colSpan={4}>
                        <article className="float-end">
                          <dl className="dlist">
                            <dt>Sous Total:</dt>
                            <dd>
                              {order &&
                                Number(order.itemsPrice).toLocaleString(
                                  "fr-FR",
                                  {
                                    style: "currency",
                                    currency: "XOF",
                                  }
                                )}
                            </dd>
                          </dl>
                          <dl className="dlist">
                            <dt>Coût d&apos;expédition:</dt>
                            <dd>
                              {order &&
                                Number(order.shippingPrice).toLocaleString(
                                  "fr-FR",
                                  {
                                    style: "currency",
                                    currency: "XOF",
                                  }
                                )}
                            </dd>
                          </dl>
                          <dl className="dlist">
                            <dt>Total:</dt>
                            <dd>
                              <b className="h5">
                                {order &&
                                  Number(order.totalPrice).toLocaleString(
                                    "fr-FR",
                                    {
                                      style: "currency",
                                      currency: "XOF",
                                    }
                                  )}
                              </b>
                            </dd>
                          </dl>
                          <dl className="dlist">
                            <dt className="text-muted">Status:</dt>
                            <dd>
                              {order && order.isPaid ? (
                                <span className="badge rounded-pill alert-success text-success">
                                  Commande Payé
                                </span>
                              ) : (
                                <span className="badge rounded-pill alert-danger text-danger">
                                  Commade Non Payé
                                </span>
                              )}
                            </dd>
                          </dl>
                        </article>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <div className="box shadow-sm bg-light">
                <h6 className="mb-15">Payment info</h6>
                <p>
                  <Image
                    src="/imgs/card-brands/2.png"
                    className="border"
                    height={20}
                    width={20}
                    alt=""
                  />
                  Master Card **** **** 4768 <br />
                  Business name: Grand Market LLC <br />
                  Phone: +1 (800) 555-154-52
                </p>
              </div>
              <div className="h-25 pt-4">
                <div className="mb-3">
                  <label>Notes</label>
                  <textarea
                    className="form-control"
                    name="notes"
                    id="notes"
                    placeholder="Type some note"
                  ></textarea>
                </div>
                <button className="btn btn-primary">Save note</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;

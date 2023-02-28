import { useAppDispatch, useAppSelector } from "hooks/index";
import moment, { Moment } from "moment";
import "moment/locale/fr";
import Link from "next/link";
import { initials } from "utils/index";
import { useEffect, useState } from "react";
import { deleteOrder } from "redux/order/orderSlice";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Image from "next/image";
const MySwal = withReactContent(Swal);

moment.locale("fr");
const OrdersTab = () => {
  const dispatch = useAppDispatch();
  const onDelete = (_id: any) => {
    MySwal.fire({
      title: "Etes vous sure ?",
      text: "De vouloire supprimé",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#218838",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Oui, supprimé!",
      cancelButtonText: "No, annulé!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteOrder(_id));
      }
    });
  };
  const { orders } = useAppSelector((state) => state.order);
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div
      className="tab-pane fade active show fade"
      id="tab-orders"
      role="tabpanel"
      aria-labelledby="tab-orders"
    >
      {orders.map((order: any) => (
        <div key={order._id} className="box-orders">
          <div className="head-orders">
            <div className="head-left">
              <h5 className="mr-20 text-[20px] font-bold">
                ID de Commande: {order._id}
              </h5>
              <span className="font-md color-brand-3 mr-20">
                Date: {moment(order.createdAt).format("lll")}
              </span>
              {order.isShipped ? (
                <span className="label-delivery label-delivered">
                  Delivered
                </span>
              ) : (
                <span className="label-delivery">Delivery in progress</span>
              )}
            </div>
            <div className="head-right">
              <Link
                className="btn btn-buy font-sm-bold w-auto"
                href={`/dashboard/order/${order._id}`}
              >
                Voir la commande
              </Link>
            </div>
          </div>
          <div className="body-orders">
            <div className="list-orders">
              {order.orderItems.map((item: any) => (
                <div key={item._id} className="item-orders">
                  <div className="image-orders">
                    <Image
                      src={item.images[1].url}
                      alt="Ecom"
                      width={130}
                      height={103}
                    />
                  </div>
                  <div className="info-orders">
                    <h5 className="font-bold text-[20px]">{item.name}</h5>
                  </div>
                  <div className="quantity-orders font-bold text-[20px] !w-[13%] ">
                    <h5>Quantité: {item.qty}</h5>
                  </div>
                  <div className="price-orders !w-[29%] !max-w-[inherit]">
                    <h3 className="font-bold text-[32px]">
                      {Number(item.price).toLocaleString("fr-Fr", {
                        style: "currency",
                        currency: "XOF",
                      })}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

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
  );
};

export default OrdersTab;

/**
 * in progress:  <span className="label-delivery">Delivery in progress</span>
 * delivered: <span className="label-delivery label-delivered">Delivered</span>
 * cancel:<span className="label-delivery label-cancel">Cancel</span>
 *
 */

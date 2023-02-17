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
      className="tab-pane fade"
      id="tab-orders"
      role="tabpanel"
      aria-labelledby="tab-orders"
    >
      <div className="box-orders">
        <div className="head-orders">
          <div className="head-left">
            <h5 className="mr-20">Order ID: #EWFDSAF1321655</h5>
            <span className="font-md color-brand-3 mr-20">
              Date: 18 September 2022
            </span>
            <span className="label-delivery">Delivery in progress</span>
          </div>
          <div className="head-right">
            <a className="btn btn-buy font-sm-bold w-auto">View Order</a>
          </div>
        </div>
        <div className="body-orders">
          <div className="list-orders">
            <div className="item-orders">
              <div className="image-orders">
                <Image
                  src="/imgs/page/account/img-1.png"
                  alt="Ecom"
                  width={130}
                  height={103}
                />
              </div>
              <div className="info-orders">
                <h5>
                  Samsung 36&rdquo; French door 28 cu. ft. Smart Energy Star
                  Refrigerator
                </h5>
              </div>
              <div className="quantity-orders">
                <h5>Quantity: 01</h5>
              </div>
              <div className="price-orders">
                <h3>$2.51</h3>
              </div>
            </div>
            <div className="item-orders">
              <div className="image-orders">
                <Image
                  src="/imgs/page/account/img-1.png"
                  alt="Ecom"
                  width={130}
                  height={103}
                />
              </div>
              <div className="info-orders">
                <h5>
                  Samsung 36&rdquo; French door 28 cu. ft. Smart Energy Star
                  Refrigerator
                </h5>
              </div>
              <div className="quantity-orders">
                <h5>Quantity: 01</h5>
              </div>
              <div className="price-orders">
                <h3>$2.51</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-orders">
        <div className="head-orders">
          <div className="head-left">
            <h5 className="mr-20">Order ID: #EWFDSAF1321655</h5>
            <span className="font-md color-brand-3 mr-20">
              Date: 18 September 2022
            </span>
            <span className="label-delivery label-delivered">Delivered</span>
          </div>
          <div className="head-right">
            <a className="btn btn-buy font-sm-bold w-auto">View Order</a>
          </div>
        </div>
        <div className="body-orders">
          <div className="list-orders">
            <div className="item-orders">
              <div className="image-orders">
                <Image
                  src="/imgs/page/account/img-1.png"
                  alt="Ecom"
                  width={130}
                  height={103}
                />
              </div>
              <div className="info-orders">
                <h5>
                  Samsung 36&rdquo; French door 28 cu. ft. Smart Energy Star
                  Refrigerator
                </h5>
              </div>
              <div className="quantity-orders">
                <h5>Quantity: 01</h5>
              </div>
              <div className="price-orders">
                <h3>$2.51</h3>
              </div>
            </div>
            <div className="item-orders">
              <div className="image-orders">
                <Image
                  src="/imgs/page/account/img-1.png"
                  alt="Ecom"
                  width={130}
                  height={103}
                />
              </div>
              <div className="info-orders">
                <h5>
                  Samsung 36&rdquo; French door 28 cu. ft. Smart Energy Star
                  Refrigerator
                </h5>
              </div>
              <div className="quantity-orders">
                <h5>Quantity: 01</h5>
              </div>
              <div className="price-orders">
                <h3>$2.51</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-orders">
        <div className="head-orders">
          <div className="head-left">
            <h5 className="mr-20">Order ID: #EWFDSAF1321655</h5>
            <span className="font-md color-brand-3 mr-20">
              Date: 18 September 2022
            </span>
            <span className="label-delivery label-cancel">Cancel</span>
          </div>
          <div className="head-right">
            <a className="btn btn-buy font-sm-bold w-auto">View Order</a>
          </div>
        </div>
        <div className="body-orders">
          <div className="list-orders">
            <div className="item-orders">
              <div className="image-orders">
                <Image
                  src="/imgs/page/product/ss.html"
                  width={130}
                  height={103}
                  alt="Ecom"
                />
              </div>
              <div className="info-orders">
                <h5>
                  Samsung 36&rdquo; French door 28 cu. ft. Smart Energy Star
                  Refrigerator
                </h5>
              </div>
              <div className="quantity-orders">
                <h5>Quantity: 01</h5>
              </div>
              <div className="price-orders">
                <h3>$2.51</h3>
              </div>
            </div>
            <div className="item-orders">
              <div className="image-orders">
                <Image
                  src="/imgs/page/product/ss2.html"
                  width={130}
                  height={103}
                  alt="Ecom"
                />
              </div>
              <div className="info-orders">
                <h5>
                  Samsung 36&rdquo; French door 28 cu. ft. Smart Energy Star
                  Refrigerator
                </h5>
              </div>
              <div className="quantity-orders">
                <h5>Quantity: 01</h5>
              </div>
              <div className="price-orders">
                <h3>$2.51</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
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

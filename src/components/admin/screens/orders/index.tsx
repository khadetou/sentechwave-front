import "moment/locale/fr";
import momen from "moment";
import { useAppDispatch, useAppSelector } from "hooks/index";
import moment from "moment";
import Link from "next/link";
import { toast } from "react-toastify";
import { initials } from "utils/index";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteOrder } from "redux/order/orderSlice";

const MySwal = withReactContent(Swal);

const OrdersPage = () => {
  const { orders } = useAppSelector((state) => state.order);
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
  return (
    <section className="content-main">
      <div className="content-header">
        <div>
          <h2 className="content-title card-title">Order List</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search order ID"
            className="form-control bg-white"
          />
        </div>
      </div>
      <div className="card mb-4">
        <header className="card-header !tw-bg-white">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status</option>
                <option>Active</option>
                <option>Disabled</option>
                <option>Show all</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="!tw-text-[13px] !tw-border-none">#ID</th>
                  <th scope="col" className="!tw-text-[13px] !tw-border-none">
                    Name
                  </th>
                  <th scope="col" className="!tw-text-[13px] !tw-border-none">
                    Email
                  </th>
                  <th scope="col" className="!tw-text-[13px] !tw-border-none">
                    Total
                  </th>
                  <th scope="col" className="!tw-text-[13px] !tw-border-none">
                    Status
                  </th>
                  <th scope="col" className="!tw-text-[13px] !tw-border-none">
                    Date
                  </th>
                  <th
                    scope="col"
                    className="text-end !tw-text-[13px] !tw-border-none"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.map((order: any) => (
                    <tr key={order._id}>
                      <td className="!tw-text-[13px] tw-border-none">
                        {order._id}
                      </td>
                      <td className="!tw-text-[13px] tw-border-none">
                        <b>
                          {order.user &&
                            initials(order.user.firstname, order.user.lastname)}
                        </b>
                      </td>
                      <td className="!tw-text-[13px] tw-border-none">
                        <a
                          className="__cf_email__"
                          data-cfemail="eb868a999d8285ab8e938a869b878ec5888486"
                        >
                          {order.user && order.user.email}
                        </a>
                      </td>
                      <td className="!tw-text-[13px] tw-border-none">
                        {Number(order.totalPrice).toLocaleString("fr-Fr", {
                          style: "currency",
                          currency: "XOF",
                        })}
                      </td>
                      <td className="!tw-text-[13px] tw-border-none">
                        <span
                          className={`badge rounded-pill ${
                            order.isShipped ? "alert-success" : "alert-warning"
                          }`}
                        >
                          {order.isShipped ? "Délivré" : "En cours"}
                        </span>
                      </td>
                      <td className="!tw-text-[13px] tw-border-none">
                        {moment(order.createdAt).format("LL")}
                      </td>
                      <td className="text-end tw-flex tw-justify-end !tw-text-[13px] tw-border-none tw-items-center">
                        <Link
                          href={`/admin/orders/${order._id}`}
                          className="btn btn-md rounded tw-text-[13px] !tw-px-2 font-sm"
                        >
                          Detail
                        </Link>
                        <div className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            className="btn btn-light rounded btn-sm !tw-p-[10px] !tw-max-w-[38px] tw-ml-1 font-sm"
                          >
                            {" "}
                            <i className="material-icons md-more_horiz"></i>{" "}
                          </a>
                          <div className="dropdown-menu">
                            <Link
                              className="dropdown-item"
                              href={`/products/${order._id}`}
                            >
                              View detail
                            </Link>
                            <Link className="dropdown-item" href="/checkout">
                              Edit info
                            </Link>

                            <a
                              className="dropdown-item text-danger"
                              onClick={() => {
                                onDelete(order._id);
                              }}
                            >
                              Delete{" "}
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="pagination-area mt-15 mb-50">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-start">
            <li className="page-item active">
              <a className="page-link" href="#">
                01
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                02
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                03
              </a>
            </li>
            <li className="page-item">
              <a className="page-link dot" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                16
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="material-icons md-chevron_right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default OrdersPage;

import "moment/locale/fr";
import momen from "moment";
import { useAppDispatch, useAppSelector } from "hooks/index";
import moment from "moment";
import Link from "next/link";
import { toast } from "react-toastify";
import { initials } from "utils/index";
import Image from "next/image";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteOrder } from "redux/order/orderSlice";
import TopOrders from "./top/ordersTop";

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
    <div>
      <TopOrders />
      <div className="rounded-2xl border border-neutral bg-white dark:border-dark-neutral-border dark:bg-dark-neutral-bg overflow-x-scroll scrollbar-hide p-[25px] mb-[25px]">
        <div className="flex items-center justify-between pb-4 border-neutral border-b mb-5 dark:border-dark-neutral-border">
          <p className="text-subtitle-semibold font-semibold text-gray-1100 dark:text-gray-dark-1100">
            Commandes récentes
          </p>
          <div className="dropdowns dropdowns-end ml-auto translate-x-4 z-10">
            <label
              className="cursor-pointer dropdowns-label flex items-center justify-between py-2 px-4"
              tabIndex={0}
            >
              <Image
                className="cursor-pointer"
                src="/imgs/icons/icon-toggle.svg"
                alt="toggle icon"
                width={3}
                height={13}
              />
            </label>
            <ul className="dropdowns-content" tabIndex={0}>
              <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border  dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                <li className="text-normal mb-[7px]">
                  <a
                    className="flex items-center bg-transparent p-0 gap-[7px]"
                    href="#"
                  >
                    {" "}
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Sales report
                    </span>
                  </a>
                </li>
                <li className="text-normal mb-[7px]">
                  <a
                    className="flex items-center bg-transparent p-0 gap-[7px]"
                    href="#"
                  >
                    {" "}
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Export report
                    </span>
                  </a>
                </li>
                <li className="text-normal mb-[7px]">
                  <a
                    className="flex items-center bg-transparent p-0 gap-[7px]"
                    href="#"
                  >
                    {" "}
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Profit manage
                    </span>
                  </a>
                </li>
                <li className="text-normal mb-[7px]">
                  <a
                    className="flex items-center bg-transparent p-0 gap-[7px]"
                    href="#"
                  >
                    {" "}
                    <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                      Revenue report
                    </span>
                  </a>
                </li>
                <div className="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
                <li className="text-normal mb-[7px]">
                  <a
                    className="flex items-center bg-transparent p-0 gap-[7px]"
                    href="#remove"
                  >
                    {" "}
                    <span className="text-red-500 text-[11px] leading-4">
                      Remove widget
                    </span>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-neutral dark:border-dark-neutral-border pb-[15px]">
              <th className="text-left">
                <input
                  className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[6px]"
                  type="checkbox"
                />
              </th>
              <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
                ID de commande
              </th>
              <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
                Nom du client
              </th>
              <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
                Méthode de paiement
              </th>
              <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
                Date
              </th>
              <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
                Statut
              </th>
              <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
                Total
              </th>
              <th className="font-normal text-normal text-gray-400 text-center pb-[15px] dark:text-gray-dark-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order: any) => (
                <tr
                  key={order._id}
                  className="border-b text-normal text-gray-1100 border-neutral dark:border-dark-neutral-border dark:text-gray-dark-1100"
                >
                  <td className="text-left">
                    <input
                      className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                      type="checkbox"
                    />
                  </td>
                  <td>
                    <span>{order._id}</span>
                  </td>
                  <td className="py-[25px]">
                    <div className="flex items-center gap-2">
                      {/* <div className="w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src="/imgs/seller-avatar-1.png"
                      alt="user avatar"
                      width={24}
                      height={24}
                    />
                  </div> */}
                      <div className="!p-3 rounded-full overflow-hidden font-bold text-sm shadow-md">
                        {initials(order.user.firstname, order.user.lastname)}
                      </div>
                      <p className="text-normal text-gray-1100 ">
                        {order.user.firstname} {order.user.lastname}
                      </p>
                    </div>
                  </td>
                  <td>
                    <span>Paiement à la livraison</span>
                  </td>
                  <td>
                    <span>{moment(order.createdAt).format("LLL")}</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-x-2">
                      <div className="w-2 h-2 rounded-full bg-green"></div>
                      <p className="text-normal rounded-full px-2 text-[#f55b28] text-gray-1100 bg-[#ffa5648b] ">
                        En cours ...
                      </p>
                    </div>
                  </td>
                  <td>
                    <span>
                      {Number(order.totalPrice).toLocaleString("fr-FR", {
                        style: "currency",
                        currency: "XOF",
                      })}
                    </span>
                  </td>
                  <td>
                    <div className="dropdowns dropdowns-end w-full">
                      <label
                        className="cursor-pointer dropdowns-label flex items-center justify-between p-3"
                        tabIndex={0}
                      >
                        <Image
                          className="mx-auto cursor-pointer"
                          src="/imgs/icons/icon-more.svg"
                          alt="more icon"
                          width={16}
                          height={4}
                        />
                      </label>
                      <ul className="dropdowns-content" tabIndex={0}>
                        <div className="relative menu rounded-box dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                          <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                          <li className="text-normal mb-[7px]">
                            <Link
                              className="flex items-center bg-transparent p-0 gap-[7px] show-detail"
                              href={`/admin/orders/${order._id}`}
                            >
                              {" "}
                              <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                                Voir les détails
                              </span>
                            </Link>
                          </li>

                          <div className="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
                          <li className="text-normal mb-[7px]">
                            <a
                              className="flex items-center bg-transparent p-0 gap-[7px]"
                              onClick={() => onDelete(order._id)}
                            >
                              <span className="text-red-500 text-[11px] leading-4">
                                Supprimer
                              </span>
                            </a>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-x-10">
        <div>
          <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-color-brands font-semibold py-[11px] px-[18px] hover:bg-color-brands">
            1
          </button>
          <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-transparent font-semibold text-gray-1100 py-[11px] px-[18px] hover:text-white hover:bg-color-brands dark:text-gray-dark-1100">
            2
          </button>
          <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-transparent font-semibold text-gray-1100 py-[11px] px-[18px] hover:text-white hover:bg-color-brands dark:text-gray-dark-1100">
            3
          </button>
          <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-transparent font-semibold text-gray-1100 py-[11px] px-[18px] hover:text-white hover:bg-color-brands dark:text-gray-dark-1100">
            4
          </button>
          <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-transparent font-semibold text-gray-1100 py-[11px] px-[18px] hover:text-white hover:bg-color-brands dark:text-gray-dark-1100">
            5
          </button>
        </div>
        <a
          className="items-center justify-center border rounded-lg border-neutral hidden gap-x-[10px] px-[18px] py-[11px] dark:border-dark-neutral-border sm:flex"
          href="#"
        >
          {" "}
          <span className="text-gray-400 text-xs font-semibold leading-[18px] dark:text-gray-dark-400">
            Next
          </span>
          <Image
            src="/imgs/icons/icon-arrow-right-long.svg"
            alt="arrow right icon"
            width={16}
            height={16}
          />
        </a>
      </div>
    </div>
  );
};

export default OrdersPage;

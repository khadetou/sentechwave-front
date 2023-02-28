import { useAppSelector } from "hooks/index";
import moment from "moment";
import Image from "next/image";
import "moment/locale/fr";
import Link from "next/link";
import { orderDelivered, orderPaid } from "redux/order/orderSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import OrderTop from "./top/orderTop";

moment.locale("fr");
const OrderPage = () => {
  const { order } = useAppSelector((state) => state.order);
  const dispatch = useDispatch();
  const {
    query: { id },
  } = useRouter();
  return (
    <div>
      <OrderTop />
      <div className="border rounded-2xl !pt-5 !pl-5 !pr-6 bg-white border-neutral !pb-[20px]   mb-[39px]">
        <h3 className="font-normal text-gray-1100 text-base leading-4 mb-[23px] ">
          Orders ID: {order && order._id}
        </h3>
        <div className="flex justify-between flex-col gap-y-4 mb-[10px] lg:mb-[2px] lg:flex-row">
          <div className="flex items-center gap-x-2">
            {" "}
            <Image
              src="/imgs/icons/icon-calendar-1.svg"
              alt="calendar icon"
              width={16}
              height={16}
            />
            <time className="font-normal text-gray-1100 text-base leading-4 ">
              {order && moment(order.createAt).format("lll")}
            </time>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="bg-neutral rounded-[5px] ">
              <select className="select w-full border font-normal text-sm leading-4 text-gray-400 !py-4 h-fit min-h-fit mb-0 border-[#E8EDF2]  focus:outline-none pl-[13px] max-w-[225px] rounded-[5px]">
                <option disabled selected>
                  Change Status
                </option>
                <option>En cours</option>
                <option>Livrée</option>
                <option>Annulé</option>
              </select>
            </div>
            <button className="btn border-0 !py-0 capitalize font-normal rounded-[5px] text-[#7E7E8F] bg-[#E8EDF2]  hover:bg-[#E8EDF2] ">
              Enregistrer
            </button>
            <button className="btn border-0 !py-0 rounded-[5px] bg-[#E8EDF2]  hover:bg-[#E8EDF2] ">
              {" "}
              <Image
                src="/imgs/icons/icon-print.svg"
                alt="print icon"
                width={26}
                height={22}
              />
            </button>
          </div>
        </div>
        <p className="text-sm leading-4 text-[#50D1B2] my-[10px]">
          En cours ...
        </p>
        <div className="w-full mb-5 bg-[#E8EDF2]  h-[1px]"></div>
        <div className="flex justify-between mb-12 flex-col gap-y-10 lg:flex-row">
          <div className="flex items-start gap-x-[10px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8EDF2] ">
              <Image
                className=""
                src="/imgs/icons/icon-user.svg"
                alt="user icon"
                width={16}
                height={16}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                Client
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Prénom et Nom: {order && order.user.firstname}{" "}
                {order && order.user.lastname}
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                E-mail:{" "}
                <a
                  className="__cf_email__"
                  data-cfemail="03776a6e2d69666d6d6a6d647043667b626e736f662d606c6e"
                >
                  {order && order.user.email}
                </a>
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Téléphone: {order && order.user.phone}
              </p>
              <Link
                href={`/admin/users/${order && order.user._id}`}
                className="capitalize text-xs text-color-brands py-2 rounded-lg px-[13.5px] bg-[#E8EDF2]  max-w-[114px]"
              >
                Voir le profil
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-x-[10px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8EDF2] ">
              <Image
                className=""
                src="/imgs/icons/icon-bag-2.svg"
                alt="bag icon"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                Informations de commande
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Livraison: En cours
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Méthode de paiement: paiement à la livraison
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Statut: Pending
              </p>
              <button className="capitalize text-xs text-color-brands py-2 rounded-lg px-[13.5px] bg-[#E8EDF2]  max-w-[114px]">
                Télécharger les informations
              </button>
            </div>
          </div>
          <div className="flex items-start gap-x-[10px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8EDF2] ">
              <Image
                className=""
                src="/imgs/icons/icon-send-2.svg"
                alt="send icon"
                width={20}
                height={20}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-sm leading-4 text-gray-1100 font-semibold ">
                Livrer à
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Address: {order && order.shippingAddress.address}
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Region: {order && order.shippingAddress.region}
              </p>
              <p className="text-sm leading-4 text-gray-500 ">Pays: Sénégal</p>

              <Link
                href={`/admin/users/${order && order.user._id}`}
                className="capitalize text-xs text-color-brands py-2 rounded-lg px-[13.5px] bg-[#E8EDF2]  max-w-[114px]"
              >
                Voir le profil
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-start mb-9 flex-col gap-[30px] sm:flex-row">
          <div className="p-5 border flex flex-col gap-y-2 flex-1 border-neutral   rounded-[7px] max-w-[421px]">
            <p className="text-sm leading-4 text-gray-1100 font-semibold ">
              Information de paiement
            </p>
            <div className="flex items-center gap-x-[6px]">
              <Image
                className="inline-block border border-neutral py-[7px] px-[10px]  rounded-[2px]"
                src="/imgs/icons/icon-master-card.svg"
                alt="american express"
                width={34}
                height={23}
              />
              <p className="text-sm leading-4 text-gray-500 ">
                Master Card**** ****6557
              </p>
            </div>
            <p className="text-sm leading-4 text-gray-500 ">
              Business name: Fox Market LLC
            </p>
            <p className="text-sm leading-4 text-gray-500 ">
              Téléphone: {order && order.shippingAddress.phone}
            </p>
          </div>
          <div className="flex-1 w-full">
            <p className="text-sm leading-4 text-gray-1100 font-semibold  mb-[5px]">
              Notes
            </p>
            <textarea
              className="textarea w-full text-gray-400 resize-none pt-1 bg-transparent border border-neutral  focus:outline-none   min-h-[115px] rounded-[7px] p-[10px]"
              placeholder="Type some note"
            ></textarea>
          </div>
        </div>
        <div className="w-full mb-10 bg-[#E8EDF2]  h-[1px]"></div>
        <p className="text-xl pl-5 text-gray-1100 font-semibold  leading-[18px] mb-[28px] xl:pl-7">
          Produits
        </p>
        <div className="overflow-x-scroll scrollbar-hide xl:overflow-x-hidden">
          <table className="w-full mb-6 min-w-[900px]">
            <tbody>
              <tr className="border-b border-neutral   pb-[15px]">
                <th>
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[6px]"
                    type="checkbox"
                  />
                </th>
                <th className="font-medium text-base text-gray-1000 text-left pb-[15px] w-[342px]">
                  Nom du produit
                </th>
                <th className="font-medium text-base text-gray-1000 text-left pb-[15px] w-[197px]">
                  Prix
                </th>
                <th className="font-medium text-base text-gray-1000 text-left pb-[15px]">
                  Quantité
                </th>
                <th className="font-medium text-base text-gray-1000 text-right pr-6 pb-[15px]">
                  Total
                </th>
              </tr>
              {order &&
                order.orderItems.map((item: any) => (
                  <tr
                    key={item._id}
                    className="border-b border-[#E8EDF2]  pb-[15px]"
                  >
                    <td className="text-center">
                      <input
                        className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                        type="checkbox"
                      />
                    </td>
                    <td className="flex items-center gap-x-[30px] pr-[30px] max-w-[370px] py-[15px]">
                      <Image
                        className="w-12"
                        src={item.images[0].url}
                        alt="product"
                        width={80}
                        height={80}
                      />
                      <span className="text-base truncate text-gray-500">
                        {item.name}
                      </span>
                    </td>
                    <td className="text-base !align-middle text-gray-500">
                      {Number(item.price).toLocaleString("fr-FR", {
                        style: "currency",
                        currency: "XOF",
                      })}
                    </td>
                    <td className="text-base !align-middle text-gray-500 pl-[30px]">
                      {item.qty}
                    </td>
                    <td className="text-base !align-middle text-gray-500 text-right pr-3">
                      {Number(item.qty * item.price).toLocaleString("fr-FR", {
                        style: "currency",
                        currency: "XOF",
                      })}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center gap-x-36 justify-start lg:gap-x-48 sm:justify-end">
          <div className="flex flex-col gap-y-[15px]">
            <p className="text-sm leading-4 text-gray-500 ">Sous-total:</p>
            <p className="text-sm leading-4 text-gray-500 ">Livraison:</p>
            <p className="text-sm leading-4 text-gray-500 ">Remise:</p>
            <p className="text-gray-500 font-semibold text-[20px] leading-[18px]">
              Total:
            </p>
            <p className="text-sm leading-4 text-gray-500 ">Statut:</p>
          </div>
          <div className="flex flex-col text-right gap-y-[15px]">
            <p className="text-sm leading-4 text-gray-500 ">
              {order &&
                Number(order.itemsPrice).toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "XOF",
                })}
            </p>
            <p className="text-sm leading-4 text-gray-500 ">
              {order &&
                Number(order.shippingPrice).toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "XOF",
                })}
            </p>
            <p className="text-sm leading-4 text-gray-500 ">0 FCFA</p>
            <p className="text-gray-500 font-semibold text-[20px] leading-[18px] ">
              {order &&
                Number(order.totalPrice).toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "XOF",
                })}
            </p>
            <button className="btn text-sm leading-4 border-0 h-fit min-h-fit py-2 font-normal capitalize px-[19.5px] text-[#50D1B2] bg-[#E8EDF2]  hover:bg-[#E8EDF2] ">
              En cours...
            </button>
          </div>
        </div>
      </div>
      <Link className="flex items-center gap-x-2" href="/admin/orders">
        <Image
          src="/imgs/icons/icon-arrow-left-long.svg"
          alt="arrow left icon"
          width={24}
          height={24}
        />
        <span className="text-xs text-gray-500 hover:text-gray-dark-500">
          Retour à la liste des commandes
        </span>
      </Link>
    </div>
  );
};

export default OrderPage;

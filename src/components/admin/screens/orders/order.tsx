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
          Orders ID: #68543
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
              Mon, Jan 28, 2022, 8:40AM
            </time>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="bg-neutral rounded-[5px] ">
              <select className="select w-full border font-normal text-sm leading-4 text-gray-400 !py-4 h-fit min-h-fit mb-0 border-[#E8EDF2]  focus:outline-none pl-[13px] max-w-[225px] rounded-[5px]">
                <option disabled selected>
                  Change Status
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
              </select>
            </div>
            <button className="btn border-0 !py-0 capitalize font-normal rounded-[5px] text-[#7E7E8F] bg-[#E8EDF2]  hover:bg-[#E8EDF2] ">
              Save
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
        <p className="text-sm leading-4 text-[#50D1B2] my-[10px]">Pending</p>
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
                Customer
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Full name: Jane Cooper
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                E-mail:{" "}
                <a
                  href="https://wp.alithemes.com/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="03776a6e2d69666d6d6a6d647043667b626e736f662d606c6e"
                >
                  [email&#160;protected]
                </a>
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Phone: +099 856 245
              </p>
              <button className="capitalize text-xs text-color-brands py-2 rounded-lg px-[13.5px] bg-[#E8EDF2]  max-w-[114px]">
                View Profile
              </button>
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
                Order Info
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Shipping: Next express
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Pay method: Paypal
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Status: Pending
              </p>
              <button className="capitalize text-xs text-color-brands py-2 rounded-lg px-[13.5px] bg-[#E8EDF2]  max-w-[114px]">
                Download info
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
                Deliver to
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                Address: Santa Ana, Illinois 85486
              </p>
              <p className="text-sm leading-4 text-gray-500 ">
                2972 Westheimer Rd.
              </p>
              <p className="text-sm leading-4 text-gray-500 ">Block 9A</p>
              <button className="capitalize text-xs text-color-brands py-2 rounded-lg px-[13.5px] bg-[#E8EDF2]  max-w-[114px]">
                View Profile
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start mb-9 flex-col gap-[30px] sm:flex-row">
          <div className="p-5 border flex flex-col gap-y-2 flex-1 border-neutral   rounded-[7px] max-w-[421px]">
            <p className="text-sm leading-4 text-gray-1100 font-semibold ">
              Payment info
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
              Phone: +09985 6578 52
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
          Products
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
                  Product Name
                </th>
                <th className="font-medium text-base text-gray-1000 text-left pb-[15px] w-[197px]">
                  Price
                </th>
                <th className="font-medium text-base text-gray-1000 text-left pb-[15px]">
                  Quantity
                </th>
                <th className="font-medium text-base text-gray-1000 text-right pr-6 pb-[15px]">
                  Total
                </th>
              </tr>
              <tr className="border-b border-[#E8EDF2]  pb-[15px]">
                <td className="text-center">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                    type="checkbox"
                  />
                </td>
                <td className="flex items-center gap-x-[30px] py-[15px]">
                  <Image
                    className="w-12"
                    src="/imgs/product-1.png"
                    alt="product"
                    width={46}
                    height={46}
                  />
                  <span className="text-base text-gray-500">
                    Bose noirse cancelling
                  </span>
                </td>
                <td className="text-base text-gray-500">$948.55</td>
                <td className="text-base text-gray-500 pl-[30px]">2</td>
                <td className="text-base text-gray-500 text-right pr-3">
                  $630.44
                </td>
              </tr>
              <tr className="border-b border-[#E8EDF2]  pb-[15px]">
                <td className="text-center">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                    type="checkbox"
                  />
                </td>
                <td className="flex items-center gap-x-[30px] py-[15px]">
                  <Image
                    className="w-12"
                    src="/imgs/product-2.png"
                    alt="product"
                    width={46}
                    height={46}
                  />
                  <span className="text-base text-gray-500">
                    Bose noirse cancelling
                  </span>
                </td>
                <td className="text-base text-gray-500">$948.55</td>
                <td className="text-base text-gray-500 pl-[30px]">2</td>
                <td className="text-base text-gray-500 text-right pr-3">
                  $630.44
                </td>
              </tr>
              <tr className="border-b border-[#E8EDF2]  pb-[15px]">
                <td className="text-center">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                    type="checkbox"
                  />
                </td>
                <td className="flex items-center gap-x-[30px] py-[15px]">
                  <Image
                    className="w-12"
                    src="/imgs/product-3.png"
                    alt="product"
                    width={46}
                    height={46}
                  />
                  <span className="text-base text-gray-500">
                    Bose noirse cancelling
                  </span>
                </td>
                <td className="text-base text-gray-500">$948.55</td>
                <td className="text-base text-gray-500 pl-[30px]">2</td>
                <td className="text-base text-gray-500 text-right pr-3">
                  $630.44
                </td>
              </tr>
              <tr className="border-b border-[#E8EDF2]  pb-[15px]">
                <td className="text-center">
                  <input
                    className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                    type="checkbox"
                  />
                </td>
                <td className="flex items-center gap-x-[30px] py-[15px]">
                  <Image
                    className="w-12"
                    src="/imgs/product-4.png"
                    alt="product"
                    width={46}
                    height={46}
                  />
                  <span className="text-base text-gray-500">
                    Bose noirse cancelling
                  </span>
                </td>
                <td className="text-base text-gray-500">$948.55</td>
                <td className="text-base text-gray-500 pl-[30px]">2</td>
                <td className="text-base text-gray-500 text-right pr-3">
                  $630.44
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center gap-x-36 justify-start lg:gap-x-48 sm:justify-end">
          <div className="flex flex-col gap-y-[15px]">
            <p className="text-sm leading-4 text-gray-500 ">Subtotal:</p>
            <p className="text-sm leading-4 text-gray-500 ">Tax(20%):</p>
            <p className="text-sm leading-4 text-gray-500 ">Discount:</p>
            <p className="text-gray-500 font-semibold text-[20px] leading-[18px]">
              Total:
            </p>
            <p className="text-sm leading-4 text-gray-500 ">Status:</p>
          </div>
          <div className="flex flex-col text-right gap-y-[15px]">
            <p className="text-sm leading-4 text-gray-500 ">$630.44</p>
            <p className="text-sm leading-4 text-gray-500 ">$782.01</p>
            <p className="text-sm leading-4 text-gray-500 ">$293.01</p>
            <p className="text-gray-500 font-semibold text-[20px] leading-[18px] ">
              310,000
            </p>
            <button className="btn text-sm leading-4 border-0 h-fit min-h-fit py-2 font-normal capitalize px-[19.5px] text-[#50D1B2] bg-[#E8EDF2]  hover:bg-[#E8EDF2] ">
              Pending
            </button>
          </div>
        </div>
      </div>
      <a className="flex items-center gap-x-2" href="#">
        <Image
          src="/imgs/icons/icon-arrow-left-long.svg"
          alt="arrow left icon"
          width={24}
          height={24}
        />
        <span className="text-xs text-gray-500 hover:text-gray-dark-500">
          Back to Orders List
        </span>
      </a>
    </div>
  );
};

export default OrderPage;

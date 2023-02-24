import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import { deleteUser } from "redux/auth/authSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import UserTop from "./top/userTop";

const MySwal = withReactContent(Swal);
const UserPage = () => {
  const { customer } = useAppSelector((store) => store.auth);
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
        dispatch(deleteUser(_id));
      }
    });
  };
  return (
    <div>
      <UserTop />
      <div className="flex justify-between flex-col xl:py-[20px] xl:px-[20px] gap-x-[38px] xl:flex-row">
        <div className="flex flex-col gap-y-6">
          <div className="border bg-white border-neutral rounded-2xl dark:bg-dark-neutral-bg dark:border-dark-neutral-border px-[30px] pt-[30px] pb-[43px] md:w-[50%] md:mx-auto xl:w-full xl:mx-0">
            <Image
              className="mb-5 mx-auto w-[150px]"
              src="/imgs/crm-cus-details-1.png"
              alt="avatar"
              width={150}
              height={150}
            />
            <h2 className="font-semibold text-center text-[20px] leading-[18px] text-[#313442] mb-[5px]">
              Steven Jonh
            </h2>
            <p className="leading-4 text-gray-500 text-center text-[14px] dark:text-gray-dark-500 mb-[15px]">
              Cchicago, 6015, USA
            </p>
            <button className="flex items-center justify-center bg-color-brands rounded-md mx-auto w-[250px] gap-x-[6px] py-[10px] mb-[27px]">
              <Image
                src="/imgs/icons/icon-edit.svg"
                alt="edit icon"
                width={15}
                height={14}
              />
              <span className="leading-4 font-semibold text-[#FCFCFC] text-[14px]">
                Edit Profile
              </span>
            </button>
            <table className="w-full mb-[27px]">
              <tbody>
                <tr>
                  <th className="text-gray-400 font-normal capitalize text-left leading-4 dark:text-gray-dark-400 text-[14px] pb-[15px]">
                    Email ID:
                  </th>
                  <td className="leading-4 text-gray-1100 text-left dark:text-gray-dark-1100 text-[14px] pb-[15px]">
                    <a
                      href="https://wp.alithemes.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="3340475645565d595c5b5d73545e525a5f1d505c5e"
                    >
                      [email&#160;protected]
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-gray-400 font-normal capitalize text-left leading-4 dark:text-gray-dark-400 text-[14px] pb-[15px]">
                    Birthday:
                  </th>
                  <td className="leading-4 text-gray-1100 text-left dark:text-gray-dark-1100 text-[14px] pb-[15px]">
                    18 September 1985
                  </td>
                </tr>
                <tr>
                  <th className="text-gray-400 font-normal capitalize text-left leading-4 dark:text-gray-dark-400 text-[14px] pb-[15px]">
                    Phone:
                  </th>
                  <td className="leading-4 text-gray-1100 text-left dark:text-gray-dark-1100 text-[14px] pb-[15px]">
                    +88 879 23249
                  </td>
                </tr>
                <tr>
                  <th className="text-gray-400 font-normal capitalize text-left leading-4 dark:text-gray-dark-400 text-[14px] pb-[15px]">
                    Country:
                  </th>
                  <td className="leading-4 text-gray-1100 text-left dark:text-gray-dark-1100 text-[14px] pb-[15px]">
                    France
                  </td>
                </tr>
                <tr>
                  <th className="text-gray-400 font-normal capitalize text-left leading-4 dark:text-gray-dark-400 text-[14px] pb-[15px]">
                    State/Region:
                  </th>
                  <td className="leading-4 text-gray-1100 text-left dark:text-gray-dark-1100 text-[14px] pb-[15px]">
                    Paris
                  </td>
                </tr>
                <tr>
                  <th className="text-gray-400 font-normal capitalize text-left leading-4 dark:text-gray-dark-400 text-[14px] pb-[15px]">
                    Address:
                  </th>
                  <td className="leading-4 text-gray-1100 text-left dark:text-gray-dark-1100 text-[14px] pb-[15px]">
                    15 No, Bondi Street
                  </td>
                </tr>
                <tr>
                  <th className="text-gray-400 font-normal capitalize text-left leading-4 dark:text-gray-dark-400 text-[14px] pb-[15px]">
                    Joined:
                  </th>
                  <td className="leading-4 text-gray-1100 text-left dark:text-gray-dark-1100 text-[14px] pb-[15px]">
                    28 March 2015
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-color-brands leading-4 mb-4 text-[14px]">
              Social Network
            </p>
            <div className="flex items-center gap-x-3">
              <a href="#">
                <Image
                  src="/imgs/icons/icon-facebook-2.svg"
                  alt="facebook icon"
                  width={26}
                  height={26}
                />
              </a>
              <a href="#">
                <Image
                  src="/imgs/icons/icon-instagram-2.svg"
                  alt="instagram icon"
                  width={26}
                  height={26}
                />
              </a>
              <a href="#">
                <Image
                  src="/imgs/icons/icon-twitter-2.svg"
                  alt="twitter icon"
                  width={26}
                  height={26}
                />
              </a>
              <a href="#">
                <Image
                  src="/imgs/icons/icon-linkedin-2.svg"
                  alt="linkedin icon"
                  width={26}
                  height={26}
                />
              </a>
            </div>
          </div>
          <div className="rounded-2xl relative bg-[#5192FF] h-[242px] pt-[30px] pl-[42px] mb-6 sm:min-w-[364px]">
            <h3 className="text-white font-bold text-lg mb-4 leading-[22px]">
              Recruiting?
            </h3>
            <p className="text-white text-xs font-normal mb-5 max-w-[233px]">
              Advertise your jobs to millions of monthly users and search 16.8
              million CVs in our database.
            </p>
            <button className="flex items-center gap-x-2 bg-white text-xs rounded-[6px] py-[7px] px-[14px] text-[#37404E]">
              Post a Job
              <Image
                src="/imgs/icons/icon-arrow-right.svg"
                alt="arrow right icon"
                width={12}
                height={13}
              />
            </button>
            <Image
              className="absolute bottom-0 right-4"
              src="/imgs/asset-dashboard-image.svg"
              alt="asset dashboard"
              width={205}
              height={126}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="border bg-white border-neutral rounded-2xl mb-9 px-[28px] pb-[18px] pt-[22px] dark:bg-dark-neutral-bg dark:border-dark-neutral-border">
            <div className="flex justify-between pb-5 border-b border-neutral flex-col items-stretch gap-y-3 dark:border-dark-neutral-border sm:items-center mb-[11px] sm:flex-row">
              <h3 className="text-base leading-5 font-semibold text-gray-500 dark:text-gray-dark-500">
                Orders List
              </h3>
              <select className="select w-full border rounded-lg font-normal text-sm leading-4 text-gray-400 !py-4 h-fit min-h-fit border-[#E8EDF2] dark:border-[#313442] focus:outline-none pl-[13px] min-w-[252px] dark:text-gray-dark-400 mb-0 max-w-[173px]">
                <option disabled selected>
                  Status
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
              </select>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Wiless Speaker
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $782.01
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Macbook Pro
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $601.13
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Dell Laptop
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $202.87
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Macbook Air
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $739.65
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Macbook
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $293.01
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  LG Laptop
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $779.58
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Macbook Pro
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $169.43
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Macbook Pro
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $576.28
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Macbook
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $778.35
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  LG Laptop
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $446.61
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Macbook Pro
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $351.02
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border border-b">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Macbook Pro
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $450.54
              </span>
            </div>
            <div className="flex justify-between items-center border-neutral py-[15px] dark:border-dark-neutral-border">
              <p className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[107px] sm:inline">
                ID:<span> 70668</span>
              </p>
              <div className="flex items-center gap-x-2 w-[161px]">
                <Image
                  src="/imgs/crm-product-1.png"
                  alt="product"
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Macbook Pro
                </span>
              </div>
              <time className="leading-4 text-gray-1100 hidden text-[14px] dark:text-gray-dark-1100 w-[135px] sm:inline">
                17 Oct, 2022
              </time>
              <div className="items-center hidden gap-x-[6px] w-[135px] sm:flex">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100">
                  Completed
                </span>
              </div>
              <span className="leading-4 text-gray-1100 text-[14px] dark:text-gray-dark-1100 sm:w-[98px]">
                $105.55
              </span>
            </div>
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
      </div>
    </div>
  );
};

export default UserPage;

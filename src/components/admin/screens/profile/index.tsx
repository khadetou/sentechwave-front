import ButtonLoading from "components/Loadingbutton";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { reset, UpdateUser } from "redux/auth/authSlice";
import TopProfile from "./top";

const MyProfilePage = () => {
  const [show, setShow] = useState(false);
  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (store) => store.auth
  );
  const dispatch = useAppDispatch();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    password_2: "",
    address: "",
    region: "",
    ville: "",
  });

  useEffect(() => {
    if (user) {
      setValues({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        address: "",
        region: "",
        ville: "",
        password: "",
        password_2: "",
      });
    }
    if (isError) {
      if (
        message.message !== "undefined" &&
        message.message.length > 0 &&
        Array.isArray(message.message)
      ) {
        let list: Array<string> = [...message.message];
        list.map((item: any) => toast.error(item));
        dispatch(reset());
      } else {
        toast.error(message.message);
        dispatch(reset());
      }
    }
    if (isSuccess) {
      toast.success("Produit Mis à jour avec succès!");
      dispatch(reset());
    }
  }, [user, isSuccess, isError, message, dispatch]);

  const {
    address,
    email,
    firstname,
    lastname,
    password,
    password_2,
    phone,
    region,
    ville,
  } = values;
  const {
    query: { id },
  } = useRouter();

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: any) => {
    if (password !== password_2) {
      toast.error("Vos mots de passes ne correspondent pas!");
      return;
    }
    const data = {
      firstname,
      lastname,
      phone,
      email,
      password,
    };
    dispatch(UpdateUser(data));
  };
  return (
    <div>
      <TopProfile />
      <div className="flex gap-6 flex-col lg:flex-row">
        <aside className="bg-white border border-neutral p-6 text-center rounded-lg w-full dark:bg-dark-neutral-bg dark:border-dark-neutral-border lg:max-w-[299px]">
          <Image
            className="block mb-2 mx-auto"
            src="/imgs/seller-details-1.png"
            alt="seller details 1"
            width={80}
            height={81}
          />
          <p className="text-sm leading-4 text-gray-1100 font-semibold dark:text-gray-dark-1100 mb-2">
            FoxMedia.,JSC
          </p>
          <p className="text-xs text-gray-500 mb-6 dark:text-gray-dark-500">
            Since 2012
          </p>
          <table className="w-full ml-3 mb-2">
            <tbody>
              <tr>
                <th className="text-xs text-gray-500 font-normal pb-4 capitalize text-left dark:text-gray-dark-500">
                  Owner Name
                </th>
                <td className="text-xs text-gray-1100 pb-4 text-left dark:text-gray-dark-1100">
                  Jonhson Mark
                </td>
              </tr>
              <tr>
                <th className="text-xs text-gray-500 font-normal pb-4 capitalize text-left dark:text-gray-dark-500">
                  Company Type
                </th>
                <td className="text-xs text-gray-1100 pb-4 text-left dark:text-gray-dark-1100">
                  Partnership
                </td>
              </tr>
              <tr>
                <th className="text-xs text-gray-500 font-normal pb-4 capitalize text-left dark:text-gray-dark-500">
                  Email
                </th>
                <td className="text-xs text-gray-1100 pb-4 text-left dark:text-gray-dark-1100">
                  <a
                    href="https://wp.alithemes.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="3e585146535b5a575f7e59535f52105d51"
                  >
                    [email&#160;protected]
                  </a>
                </td>
              </tr>
              <tr>
                <th className="text-xs text-gray-500 font-normal pb-4 capitalize text-left dark:text-gray-dark-500">
                  Website
                </th>
                <td className="text-xs text-gray-1100 pb-4 text-left dark:text-gray-dark-1100">
                  foxmedia.com.uk
                </td>
              </tr>
              <tr>
                <th className="text-xs text-gray-500 font-normal pb-4 capitalize text-left dark:text-gray-dark-500">
                  Contact No.
                </th>
                <td className="text-xs text-gray-1100 pb-4 text-left dark:text-gray-dark-1100">
                  (+18) 985 45632
                </td>
              </tr>
              <tr>
                <th className="text-xs text-gray-500 font-normal pb-4 capitalize text-left dark:text-gray-dark-500">
                  Fax
                </th>
                <td className="text-xs text-gray-1100 pb-4 text-left dark:text-gray-dark-1100">
                  (+18) 985 45648
                </td>
              </tr>
              <tr>
                <th className="text-xs text-gray-500 font-normal pb-4 capitalize text-left dark:text-gray-dark-500">
                  Location
                </th>
                <td className="text-xs text-gray-1100 pb-4 text-left dark:text-gray-dark-1100">
                  United Kingdom
                </td>
              </tr>
              <tr>
                <th className="text-xs text-gray-500 font-normal pb-4 capitalize text-left dark:text-gray-dark-500">
                  Joined
                </th>
                <td className="text-xs text-gray-1100 pb-4 text-left dark:text-gray-dark-1100">
                  18 January 2012
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-black font-semibold pt-6 border-t border-dashed border-gray-300 text-left capitalize mb-[18px] dark:border-gray-dark-300 dark:text-white">
            Customer Reviews
          </p>
          <div className="flex items-center gap-x-10 bg-neutral rounded-lg dark:bg-dark-neutral-border pt-[17px] pr-[17px] pb-[14px] pl-[19px] mb-[19px]">
            <div className="flex items-center relative overflow-hidden gap-[3px]">
              <Image
                src="/imgs/icons/icon-star.svg"
                alt="star icon"
                width={17}
                height={16}
              />
              <Image
                src="/imgs/icons/icon-star.svg"
                alt="star icon"
                width={17}
                height={16}
              />
              <Image
                src="/imgs/icons/icon-star.svg"
                alt="star icon"
                width={17}
                height={16}
              />
              <Image
                src="/imgs/icons/icon-star.svg"
                alt="star icon"
                width={17}
                height={16}
              />
              <Image
                src="/imgs/icons/icon-star.svg"
                alt="star icon"
                width={17}
                height={16}
              />
              <div className="flex items-center absolute overflow-hidden gap-[3px] w-[100%]">
                <Image
                  src="/imgs/icons/icon-star-yellow.svg"
                  alt="star icon"
                  width={17}
                  height={16}
                />
                <Image
                  src="/imgs/icons/icon-star-yellow.svg"
                  alt="star icon"
                  width={17}
                  height={16}
                />
                <Image
                  src="/imgs/icons/icon-star-yellow.svg"
                  alt="star icon"
                  width={17}
                  height={16}
                />
                <Image
                  src="/imgs/icons/icon-star-yellow.svg"
                  alt="star icon"
                  width={17}
                  height={16}
                />
                <Image
                  src="/imgs/icons/icon-star-yellow.svg"
                  alt="star icon"
                  width={17}
                  height={16}
                />
              </div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-dark-500">
              ( 12k rates )
            </span>
          </div>
          <p className="text-xs text-gray-1100 text-left dark:text-gray-dark-1100 mb-[18px]">
            Total 12k reviews
          </p>
          <div className="flex items-center flex-col pb-6 mb-6 border-dashed border-b border-gray-300 gap-y-[5px] dark:border-gray-dark-300">
            <div className="flex items-center w-full gap-x-[14px]">
              <span className="text-xs text-gray-500 inline-block dark:text-gray-dark-500 w-[34px]">
                5 star
              </span>
              <div className="overflow-hidden bg-neutral flex-1 rounded-[5px] dark:bg-dark-neutral-border h-[5px]">
                <div className="flex flex-col justify-center overflow-hidden whitespace-nowrap w-[50%] bg-color-brands rounded-[5px] h-[5px]"></div>
              </div>
            </div>
            <div className="flex items-center w-full gap-x-[14px]">
              <span className="text-xs text-gray-500 inline-block dark:text-gray-dark-500 w-[34px]">
                4 star
              </span>
              <div className="overflow-hidden bg-neutral flex-1 rounded-[5px] dark:bg-dark-neutral-border h-[5px]">
                <div className="flex flex-col justify-center overflow-hidden whitespace-nowrap w-[40%] bg-green rounded-[5px] h-[5px]"></div>
              </div>
            </div>
            <div className="flex items-center w-full gap-x-[14px]">
              <span className="text-xs text-gray-500 inline-block dark:text-gray-dark-500 w-[34px]">
                3 star
              </span>
              <div className="overflow-hidden bg-neutral flex-1 rounded-[5px] dark:bg-dark-neutral-border h-[5px]">
                <div className="flex flex-col justify-center overflow-hidden whitespace-nowrap w-[30%] bg-pink rounded-[5px] h-[5px]"></div>
              </div>
            </div>
            <div className="flex items-center w-full gap-x-[14px]">
              <span className="text-xs text-gray-500 inline-block dark:text-gray-dark-500 w-[34px]">
                2 star
              </span>
              <div className="overflow-hidden bg-neutral flex-1 rounded-[5px] dark:bg-dark-neutral-border h-[5px]">
                <div className="flex flex-col justify-center overflow-hidden whitespace-nowrap w-[20%] bg-orange rounded-[5px] h-[5px]"></div>
              </div>
            </div>
            <div className="flex items-center w-full gap-x-[14px]">
              <span className="text-xs text-gray-500 inline-block dark:text-gray-dark-500 w-[34px]">
                1 star
              </span>
              <div className="overflow-hidden bg-neutral flex-1 rounded-[5px] dark:bg-dark-neutral-border h-[5px]">
                <div className="flex flex-col justify-center overflow-hidden whitespace-nowrap w-[70%] bg-red rounded-[5px] h-[5px]"></div>
              </div>
            </div>
          </div>
          <div className="text-xs font-semibold text-black text-left mb-[22px] dark:text-white">
            Contact this seller
          </div>
          <div className="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px] mb-[14px]">
            <input
              className="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
              type="text"
              placeholder="Subject"
            />
          </div>
          <textarea
            className="textarea w-full text-gray-400 resize-none pt-1 bg-transparent border border-neutral focus:outline-none dark:border-dark-neutral-border dark:bg-dark-neutral-bg dark:text-gray-dark-400 min-h-[125px] rounded-[7px] p-[10px] mb-[14px]"
            placeholder="Message"
          ></textarea>
          <button className="btn normal-case h-fit min-h-fit transition-all duration-300 border-4 bg-color-brands hover:bg-color-brands hover:border-[#B2A7FF] dark:hover:border-[#B2A7FF] block border-neutral-bg float-right py-[11px] px-[15px] dark:border-dark-neutral-bg">
            Send message
          </button>
        </aside>
        <div className="flex-1">
          <div className="border bg-white rounded-2xl border-neutral p-[23px] pt-[20px] dark:bg-dark-neutral-bg dark:border-dark-neutral-border mb-[30px]">
            <div className="flex justify-between mb-6">
              <div className="text-base leading-5 text-gray-1100 font-semibold dark:text-gray-dark-1100">
                Revenue
              </div>
              <div className="flex items-center gap-x-1">
                <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 text-color-brands font-normal rounded-[3px] bg-[#7364db1a] hover:bg-[#7364db1a] p-[5px] text-[10px]">
                  Day
                </button>
                <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-neutral text-gray-500 font-normal rounded-[3px] dark:text-gray-dark-500 hover:bg-neutral dark:hover:bg-dark-neutral-border dark:bg-dark-neutral-border p-[5px] text-[10px]">
                  Day
                </button>
                <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-neutral text-gray-500 font-normal rounded-[3px] dark:text-gray-dark-500 hover:bg-neutral dark:hover:bg-dark-neutral-border dark:bg-dark-neutral-border p-[5px] text-[10px]">
                  Month
                </button>
                <button className="btn text-sm h-fit min-h-fit capitalize leading-4 border-0 bg-neutral text-gray-500 font-normal rounded-[3px] dark:text-gray-dark-500 hover:bg-neutral dark:hover:bg-dark-neutral-border dark:bg-dark-neutral-border p-[5px] text-[10px]">
                  Year
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 mb-[35px] sm:grid-cols-3 xl:flex xl:justify-between">
              <button className="btn border-0 h-fit min-h-fit capitalize flex flex-col !px-5 rounded-lg gap-y-[6px] py-[15px] bg-[#50d1b233] hover:bg-[#50d1b233]">
                <span className="leading-4 font-medium text-[16px] text-[#2B9B80]">
                  1735
                </span>
                <span className="text-gray-1100 text-xs font-normal dark:text-gray-dark-1100">
                  Orders
                </span>
              </button>
              <button className="btn border-0 h-fit min-h-fit capitalize flex flex-col !px-5 rounded-lg gap-y-[6px] py-[15px] bg-[#2775ff33] hover:bg-[#2775ff33]">
                <span className="leading-4 font-medium text-[16px] text-[#2775FF]">
                  $283k
                </span>
                <span className="text-gray-1100 text-xs font-normal dark:text-gray-dark-1100">
                  Earnings
                </span>
              </button>
              <button className="btn border-0 h-fit min-h-fit capitalize flex flex-col !px-5 rounded-lg gap-y-[6px] py-[15px] bg-[#e2373833] hover:bg-[#e2373833]">
                <span className="leading-4 font-medium text-[16px] text-[#E23738]">
                  85k
                </span>
                <span className="text-gray-1100 text-xs font-normal dark:text-gray-dark-1100">
                  Transactions
                </span>
              </button>
              <button className="btn border-0 h-fit min-h-fit capitalize flex flex-col !px-5 rounded-lg gap-y-[6px] py-[15px] bg-[#dd50d633] hover:bg-[#dd50d633]">
                <span className="leading-4 font-medium text-[16px] text-[#DD50D6]">
                  365k
                </span>
                <span className="text-gray-1100 text-xs font-normal dark:text-gray-dark-1100">
                  Followers
                </span>
              </button>
              <button className="btn border-0 h-fit min-h-fit capitalize flex flex-col !px-5 rounded-lg gap-y-[6px] py-[15px] bg-[#50d1b233] hover:bg-[#50d1b233]">
                <span className="leading-4 font-medium text-[16px] text-[#2B9B80]">
                  125
                </span>
                <span className="text-gray-1100 text-xs font-normal dark:text-gray-dark-1100">
                  Refunds
                </span>
              </button>
              <button className="btn border-0 h-fit min-h-fit capitalize flex flex-col !px-5 rounded-lg gap-y-[6px] py-[15px] bg-[#2775ff33] hover:bg-[#2775ff33]">
                <span className="leading-4 font-medium text-[16px] text-[#2775FF]">
                  98%
                </span>
                <span className="text-gray-1100 text-xs font-normal dark:text-gray-dark-1100">
                  Conversation
                </span>
              </button>
              <button className="btn border-0 h-fit min-h-fit capitalize flex flex-col !px-5 rounded-lg gap-y-[6px] py-[15px] bg-[#fb7bb833] hover:bg-[#fb7bb833]">
                <span className="leading-4 font-medium text-[16px] text-[#FB7BB8]">
                  37.85
                </span>
                <span className="text-gray-1100 text-xs font-normal dark:text-gray-dark-1100">
                  Rating
                </span>
              </button>
            </div>
            <div>
              <canvas
                className="max-h-[350px]"
                width="400"
                height="400"
                id="sellerChart"
              ></canvas>
            </div>
          </div>
          <div className="border p-6 bg-white rounded-2xl border-neutral pb-0 overflow-x-scroll scrollbar-hide dark:bg-dark-neutral-bg dark:border-dark-neutral-border mb-[30px] xl:overflow-x-hidden">
            <div className="text-base leading-5 text-gray-1100 font-semibold dark:text-gray-dark-1100 mb-6">
              Products
            </div>
            <table className="w-full min-w-[760px]">
              <tbody>
                <tr>
                  <th className="border-b border-neutral pb-[17px] dark:border-dark-neutral-border">
                    <div className="flex items-center gap-x-[10px]">
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-dark-500">
                        Image
                      </span>
                      <Image
                        src="/imgs/icons/icon-arrow-up-down.svg"
                        alt="arrow up down icon"
                        width={8}
                        height={15}
                      />
                    </div>
                  </th>
                  <th className="border-b border-neutral pb-[17px] dark:border-dark-neutral-border">
                    <div className="flex items-center gap-x-[10px]">
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-dark-500">
                        Name
                      </span>
                      <Image
                        src="/imgs/icons/icon-arrow-up-down.svg"
                        alt="arrow up down icon"
                        width={8}
                        height={15}
                      />
                    </div>
                  </th>
                  <th className="border-b border-neutral pb-[17px] dark:border-dark-neutral-border">
                    <div className="flex items-center gap-x-[10px]">
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-dark-500">
                        Color
                      </span>
                      <Image
                        src="/imgs/icons/icon-arrow-up-down.svg"
                        alt="arrow up down icon"
                        width={8}
                        height={15}
                      />
                    </div>
                  </th>
                  <th className="border-b border-neutral pb-[17px] dark:border-dark-neutral-border">
                    <div className="flex items-center gap-x-[10px]">
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-dark-500">
                        Sales
                      </span>
                      <Image
                        src="/imgs/icons/icon-arrow-up-down.svg"
                        alt="arrow up down icon"
                        width={8}
                        height={15}
                      />
                    </div>
                  </th>
                  <th className="border-b border-neutral pb-[17px] dark:border-dark-neutral-border">
                    <div className="flex items-center gap-x-[10px]">
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-dark-500">
                        Available
                      </span>
                      <Image
                        src="/imgs/icons/icon-arrow-up-down.svg"
                        alt="arrow up down icon"
                        width={8}
                        height={15}
                      />
                    </div>
                  </th>
                  <th className="border-b border-neutral pb-[17px] dark:border-dark-neutral-border">
                    <div className="flex items-center gap-x-[10px]">
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-dark-500">
                        Price
                      </span>
                      <Image
                        src="/imgs/icons/icon-arrow-up-down.svg"
                        alt="arrow up down icon"
                        width={8}
                        height={15}
                      />
                    </div>
                  </th>
                  <th className="border-b border-neutral dark:border-dark-neutral-border"></th>
                </tr>
                <tr>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <Image
                      className="border border-neutral rounded-lg dark:border-dark-neutral-border w-[86px]"
                      src="/imgs/product-11.png"
                      alt="product"
                      width={86}
                      height={86}
                    />
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold dark:text-gray-dark-1100 max-w-[168px]">
                      Cubitt Smart Watch CT2S Waterproof
                    </p>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                      Silver
                    </p>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                        556
                      </p>
                      <Image
                        src="/imgs/icons/icon-arrow-up-long.svg"
                        alt="arrow up icon"
                        width={16}
                        height={16}
                      />
                    </div>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                        453
                      </p>
                      <progress
                        className="progress progress-error w-[56px]"
                        value="10"
                        max="100"
                      ></progress>
                    </div>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold dark:text-gray-dark-1100">
                      $576.28
                    </p>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <Image
                      className="border border-neutral rounded-lg dark:border-dark-neutral-border w-[86px]"
                      src="/imgs/product-11.png"
                      alt="product"
                      width={86}
                      height={86}
                    />
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold dark:text-gray-dark-1100 max-w-[168px]">
                      Cubitt Smart Watch CT2S Waterproof
                    </p>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                      Silver
                    </p>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                        556
                      </p>
                      <Image
                        src="/imgs/icons/icon-arrow-up-long.svg"
                        alt="arrow up icon"
                        width={16}
                        height={16}
                      />
                    </div>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                        453
                      </p>
                      <progress
                        className="progress progress-error w-[56px]"
                        value="10"
                        max="100"
                      ></progress>
                    </div>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold dark:text-gray-dark-1100">
                      $576.28
                    </p>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border">
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border !border-0">
                    <Image
                      className="border border-neutral rounded-lg dark:border-dark-neutral-border w-[86px]"
                      src="/imgs/product-11.png"
                      alt="product"
                      width={86}
                      height={86}
                    />
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border !border-0">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold dark:text-gray-dark-1100 max-w-[168px]">
                      Cubitt Smart Watch CT2S Waterproof
                    </p>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border !border-0">
                    <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                      Silver
                    </p>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border !border-0">
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                        556
                      </p>
                      <Image
                        src="/imgs/icons/icon-arrow-up-long.svg"
                        alt="arrow up icon"
                        width={16}
                        height={16}
                      />
                    </div>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border !border-0">
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm leading-4 text-gray-500 dark:text-gray-dark-500">
                        453
                      </p>
                      <progress
                        className="progress progress-error w-[56px]"
                        value="10"
                        max="100"
                      ></progress>
                    </div>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border !border-0">
                    <p className="text-sm leading-4 text-gray-1100 font-semibold dark:text-gray-dark-1100">
                      $576.28
                    </p>
                  </td>
                  <td className="border-b border-neutral py-[26px] dark:border-dark-neutral-border !border-0">
                    <Image
                      src="/imgs/icons/icon-3-dots.svg"
                      alt="3 dots icon"
                      width={14}
                      height={4}
                    />
                  </td>
                </tr>
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
      </div>
    </div>
  );
};

export default MyProfilePage;

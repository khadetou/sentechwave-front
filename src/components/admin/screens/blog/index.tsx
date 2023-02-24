import { useAppDispatch, useAppSelector } from "hooks/index";
import "moment/locale/fr";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteBlog } from "redux/blog/blogSlice";
import TopBlog from "./top-blog";

const MySwal = withReactContent(Swal);

moment.locale("fr");
const BlogPage = () => {
  const { blogs } = useAppSelector((store) => store.blog);
  const dispatch = useAppDispatch();
  const onDelete = (slug: any) => {
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
        dispatch(deleteBlog(slug));
      }
    });
  };
  return (
    <div>
      <TopBlog />
      <div className="border bg-white border-neutral   rounded-2xl mb-9 pt-[23px] pl-[29px] pr-[29px] pb-[29px]">
        <div className="flex items-center justify-between border-b border-neutral  mb-[23px] pb-[16px]">
          <div className="text-base leading-5 text-gray-1100 font-semibold ">
            Recent Posts
          </div>
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
              <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border    ">
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
                <div className="w-full bg-neutral h-[1px] my-[7px] "></div>
                <li className="text-normal mb-[7px]">
                  <a
                    className="flex items-center bg-transparent p-0 gap-[7px]"
                    href="#remove"
                  >
                    {" "}
                    <span className="text-red text-[11px] leading-4">
                      Remove widget
                    </span>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-[26px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-1.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              Starting your traveling blog with Vasco
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-2.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to choose the right customer for your photo business?
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-3.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to write content about your photographs
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-4.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to write content about your photographs
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-5.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              Starting your traveling blog with Vasco
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-6.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to choose the right customer for your photo business?
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-7.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to write content about your photographs
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-8.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to write content about your photographs
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-1.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              Starting your traveling blog with Vasco
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-2.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to choose the right customer for your photo business?
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-3.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to write content about your photographs
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-4.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to write content about your photographs
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-5.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              Starting your traveling blog with Vasco
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-6.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to choose the right customer for your photo business?
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-7.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to write content about your photographs
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-8.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to write content about your photographs
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-1.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              Starting your traveling blog with Vasco
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-2.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to choose the right customer for your photo business?
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-3.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to write content about your photographs
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
          <a
            className="flex flex-col border bg-white border-neutral rounded-lg p-[22px]  "
            href="#"
          >
            <Image
              className="mb-[13px]"
              src="/imgs/crm-bg-4.png"
              alt="background"
              width={229}
              height={143}
            />
            <div className="flex justify-between mb-[9px]">
              <span className="leading-4 text-gray-500 text-[10.5958px] ">
                Courtney Henry
              </span>
              <time className="leading-4 text-gray-500 text-[10.5958px] ">
                06 September
              </time>
            </div>
            <h2 className="font-semibold text-gray-1100 text-[12px] leading-[18px]  mb-[27px]">
              How to write content about your photographs
            </h2>
            <button className="bg-white mt-auto border-transparent rounded-lg transition-all duration-200 group w-fit  border-[4px]  hover:border-neutral">
              <div className="border-neutral flex items-center gap-x-2 border rounded-lg py-2  px-[10px] group-hover:border-transparent">
                <Image
                  src="/imgs/icons/icon-edit-2.svg"
                  alt="edit icon"
                  width={14}
                  height={14}
                />
                <span className="text-gray-1100  text-[12px] leading-[19px]">
                  View now
                </span>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

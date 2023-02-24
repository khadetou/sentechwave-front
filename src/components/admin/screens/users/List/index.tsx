import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteUser } from "redux/auth/authSlice";
import { useAppSelector, useAppDispatch } from "hooks/index";
const MySwal = withReactContent(Swal);
import moment from "moment";
import "moment/locale/fr";
import Link from "next/link";

moment.locale("fr");
const UsersList = () => {
  const { users } = useAppSelector((store) => store.auth);
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
    <div className="rounded-2xl border border-neutral bg-white dark:border-dark-neutral-border dark:bg-dark-neutral-bg overflow-x-scroll scrollbar-hide p-[25px] mb-[25px]">
      <div className="flex items-center justify-between pb-4 border-neutral border-bottom mb-5 dark:border-dark-neutral-border">
        <p className="text-subtitle-semibold font-semibold text-gray-1100 dark:text-gray-dark-1100">
          Liste des Utilisateurs
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
                  <span className="text-red text-[11px] leading-4">
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
          <tr className="border-bottom border-neutral dark:border-dark-neutral-border pb-[15px]">
            <th className="text-left">
              <input
                className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[6px]"
                type="checkbox"
              />
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Name
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Email
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Phone
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Billing Address
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Status
            </th>
            <th className="font-normal text-normal text-gray-400 text-left pb-[15px] dark:text-gray-dark-400">
              Joined
            </th>
            <th className="font-normal text-normal text-gray-400 text-center pb-[15px] dark:text-gray-dark-400">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr
              key={user._id}
              className="border-bottom text-normal text-gray-1100 border-neutral dark:border-dark-neutral-border dark:text-gray-dark-1100"
            >
              <td className="text-left">
                <input
                  className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px] mb-[-6px]"
                  type="checkbox"
                />
              </td>
              <td className="py-[25px]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src="/imgs/seller-avatar-1.png"
                      alt="user avatar"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                    {user.name} {user.lastname}
                  </p>
                </div>
              </td>
              <td>
                <span>
                  <a
                    href="https://wp.alithemes.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="b9cdd0d497d3dcd7d7d0d7decaf9cad0cddc97dad6d4"
                  >
                    {user.email}
                  </a>
                </span>
              </td>
              <td>
                <span>{user.phone}</span>
              </td>
              <td className="max-w-[196px]">
                <p className="max-w-[20ch]">
                  1126 S San Jose Dr Abilene, Texas(TX), 79605
                </p>
              </td>
              <td>
                <div className="flex items-center gap-x-2">
                  <div className="w-2 h-2 rounded-full bg-green"></div>
                  <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
                    Online
                  </p>
                </div>
              </td>
              <td>
                <span>{moment(user.createdAt).format("LL")}</span>
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
                    <div className="relative menu rounded-2xl dropdowns-shadow min-w-[126px] bg-white mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                      <div className="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>

                      <li className="text-normal mb-[7px]">
                        <Link
                          className="flex items-center bg-transparent p-0 gap-[7px]"
                          href="/profile"
                        >
                          {" "}
                          <span className="text-gray-500 text-[11px] leading-4 hover:text-gray-700">
                            Voire plus
                          </span>
                        </Link>
                      </li>

                      <div className="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
                      <li className="text-normal mb-[7px]">
                        <a
                          className="flex items-center bg-transparent p-0 gap-[7px]"
                          onClick={() => onDelete(user._id)}
                        >
                          {" "}
                          <span className="text-red text-[11px] leading-4">
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
  );
};

export default UsersList;

import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { initials } from "utils/index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteUser } from "redux/auth/authSlice";
import TopUsers from "./top/usersTop";
import UsersList from "./List";

const MySwal = withReactContent(Swal);

const UsersPage = () => {
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
    <div>
      <TopUsers />
      <UsersList />
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

export default UsersPage;

import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { initials } from "utils/index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteUser } from "redux/auth/authSlice";

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
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Sellers cards</h2>
        <div>
          <a href="#" className="btn btn-primary">
            <i className="material-icons md-plus"></i> Create new
          </a>
        </div>
      </div>
      <div className="card mb-4">
        <header className="card-header">
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
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
                <option>Show all</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status: all</option>
                <option>Active only</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {users &&
              users.map((user: any, idx: any) => (
                <div key={user._id} className="col">
                  <div className="card card-user">
                    <div className="card-header">
                      {/* <Image
                    width={500}
                    height={500}
                    className="img-md img-avatar"
                    src="/imgs/people/avatar-1.png"
                    alt="User pic"
                  /> */}
                      <span className="tw-text-black tw-bg-white tw-text-xl tw-font-bold tw-rounded-full tw-p-5 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-top-full tw-absolute tw-shadow-xl">
                        {initials(user.firstname, user.lastname)}
                      </span>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mt-50">{`${user.firstname} ${user.lastname}`}</h5>
                      <div className="card-text text-muted">
                        <p className="m-0">Identifiant: #{user._id}</p>
                        <p>
                          <a
                            href="http://wp.alithemes.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="f29f93808bcbc2b2978a939f829e97dc919d9f"
                          >
                            {user.email}
                          </a>
                        </p>
                        <div className="tw-flex tw-justify-between">
                          <Link
                            href={`/admin/users/${user._id}`}
                            className="btns btns-sm btns-brand rounded font-sm mt-15"
                          >
                            Voir Détails
                          </Link>
                          <a
                            onClick={() => onDelete(user._id)}
                            className="btns btns-sm tw-bg-red-600 tw-text-white rounded font-sm mt-15"
                          >
                            Supprimer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default UsersPage;

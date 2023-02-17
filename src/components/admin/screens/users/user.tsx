import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import { deleteUser } from "redux/auth/authSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title tw-text-[30px] tw-font-extrabold">
          Profile setting
        </h2>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row gx-5">
            {/* <aside className="col-lg-3 border-end">
              <nav className="nav nav-pills flex-lg-column mb-4">
                <a className="nav-link active" aria-current="page" href="#">
                  General
                </a>
                <a className="nav-link" href="#">
                  Moderators
                </a>
                <a className="nav-link" href="#">
                  Admin account
                </a>
                <a className="nav-link" href="#">
                  SEO settings
                </a>
                <a className="nav-link" href="#">
                  Mail settings
                </a>
                <a className="nav-link" href="#">
                  Newsletter
                </a>
              </nav>
            </aside> */}
            <div className="col-lg-9">
              <section className="content-body p-xl-4">
                <form>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row gx-3">
                        <div className="col-6 mb-3">
                          <label className="form-label">Prénom</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Type here"
                            value={customer && customer.firstname}
                          />
                        </div>
                        <div className="col-6 mb-3">
                          <label className="form-label">Nom</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Type here"
                            value={customer && customer.lastname}
                          />
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label className="form-label">Email</label>
                          <input
                            className="form-control"
                            type="email"
                            placeholder="example@mail.com"
                            value={customer && customer.email}
                          />
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label className="form-label">Phone</label>
                          <input
                            className="form-control"
                            type="tel"
                            placeholder="+1234567890"
                            value={customer && customer.phone}
                          />
                        </div>
                        <div className="col-lg-12 mb-3">
                          <label className="form-label">Address</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Type here"
                          />
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label className="form-label">Birthday</label>
                          <input className="form-control" type="date" />
                        </div>
                      </div>
                    </div>
                    <aside className="col-lg-4">
                      <figure className="text-lg-center">
                        <Image
                          width={500}
                          height={500}
                          className="img-lg mb-3 img-avatar"
                          src="/imgs/people/avatar-1.png"
                          alt="User Photo"
                        />
                        <figcaption>
                          <a className="btn btn-light rounded font-md" href="#">
                            {" "}
                            <i className="icons material-icons md-backup font-md"></i>{" "}
                            Upload{" "}
                          </a>
                        </figcaption>
                      </figure>
                    </aside>
                  </div>
                  <br />
                  <button className="btn btn-primary" type="submit">
                    Save changes
                  </button>
                </form>
                <hr className="my-5" />
                <div className="row" style={{ maxWidth: "920px" }}>
                  <div className="col-md">
                    <article className="box mb-3 bg-light">
                      <a
                        className="btn float-end btn-light btn-sm rounded font-md"
                        href="#"
                      >
                        Change
                      </a>
                      <h6>Password</h6>
                      <small
                        className="text-muted d-block"
                        style={{ width: "70%" }}
                      >
                        You can reset or change your password by clicking here
                      </small>
                    </article>
                  </div>
                  <div className="col-md">
                    <article className="box mb-3 bg-light">
                      <a
                        className="btn float-end btn-light rounded btn-sm font-md"
                        onClick={() => onDelete(customer._id)}
                      >
                        Supprimer
                      </a>
                      <h6>Remove account</h6>
                      <small
                        className="text-muted d-block"
                        style={{ width: "70%" }}
                      >
                        Once you delete your account, there is no going back.
                      </small>
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;

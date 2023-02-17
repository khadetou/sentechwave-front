import ButtonLoading from "components/Loadingbutton";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { reset, UpdateUser } from "redux/auth/authSlice";

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
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title tw-text-[18px] tw-font-extrabold">
          👑 Profile Administrateur
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
                          <label className="form-label">Prenom</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Type here"
                            onChange={onChange}
                            name="firstname"
                            value={firstname}
                          />
                        </div>
                        <div className="col-6 mb-3">
                          <label className="form-label">Nom de Famille</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Type here"
                            onChange={onChange}
                            name="lastname"
                            value={lastname}
                          />
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label className="form-label">Email</label>
                          <input
                            className="form-control"
                            type="email"
                            placeholder="example@mail.com"
                            onChange={onChange}
                            name="email"
                            value={email}
                          />
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label className="form-label">Phone</label>
                          <input
                            className="form-control"
                            type="tel"
                            placeholder="+1234567890"
                            onChange={onChange}
                            name="phone"
                            value={phone}
                          />
                        </div>
                        {show && (
                          <div className="col-lg-6 mb-3">
                            <label className="form-label">
                              Mot de Password
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              onChange={onChange}
                              name="password"
                              value={password}
                            />
                          </div>
                        )}
                        {show && (
                          <div className="col-lg-6 mb-3">
                            <label className="form-label">
                              Confirmer votre Mot de passe
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              onChange={onChange}
                              name="password_2"
                              value={password_2}
                            />
                          </div>
                        )}
                        <div className="col-lg-12 mb-3">
                          <label className="form-label">Address</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Type here"
                            onChange={onChange}
                            name="address"
                            value={address}
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
                  <button
                    onClick={onSubmit}
                    className="btn btn-primary"
                    type="submit"
                  >
                    {isLoading ? <ButtonLoading /> : "Sauver"}
                  </button>
                </form>
                <hr className="my-5" />
                <div className="row" style={{ maxWidth: "920px" }}>
                  <div className="col-md">
                    <article className="box mb-3 bg-light">
                      <a
                        className="btn float-end btn-light btn-sm rounded font-md"
                        onClick={() => setShow(!show)}
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
                        href="#"
                      >
                        Deactivate
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

export default MyProfilePage;

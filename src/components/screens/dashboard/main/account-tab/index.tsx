import { useAppDispatch, useAppSelector } from "hooks/index";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UpdateUser, reset } from "redux/auth/authSlice";

const AccountTab = () => {
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
    note: "",
    postal: "",
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
        note: "",
        postal: "",
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
    note,
    postal,
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
    <div
      className="tab-pane fade"
      id="tab-setting"
      role="tabpanel"
      aria-labelledby="tab-setting"
    >
      <div className="row">
        <div className="col-lg-6 mb-20">
          <form action="#" method="get">
            <div className="row">
              <div className="col-lg-12 mb-20">
                <h5 className="font-md-bold color-brand-3 text-sm-start text-center">
                  Informations de contact
                </h5>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Prénom*"
                    name="firstname"
                    value={firstname}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Nom *"
                    name="lastname"
                    value={lastname}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="phone"
                    placeholder="Numéro de Téléphone *"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="password"
                    placeholder="Mot de Pass*"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Confirmer votre mot de passe*"
                    name="password_2"
                    value={password_2}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    className="font-sm color-brand-3"
                    htmlFor="checkboxOffers"
                  >
                    <input
                      className="checkboxOffer"
                      id="checkboxOffers"
                      type="checkbox"
                      readOnly
                    />
                    Gardez-moi informé des actualités et des offres exclusives
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <h5 className="font-md-bold color-brand-3 mt-15 mb-20">
                  Adresse de livraison
                </h5>
              </div>
              {/* <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Prénom *"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Nom*"
                  />
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Address 1*"
                    name="address"
                    value={address}
                    onChange={onChange}
                  />
                </div>
              </div>
              {/* <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Address 2*"
                  />
                </div>
              </div> */}
              <div className="col-lg-6">
                <div className="form-group">
                  <select className="form-control font-sm select-style1 color-gray-700">
                    <option value="">Select an option...</option>
                    <option value="1">Option 1</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Ville*"
                    name="ville"
                    value={ville}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Code Postal / ZIP*"
                    name="postal"
                    value={postal}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Region"
                    name="region"
                    value={region}
                    onChange={onChange}
                  />
                </div>
              </div>
              {/* <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control font-sm"
                    type="text"
                    placeholder="Numéro de Téléphone*"
                  />
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="form-group mb-0">
                  <textarea
                    className="form-control font-sm"
                    placeholder="Informations supplémentaires"
                    name="note"
                    value={note}
                    onChange={onChange}
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-20">
                  <input
                    className="btn btn-buy w-auto h54 font-md-bold"
                    value="Mettre à jour"
                    type="button"
                    readOnly
                    onClick={onSubmit}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-1 mb-20"></div>
        <div className="col-lg-5 mb-20">
          <div className="mt-40">
            <h4 className="mb-10 font-bold text-2xl">
              {firstname} {lastname}
            </h4>
            <div className="mb-10">
              <p className="font-sm color-brand-3 font-medium">
                Adresse de domicile:
              </p>
              <span className="font-sm color-gray-500 font-medium">
                *********
              </span>
            </div>
            <div className="mb-10">
              <p className="font-sm color-brand-3 font-medium">
                Adresse de livraison:
              </p>
              <span className="font-sm color-gray-500 font-medium">
                *********
              </span>
            </div>
            <div className="mb-10">
              <p className="font-sm color-brand-3 font-medium">
                Numéro de téléphone:
              </p>
              <span className="font-sm color-gray-500 font-medium">
                {phone}
              </span>
            </div>
            <div className="mb-10 mt-15">
              <a className="btn btn-cart w-auto">Définir comme par défaut</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;

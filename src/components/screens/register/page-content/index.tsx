import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { googleLogin, register, reset } from "redux/auth/authSlice";
import { toast } from "react-toastify";
import ButtonLoading from "components/Loadingbutton";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useDispatch } from "react-redux";

const Google = () => {
  const dispatch = useDispatch();
  const Login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      dispatch(googleLogin(tokenResponse.access_token));
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <a
      onClick={() => Login()}
      className="btn btn-login font-md-bold color-brand-3 mb-15"
    >
      Sign up with
      <Image
        width={62}
        height={24}
        className="inline"
        src="/imgs/page/account/google.svg"
        alt="Ecom"
      />
    </a>
  );
};

const Facebook = () => {
  const responseFacebook = (response: any) => {
    console.log(response);
  };
  return (
    <FacebookLogin
      appId={`${process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID}`}
      autoLoad={false}
      callback={responseFacebook}
      render={({ onClick }) => (
        <button onClick={onClick} className="social-login facebook-login">
          <Image
            width={28}
            height={28}
            src="/imgs/theme/icons/logo-facebook.svg"
            alt=""
          />
          <span>Continuer avec Facebook</span>
        </button>
      )}
    />
  );
};

const PageContent = () => {
  const [show, setShow] = useState(false);
  const [confShow, setConfShow] = useState(false);
  const [validate, setValidate] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [credentials, setCredentials] = useState(false);
  const [match, setMatch] = useState(true);
  const [formeData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const dispatch = useAppDispatch();
  const { isError, message, isSuccess, token, isLoading } = useAppSelector(
    (state) => state.auth
  );

  const router = useRouter();

  useEffect(() => {
    if (isError) {
      if (Array.isArray(message.message)) {
        if (message.message[0] === "email must be an email") {
          setIsEmail(false);
        }
        if (message.message === "Invalid Credentials") {
          setCredentials(true);
        }
        toast.error(message.message[0]);
      }
      toast.error(message.message);
      dispatch(reset());
    }

    if (isSuccess) {
      toast.success("Votre compte est crée avec succés! Connectez vous.");
      // setActive(false);
      dispatch(reset());
    }

    if (isSuccess) {
      if (router.query && router.query.from) {
        router.push(router.query.from as string);
      } else {
        router.push("/login");
      }
      dispatch(reset());
    }
  }, [isError, isSuccess, message, dispatch, router]);

  const onChange = (e: any) => {
    setFormData({ ...formeData, [e.target.name]: e.target.value });
  };

  const { email, firstname, lastname, password, password2, phone } = formeData;

  const onSubmit = (e: any) => {
    e.preventDefault();
    setValidate(true);
    if (password !== password2) {
      toast.error("Les mots de passe ne correspondent pas!");
      setMatch(false);
      return;
    }
    {
      const tokenData = {
        firstname,
        lastname,
        email,
        phone,
        password,
        password2,
      };
      dispatch(register(tokenData));
    }
  };

  return (
    <section className="section-box shop-template mt-60">
      <div className="containers">
        <div className="row mb-100">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h3>Créer un compte</h3>
            <p className="font-md color-gray-500">
              Accès à toutes les fonctionnalités. Aucune carte de crédit
              requise.
            </p>
            <div className="form-register mt-30 mb-30">
              <div className="form-group">
                <label className="mb-5 font-sm color-gray-700">Prénom *</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Steven job"
                  name="firstname"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label className="mb-5 font-sm color-gray-700">Nom *</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="stevenjob"
                  onChange={onChange}
                  name="lastname"
                />
              </div>
              <div className="form-group">
                <label className="mb-5 font-sm color-gray-700">
                  Téléphone *
                </label>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="776004564"
                  onChange={onChange}
                  name="phone"
                />
              </div>
              <div className="form-group">
                <label className="mb-5 font-sm color-gray-700">E-mail *</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="stevenjob@gmail.com"
                  onChange={onChange}
                  name="email"
                />
              </div>

              <div className="form-group">
                <label className="mb-5 font-sm color-gray-700">
                  Mot de passe *
                </label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="******************"
                  name="password"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label className="mb-5 font-sm color-gray-700">
                  Confirmez votre mot de passe *
                </label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="******************"
                  name="password2"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <input className="checkagree" type="checkbox" />
                  By clicking Register button, you agree our terms and policy,
                </label>
              </div>
              <div className="form-group">
                <input
                  className="font-md-bold btn btn-buy"
                  type="submit"
                  value="S&rsquo;inscrire"
                  onClick={onSubmit}
                />
              </div>
              <div className="mt-20">
                <span className="font-xs color-gray-500 font-medium">
                  Vous avez déjà un compte ?
                </span>
                <a
                  className="font-xs color-brand-3 font-medium"
                  href="page-login.html"
                >
                  {" "}
                  Se connecter
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="box-login-social pt-65 pl-50">
              <h5 className="text-center">Use Social Network Account</h5>
              <div className="box-button-login mt-25">
                <Google />
                <a className="btn btn-login font-md-bold color-brand-3 mb-15">
                  S&rsquo;inscrire
                  <span className="color-blue font-md-bold">Facebook</span>
                </a>
              </div>
              <div className="mt-10 text-center">
                <span className="font-xs color-gray-900">Buying for work?</span>
                <a className="color-brand-1 font-xs" href="#">
                  Create a free business account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;

import ButtonLoading from "components/Loadingbutton";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { login, reset } from "redux/auth/authSlice";

const PageContent = () => {
  const [show, setShow] = useState(false);
  const [credentials, setCredentials] = useState(false);
  const [validate, setValidate] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useAppDispatch();
  const { isError, message, isSuccess, isLoading } = useAppSelector(
    (state) => state.auth
  );
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      if (Array.isArray(message.message)) {
        if (message.message === "Invalid Credentials") {
          setCredentials(true);
        }
        toast.error(message.message[0]);
      }
      if (message.message === "Invalid Credentials") {
        setCredentials(true);
        toast.error(message.message);
        dispatch(reset());
      }
    }

    if (isSuccess) {
      if (router.query && router.query.from) {
        router.push(router.query.from as string);
      } else {
        router.push("/");
      }
    }
    dispatch(reset());
  }, [isError, message, isSuccess, router, dispatch]);

  const onSubmit = (e: any) => {
    setValidate(true);
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <section className="section-box shop-template mt-60">
      <div className="containers">
        <div className="row mb-100">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h3>Create an account</h3>
            <p className="font-md color-gray-500">
              Access to all features. No credit card required.
            </p>
            <div className="form-register mt-30 mb-30">
              <div className="form-group">
                <label className="mb-5 font-sm color-gray-700">Email *</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="stevenjob@gmail.com"
                  name="email"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label className="mb-5 font-sm color-gray-700">
                  Password *
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
                  Already have an account?
                </span>
                <a
                  className="font-xs color-brand-3 font-medium"
                  href="page-login.html"
                >
                  {" "}
                  Sign In
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="box-login-social pt-65 pl-50">
              <h5 className="text-center">Use Social Network Account</h5>
              <div className="box-button-login mt-25">
                <a className="btn btn-login font-md-bold color-brand-3 mb-15">
                  Sign up with
                  <Image
                    width={62}
                    height={24}
                    className="inline"
                    src="/imgs/page/account/google.svg"
                    alt="Ecom"
                  />
                </a>
                <a className="btn btn-login font-md-bold color-brand-3 mb-15">
                  Sign up with
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

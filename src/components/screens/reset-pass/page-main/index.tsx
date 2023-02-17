import ButtonLoading from "components/Loadingbutton";
import { useAppSelector, useAppDispatch } from "hooks/index";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { reset, resetPass } from "redux/auth/authSlice";

const PageMain = () => {
  const [show, setShow] = useState(false);
  const [confShow, setConfShow] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isError, isSuccess, message, user, isLoading } = useAppSelector(
    (state) => state.auth
  );
  const router = useRouter();

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(message.message);
      dispatch(reset());
    }
    if (isSuccess) {
      toast.success("Mot de passe modifié avec succés");
      dispatch(reset());
      router.push("/login");
    }
  }, [message, isError, dispatch, isSuccess, router]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Les deux mots sont differentes!");
    } else {
      const resetData = {
        token: router.query.token,
        password,
      };
      dispatch(resetPass(resetData));
    }
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
                <label className="mb-5 font-sm color-gray-700">
                  Password *
                </label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="******************"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="mb-5 font-sm color-gray-700">
                  Confirmez votre Password *
                </label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="******************"
                  name="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
        </div>
      </div>
    </section>
  );
};

export default PageMain;

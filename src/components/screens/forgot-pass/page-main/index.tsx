import ButtonLoading from "components/Loadingbutton";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { forgotPass, reset } from "redux/auth/authSlice";

const PageMain = () => {
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const { message, isError, isSuccess, isLoading } = useAppSelector(
    (state) => state.auth
  );
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      toast.error(message.message);
      dispatch(reset());
    }
    if (isSuccess) {
      router.push("/checkmail");
      toast.success(message.message);
      dispatch(reset());
    }
  }, [isError, message, isSuccess, router, dispatch]);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (email) {
      dispatch(forgotPass(email));
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
                <label className="mb-5 font-sm color-gray-700">Email *</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="stevenjob@gmail.com"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="font-md-bold btn btn-buy"
                  type="submit"
                  value="S&rsquo;inscrire"
                  onClick={onSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageMain;

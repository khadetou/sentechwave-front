import "styles/globals.css";
// import "styles/style.css";
import "styles/plugins/animate.min.css";
import "select2/dist/css/select2.min.css";
import "select2/dist/js/select2.min.js";
import "react-slidedown/lib/slidedown.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { wrapper } from "../redux";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "context/wishlistContext";
import { RecviewedProvider } from "context/recviewedContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";

export default function App({ Component, ...rest }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    typeof document != "undefined"
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
    >
      <Provider store={store}>
        <RecviewedProvider>
          <WishlistProvider>
            <CartProvider>
              <Component {...pageProps} />
            </CartProvider>
          </WishlistProvider>
        </RecviewedProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
}

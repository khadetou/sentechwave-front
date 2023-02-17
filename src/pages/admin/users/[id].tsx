import Layout from "components/admin/Layout";
import UserPage from "components/admin/screens/users/user";
import SEO from "components/SEO";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { getCookie } from "redux/auth/authService";
import { getUserById, logout, getUser } from "redux/auth/authSlice";
import { wrapper } from "redux/store";

const User = () => {
  return (
    <Layout>
      <SEO />
      <UserPage />
    </Layout>
  );
};

export default User;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);

    const {
      query: { id },
    } = context;
    const data = {
      token,
      id,
    };
    await store.dispatch<any>(getUserById(data));

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
        if (
          store.getState().auth.user &&
          store.getState().auth.user.roles[0] !== "admin"
        ) {
          return {
            redirect: {
              destination: "/",
              permanent: false,
            },
          };
        }
      }
    } else {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  });

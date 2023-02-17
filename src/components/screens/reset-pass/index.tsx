import { ToastContainer } from "react-toastify";
import PageHeader from "./page-header";
import PageMain from "./page-main";
import Advantages from "components/advantages";
import NewsletterProduct from "components/newsletter";

const ResetPassPage = () => {
  return (
    <>
      <PageHeader />
      <PageMain />
      <Advantages />
      <NewsletterProduct />
      <ToastContainer />
    </>
  );
};

export default ResetPassPage;

import Main from "./main";
import FilterModal from "../filter-modal";
import Modal from "../../modal";
import Advantages from "components/advantages";
import NewsletterProduct from "components/newsletter";

const ProductsBody = () => {
  return (
    <>
      <Main />
      <Advantages />
      <NewsletterProduct />
      <FilterModal />
      <Modal />
    </>
  );
};

export default ProductsBody;

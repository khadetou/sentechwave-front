import PageContent from "./page-content";
import PageHeader from "./page-header";
import Advantages from "components/advantages";
import NewsletterProduct from "components/newsletter";

const ContactUsPage = () => {
  return (
    <main className="main">
      <PageHeader />
      <PageContent />
      <Advantages />
      <NewsletterProduct />
    </main>
  );
};

export default ContactUsPage;

import Header from "components/header";
import Layout from "components/Layout";
import SEO from "components/SEO";
import React, { useState } from "react";

const Chekmail = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isOpenCat, setIsOpenCat] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Layout
      isLocationOpen={isLocationOpen}
      setIsLocationOpen={setIsLocationOpen}
      isOpenCat={isOpenCat}
      setIsOpenCat={setIsOpenCat}
      setOpen={setOpen}
      open={open}
    >
      <SEO />
      <Header
        isOpenCat={isOpenCat}
        setIsOpenCat={setIsOpenCat}
        setOpen={setOpen}
        open={open}
      />
      <section className="tw-flex tw-items-center tw-justify-center tw-mb-28 tw-mt-10">
        <h1 className="tw-text-primary tw-text-3xl tw-font-bold">
          Vérifiez votre boite mail !
        </h1>
      </section>
    </Layout>
  );
};

export default Chekmail;

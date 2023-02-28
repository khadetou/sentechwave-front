import Head from "next/head";
import { FC } from "react";
import type { Metadata } from "next";
import { NextSeo } from "next-seo";

interface SeoProps {
  description?: string;
  author?: string;
  meta?: any[];
  title?: string;
  lang?: string;
}

const SEO: FC<SeoProps> = ({
  description = "Hotcodes Demo|Vente d'appareils électroniques et électroménagers ",
  author = "Hotcodes",
  meta,
  title = "Hotcodes Demo|Vente d'appareils électroniques et électroménagers",
}) => {
  // const metaData = [
  //   {
  //     name: "description",
  //     content: description,
  //   },
  //   {
  //     property: "og:title",
  //     content: title,
  //   },
  //   {
  //     property: "og:description",
  //     content: description,
  //   },
  //   {
  //     property: "og:type",
  //     content: "website",
  //   },
  //   {
  //     name: "twitter:card",
  //     content: "summary",
  //   },
  //   {
  //     name: "twitter:creator",
  //     content: author,
  //   },

  //   {
  //     name: "twitter:title",
  //     content: title,
  //   },
  //   {
  //     name: "twitter:description",
  //     content: description,
  //   },
  // ].concat(meta!);

  return (
    // <Head>
    //   <title>{title}</title>
    //   {metaData.map(({ name, content }, i) => (
    //     <meta key={i} name={name} content={content} />
    //   ))}
    // </Head>
    <NextSeo
      title={title}
      description={description}
      canonical="https:hotcodesdemo.vercel.app"
      openGraph={{
        url: "https://www.url.ie/a",
        title:
          "HotCodesDemo - Vente d'appareils électroniques en ligne au Sénéga",
        description:
          "Trouvez les derniers modèles d'ordinateurs portables, téléphones portables, machines à laver, réfrigérateurs et bien plus encore chez HotCodes. Achetez en ligne et profitez de la livraison gratuite au Sénégal.",
        images: [
          {
            url: "https://www.example.ie/og-image-01.jpg",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
            type: "image/jpeg",
          },
          {
            url: "https://www.example.ie/og-image-02.jpg",
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
            type: "image/jpeg",
          },
          { url: "https://www.example.ie/og-image-03.jpg" },
          { url: "https://www.example.ie/og-image-04.jpg" },
        ],
        siteName: author,
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
};

SEO.defaultProps = {
  lang: "fr",
  meta: [],
};

export default SEO;

import { GetServerSideProps } from "next";
import { ISitemapField, getServerSideSitemap } from "next-sitemap";
import { getAllProducts } from "redux/products/productSlice";
import { wrapper } from "redux/store";
import { Data } from "utils/interface";
import moment from "moment";

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const data: Data = {
      req: context.req,
      keyword: context.query.keyword ? context.query.keyword : "",
      max: context.query.max ? context.query.max : "",
      min: context.query.min ? context.query.min : "",
      pageNumber: context.query.pageNumber ? context.query.pageNumber : "",
      category: context.query.category ? context.query.category : "",
      souscategory: context.query.souscategory
        ? context.query.souscategory
        : "",
      ssouscategory: context.query.ssouscategory
        ? context.query.ssouscategory
        : "",
      qty: context.query.qty ? context.query.qty : "",
      pageSize: context.query.pageSize ? context.query.pageSize : "",
    };

    const dataf: Data = {
      req: context.req,
      keyword: "",
      max: "",
      min: "",
      pageNumber: "",
      category: "",
      souscategory: "",
      ssouscategory: "",
      qty: "",
      pageSize: "",
    };

    const {
      payload: { products },
    } = await store.dispatch<any>(getAllProducts(data));

    const fields: ISitemapField[] = products.map((product: any) => ({
      loc: `https://electrodemo.com/products/${product._id}`,
      lastmod: moment(product.createdAt).format("lll"),
    }));
    return getServerSideSitemap(context, fields);
  });

export default function SitemapIndex() {}

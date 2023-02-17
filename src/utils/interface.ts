import { IncomingMessage } from "http";

export interface Data {
  req?: IncomingMessage & {
    cookies: Partial<{
      [key: string]: string;
    }>;
  };
  pageSize?: string | string[] | undefined;
  pageNumber?: string | string[] | undefined;
  keyword: string | string[] | undefined;
  min?: string | string[] | undefined;
  max?: string | string[] | undefined;
  qty?: string | string[] | undefined;
  category?: string | string[] | undefined;
  souscategory?: string | string[] | undefined;
  ssouscategory?: string | string[] | undefined;
}

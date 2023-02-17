import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import AuthReducer from "./auth/authSlice";
import ProductReducer from "./products/productSlice";
import OrderReducer from "./order/orderSlice";
import CategoryReducer from "./category/categorySlice";
import TagsReducer from "./tag/tagSlice";
import BlogReducer from "./blog/blogSlice";

export const makeStore: any = () =>
  configureStore({
    reducer: {
      auth: AuthReducer,
      product: ProductReducer,
      order: OrderReducer,
      category: CategoryReducer,
      tag: TagsReducer,
      blog: BlogReducer,
      devTools: process.env.NODE_ENV !== "production",
    },
  });

export type AppDispatch = typeof makeStore.dispatch;
export type RootState = ReturnType<typeof makeStore.getState>;
export const wrapper = createWrapper(makeStore, { debug: false });

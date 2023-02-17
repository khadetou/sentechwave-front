import { useAppDispatch } from "hooks/index";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { logout } from "redux/auth/authSlice";
import AccountTab from "./account-tab";
import AddressTab from "./address-tab";
import DashTab from "./dash-tab";
import OrdersTab from "./orders-tab";
import TrackTab from "./track-tab";
import "moment/locale/fr";
import NotificationTab from "./notification-tab";

moment.locale("fr");
const MainPage = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="section-box shop-template mt-30">
      <div className="containers box-account-template">
        <h3 className="text-[32px] font-bold">Hello Steven</h3>
        <p className="font-md color-gray-500">
          From your account dashboard. you can easily check & view your recent
          orders,
          <br className="d-none d-lg-block" />
          manage your shipping and billing addresses and edit your password and
          account details.
        </p>
        <div className="box-tabs mb-100">
          <ul className="nav nav-tabs nav-tabs-account" role="tablist">
            <li>
              <a
                className="active"
                href="#tab-notification"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-notification"
                aria-selected="true"
              >
                Notification
              </a>
            </li>

            <li>
              <a
                href="#tab-orders"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-orders"
                aria-selected="true"
              >
                Orders
              </a>
            </li>
            <li>
              <a
                href="#tab-order-tracking"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-order-tracking"
                aria-selected="true"
              >
                Order Tracking
              </a>
            </li>
            <li>
              <a
                href="#tab-setting"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-setting"
                aria-selected="true"
              >
                Setting
              </a>
            </li>
          </ul>
          <div className="border-bottom mt-20 mb-40"></div>
          <div className="tab-content mt-30">
            <NotificationTab />
            <OrdersTab />
            <TrackTab />
            <AccountTab />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;

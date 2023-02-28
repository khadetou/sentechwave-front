import { useAppDispatch, useAppSelector } from "hooks/index";
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
  const { user } = useAppSelector((store) => store.auth);
  return (
    <section className="section-box shop-template mt-30">
      <div className="containers box-account-template">
        <h3 className="text-[32px] font-bold">Bonjour {user.firstname}</h3>
        <p className="font-md color-gray-500">
          Depuis votre tableau de bord de compte, vous pouvez facilement
          consulter et afficher vos commandes récentes,
          <br className="d-none d-lg-block" />
          gérer vos adresses de livraison et de facturation, et modifier votre
          mot de passe et les détails de votre compte.
        </p>
        <div className="box-tabs mb-100">
          <ul className="nav nav-tabs nav-tabs-account" role="tablist">
            {/* <li>
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
            </li> */}

            <li>
              <a
                href="#tab-orders"
                data-bs-toggle="tab"
                role="tab"
                className="active"
                aria-controls="tab-orders"
                aria-selected="true"
              >
                Commandes
              </a>
            </li>
            {/* <li>
              <a
                href="#tab-order-tracking"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-order-tracking"
                aria-selected="true"
              >
                Suivi de commande
              </a>
            </li> */}
            <li>
              <a
                href="#tab-setting"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-setting"
                aria-selected="true"
              >
                Réglage
              </a>
            </li>
          </ul>
          <div className="border-bottom mt-20 mb-40"></div>
          <div className="tab-content mt-30">
            {/* <NotificationTab /> */}
            <OrdersTab />
            {/* <TrackTab /> */}
            <AccountTab />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;

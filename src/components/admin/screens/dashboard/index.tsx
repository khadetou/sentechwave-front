import Image from "next/image";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { data, options } from "./chart-data";
import { data2, options2 } from "./chart-data/chart2";
import TopOverview from "./top-overview";
import Analytics from "./analytics";
import LatestOrders from "./latest-orders";
import DashFooter from "./dash-footter";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const DashboardBody = () => {
  return (
    <div>
      <h2 className="capitalize text-gray-1100 font-bold text-[28px] leading-[35px] dark:text-gray-dark-1100 mb-[13px]">
        Dashboard
      </h2>
      <div className="flex items-center text-xs text-gray-500 gap-x-[11px] mb-[37px]">
        <div className="flex items-center gap-x-1">
          <Image
            src="/imgs/icons/icon-home-2.svg"
            alt="home icon"
            width={12}
            height={13}
          />
          <a className="capitalize" href="index-2.html">
            home
          </a>
        </div>
        <Image
          src="/imgs/icons/icon-arrow-right.svg"
          alt="arrow right icon"
          width={12}
          height={13}
        />
        <span className="capitalize text-blue-500">Dashboard</span>
      </div>
      <TopOverview />
      <Analytics />
      <LatestOrders />
      <DashFooter />
    </div>
  );
};

export default DashboardBody;

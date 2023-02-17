import {
  CoreChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  DatasetChartOptions,
  ChartData,
  Point,
  ScaleChartOptions,
  BarControllerChartOptions,
} from "chart.js";
import { _DeepPartialObject } from "chart.js/dist/types/utils";

export const data2: ChartData<"bar", (number | Point | null)[], unknown> = {
  labels: ["900", "1200", "1400", "1600"],
  datasets: [
    {
      label: "US",
      backgroundColor: "#5897fb",
      barThickness: 10,
      data: [233, 321, 783, 900],
    },
    {
      label: "Europe",
      backgroundColor: "#7bcf86",
      barThickness: 10,
      data: [408, 547, 675, 734],
    },
    {
      label: "Asian",
      backgroundColor: "#ff9076",
      barThickness: 10,
      data: [208, 447, 575, 634],
    },
    {
      label: "Africa",
      backgroundColor: "#d595e5",
      barThickness: 10,
      data: [123, 345, 122, 302],
    },
  ],
};

export const options2:
  | _DeepPartialObject<
      CoreChartOptions<"bar"> &
        ElementChartOptions<"bar"> &
        PluginChartOptions<"bar"> &
        DatasetChartOptions<"bar"> &
        ScaleChartOptions<any> &
        BarControllerChartOptions
    >
  | undefined = {
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

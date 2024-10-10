"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { plugin } from "postcss";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ["#BEF264", "#84CC16", "#4D7C0F"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
    borderWidth: 0,
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;

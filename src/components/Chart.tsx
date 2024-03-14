import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ({ dataSetsData }: { dataSetsData: number[][] }) {
  const labels = ["Mar", "Apr", "May", "Jun", "Jul", "Aug"];

  const options = {
    responsive: true,

    plugins: {
      legend: {
        // display: false,
        position: "right" as const,
        align: "center" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "line",
        },
      },
      title: {
        display: false,
      },
    },
    tension: 0.3,
    scales: {
      y: {
        min: 0,
        max: 1250,
        ticks: {
          stepSize: 250,
        },
        tooltip: {
          enabled: true,
          mode: "nearest",
        },
      },
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
  };

  const data = {
    labels,

    datasets: [
      {
        label: "Users",
        data: dataSetsData[1],
        borderColor: "rgba(58, 87, 67, 1)",
        backgroundColor: "rgba(58, 87, 67, 1)",
        pointRadius: 5,
      },
      {
        label: "Month",
        data: dataSetsData[0],
        borderColor: "rgba(247, 179, 43, 1)",
        backgroundColor: "rgba(247, 179, 43, 1)",
        pointRadius: 5,
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}

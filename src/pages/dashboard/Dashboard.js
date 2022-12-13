import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import CaptureUtility from "../../utility/capture-utility";
import Cropper from "cropperjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Dashboard = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
    display: false,
    scales: {
      y: {
        min: 0,
        max: 50,
        ticks: {
          maxTicksLimit: 10,
        },
      },
      x: {
        grid: {
          display: false,
        },
        offset: true,
      },
    },
  };

  const dat1 = [
    { x: "11 Nov", y: 0 },
    { x: "12 Nov", y: 10 },
    { x: "13 Nov", y: 20 },
    { x: "14 Nov", y: 25 },
    { x: "15 Nov", y: 10 },
    { x: "16 Nov", y: 50 },
    { x: "17 Nov", y: 20 },
  ];

  const dat2 = [
    { x: "11 Nov", y: 20 },
    { x: "12 Nov", y: 10 },
    { x: "13 Nov", y: 10 },
    { x: "14 Nov", y: 18 },
    { x: "15 Nov", y: 10 },
    { x: "16 Nov", y: 22 },
    { x: "17 Nov", y: 10 },
  ];

  const labels = [
    "11 Nov",
    "12 Nov",
    "13 Nov",
    "14 Nov",
    "15 Nov",
    "16 Nov",
    "17 Nov",
  ];

  const yy = labels.map(() => faker.datatype.number({ min: 0, max: 500 }));
  console.log(yy);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "This Period",
        data: dat2,
        borderColor: "#BBAB7F",
        backgroundColor: "#92815445",
        lineTension: 0.3,
        borderDash: [10, 5],
      },
      {
        fill: true,
        label: "Last Period",
        data: dat1,
        borderColor: "#5D7D73",
        backgroundColor: "#D6DBD3",
        lineTension: 0.3,
      },
    ],
  };

  const exportRef = useRef();
  return (
    <div className="container mx-auto h-screen">
      <div ref={exportRef}>
        <Line options={options} data={data} />
      </div>

      <button onClick={() => CaptureUtility(exportRef.current, "test")}>
        Capture Image
      </button>
    </div>
  );
};

export default Dashboard;

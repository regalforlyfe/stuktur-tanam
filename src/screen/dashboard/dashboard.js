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
  const cropper = new Cropper(image, {
    aspectRatio: 16 / 9,
    crop(event) {
      console.log(event.detail.x);
      console.log(event.detail.y);
      console.log(event.detail.width);
      console.log(event.detail.height);
      console.log(event.detail.rotate);
      console.log(event.detail.scaleX);
      console.log(event.detail.scaleY);
    },
  });

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
  let image2 = "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";
  let image = ;
  return (
    <div className="container mx-auto h-screen">
      <div ref={exportRef}>
        <Line options={options} data={data} />
      </div>

      <button onClick={() => CaptureUtility(exportRef.current, "test")}>
        Capture Image
      </button>

      <img src="data:image/jpeg;base64,"/>

      <div>
        <img id="image" src="picture.jpg" />
      </div>
    </div>
  );
};

export default Dashboard;

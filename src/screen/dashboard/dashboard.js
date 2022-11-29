import React from "react";
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
import { faker } from '@faker-js/faker';

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
  };
  
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "October", "September", "November", "December"];
  
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "This Period",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#BBAB7F",
        backgroundColor: "#92815445",
      },
      {
        fill: true,
        label: "Last Period",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "#5D7D73",
        backgroundColor: "#D6DBD3",
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <Line options={options} data={data} />
    </div>
  );
};

export default Dashboard;

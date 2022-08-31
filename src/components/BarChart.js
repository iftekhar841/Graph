import React from "react";
import { jsPDF } from 'jspdf';
import graph from '../image/graph.png';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top as const",
    },
  },
};

const data = {
  labels: [
    "China",
    "India",
    "United States",
    "Indonesia",
    "Pakistan",
    "Nageria",
    "Brazil",
    "Bangladesh",
    "Russia",
    "Mexico",
  ],
  datasets: [
    {
      label: "population",
      data: [
        1448471.4, 1406631.776, 334805.269, 279134.505, 229488.994, 216746.934,
        215353.593, 167885.689, 145805.947, 131562.772,
      ],

      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(193, 110, 22, 0.2)",
        "rgba(180, 235, 52, 0.5)",
        "rgba(198, 52, 235, 0.2)",
        "rgba(52,  55, 235, 0.2)",
        "rgba(172, 164, 110,0.38)",
        "rgba(11, 185, 49, 0.38)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(193, 110, 22, 1)",
        "rgba(180, 235, 52, 1)",
        "rgba(198, 52, 235, 1)",
        "rgba(52,  55, 235, 1)",
        "rgba(172, 164, 110,1)",
        "rgba(11, 185, 49,  1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
   
  const pdfGenerate = () => {
    var  doc = new jsPDF('landscape', 'px','a4','false');
    doc.addImage(graph, 'PNG', 65, 20, 550,400);
    doc.save('graph.pdf');
  }
  return (
  <>
    <div style={{ textAlign:"center" }}>
      <h1 className="heading">Top 10 population Country</h1>
      <div className="chart">
        <div className="pieChart">
          <Pie data={data} />
        </div>
        <div className="barChart">
          <Bar options={options} data={data} />
        </div>
      </div>
      <div className="buttonWrapper">
       <button className="button" onClick={pdfGenerate}> Dowload pdf</button>
    </div>
    </div>
  </>
  );
};

export default PieChart;

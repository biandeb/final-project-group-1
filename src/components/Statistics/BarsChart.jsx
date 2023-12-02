import "./statsStyles.css";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarsChart = (props) => {
  const { chartData } = props;

  return (
    <div className="barchart-container">
      <Bar data={chartData} />
    </div>
  );
};

export default BarsChart;

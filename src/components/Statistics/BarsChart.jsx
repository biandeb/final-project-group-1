import "./statsStyles.css";

import { Bar } from "react-chartjs-2";

const BarsChart = (props) => {
  const { chartData } = props;

  return (
    <div className="barchart-container">
      <Bar data={chartData} />
    </div>
  );
};

export default BarsChart;

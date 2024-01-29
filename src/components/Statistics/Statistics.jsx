import { useState } from "react";
import { statsData } from "../../helpers/datasets";
import BarsChart from "./BarsChart";

const Statistics = (props) => {
  const { orders } = props;
 

  const productCount = {};

  orders.data.forEach((order) => {
    order.productsOrdered.forEach((product) => {
      const productName = product.name;

      productCount[productName] =
        (productCount[productName] || 0) + product.amount;
    });
  });

  const productArray = Object.entries(productCount).map(([name, count]) => ({
    name,
    count,
  }));

  productArray.sort((a, b) => b.count - a.count);

  const [chartData, setChartData] = useState({
    labels: productArray.map((data) => data.name),
    datasets: [
      {
        label: "Product amount",
        data: productArray.map((data) => data.count),
        backgroundColor: ["#ffb703", "#e97700"],
      },
    ],
  });

  return (
    <div className="container m-4">
      <p>
        Welcome to the heart of culinary insights! Gain a deeper understanding
        of your customers, menu items, and overall business dynamics with
        real-time data and intuitive visualizations.
      </p>

      <h5>Most ordered products</h5>
      <hr />
      <BarsChart chartData={chartData} />
    </div>
  );
};

export default Statistics;

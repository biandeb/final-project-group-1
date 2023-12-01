import { useState } from "react";
import { statsData } from "../../helpers/datasets";
import BarsChart from "./BarsChart";

const Statistics = (props) => {
  const { orders } = props;

  //PRODUCTOS MAS PEDIDOS
  const productCount = {};

  orders.forEach((order) => {
    order.productsordered.forEach((product) => {
      const productName = product.name;

      // contador
      productCount[productName] =
        (productCount[productName] || 0) + product.amount;
    });
  });

  // Creo un array con nombre y cantidades
  const productArray = Object.entries(productCount).map(([name, count]) => ({
    name,
    count,
  }));

  // Ordeno el array en forma descendente
  productArray.sort((a, b) => b.count - a.count);


  const [chartData, setChartData] = useState({
    labels: productArray.map((data) => data.name),
    datasets: [
      {
        label: "Product amount",
        data: productArray.map((data) => data.count),
        backgroundColor: ['#ffb703', '#e97700']
      },
    ],
    
  });

  return (
    <div className="container m-4">
        <h5>Most ordered products</h5>
      <BarsChart chartData={chartData} />
    </div>
  );
};

export default Statistics;

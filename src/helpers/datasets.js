export const statsData = (orders) => {
  const productCount = {};

  orders.forEach((order) => {
    order.productsordered.forEach((product) => {
      const productName = product.name;

      // Incrementar la cantidad del producto
      productCount[productName] =
        (productCount[productName] || 0) + product.amount;
    });
  });

  // Crear un array de objetos con nombre y cantidad
  const productArray = Object.entries(productCount).map(([name, count]) => ({
    name,
    count,
  }));

  // Ordenar el array por la cantidad descendente
  productArray.sort((a, b) => b.count - a.count);

  return productArray;
};

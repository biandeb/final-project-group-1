export const statsData = (orders) => {
  const productCount = {};

  orders.forEach((order) => {
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

  return productArray;
};

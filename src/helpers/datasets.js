export const statsData = (orders) => {

  const productCount = {};

orders.forEach((order) => {
  order.productsordered.forEach((product) => {
    const productName = product.name;

    // Incrementar la cantidad del producto
    productCount[productName] = (productCount[productName] || 0) + product.amount;
  });
});

// Crear un array de objetos con nombre y cantidad
const productArray = Object.entries(productCount).map(([name, count]) => ({
  name,
  count,
}));

// Ordenar el array por la cantidad descendente
productArray.sort((a, b) => b.count - a.count);

// // Tomar los primeros 5 elementos para los productos más pedidos
// const top5Products = productArray.slice(0, 5);

// // Tomar los últimos 5 elementos para los productos menos pedidos
// const bottom5Products = productArray.slice(-5);

// // Imprimir los resultados
// console.log("Productos más pedidos:", top5Products);
// console.log("Productos menos pedidos:", bottom5Products);
console.log(productArray)
return productArray

//   const productCount = {};

//     //Obtengo los productos y el num de veces que fueron pedidos
//     orders.forEach((order) => {
//       order.productsordered.forEach((product) => {
//         const productName = product.name;
    
//         // Incrementar la cantidad del producto
//         productCount[productName] = (productCount[productName] || 0) + product.amount;
//       });
//     });

//     const sortedProducts = Object.entries(productCount)
//   .sort((a, b) => b[1] - a[1]);

// // Obtener los 5 productos más pedidos
//     const top5Products = sortedProducts.slice(0, 5);
//     console.log(top5Products);



  // const productCount = {};

  // orders.forEach((order) => {
  //   order.productsordered.forEach((product) => {
  //     const productName = product.name;

  //     // Incrementar la cantidad del producto
  //     productCount[productName] =
  //       (productCount[productName] || 0) + product.amount;
  //   });
  // });

  // // Crear arrays para nombres y cantidades
  // const namesArray = [];
  // const amountsArray = [];

  // // Iterar sobre el objeto productCount y llenar los arrays
  // Object.entries(productCount).forEach(([name, amount]) => {
  //   namesArray.push(name);
  //   amountsArray.push(amount);
  // });

  // // Ahora, namesArray y amountsArray contienen los nombres y cantidades respectivamente
  // console.log(namesArray);
  // console.log(amountsArray);

  // return namesArray, amountsArray;
};




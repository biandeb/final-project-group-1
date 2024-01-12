const MyOrdersRow = (props) => {
  const { order } = props;
  console.log(order);

  const productDetails = [];
  let total = 0;

  order.productsOrdered.forEach((product) => {
    const productName = product.name;
    const productPrice = product.price;
    const productAmount = product.amount;
    const productSubtotal = product.amount * product.price;

    total += productSubtotal;

    productDetails.push({
      productName,
      productAmount,
      productPrice,
      productSubtotal,
    });
  });

  return (
    <li className="list-group-item mt-4 card o-hidden border-0 shadow-lg">
      <h5 className="badge bg-danger p-3">Order n°: {order.id}</h5>
      {productDetails.map((product, index) => (
        <p key={index}>
          <div className="d-flex flex-column">
            {product.productName} x{product.productAmount}
            <p>Subtotal: ${product.productSubtotal}</p>
          </div>
        </p>
      ))}
      <p>Total: ${total}</p>
    </li>
  );
};

export default MyOrdersRow;
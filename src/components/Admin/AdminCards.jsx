import TableRow from "./TableRow.jsx";

const AdminCards = (props) => {
  const { products } = props;
  console.log(products)
  return (
    <section className="table-responsive mt-3 rounded ">
      <article className="row gx-4 gx-lg-5 row-cols-1 row-cols-md- row-cols-xl-2">
        {products.data.map((product, index) => (
          <TableRow product={product} key={product.id} index={index} />
        ))}
      </article>
    </section>
  );
};

export default AdminCards;

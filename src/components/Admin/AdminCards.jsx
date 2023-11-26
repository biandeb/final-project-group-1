import TableRow from "./TableRow"


const AdminCards = (props) => {
  const { products } = props;
  return (
    <section className='table-responsive mt-3 rounded'>
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Imagen</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product,index) => (
          <TableRow product={product} key={product.id} index={index} />
        ))}
      </tbody>
    </table>
  </section>
  )
}

export default AdminCards
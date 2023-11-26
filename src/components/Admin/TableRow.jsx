

const TableRow = (props) => {
    const { product, index } = props;
  return (
    <tr>
    <td>{index + 1}</td>
    <td>{product.name}</td>
    <td>
      <img
        src={product.image}
        alt={product.name}
        className='admin-table-img w-25'
      />
    </td>
    <td>{product.price}</td>
    <td>
      <button type='button' className='btn btn-warning' >
        Editar
      </button>
      <button
        type='button'
        className='btn btn-danger ms-2'
        
      >
        Eliminar
      </button>
    </td>
  </tr>
  )
}

export default TableRow
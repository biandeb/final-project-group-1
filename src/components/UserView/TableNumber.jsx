
const TableNumber = (props) => {
  const {tableNumber} = props;

  return (

    <div className="mt-4 p-3 table-number-container">
        <h5>Your table number is: {tableNumber}</h5>
    </div>
  )
}

export default TableNumber
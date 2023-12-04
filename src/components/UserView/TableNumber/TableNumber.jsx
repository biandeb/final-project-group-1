import { useTable } from "../../../stores/useTable.js";

const TableNumber = () => {
  const { tablenumberForOrder } = useTable();

  if (tablenumberForOrder) {
    return (
      <>
        <div className="mt-4 p-3 table-number-container">
          <h5>Your table number is: {tablenumberForOrder.tablenumber} </h5>
        </div>
      </>
    );
  }
};

export default TableNumber;

import { useTable } from "../../../stores/useTable.js";

const TableNumber = () => {
  //ZUSTAND
  const { tablenumberForOrder } = useTable();

  if (tablenumberForOrder) {
    return (
      <>
        <div className="mt-4 p-3 table-number-container w-25">
          <h5>Your table number is: {tablenumberForOrder.tablenumber} </h5>
        </div>
      </>
    );
  }
};

export default TableNumber;

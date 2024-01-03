import { useForm } from "react-hook-form";
import Input from "../../Input/Input";

import "../userStyles.css";
import "../../../index.css";

import TableNumber from "./TableNumber.jsx";
import { useTable } from "../../../stores/useTable.js";
import Button from "../../Button/Button.jsx";

const TableNumberInput = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  const { setTableNumber } = useTable();


  const handleSubmit = (tablenumber) => {
    setTableNumber(tablenumber);
  };

  return (
    <div className="ms-5">
      <h5>Enter your table number here:</h5>

      <form
        className="w-md-50 table-input"
        onSubmit={onSubmitRHF(handleSubmit)}
      >
        <Input
          register={register}
          option={{
            required: true,
            min: {
              value: 1,
              message: "The number must be greater than or equal to 1.",
            },
            max: {
              value: 20,
              message: "The number must be less than or equal to 25.",
            },
          }}
          type="number"
          label="Table Number"
          name="tablenumber"
          placeholder="0"
          error={!!errors.tablenumber}
        />
        <Button title={"Save"}></Button>
      </form>
      <TableNumber />
    </div>
  );
};

export default TableNumberInput;

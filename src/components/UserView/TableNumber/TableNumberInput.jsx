import { useForm } from "react-hook-form";
import Input from "../../Input/Input";

import "../userStyles.css";
import "../../../index.css";

import TableNumber from "./TableNumber";
import { useTable } from "../../../stores/useTable";

const TableNumberInput = () => {
  //RHF
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  //ZUSTAND

  const { setTableNumber } = useTable();

  //HANDLERS

  const handleSubmit = (tablenumber) => {
    setTableNumber(tablenumber);
  };

  return (
    <>
      <h5>Enter your table number here:</h5>

      <form className="w-md-50 table-input" onSubmit={onSubmitRHF(handleSubmit)}>
                <Input
                  register={register}
                  option={{
                    required: true,
                    min: {
                      value: 1,
                      message: "El número debe ser mayor o igual a 1",
                    },
                    max: {
                      value: 20,
                      message: "El número debe ser menor o igual a 25",
                    },
                  }}
                  type="number"
                  label="Table Number"
                  name="tablenumber"
                  placeholder="0"
                  error={!!errors.tablenumber}
                />
                <button className="submit-btn mt-2">Save</button>
              </form>
      <TableNumber />
    </>
  );
};

export default TableNumberInput;

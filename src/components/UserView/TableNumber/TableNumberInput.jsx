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
      <button
        type="button"
        className="btn table-btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Enter your table number
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Enter your table number here
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmitRHF(handleSubmit)}>
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
                <button className="submit-btn">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <TableNumber />
    </>
  );
};

export default TableNumberInput;

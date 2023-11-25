import { useEffect } from "react";
import { useOrder } from "../../../stores/useOrder.js";
import CheckoutCard from "./CheckoutCard";

const CheckoutList = () => {
  //ZUSTAND
  const { productsOrdered } = useOrder();

  useEffect(()=>{
    productsOrdered.map((product) => {
      return <CheckoutCard key={product.id} product={product} />;
    })
  }, [productsOrdered])

  return (
    <section className="container-fluid m-2">
      {productsOrdered.length === 0 ? <p>Your order is empty</p> : null}
      {productsOrdered.map((product) => {
        return <CheckoutCard key={product.id} product={product} />;
      })}
    </section>
  );
};

export default CheckoutList;

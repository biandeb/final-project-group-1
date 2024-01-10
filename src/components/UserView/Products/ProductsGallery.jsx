import { useSession } from "../../../stores/useSessions";
import ProductCard from "./ProductCard";

const ProductsGallery = (props) => {
  const { isLoggedIn } = useSession();
  const { products } = props;

  return (
    <div className="container-fluid mt-5 pb-5 mb-5 d-flex">
      <section className="row justify-content-center mb-5">
      <h1 className="fs-1 fw-bold py-4 text-center">Grill & Thrill</h1>
        <h3 className="pb-2 mb-2 text-center">Menu</h3>
        {!isLoggedIn && (
          <div className="alert alert-danger text-center fw-bolder" role="alert">
         LOG IN TO PLACE YOUR ORDER
        </div>
        )}
        {products.length === 0 ? <p>No products available</p> : null}
        {products.data
          .filter((product) => product.isAvailable === true)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </section>
    </div>
  );
};

export default ProductsGallery;

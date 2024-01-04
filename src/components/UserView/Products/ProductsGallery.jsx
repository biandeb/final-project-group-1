import ProductCard from "./ProductCard";

const ProductsGallery = (props) => {
  const { products } = props;

  return (
    <div className="container-fluid mt-5 pb-5 mb-5 d-flex">
      <section className="row justify-content-center mb-5">
        <h3 className="pb-2 mb-2">Menu</h3>
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

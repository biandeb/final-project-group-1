import ProductCard from "./ProductCard";

const ProductsGallery = (props) => {
  const { products } = props;

  return (
    <div className="container-fluid mt-5 d-flex">
      <section className="row justify-content-center">
        {products.length === 0 ? <p>No products available</p> : null}
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </section>
    </div>
  );
};

export default ProductsGallery;

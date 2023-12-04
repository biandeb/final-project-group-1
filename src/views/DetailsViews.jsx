const DetailsViews = (props) => {
  const { product } = props;
  if (!product) {
    return <p>No information available</p>;
  }
  return (
    <section>
      <img
        src={product.image}
        alt={product.name}
        className="content-image"
        align="right"
      />
      <p className="mb-0">{product.description}</p>
    </section>
  );
};

export default DetailsViews;

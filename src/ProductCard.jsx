function ProductCard({ item }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={item.image} alt={item.name} />
      </div>
      <h4 className="product-title">{item.name}</h4>
      <div className="product-price">{item.cost}</div>
      <button type="button" className="product-button">
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;

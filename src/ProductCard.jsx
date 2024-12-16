import PropTypes from "prop-types";

function ProductCard({ item, onToggleSelected }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={item.image} alt={item.name} />
      </div>
      <h4 className="product-title">{item.name}</h4>
      <div className="product-price">{item.cost}</div>
      <button
        type="button"
        className="product-button"
        onClick={() => onToggleSelected(item)}
      >
        Add to cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object,
  onToggleSelected: PropTypes.func,
};

export default ProductCard;

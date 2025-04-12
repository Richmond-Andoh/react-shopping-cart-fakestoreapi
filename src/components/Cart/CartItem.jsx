import { useCart } from '../../context/CartContext';
//import './cart.css';

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="quantity-button"
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="quantity-button"
          >
            +
          </button>
        </div>
        <button 
          onClick={() => removeFromCart(item.id)} 
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
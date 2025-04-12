import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
//import './styles/components/cart.css';

export default function CartPage() {
  const { cart, clearCart, getTotalPrice } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 4000);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart!</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        <button onClick={handleCheckout} className="checkout-button">
          Checkout
        </button>
      </div>
      {orderPlaced && (
        <div className="order-confirmation">
          <p>Order placed successfully!</p>
        </div>
      )}
    </div>
  );
}
import { Link } from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';
import { useCart } from '../context/CartContext';
//import './styles/components/header.css';

const Header = () => {
  const { logout, isAuthenticated } = useAuth();
  const { itemCount } = useCart();

  if (!isAuthenticated()) return null;

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/cart" className="nav-link cart-link">
          Cart
          {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </Link>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;
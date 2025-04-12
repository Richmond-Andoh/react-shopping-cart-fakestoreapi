// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetail from "./components/Products/ProductDetails";
import CartPage from './components/Cart/CartPage';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';

import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/products/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
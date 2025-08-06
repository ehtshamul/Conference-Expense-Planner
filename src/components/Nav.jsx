import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Addtocart from './Add-to-cart';
import { useSelector } from 'react-redux';

function Nav() {
  const [showcart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const togglecart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <>
      <nav>
        <h1>ConferenceVenue Pro</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products-selection">Rooms</Link></li>
          <li><Link to="/Add-ons">Add-ons</Link></li>
          <li><Link to="/Meal">Meal</Link></li>
          {cartItems.length > 0 ? `Items in cart: ${cartItems.length}` : 'Cart is empty'}
        </ul>
        <div className="add-to-cart" onClick={togglecart}>
          {showcart ? 'Hide details' : 'Show details'}


          <p>Total Price: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        </div>
          
      </nav>

      {/* Show overlay when cart is open */}
      {showcart && <div className="overlay" onClick={togglecart}></div>}
      
      
      {/* Cart content */}
      {showcart && <Addtocart  />}
        <div className="cart-items-count">
          
            </div>
    </>
  );
}

export default Nav;

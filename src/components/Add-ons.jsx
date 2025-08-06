import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import './add.css';
import equipment from './equipment.json';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity } from '../store/cartSlice';

function AddOns() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAdd = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      dispatch(incrementQuantity(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleDecrement = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      dispatch(decrementQuantity(product));
    } else {
      console.warn(`Item with id ${product.id} not found in cart.`);
    }
  };

  const getQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  useEffect(() => {
    setProducts(equipment); // equipment.json should be a list of objects with id, name, price, unit
  }, []);

  return (
    <div>
      <Nav />
      <h1>Audio-Visual Equipment</h1>
      <p>Explore various add-ons to enhance your experience.</p>

      <div className="add-ons-list">
        {products.map((product, index) => (
          <div className="add-on-item" key={index}>
            <h3>{product.name}</h3>
            <p><strong>Selection Type:</strong> Add-on</p>
            <p>Price: ${product.price}</p>
            <p>Unit: {product.unit}</p>
            <div className="quantity-selector">
              <button onClick={() => handleDecrement(product)}>-</button>
              <span>{getQuantity(product.id)}</span>
              <button onClick={() => handleAdd(product)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddOns;

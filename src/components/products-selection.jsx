import React, { useEffect, useState } from 'react';
import Nav from "./Nav";
import './products.css';
import room_selection from './room_selection.json';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity ,decrementQuantity } from '../store/cartSlice';

function ProductsSelection() {
  const [rooms, setRooms] = useState([]);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items); // ✅ fixed name

  useEffect(() => {
    setRooms(room_selection);
  }, []);

  const handleToCart = (room) => {
    const existingItem = cartItems.find(item => item.id === room.id);
    if (existingItem) {
      dispatch(incrementQuantity(room));
     
    } else {
      dispatch(addToCart(room));
    }
  };
  const handleDecrement =(room)=>{
    const existingItem = cartItems.find(item => item.id === room.id);
    if (existingItem) {
      dispatch(decrementQuantity(room));
    }   else{
        console.warn(`Item with id ${room.id} not found in cart.`);
    }
  }

  const getQuantity = (roomId) => {
    const item = cartItems.find(item => item.id === roomId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="products-selection">
      <Nav />
      <h2>Select Products</h2>
      <p>Choose the products you want to include in your event.</p>

      <div className="product-list">
        {rooms.map((room) => (
          <div className="product-item" key={room.id || room.name}>
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <p>Price: ${room.price}</p>
            <p>{room.unit}</p>
            <p>{room.capacity}</p>
            <div className="quantity-selector">
              <button onClick={() => handleDecrement(room)}>-</button>
              <span>{getQuantity(room.id)}</span>
              <button onClick={() => handleToCart(room)}>+</button> {/* ✅ fixed call */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsSelection;

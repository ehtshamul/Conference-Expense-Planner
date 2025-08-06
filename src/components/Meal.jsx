import React, { useState, useEffect } from 'react';
import './Meal.css';
import Nav from './Nav';
import catering_services from './catering_services.json';
import { useDispatch, useSelector } from 'react-redux';
import { setQuantity  } from '../store/cartSlice'; // ✅ Updated import

function Meal() {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    // Initialize options with quantity = 0
    setOptions(catering_services.map(option => ({ ...option, quantity: 0 })));
  }, []);
   
  const handleQuantityChange = (index, value) => {
    const quantity = parseInt(value, 10) || 0;

    const updatedOptions = [...options];
    updatedOptions[index].quantity = quantity;
    setOptions(updatedOptions);

    const selectedItem = updatedOptions[index];

    dispatch(setQuantity({
      ...selectedItem,
      quantity,
    }));
  };

  return (
    <div>
      <Nav />
      <div className="meal-options">
        <h2>Catering Services</h2>
        <p>Select your preferred meal options for the event.</p>
        <div className='meal-selection'>
          {options.map((option, index) => (
            <div key={option.id} className="meal-option">
              <h3>{option.name}</h3>
              <p>{option.description}</p>
              <p>{option.unit}</p>
              <p>Price: ${option.price}</p>
              <div>
                <input
                  type="number"
                  min="0"
                  value={option.quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                />
                <hr />
                <p>Total: ${(option.price * option.quantity).toFixed(2)}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Meal;

import React from 'react';
import './add-to-cart.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../store/cartSlice';

function Addtocart() {
  const [showcart, setShowCart] = React.useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Conference Expense Details</h1>
      <div>Show details</div>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Selection Type</th>
            <th>Unit Cost</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>remove</th>
            <th>Quantity</th>

          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const typeClass = item.type ? item.type.toLowerCase() : 'default';
            return (
              <tr key={item.id}>
                <td className={`selection-type ${typeClass}`}>
                  <div
                    style={{
                      fontWeight: 'bold',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    {item.type || 'Unknown'} - {item.name}
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                
                 
                  <button onClick={() => handleRemoveFromCart(item)}>
                    Remove
                  </button>
                </td>
                <th>  <div className='Quantity'> <button onClick={() => handleIncrement(item)}>+</button>
                  <button onClick={() => handleDecrement(item)}>-</button> </div></th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <hr />
      <div className="total_price">
        Total: ${calculateTotal()}
      </div>
    </div>
  );
}

export default Addtocart;

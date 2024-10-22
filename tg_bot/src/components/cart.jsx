import React from 'react';
import './cart.css';
import Button from './button.jsx';

function Cart({ cartItems, onAdd, onRemove }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? (
        <p>No Items in cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div>{item.name}</div>
              <div>
                <button onClick={() => onRemove(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onAdd(item)}>+</button>
              </div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>
      )}
      
      <div className="cart-total">
        <span>Total Price: ${totalPrice.toFixed(2)}</span>
      </div>

      {/* Button with corrected props syntax */}
      <Button 
        title={cartItems.length === 0 ? 'Order!' : 'Checkout'}
        type="checkout"
        disabled={cartItems.length === 0}
      />
    </div>
  );
}

export default Cart;
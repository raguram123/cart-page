import React, { useContext } from 'react';
import { CartContext } from './CartProvider';

const CartPage = () => {
 const { cart } = useContext(CartContext);

 return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
 );
};

export default CartPage;
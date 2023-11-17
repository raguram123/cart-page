import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([]);

 useEffect(() => {
    fetchData();
 }, []);

 const fetchData = async () => {
    const result = await axios.get('https://drive.google.com/file/d/1fOadeM1liwbUK38z92F0XYugk2jwqK2r/view?usp=share_link');
    setCart(result.data);
 };

 return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
 );
};

export { CartProvider, CartContext };


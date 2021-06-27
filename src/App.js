import './App.css';
import Header from './header/header.js';
import Cathead from './cathead/cathead.js';
import { useState, useEffect } from 'react';
import Cart from './cart/cart.js';
import Products from './products/products';
import Data from './data.json';





function App() {

  const [cartpage, setCartPage] = useState(false)
  const [products] = useState(Data);
  const [cart, setCart] = useState([]);


  const opencart = (e) => {
    e.preventDefault();
    setCartPage(true);
  }
  const openprod = (e) => {
    e.preventDefault();
    setCartPage(false);
  }
  const addtocart = (post) => {
    setCart([...cart, post])
  }


  return (
    <div className="App">
      <Header />
      <Cathead cart={cart} opencart={opencart} openprod={openprod} />
      {cartpage ?
        <Cart cart={cart} /> :
        <Products products={products} addtocart={addtocart} />
      }


    </div>
  );
}

export default App;

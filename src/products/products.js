import './../products/products.css';
import Cart from './../cart/cart.js';
import { useState, useEffect } from 'react';

function Products({ products, addtocart }) {

  return (
    <div className="products-container">
      <div className='sort'>
      </div>
      <div className="grid-container">
        {
          products.map(post => {
            return (
              <div className='card' key={post.id}>
                <div key={post.id}>
                  <img className='img' src={post.image} />
                  <p className='brand'><strong>{post.brand}</strong></p>
                  <p className='title'>{post.title}</p>
                  <p className='price'> Rs. {post.price}</p>
                  <p className='size'>{post.size}</p>
                  <button className='addtocart' onClick={() => addtocart(post)}>Add To Cart</button>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default Products;
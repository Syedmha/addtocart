import './../cart/cart.css';
import Header from './../header/header.js';
import Cathead from './../cathead/cathead.js';
import { useState, useEffect } from 'react';



function Cart({ cart }) {

    let [total, setTotal] = useState(0);
    useEffect(() => {

        cart.forEach(t => {
            setTotal(total = total + t.price)

        })
    }, [cart])
    console.log([cart.price])
    // let [count, setCount] = useState(0);

    // const incre = (p) => {
    //     setCount(p.price + 1)
    // }

    // const decre = (p) => {
    //     if (p.price > !0)
    //         setCount(p.price - 1)
    // }

    return (
        <div className='cart-container'>
            <div className='plist-container'>
                <div className="productlist">
                    {
                        cart.map(post => {
                            return (
                                <div className='card' key={post.id}>
                                    <div className='imag-container'>
                                        <img className='img' src={post.image} />
                                    </div>
                                    <div className='text-container'>
                                        <p className='brand'><strong>{post.brand}</strong></p>
                                        <p className='title'>{post.title}</p>
                                        <p className='price'> Rs. {post.price}</p>
                                        <p className='size'>{post.size}</p>
                                        <button className='save'>Save for later</button>
                                        <div className='counter'>
                                            <button> -</button><h4 className='add'>1</h4><button >+</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className='Tprice-container'>
                <h1>Total: {total}</h1>
            </div>
        </div>
    )
}

export default Cart;
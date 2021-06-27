import '../cathead/cathead.css';
import Cart from './../cart/cart.js';


function Cathead({ cart, opencart, openprod }) {

    return (
        <div className='cathead-container'>
            <button onClick={opencart}>Cart ({cart.length})</button>
            <button onClick={openprod}>Products</button>

        </div>
    );
}

export default Cathead;
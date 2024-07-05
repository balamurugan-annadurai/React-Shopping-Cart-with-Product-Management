import React, { useContext } from 'react'
import MyContext from './MyContext'
import Header from './Header';
import CartPageHeader from './CartPageHeader';
import { CardForCart } from './CardForCart';

import emptyCart from "../assets/cart-empty.svg";

const Cart = () => {
    var total = 0;
    const { addedProducts } = useContext(MyContext);
    addedProducts.forEach((product) => {
        if (product.quantity > product.stock) {
            product.quantity = 1;
        }
        else {
            var discountedPrice = ((product.price - ((product.discountPercentage / 100) * product.price))
                * Number(product.quantity));
            total = Number(discountedPrice + total);
        }
    })
    return (
        <div className='container'>
            <CartPageHeader />
            <div className="row justify-content-center">
                {
                    addedProducts.length == 0 && <div className='d-flex flex-column align-items-center'> <img className='empty-cart' src={emptyCart} alt="" /> <h6 className='mt-2 grey'>No products selected!</h6></div>
                }
                {
                    addedProducts.map((product, index) => (
                        <CardForCart key={index + 5} product={product} />
                    ))
                }
            </div>
            <div className="cart-bottom">
                <hr />
                <div className="subtotal">
                    <h6>SUBTOTAL:</h6>
                    <h6>${total.toFixed(2)}</h6>
                </div>
                <div className="shipping">
                    <h6>SHIPPING:</h6>
                    <h6 className='free'>FREE</h6>
                </div>
                <hr />
                <div className="total">
                    <h5>TOTAL:</h5>
                    <h4>${total.toFixed(2)}</h4>
                </div>
            </div>
        </div>
    )
}

export default Cart
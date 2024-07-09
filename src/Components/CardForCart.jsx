import React, { useContext, useRef, useState } from 'react'
import MyContext from './MyContext'

export const CardForCart = ({ product }) => {

    const { updateProductQuantity, editBtnStatus } = useContext(MyContext);

    //state for productQuantity
    const [productQuantity, setProductQuantity] = useState(1);
    //state for updatedValue
    const [updatedValue, setUpdatedValue] = useState(1);

    const inputRef = useRef(null);

    //function to handle select options
    const handleChange = (e, id) => {
        setProductQuantity(Number(e.target.value));
        setUpdatedValue(Number(e.target.value));
        updateProductQuantity(e.target.value, id);
    }

    //function to handle update button
    const handleUpdate = (id) => {
        setUpdatedValue(inputRef.current.value);
        product.quantity = Number(inputRef.current.value);
        setProductQuantity(product.quantity);
        editBtnStatus(true, id);

        inputRef.current.value = ''
    }

    return (
        <div className='d-flex  mb-3 gap-3 col-12 cart-product container px-3'>
            <div className="img-container d-flex">
                <img src={product.image} alt="" />
            </div>
            <div className="product-details w-100 justify-content-between">
                <div className="left d-flex flex-column align-items-start justify-content-center">
                    <h5 className='custom-title'>{product.title}</h5>
                    <p className='instock'>In stock</p>
                    {
                        product.quantity >= 10 ?
                            <div className='mb-1 update-box'>
                                {
                                    product.status && <input type="text" placeholder={product.quantity > product.rating.count ? '1' : product.quantity} className='update-input' ref={inputRef} />

                                }
                                <button className='update-btn' onClick={() => handleUpdate(product.id)}>Update</button>
                            </div>
                            : <select value={20} name="" id="" onChange={(e) => handleChange(e, product.id)}>
                                <option>{('quantity' in product) ? product.quantity : productQuantity}</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10+</option>
                            </select>
                    }
                </div>
                <div className="right d-flex flex-column justify-content-around">
                    <h5 className='price'>${product.price}</h5>
                    {
                        updatedValue <= product.rating.count ? <h5 className='price'><div className='discount-title'>Total:</div>${('quantity' in product)
                            ? (product.price * product.quantity).toFixed(2)
                            :
                            (product.price * productQuantity).toFixed(2)
                        }</h5>
                            : <p className='alert'>This seller has only {product.rating.count} Quantity</p>
                    }


                </div>
            </div>

        </div>
    )
}

import React, { useContext, useState } from 'react'
import MyContext from './MyContext';

//Card Component
const Card = ({product}) => {
   

  // Initialize 'btnStatus' state variable to false and provide 'setBtnStatus' function to update it.
  const [btnStatus, setBtnStatus] = useState(false);
  const { setProductCount,addProductToCart,removeProductFromCart } = useContext(MyContext);
  
  //Function to update button and cart status
  const change = () => {
    
    product.status = !product.status;
    if (product.status) {
      setProductCount(count => count + 1);
      addProductToCart(product);
    }
    else {
      setProductCount(count => count - 1);
      removeProductFromCart(product.id)
    }
  }

  return (
    <div className='card col-xl-4 col-lg-6'>
      <div className='card-content'>
        <img src={product.thumbnail} alt="" />
        <h4 className='mt-3'>{product.title}</h4>
        <p>${product.price}</p>
        <button onClick={change}
          className={product.status ? 'btn border-dark' : 'btn btn-dark'}>
          {product.status ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}

export default Card
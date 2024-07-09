import React, { useContext } from 'react'
import Card from './Card'
import MyContext from './MyContext'

//ProductsContainer Component
const ProductsContainer = ({ setProductCount }) => {
  const {productsData} = useContext(MyContext);
  return (
    <div className="row product-container g-0 d-flex justify-content-center">
      {
        productsData.products.map((product,index) => (
          <Card key={index} product={product} />
        ))
      }
    </div>
  )
}

export default ProductsContainer
import React, { useState } from 'react'
import './App.css'
import productsData from './products.json'
import MyContext from './Components/MyContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './Components/Cart'
import Home from './Components/Home'

const App = () => {
 
  //state for product count
  const [productCount, setProductCount] = useState(0);
  //state for addedProducts
  const [addedProducts, setAddedProducts] = useState([]);

  //function to add selected products to cart
  const addProductToCart = (product) => {
    setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
  }

  //function to remove products from cart
  const removeProductFromCart = (id) => {
    setAddedProducts(addedProducts.filter(product => product.id != id));
  }

  //function to update product quantity
  const updateProductQuantity = (quantity,id) => {
    setAddedProducts(addedProducts.map(product => (
         product.id == id ? {...product,quantity} : product
    )))
  }

  //function to update btn status
  const editBtnStatus = (status,id) => {
    setAddedProducts(addedProducts.map(product => (
      product.id == id ? { ...product, status } : product
    )))  
  }
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ]);
  return (
    <>
      <MyContext.Provider value={{
        productsData,
        productCount,
        setProductCount,
        setAddedProducts,
        addProductToCart,
        removeProductFromCart,
        updateProductQuantity,
        editBtnStatus,
        addedProducts
      }}>
        <RouterProvider router={router} />

      </MyContext.Provider>
    </>
  )
}

export default App
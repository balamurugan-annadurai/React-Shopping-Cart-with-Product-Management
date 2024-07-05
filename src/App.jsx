import React, { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import ProductsContainer from './Components/ProductsContainer'
import Banner from './Components/Banner'
import productsData from './product.json'
import MyContext from './Components/MyContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './Components/Cart'
import Home from './Components/Home'

const App = () => {

  const [productCount, setProductCount] = useState(0);
  const [addedProducts, setAddedProducts] = useState([]);

  const addProductToCart = (product) => {
    setAddedProducts([...addedProducts, {...product,quantity:1}]);
  }
  const removeProductFromCart = (id) => {
    setAddedProducts(addedProducts.filter(product => product.id != id));
  }
  const updateProductQuantity = (quantity,id) => {
    setAddedProducts(addedProducts.map(product => (
         product.id == id ? {...product,quantity} : product
    )))
  }

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
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false)

  // function to handleToggle
  const handleToggle = () =>{
    setIsDarkMode(prev => !prev)
  }

  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([])

  // function to handle addToCart
  const addToCart = (product) =>{
    setCartItems(prev => [...prev, product])
  }
  console.log("Cart items:", cartItems)
  // TODO: Implement state for category filtering
   const [ category, setCategory] = useState("all")

  //  function to handle onChange
   const handleOnChange = (event) =>{
    setCategory(event.target.value)
   }
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle isDarkMode={isDarkMode} handleToggle={handleToggle}/>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={handleOnChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList addToCart={addToCart} category={category}/>
     

      {/* TODO: Implement and render Cart component */}
      <Cart  cartItems={cartItems}/>
    </div>
  )
}

export default App

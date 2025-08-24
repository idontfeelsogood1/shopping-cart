import { useState } from 'react'
import './Root.css'
import { Link, Outlet } from 'react-router'

function Root() {

  return (
    <>
      <nav>
        <h1>Shopping Cart</h1>
        <Link to={{pathname: "/"}}>Home</Link>
        <Link to={{pathname: "/shop"}}>Shop</Link>
        <Link to={{pathname: "/cart"}}>Cart</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Root

// Each component should have its own CSS
// CSS should be saved for last

// Implement <Root />
  // Root contain's state of Added items
  // Added items should be {id:, name:, amount:, price:,} (based on api, subject to change)
  // State should be passed through outlet context

// Implement <Home />
  // Shop Now button Link to /shop

// Implement <Shop />
// Implement <Item />
  // Shop fetch API for items object on mount
  // Item receive object from Shop as props
  // Item receive Root's (state) (useContextOutlet)
  // Item set state of Root's added items

// Implement <Cart />
  // Cart receive Root's added items state (useContextOutlet)
  // Cart can modify root's item
  // Checkout button should clear root's item
  // Continue Shopping button Link to /shop

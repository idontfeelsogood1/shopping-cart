import { useState } from 'react'
import './Root.css'
import { Link, Outlet } from 'react-router'

function Root() {
  const [addedItems, setAddedItems] = useState(new Map())
  const mapArray = Array.from(addedItems.entries())
  let totalItems = 0

  for (let entries of mapArray) {
    for (let i = 0; i < entries[1].length; i++) {
      totalItems += 1
    }
  }

  return (
    <>
      <header>
        <h1>Shopping Cart</h1>
        <nav>
          <Link to={{pathname: "/"}}>Home</Link>
          <Link to={{pathname: "/shop"}}>Shop</Link>
          <Link to={{pathname: "/cart"}}>Cart: {addedItems.length}</Link>
        </nav>
      </header>
      <h2>Total Items: {totalItems}</h2>
      <Outlet context={[addedItems, setAddedItems]}/>
    </>
  )
}

export default Root

// Each component should have its own CSS
// CSS should be saved for last

// Implement <Root />
  // Root contain's state of Added items
  // Added items should be an array of objects 
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
// Implement <CartItem />
  // Cart receive Root's added items state (useContextOutlet)
  // Checkout button should clear root's added items
  // Continue Shopping button Link to /shop

  // CartItem receive item.id from Cart
  // CartItem receive Root's added items state (useContextOutlet)
  // CartItem add and subtracts itself from root
  // CartItem can remove itself from root

// Implement <ErrorPage />
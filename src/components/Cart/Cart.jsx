import { useOutletContext, Link } from "react-router"
import CartItem from "../CartItem/CartItem"

function Cart() {
    const [addedItems, setAddedItems] = useOutletContext()
    const mapArray = Array.from(addedItems.entries())
    let totalPrice = 0

    for (let entries of mapArray) {
        for (let item of entries[1]) {
            totalPrice += item.price
        }
    }

    function handleCheckout() {
        setAddedItems(new Map())
    }

    return (
        <main>
            <h1>Your Cart</h1>
            <section className="container">
                <h2>Cart Items: {addedItems.size}</h2>
                <div className="item-container">
                    {mapArray.map((entries) => {
                        return <CartItem
                            id={entries[0]}
                        />
                    })}
                </div>
            </section>
            <footer className="payment">
                <h2>Order Summary</h2>
                <section className="pricing-details">
                    <div className="space-between">
                        <span>Subtotal</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div className="space-between">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                </section>
                <section className="checkout">
                    <div className="space-between">
                        <span>Total</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div className="button-group">
                        <button type="button" onClick={handleCheckout}>Proceed to Checkout</button>
                        <Link to={{pathname: "/shop"}}>Continue Shopping</Link>
                    </div>
                </section>
            </footer>
        </main>
    )
}

export default Cart
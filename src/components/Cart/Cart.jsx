import { useOutletContext, Link } from "react-router"
import CartItem from "../CartItem/CartItem"
import style from './Cart.module.css'

function Cart() {
    const [addedItems, setAddedItems] = useOutletContext()
    const mapArray = Array.from(addedItems.entries())
    let totalPrice = 0
    let totalItems = 0

    for (let entries of mapArray) {
        for (let item of entries[1]) {
            totalPrice += item.price
        }
        if (entries[1].length !== 0) totalItems += 1
    }

    function handleCheckout() {
        setAddedItems(new Map())
    }

    return (
        <main className={style.cart}>
            <h1>Your Cart</h1>
            <section className={style.container}>
                <h3>Cart Items ({totalItems})</h3>
                <div className={style.itemContainer}>
                    {mapArray.map((entries) => {
                        return <CartItem
                            id={entries[0]}
                        />
                    })}
                </div>
            </section>
            <footer className={style.payment}>
                <h2>Order Summary</h2>
                <section className={style.pricingDetails}>
                    <div className={style.spaceBetween}>
                        <span>Subtotal</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div className={style.spaceBetween}>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                </section>
                <hr />
                <section className={style.checkOut}>
                    <div className={style.spaceBetween}>
                        <h2>Total</h2>
                        <h2>${totalPrice}</h2>
                    </div>
                    <div className={style.buttonGroup}>
                        <button type="button" onClick={handleCheckout}>Proceed to Checkout</button>
                        <Link className={style.link} to={{pathname: "/shop"}}>Continue Shopping</Link>
                    </div>
                </section>
            </footer>
        </main>
    )
}

export default Cart
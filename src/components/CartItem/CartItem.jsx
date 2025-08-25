import { useOutletContext } from "react-router"

function CartItem({ id }) {
    const [addedItems, setAddedItems] = useOutletContext()
    const itemsAmount = addedItems.get(id).length
    const item = addedItems.get(id)[0]
    let totalPrice = 0

    for (let object of addedItems.get(id)) {
        totalPrice += object.price
    }

    function handleAdd() {
        addedItems.get(id).push(item)
        setAddedItems(structuredClone(addedItems))
    }

    function handleSubtract() {
        addedItems.get(id).pop(item)
        setAddedItems(structuredClone(addedItems))
    }

    function handleRemove() {
        addedItems.set(id, [])
        setAddedItems(structuredClone(addedItems))
    }

    if (itemsAmount !== 0) {
        return (
            <div className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-info">
                    <span>{item.title}</span>
                    <span>{totalPrice}</span>
                </div>
                <div className="button-group">
                    <div className="change-amount-btn-container">
                        <button onClick={handleSubtract}>-</button>
                        <span>{itemsAmount}</span>
                        <button onClick={handleAdd}>+</button>
                    </div>
                    <button className="remove-btn" onClick={handleRemove}>Remove</button>
                </div>
            </div>
        )
    }
}

export default CartItem
import { useOutletContext } from "react-router"
import style from "./CartItem.module.css"

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
            <div className={style.cartItem}>
                <img src={item.image} alt={item.title} />
                <div className={style.buttonGroup}>
                    <div className={style.itemInfo}>
                        <span className={style.itemTitle}>{item.title}</span>
                        <span className={style.itemPrice}>${totalPrice}</span>
                    </div>
                    <div className={style.buttonContainer}>
                        <div className={style.amountBtnGroup}>
                            <button className={style.subtractBtn} onClick={handleSubtract}>-</button>
                            <span>{itemsAmount}</span>
                            <button className={style.addBtn} onClick={handleAdd}>+</button>
                        </div>
                        <button className={style.removeBtn} onClick={handleRemove}>Remove</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem
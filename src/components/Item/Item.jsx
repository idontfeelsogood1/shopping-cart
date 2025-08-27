import { useOutletContext } from "react-router"
import style from "./Item.module.css"

function Item({ item }) {
    const [addedItems, setAddedItems] = useOutletContext()

    function handleAddToCart() {
        if (!addedItems.has(item.id)) {
            addedItems.set(item.id, [item])
            setAddedItems(structuredClone(addedItems))
        } else {
            addedItems.get(item.id).push(item)
            setAddedItems(structuredClone(addedItems))
        }
    }

    return (
        <div className={style.card}>
            <img src={item.image} alt="item.title" />
            <section>
                <h2 className={style.itemName}>{item.title}</h2>
                <h2 className={style.price}>${item.price}</h2>
            </section>
            <button type="button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )

}

export default Item
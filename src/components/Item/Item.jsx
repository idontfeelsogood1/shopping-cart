import { useOutletContext } from "react-router"

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
        <div className="card">
            <img src={item.image} alt="item.title" />
            <section>
                <h2 className="item-name">{item.title}</h2>
                <h2 className="price">${item.price}</h2>
            </section>
            <button type="button" onClick={handleAddToCart}></button>
        </div>
    )

}

export default Item
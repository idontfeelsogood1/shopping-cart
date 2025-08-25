import { useOutletContext } from "react-router"

function Item({ item }) {
    const [addedItems, setAddedItems] = useOutletContext()

    function handleAddToCart() {
        setAddedItems([...addedItems, item])
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
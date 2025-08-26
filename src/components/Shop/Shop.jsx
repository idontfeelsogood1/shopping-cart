import { useItems } from "../helpers"
import Item from "../Item/Item"
import style from './Shop.module.css'

function Shop() {
   const { items, isLoading, error } = useItems()
    
    // return loading screen if isLoading
    if (isLoading) {
        return (
            <h1 className={style.loading}>Loading Items...</h1>
        )
    }

    // return error if error
    if (error) {
        return (
            <h1 className={style.error}>Error: {error}</h1>
        )
    }

    // return items if nothing goes wrong
    return (
        <main className={style.shop}> 
            {items.map((object) => {
                return <Item 
                    item={object}
                />
            })}
        </main>
    )
}

export default Shop


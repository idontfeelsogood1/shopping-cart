import { useState, useEffect } from "react"

export function useItems() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                let result = await response.json()
                setItems(result)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchItems()
    }, [])

    return {items, isLoading, error}
}


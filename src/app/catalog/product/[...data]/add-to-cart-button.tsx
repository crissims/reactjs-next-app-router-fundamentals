'use client'
import { useState } from "react"
import { Test } from "./test"

export function AddToCartButton() {

    const [count, setCount] = useState(0)

    function addToCart() {
        setCount((state) => state + 1)
    }

    return (
        <div>
        
        <button onClick={addToCart}>Adcionar ao carrinho ({count})</button>
        <Test />

        </div>

    )
}
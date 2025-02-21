'use client'
import { useState } from "react"


export function AddToCartButton({children}: {children: React.ReactNode}) {

    const [count, setCount] = useState(0)

    function addToCart() {
        setCount((state) => state + 1)
    }

    return (
        <div>
        
        <button onClick={addToCart}>Adcionar ao carrinho ({count})</button>
        {children}

        </div>

    )
}
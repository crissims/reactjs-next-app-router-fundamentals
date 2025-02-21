'use client'
interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({params}: ProductProps) {
  
  

  const [productId, size, color] = params.data

  function addToCart() {
    console.log('Adcionou ao carrinho')
  }
  
  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button onClick={addToCart}>Adcionar ao carrinho</button>
    </div>
  );
}
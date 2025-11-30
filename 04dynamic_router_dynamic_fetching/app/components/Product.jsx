function Product({ title, price }) {
  return (
    <div className="text-xl font-bold">
      <h1>Title: {title}</h1>
      <p>Price: ${price}</p>
    </div>
  )
}

export default Product 
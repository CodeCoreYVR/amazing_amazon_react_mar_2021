function ProductDetails({
  /** This way of destructuring props gives the same result as tin Review Details */
  title,
  seller,
  description,
  price,
  createdAt,
}) {
  return (
    <div>
      <h1 className='header'>Product: {title}</h1>
      <p>description: {description}</p>
      <p>price: ${price}</p>
      <p>Sold by: {seller}</p>
      <p>createdAt: {createdAt}</p>
    </div>
  )
}

export default ProductDetails

import React from 'react'

const ProductDetails = (props) => {
    const { title, seller_full_name, description, price, created_at } = props;
    return (
      <div>
        <h1 className='header'>Product: {title}</h1>
        <p>description: {description}</p>
        <p>price: ${price}</p>
        <p>Sold by:{seller_full_name ? seller_full_name : ""}</p>
        <p>created_at: {created_at}</p>
      </div>
    )
  }

export default ProductDetails;

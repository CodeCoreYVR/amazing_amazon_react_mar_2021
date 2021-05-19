import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { ProductDetails } from './ProductDetails'
// import { ReviewDetails } from './ReviewDetails'
import { product } from '../data/product'
import { ReviewList } from './ReviewList'

class ProductShowPage extends Component {
  constructor(props){
    super(props);
    this.state = product
  }
  render() {
    const { title, description, created_at, seller, price, reviews } = this.state
    return (
      <>
        <ProductDetails
          title={title}
          description={description}
          fullName={seller.full_name}
          price={price}
          createdAt={created_at}
        />
        <ReviewList reviews={reviews} />
      </>
    )
  }
}

export default ProductShowPage;

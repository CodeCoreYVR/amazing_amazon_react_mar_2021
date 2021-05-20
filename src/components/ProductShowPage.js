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
    this.deleteReview = this.deleteReview.bind(this)
  }

  deleteReview(id){
    this.setState((state) => {
      return {
        reviews: state.reviews.filter(r => r.id !== id)
      }
    })
  }

  render() {
    const { title, description, created_at, seller, price } = this.state
    return (
      <>
        <ProductDetails
          title={title}
          description={description}
          fullName={seller.full_name}
          price={price}
          createdAt={created_at}
        />
        <ReviewList 
        reviews={ this.state.reviews }
        deleteReview = { this.deleteReview } 
        />
      </>
    )
  }
}

export default ProductShowPage;

import React, {Component} from 'react';
import ProductDetails from '../ProductDetails'
import { ReviewDetails } from '../ReviewDetails'
import { ReviewList } from '../ReviewList'
import { Product } from '../../requests';

class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
      };

    this.deleteReview = this.deleteReview.bind(this);
  }

  componentDidMount() {
    Product.show(this.props.match.params.id).then((product) => {
      this.setState((state) => {
        return {
          product
        }
      })
    })
  }

  deleteReview(reviewId) {
    const {
        product,
        product: { reviews },
    } = this.state

    this.setState({
        product: {
            ...product,
            reviews: reviews.filter(r => r.id !== reviewId),
        },
    });
  }

  render() {
    const { id, title, description, created_at, seller, reviews, sale_price } = this.state.product;
      return (
          <div className="ProductShowPage">
                {
                    id ? 
                    <ProductDetails 
                        id={id}
                        title={title}
                        price={sale_price}
                        description={description}
                        created_at={created_at}
                        seller={seller ? seller.full_name : ""}
                    /> :
                    <div>Product is loading...</div>
                }
              <ReviewList
              onReviewDeleteClick={this.deleteReview}
              reviews={reviews} />  
          </div>
      );
  }
}

export default ProductShowPage;

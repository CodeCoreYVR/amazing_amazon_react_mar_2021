import React, {Component} from 'react';
import ProductDetails from '../ProductDetails';
import { ReviewDetails } from '../ReviewDetails';
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
          product: product
        }
      })
    })
  }

  deleteReview(id) {
    this.setState((state)=>{
      return{
        product: {
          ...state.product,
          reviews: state.product.reviews.filter((r) => {
            return r.id !== id;
          })
        }
      }
    });
  }

  // deleteReview(id){
  //   this.setState((state) => {
  //     return {
  //       reviews: state.reviews.filter(r => r.id !== id)
  //     }
  //   })
  // }

  render() {
    const { id, title, description, created_at, seller, reviews, price } = this.state.product;
      return (
          <div className="ProductShowPage">
                {
                    id ? 
                    <ProductDetails 
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        created_at={created_at}
                        seller={seller.id ? seller.full_name : ""}
                    /> :
                    <div>Product is loading...</div>
                }
              <ReviewList
              deleteReview={this.deleteReview}
              reviews={reviews} />  
          </div>
      );
  }
}

export default ProductShowPage;

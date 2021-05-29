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
          product: product,
          ...state.product.reviews 
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
    const { id, title, description, created_at, seller_full_name , price } = this.state.product;
    console.log(`Productreviews: ${this.state.product.reviews}`)
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
                        seller_full_name={seller_full_name ? seller_full_name : ""}
                    /> :
                    <div>Product is loading...</div>
                }
              <ReviewList
              deleteReview={this.deleteReview}
              reviews={this.state.product.reviews} />  
          </div>
      );
  }
}

export default ProductShowPage;

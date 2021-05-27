import React, { Component } from 'react'
import NewProductForm from '../NewProductForm';
import { Product } from '../../requests';

class ProductNewPage extends Component {
  constructor(props) {
    super(props);
    this.createProduct = this.createProduct.bind(this)
    this.state = { errors: [] };
  }

  createProduct(params) {
    Product.create(params)
      .then(( product ) => {
        if (product.errors) {
          this.setState({ errors: product.errors });
        } else {
        this.props.history.push(`/products/${product.id}`)
        }
      })
  }

  render() {
    return(
      <main>
        <NewProductForm createProduct={this.createProduct} errors={this.state.errors}/>
      </main>
    )
  }
}

export default ProductNewPage
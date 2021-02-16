import React, { Component } from 'react';
// import productList from '../../data/productList';
import ProductDetails  from '../ProductDetails';
import NewProductForm from '../NewProductForm';
import { Link } from 'react-router-dom';
import { Product } from '../../requests'

class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };

        this.deleteProduct = this.deleteProduct.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    componentDidMount() {
        Product.index()
          .then((products) => {
            this.setState((state) => {
              return {
                products: products
              }
            })
          })
      }

    deleteProduct(productId) {
        this.setState({
            products: this.state.products.filter(p => p.id !== productId)
        })
    }

    createProduct(params){
        this.setState((state) => {
          return {
            products: [
              ...state.products,
              {
                id:  Math.max(...state.products.map(p => p.id)) + 1,
                ...params
              }
            ]
          }
        })
      }


    render(){
        return (
            <div className="ProductIndexPage">
               <h1>Products</h1> 
               <ul>
                   {this.state.products.map(product => (
                    <div key={product.id}>
                        <Link key={product.id} to={`/products/${product.id}`}>
                        <ProductDetails {...product} deleteProduct={this.deleteProduct}/>
                        </Link>  
                        <button style={{ borderColor: 'red', margin: '5px 6px' }} onClick={() => this.deleteProduct(product.id)}>
                            Delete
                        </button>
                    </div> 
                   ))}
               </ul>
            </div>
        )
    }
}

export default ProductIndexPage;

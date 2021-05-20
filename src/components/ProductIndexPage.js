import React, { Component } from 'react'
import productsData from '../data/productsData'
import ProductForm from './ProductForm'

class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products : productsData }
        this.createProduct = this.createProduct.bind(this)
    }

    deleteProduct(id){
        this.setState((state) => {
          return {
            products: state.products.filter(p => p.id !== id)
          }
        }
        )
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
          <main>
            <ProductForm createProduct={this.createProduct}/>
            <h1>Products</h1>
            <ul 
              style={{
                listStyle: 'none',
                paddingLeft: 0,
              }}
            >
              {this.state.products.map(({ id, title }) => (
                <li key={id}>
                  <a href="#">{id} - {title}</a>
                  <button onClick={() => this.deleteProduct(id)}>Delete</button>
                  <hr/>
                </li>
              ))}
            </ul>
          </main>
        )
    }
}

export default ProductIndexPage;

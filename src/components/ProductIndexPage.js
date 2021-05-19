import React, { Component } from 'react'
import productsData from '../data/productsData'

class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products : productsData }
    }

    deleteProduct(id){
        this.setState((state) => {
          return {
            products: state.products.filter(p => p.id !== id)
          }
        }
        )
    }

    render(){
        return (
          <main>
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

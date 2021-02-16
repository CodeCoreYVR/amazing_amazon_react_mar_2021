import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductIndexPage from '../ProductIndexPage';
import ProductShowPage from '../ProductShowPage';
import NavBar from '../NavBar';
import { Session } from '../../requests';
import ProductNewPage from '../ProductNewPage';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user:null
        }
      }
    
      //Hacky Sign In to get a cookie before we implement authorization later
      //this will happen as soon as the app mounts
      componentDidMount() {
        Session.create({
          email: 'js@winterfell.gov',
          password: 'supersecret'
        })
        .then(user => {
            console.log(`User:${user}`)
            this.setState((state) => {
              return {
                user: user
              }
            })
          })
        }
    render() {
        return(
        <BrowserRouter>
            <NavBar/>
            <Switch>
            <Route path='/' exact render={() => <div>Hello World</div> } />
            <Route path='/products/new' component={ProductNewPage} />
            <Route path='/products/:id' component={ ProductShowPage } />
            <Route path='/products' exact component={ ProductIndexPage }/>
            </Switch>
        </BrowserRouter>
        )
    }
}

export default App;
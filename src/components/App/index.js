import React, { Component } from 'react';
import ProductIndexPage from '../ProductIndexPage';
import ProductShowPage from '../ProductShowPage';
import { Session } from '../../requests';
import { User } from '../../requests';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import ProductNewPage from '../ProductNewPage';
import SignInPage from '../SignInPage';
import AuthRoute from '../AuthRoute';
import SignUpPage from '../SignUpPage';
import NotFoundPage from '../NotFoundPage';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user:null
        }
        // this.handleSubmit=this.handleSubmit.bind(this);
        // this.destroySession=this.destroySession.bind(this);
      }

    componentDidMount () {
      this.getCurrentUser()
    } 

    // When calling "this.setState", we always want the "this" keyword
    // to this class itself. If we call it from another component, "this" will
    // lose its context, e.g. 
    // <SignInPage onSignIn={this.getCurrentUser} />
    // We need to either use the ".bind" method in the constructor or
    // define it like as a class arrow function to ensure that "this" 
    // always refers back to the class
    getCurrentUser = () => {
      return User.current().then(user => {
        // This is the safe naviagtion operator
        // Similar to user && user.id
        if (user?.id) { 
          this.setState(state => {
            return { user }
          })
        }
      })
    }
  
    onSignOut = () => {
      this.setState({
        user: null
      })
    }
    render() {
        return(
        <BrowserRouter>
            <NavBar currentUser={this.state.user} onSignOut={this.onSignOut}/>
            <Switch>
            <Route exact path='/' render={() => <div>Hello World</div> } />
            <Route exact path='/sign_in' render={(routeProps)=><SignInPage {...routeProps} onSignIn={this.getCurrentUser}/>} />
            <Route 
              exact
              path='/sign_up'
              render={(routeProps) => <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />}
            />
            <AuthRoute 
              // The !! turns something "truthy" or "falsy" to true and false respectively
              isAuthenticated={!!this.state.user}
              exact
              path='/products/new'
              component={ProductNewPage}
            />
            {/*<Route path='/products/:id' component={ ProductShowPage } />*/}
            <AuthRoute 
              // The !! turns something "truthy" or "falsy" to true and false respectively
              isAuthenticated={!!this.state.user}
              exact
              path='/products/:id'
              component={ProductShowPage}
            />
            <Route path='/products' exact component={ ProductIndexPage }/>
            <Route component={NotFoundPage} /> 
            </Switch>
        </BrowserRouter>
        )
    }
}

export default App;
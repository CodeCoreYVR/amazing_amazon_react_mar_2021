import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductIndexPage from '../ProductIndexPage';
import ProductShowPage from '../ProductShowPage';
import NavBar from '../NavBar';
import { Session } from '../../requests';
import ProductNewPage from '../ProductNewPage';
import SignInPage from '../SignInPage'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user:null
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.destroySession=this.destroySession.bind(this);
      }
    
      //Hacky Sign In to get a cookie before we implement authorization later
      //this will happen as soon as the app mounts
      componentDidMount() {
        Session.currentUser()
    .then(user=>{
      console.log('user', user);
      this.setState((state)=>{
        return {user:user}
      })
    })
        }
        handleSubmit(params){
          // params look like this : {email: 'js@winterfell.gov', password: 'supersecret'}
          Session.create(params).then(()=>{
            return Session.currentUser()}
            ).then(user=>{
              console.log('user', user);
              this.setState((state)=>{
                return {user:user}
              })
            })
      
        }
        destroySession(){
          Session.destroy()
          .then(res=>{
            this.setState(
                (
                state=>{return {user:null}}
                )
              )
            })
        }
    render() {
        return(
        <BrowserRouter>
            <NavBar currentUser={this.state.user} destroySession={this.destroySession}/>
            <Switch>
            <Route path='/' exact render={() => <div>Hello World</div> } />
            <Route path='/products/new' component={ProductNewPage} />
            <Route path='/products/:id' component={ ProductShowPage } />
            <Route path='/products' exact component={ ProductIndexPage }/>
            <Route path='/sign_in' render={(routeProps)=><SignInPage handleSubmit={this.handleSubmit} {...routeProps}/>} />
            </Switch>
        </BrowserRouter>
        )
    }
}

export default App;
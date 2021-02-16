import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {

function handleSignOut(){
    props.destroySession()
}
  return(
    <div>
      <NavLink to='/'>Home</NavLink>
      ||
      <NavLink to='/products'>Product Index</NavLink>
      ||
      <NavLink to='/products/new'>New Product Page</NavLink>
      {
        props.currentUser ? 
        (
        <div>
            <span>{props.currentUser.first_name}</span> 
            ||
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
        )
        :
        <NavLink to='/sign_in'>Sign In</NavLink>
      }
      
    </div>
  )
}

export default NavBar 
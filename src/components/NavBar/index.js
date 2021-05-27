import React from 'react';
import { NavLink } from 'react-router-dom';
import { Session } from '../../requests'

function NavBar({ currentUser, onSignOut }) {

function handleSignOut(){
  Session.destroy().then(() => {
    onSignOut()
  })
}
  return(
    <div>
      <NavLink to='/'>Home</NavLink>
      ||
      <NavLink to='/products'>Product Index</NavLink>
      ||
      <NavLink to='/products/new'>New Product Page</NavLink>
      {
        currentUser ? 
        (
          <React.Fragment>
          {/* This allows us to write components beside each other without wrapping them in 
            a parent container. This stops us from messing out the layout and keeps the 
            NavLinks as a direct child of the <nav>. The short form is <> </>
          */}
            <span>Welcome, {currentUser.full_name}</span> 
            ||
            <button onClick={handleSignOut}>Sign Out</button>
          </React.Fragment>
        )
        : (
        <> 
        <NavLink to='/sign_in'>Sign In</NavLink>
        ||
        <NavLink to='/sign_up'>Sign Up</NavLink>
        </>
        )
      }
      
    </div>
  ) 
}

export default NavBar 
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return(
    <div>
      <NavLink to='/'>Home</NavLink>
      ||
      <NavLink to='/products'>Product Index</NavLink>
      ||
      <NavLink to='/products/new'>New Product Page</NavLink>
    </div>
  )
}

export default NavBar 
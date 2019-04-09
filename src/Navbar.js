import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = ({managersCount}) => {
  return(
    <ul className="nav nav-pills" style={{marginBottom: '20px'}}>
      <li className="nav-item"><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
      <li className="nav-item"><NavLink exact to="/products" className="nav-link" activeClassName="active">Products</NavLink></li>
      <li className="nav-item"><NavLink exact to="/products/managers" className="nav-link" activeClassName="active">Managers ({managersCount})</NavLink></li>
    </ul>
  )
}

export default Navbar;

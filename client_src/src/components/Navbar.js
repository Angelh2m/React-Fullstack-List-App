import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{

  render() {
    return (
      <div>
        <nav >
            <div className="nav-wrapper">
              <a className="brand-logo">Logo</a>
              <ul id="main-menu" className="right ">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/meetups/add" >Add</Link></li>
                <li><Link to="/about" >About</Link></li>
              </ul>
            </div>
          </nav>

      </div>
    )
  }

}

export default Navbar;

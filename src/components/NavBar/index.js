import React from 'react';
import { Link } from 'react-router-dom';
import './style/index.css';
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link className='link' to='/'>
            HomePage
          </Link>
        </li>
        <li>
          <Link className='link' to='/contact-us'>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import '../css/Header.css'
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='container'>
      <div className='logo-container'>
        <Link id='logo' to="/"><h1>WEIGHTLIST</h1></Link>
      </div>
    </div>
  )
}

export default Header;
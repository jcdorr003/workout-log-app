import React from 'react';
import '../css/Header.css'
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='container'>
      <div className='logo'>
        <Link to="/"><h1>WeightList</h1></Link>
      </div>
    </div>
  )
}

export default Header;
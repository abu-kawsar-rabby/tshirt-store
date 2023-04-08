import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav'>
            <h1 id='title'><span id='t'>T</span>shirt</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    );
};

export default Header;
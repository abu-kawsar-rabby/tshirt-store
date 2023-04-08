import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='dark'>
            <p>All Rights Reseved By Tshirt Store @ {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;
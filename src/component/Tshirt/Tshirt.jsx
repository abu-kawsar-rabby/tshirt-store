import React from 'react';
import './Tshirt.css'
import { Link } from 'react-router-dom';

const Tshirt = ({tshirt}) => {
    return (
        <div className='tshirt-box'>
            <img src={tshirt.picture} alt="" />
            <h3>{tshirt.name}</h3>
            <p>Price: ${tshirt.price}</p>
            <Link to=""><button>Buy Now</button></Link>
        </div>
    );
};

export default Tshirt;
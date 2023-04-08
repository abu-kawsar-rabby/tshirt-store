import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tshirt, handleAddToCart }) => {
    return (
        <div className='tshirt-box'>
            <img src={tshirt.picture} alt="" />
            <h3>{tshirt.name}</h3>
            <p>Price: ${tshirt.price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;
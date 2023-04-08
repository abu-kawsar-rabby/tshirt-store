import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let massage;

    if (cart.length === 0) {
        massage = <p>vai kichu kino plz</p>
    }

    return (
        <div className='cart'>
            <h3 className={cart.length === 0 ? 'red' : 'blue'}>Order Summary: {cart.length}</h3>
            <p className={`font ${cart.length === 0 ? 'red' : 'blue'}`}>jibon ta bedona</p>
            {cart.length > 2
                ? <p>vai tui borolox</p>
                : <p>vai tui gorib</p>}
            {
                cart.length === 5 && <p>vai abar tham onk hoiche</p>
            }
            {
                cart.length === 2 || <p>ak jora kinlina kosto</p>
            }
            {massage}
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;
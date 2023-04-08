import React, { useContext } from 'react';

const Cousin = ({name, medicine}) => {
    return (
        <div className='father'>
            <p>Cousin</p>
            <small>{name}</small>
            <p>{medicine}</p>
        </div>
    );
};

export default Cousin;
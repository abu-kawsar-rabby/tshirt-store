import React from 'react';
import './Father.css'
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Cousin/Sister/Sister';

const Father = () => {
    return (
        <div className='father-or'>
            <p className=''>Father has  ring</p>
            <div className="father">
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;
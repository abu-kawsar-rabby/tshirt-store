import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import './Family.css';

export const MedicineContext = createContext('rex');

export const MoneyContext = createContext(0);



const Family = () => {

    const antioxident = 'rex';
    const [money, setMoney] = useState(0);

    return (
        <div className='text'>
            <h2 className='text'>GrandPa</h2>
            <p>has money: ${money}</p>
            <div className="family text">
                <MoneyContext.Provider
                    value={[money, setMoney]}
                >
                    <MedicineContext.Provider
                        value={antioxident}
                    >
                        <Father></Father>
                        <Uncle></Uncle>
                        <Anty></Anty>
                    </MedicineContext.Provider>
                </MoneyContext.Provider>
            </div>
        </div>
    );
};

export default Family;
import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MedicineContext, MoneyContext } from '../Family/Family';

const Uncle = () => {
    const medicine = useContext(MedicineContext);
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='father-or'>
            <p>Uncle</p>
            <p>money ${money}</p>
            <button onClick={()=>setMoney(money+10000)}>send money</button>
            <div className="father">
                <Cousin
                    name={'halim'}
                ></Cousin>
                <Cousin
                    name={'Dalim'}
                    medicine={medicine}
                ></Cousin>
            </div>
        </div>
    );
};

export default Uncle;
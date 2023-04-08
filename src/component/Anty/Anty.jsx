import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MedicineContext, MoneyContext } from '../Family/Family';

const Anty = () => {

const medicine = useContext(MedicineContext);

const [money] = useContext(MoneyContext);

    return (
        <div className='father-or'>
            <p>Anty</p>

            <p>has money ${money}</p>

            <div className="father">
                <Cousin
                    name={"Nabila"}
                ></Cousin>
                <Cousin
                    name={'Sabila'}
                    medicine={medicine}
                ></Cousin>
            </div>
        </div>
    );
};

export default Anty;
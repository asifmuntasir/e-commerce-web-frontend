import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'


const CartAmountCalc = ({ amount, setDecrease, setIncrease }) => {
    return (
        <div className='cart-button'>
            <div className="amount-toggle">
                <button onClick={() => setIncrease()}>
                    <FaPlus />
                </button>
                <div className="amount-style">{amount}</div>
                <button onClick={() => setDecrease()}>
                    <FaMinus />
                </button>
            </div>
        </div>
    );
}

export default CartAmountCalc;

import React, { useState } from "react";
import './Payments.css';

const Payments = ({ steamID, deposit }) => {
    const [selectedPayment, setSelectedPayment] = useState(null);

    const selectPayment = (paymentType) => {
        setSelectedPayment(paymentType); 
    }

    return (
        <div className={'Payments'}>
            <div className={'cart-pay'}>
                <img 
                    src="/pic/card.svg" 
                    alt="card pay" 
                    className={selectedPayment === 'card' ? 'selected' : ''}
                    onClick={() => selectPayment('card')} 
                />
                <img 
                    src="/pic/sbp.svg" 
                    alt="sbp pay" 
                    className={selectedPayment === 'sbp' ? 'selected' : ''}
                    onClick={() => selectPayment('sbp')} 
                />
            </div>
            <div className={'text-pay'}>
                <h5>Логин steam {steamID}</h5>
                <h5>Сумма {deposit} руб.</h5>
            </div>
            <button className={'button-pay'}>Пополнить</button>
        </div>
    );
}

export default Payments;
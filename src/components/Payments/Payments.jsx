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
            <h5><span className={'label'}>Логин steam</span> <span className={'value'}>{steamID}</span></h5>
            <h5><span className={'label'}>Сумма</span> <span className={'value'}>{deposit} руб.</span></h5>
            <button className={'button-pay'}>Пополнить</button>
        </div>
    );
}

export default Payments;
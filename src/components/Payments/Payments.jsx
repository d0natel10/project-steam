import React, { useState } from "react";
import './Payments.css';
import { useCallback } from "react";
import { useTelegram } from "../hooks/useTelegram";

const Payments = ({ steamID, deposit }) => {
    const [selectedPayment, setSelectedPayment] = useState(null);

    const selectPayment = (paymentType) => {
        setSelectedPayment(paymentType); 
    }
    const {queryId} = useTelegram;

    const handlePayment = useCallback(() => {
        const data = {
            products: steamID,
            totalPrice: deposit,
            queryId,
        }
        fetch('http://85.119.146.179:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [steamID, deposit])

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
                <h4>Логин steam <span>{steamID}</span></h4>
                <h4>Сумма <span>{deposit*1.1}</span> руб.</h4>
            </div>
            <button className={'button-pay'} onClick={handlePayment}>Пополнить</button>
        </div>
    );
}

export default Payments;
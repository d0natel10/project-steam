//http://45.89.188.200:8000/web-data
import React, { useState, useCallback } from "react";
import './Payments.css';
import { useTelegram } from "../hooks/useTelegram";

const Payments = ({ steamID, deposit }) => {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const { queryId } = useTelegram(); 
    const [addedItems, setAddedItems] = useState(['xui']);

    const selectPayment = (paymentType) => {
        setSelectedPayment(paymentType); 
    }

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            queryId,
        }
        fetch('http://45.89.188.200:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

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
            <button className={'button-pay'} onClick={onSendData}>Пополнить</button>
        </div>
    );
}

export default Payments;
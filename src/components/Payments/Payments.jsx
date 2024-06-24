import React, { useState, useCallback } from "react";
import './Payments.css';
import { useTelegram } from "../hooks/useTelegram";

const Payments = ({ steamID, deposit }) => {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const { queryId } = useTelegram(); 

    const selectPayment = (paymentType) => {
        setSelectedPayment(paymentType); 
    }

    const handlePayment = useCallback(async () => {
        const data = {
            products: steamID,
            totalPrice: deposit * 1.1,
            queryId,
        };
        try {
            const response = await fetch('http://192.168.1.36:8000/web-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    }, [steamID, deposit, queryId]);

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
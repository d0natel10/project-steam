import React from "react";
import { useState } from "react";
import './Form.css';

const Form = () => {
    const [steamID, setSteamID] = useState('');
    const [deposit, setDeposit] = useState(50); 
    const [promo, setPromo] = useState('');

    const onChangeSteamID = (e) => {
        setSteamID(e.target.value);
    }

    const onChangeDeposit = (e) => {
        setDeposit(e.target.value);
    }

    const onChangePromo = (e) => {
        setPromo(e.target.value);
    }

    const addToDeposit = (amount) => {
        setDeposit((prevDeposit) => prevDeposit + amount);
    }

    return (
        <div className={'Form'}>
            <img src="/pic/steam.svg" alt="steam" className={'steam-icon'}/>
            <h2>Пополнить Steam</h2>
            <h3>Логин steam</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Ваш логин steam'}
                value={steamID}
                onChange={onChangeSteamID}
            />
            <h3>Сумма пополнения</h3>
            <input
                className={'input'}
                type="number"
                placeholder={'сумма пополнения'}
                value={deposit}
                onChange={onChangeDeposit}
            />
            <div className={'button-pose'}>
            <button className={'button-form'} onClick={() => addToDeposit(100)}>
                +100
            </button>
            <button className={'button-form'} onClick={() => addToDeposit(500)}>
                +500
            </button>
            <button className={'button-form'} onClick={() => addToDeposit(1000)}>
                +1000
            </button>
            </div>
            <h3>Промокод</h3>
            <input 
                className={'input'}
                type="text"
                placeholder={'Ваш промокод'}
                value={promo}
                onChange={onChangePromo}
            />
        </div>
    );
}

export default Form;
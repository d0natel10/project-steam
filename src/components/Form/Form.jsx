import React from "react";
import { useState } from "react";
import './Form.css';

const Form = () =>{
    const [steamID, setSteamID] = useState('');
    const [deposit, setDeposit] = useState('50');
    const [promo, setPromo] = useState('');

    const onChangeSteamID = (e) => {
        setSteamID(e.target.value)
    }

    const onChangeDeposit = (e) => {
        setDeposit(e.target.value)
    }

    const onChangePromo = (e) => {
        setPromo(e.target.value)
    }

    return (
        <div className={'Form'}>
            <img src="/pic/steam.svg" alt="steam" className={'steam-icon'}/>
            <p>Пополнить Steam</p>
            <p>Логин steam</p>
            <input
            className={'input'}
            type="text"
            placeholder={'Ваш логин steam'}
            value={steamID}
            onChange={onChangeSteamID}
            />
            <p>Сумма пополнения</p>
            <input
            className={'input'}
            type="text"
            placeholder={'сумма пополнения'}
            value={deposit}
            onChange={onChangeDeposit}
            />
            <button className={'button-form'}>
                +500
            </button>
            <button className={'button-form'}>
                +1000
            </button>
            <button className={'button-form'}>
                +1500
            </button>
            <p>Промокод</p>
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
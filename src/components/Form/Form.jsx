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
            <h1>Пополнить Steam</h1>
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
            type="text"
            placeholder={'сумма пополнения'}
            value={deposit}
            onChange={onChangeDeposit}
            />
            <button>
                +500
            </button>
            <button>
                +1000
            </button>
            <button>
                +1500
            </button>
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
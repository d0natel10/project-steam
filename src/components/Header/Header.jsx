import React, { useState } from 'react';
import Button from "../Button/Button";
import { useTelegram } from "../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const { onClose } = useTelegram();

    return (
        <div className={'Header'}>
            <Button onClick={onClose} className={'close-button'}>
                <img src="/pic/Close.svg" alt="close" />
            </Button>
            <h1>zzzzz</h1>
        </div>
    );
};

export default Header;
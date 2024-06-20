import React, { useState, useEffect } from 'react';
import './App.css';
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Payments from "./components/Payments/Payments";

function App() {
  const { tg } = useTelegram();
  const [steamID, setSteamID] = useState('');
  const [deposit, setDeposit] = useState(50);

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
      <div className="App">
        <Header />
        <Form steamID={steamID} setSteamID={setSteamID} deposit={deposit} setDeposit={setDeposit} />
        <Payments steamID={steamID} deposit={deposit} />
      </div>
  );
}

export default App;
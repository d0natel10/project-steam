import { useEffect } from 'react';
import './App.css';
import {useTelegram} from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";

const {tg} = useTelegram();

function App() {
  useEffect( () => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;

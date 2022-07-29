import './App.css';
import {useState} from 'react';
import NavBar from './NavBar';
import Mint from './Mint';

const App = () => { 
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="overlay">
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts}/>
      <Mint accounts={accounts} setAccounts={setAccounts}/>
    </div>
    <div className="moving-background"></div>
    </div>
  );
}

export default App;
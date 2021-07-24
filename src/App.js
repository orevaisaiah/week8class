import './App.css';
import First from './components/First.js';
import Products from './components/Products';
import Products2 from './components/Products2';
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [isLog, setIsLog] = useState(false);
  const url = 'https://randomuser.me/api/?results=30';

  const handleClick = () =>{
      setCount(count + 1);
      };
  const handleLogClick = () =>{
      setIsLog(!isLog);
  }

  return (
    <div className="App">
      <First />
      <Products />
      {isLog ? <p>You are logged in</p>: <p>You are logged out, please login</p>}
      <button onClick={handleLogClick}>{isLog ? <span>Logout</span>: <span>Login</span>}</button>
      <Products2 count={count} handleClick={handleClick}/>
      
    </div>
  );
}

export default App;

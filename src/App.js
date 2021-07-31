import "./App.css";
// import First from './components/First.js';
// import Products from './components/Products';
// import Products2 from './components/Products2';
// import React, { useState } from 'react';
// import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  // const [count, setCount] = useState(0);
  // const [isLog, setIsLog] = useState(false);
  // const url = 'https://randomuser.me/api/?results=30';
  // const [counter, setCounter] = useState(0);

  // const handleClick = () =>{
  //     setCount(count + 1);
  //     };
  // const handleLogClick = () =>{
  //     setIsLog(!isLog);
  // }

  // const handleCounter = () => {
  //   setCounter(counter + 1)
  // }

  return (
    <div className="App">
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
      </nav>

      <h1>Hello World</h1>
      <button onClick={() => setState(state + 1)}>Click</button>
      {state}

      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      {/* <First />
      <Products />
      {isLog ? <p>You are logged in</p>: <p>You are logged out, please login</p>}
      <button onClick={handleLogClick}>{isLog ? <span>Logout</span>: <span>Login</span>}</button>
      <Products2 count={count} handleClick={handleClick}/> */}
    </div>
  );
}

export default App;

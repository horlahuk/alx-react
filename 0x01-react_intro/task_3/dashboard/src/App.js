import React from "react";
import './App.css'
import logo from './logo.jpg'
import { getFullYear, getFooterCopy } from './utils.js'

function App() {
  return (
    <div>
      <header className='App-header'>
        <img src={logo} alt='logo'/>
        <h1>School dashboard</h1>
      </header>

      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' name='email'/>
        <label htmlFor='password'>Password: </label>
        <input type='password' id='password' name='password'/>
        <button type='button'>OK</button>
      </body>

      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

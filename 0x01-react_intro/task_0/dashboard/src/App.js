import React from "react";
import './App.css'
import logo from './logo.jpg'
function App() {
  return (
    <div>
      <header className='App-header'>
        <img src={logo} alt='logo'/>
        <h1>School dashboard</h1>
      </header>

      <body className='App-body'>
        <p>Login to access the full dashboard</p>
      </body>

      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;

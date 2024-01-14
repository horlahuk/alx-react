import React from "react";
import './Login.css'

const Login = () => {
  return (
    <>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' name='email'/>
        <label htmlFor='password'>Password: </label>
        <input type='password' id='password' name='password'/>
        <button type='button'>OK</button>
      </body>
    </>
  );
}

export default Login;
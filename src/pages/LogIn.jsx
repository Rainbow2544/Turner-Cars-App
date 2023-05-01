import React from 'react';
import "./LogIn.css";
import { useState } from 'react';

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  

  const handleClick = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className='login'>
        <div className='login__wrapper'>
        <h1 id='login__wrapper--title'>SIGN IN</h1>
        <form id='login__wrapper--form'>
        <input
            className='login__wrapper--input'
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
          className='login__wrapper--input'
            placeholder="password"
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
          onClick={handleClick}
          className='login__wrapper--button'
          >
            LOGIN
          </button>
          
          <a className='login__wrapper--link'>FORGOT PASSWORD?</a>
          <a className='login__wrapper--link'>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}

export default LogIn;
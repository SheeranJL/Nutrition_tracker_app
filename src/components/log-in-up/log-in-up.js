import React, {useState} from 'react';
import './log-in-up.scss';

import Login from './login/login.js'
import SignUp from './signup/signup.js';

const LogInUp = () => {

  const [signMethod, setSignMethod] = useState(true);

  return (
    <div className='login-screen-container'>
    {
      signMethod ? (
        <Login signMethod={signMethod} setSignMethod={setSignMethod}/>
      ) : (
        <SignUp signMethod={signMethod} setSignMethod={setSignMethod}/>
      )
    }
    </div>
  )
}

export default LogInUp;

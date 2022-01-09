import React, {useState, useContext} from 'react';
import {appContext} from '../../../context/context.js';
import './login.scss';
import CustomButton from '../../button/button.js';

const Login = ({signMethod, setSignMethod}) => {

  const {data, actions} = useContext(appContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const handleCloseModal = () => {
    actions.setCloseModal(!data.closeModal)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className='sign-in-container'>

      <button className='close-button-modal' onClick={handleCloseModal}>X</button>

      <form className='input-section-container' onSubmit={handleSubmit}>

        <div className='input-section'>
          <label for='email'>Email</label>
          <input type='email' id='email' name='email' onChange={handleChange}/>
        </div>

        <div className='input-section'>
          <label for='password'>Password</label>
          <input type='password' id='password' name='password' onChange={handleChange}/>
        </div>

        <div className='buttons'>
          <CustomButton type='submit' className='button'>Sign In</CustomButton>
          <CustomButton type='button' isGoogleSignIn>Sign In</CustomButton>
        </div>

      </form>

      <span
        style={{cursor: 'pointer'}}
        onClick={() => setSignMethod(!signMethod)}>
        Don't have an account? <b>Sign Up!</b>
      </span>

    </div>
  )
}

export default Login;

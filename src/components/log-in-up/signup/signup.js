import React, {useState, useContext} from 'react';
import {appContext} from '../../../context/context.js'
import '../login/login.scss'
import CustomButton from '../../button/button.js';
import {auth, createUserProfileDocument} from '../../../firebase/firebase.js';

const SignUp = ({signMethod, setSignMethod}) => {

  const {data, actions} = useContext(appContext);

  const [formValue, setFormValue] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const {displayName, email, password, confirmPassword} = formValue;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleCloseModal = () => {
    actions.setCloseModal(!data.closeModal)
  }


  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName});
      setFormValue({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch(error) {
      console.log('Error creating manual account', error)
    }
  }


  return (

    <div className='sign-up-container'>

      <button className='close-button-modal' onClick={handleCloseModal}>X</button>

      <form className='input-section-container' onSubmit={handleSubmit}>

        <div className='input-section'>
        <label for='displayName'>Username</label>
        <input type='text' name='displayName' value={displayName} onChange={handleChange}/>
        </div>

        <div className='input-section'>
        <label for='email'>Email</label>
        <input type='email' name='email' value={email} onChange={handleChange}/>
        </div>

        <div className='input-section'>
        <label for='password'>Password</label>
        <input type='password' name='password' value={password} onChange={handleChange}/>
        </div>

        <div className='input-section'>
        <label for='confirmPassword'>Confirm Password</label>
        <input type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
        </div>

        <CustomButton className='button' type='submit'>Sign Up</CustomButton>
      </form>

        <span
          onClick={() => setSignMethod(!signMethod)}
          style={{cursor: 'pointer'}}>
          Already have an account? <b>Sign In!</b>
          </span>

    </div>
  )
}

export default SignUp;

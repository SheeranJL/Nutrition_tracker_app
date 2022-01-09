import {react} from 'react';
import './button.scss'

const CustomButton = (props, ...rest) => {
  return (
    <div className='button-container' >
      <button type='submit' className={props.isGoogleSignIn ? 'google' : ''}>{props.children}</button>
    </div>
  )
}

export default CustomButton;

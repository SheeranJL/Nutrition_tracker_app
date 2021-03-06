import {react} from 'react';
import './button.scss'

const CustomButton = ({children, isGoogleSignIn, ...rest}) => {
  return (
    <div className='button-container' >

      <button {...rest} className={isGoogleSignIn ? 'google' : ''}>
        {children}
      </button>

    </div>
  )
}

export default CustomButton;

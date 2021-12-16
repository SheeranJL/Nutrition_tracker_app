import React, {useContext} from 'react';
import './new-food-icon.scss';
import {appContext} from '../../context/context.js';

const NewFoodIcon = () => {

  const {data:{modalFocus}, actions:{setModalFocus}} = useContext(appContext);


  const setFocus = () => {
    setModalFocus(!modalFocus)
  }



  return (
    <div onClick={setFocus} className='add-icon-container'>
      <span className='add-icon'>+</span>
    </div>
  )

}

export default NewFoodIcon;

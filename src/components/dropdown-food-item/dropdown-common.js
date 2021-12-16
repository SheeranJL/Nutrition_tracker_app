import React, {useContext, useState} from 'react';
import {appContext} from '../../context/context.js';
import './dropdown-common.scss';

import SelectModal from '../select-modal/select-modal.js';

const DropdownCommon = ({data:{photo, food_name, ...rest}}) => {

  const {data:{commonFoods}} = useContext(appContext);

  const [selectedFood, setSelectedFood] = useState(null)
  const [hidden, setHidden] = useState(true)

  const handleSelect = (e) => {
    const target = e.target.innerHTML;
    console.log('clicked')
    setHidden(!hidden);
    setSelectedFood(commonFoods.filter(food => food.food_name === target));
  }

  const handleClick = () => {
    setHidden(!hidden);
    console.log('hidden')
  }


  return (

      <div>
      <div className='dropdown-item' >
        <div className='dropdown-image-container'>

          <img className='dropdown-image' src={photo.thumb} />
        </div>
        <p onClick={handleSelect} className='food-item'>{food_name}</p>
      </div>
      {
        selectedFood
        ? (
          <div style={ {display: hidden ? 'none' : ''} }>
          <SelectModal item={selectedFood[0]} handleClick={handleClick}/>
          </div>
        ):(
          null
        )
      }
      </div>


  )
}

export default DropdownCommon;

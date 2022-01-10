import React, {useContext} from 'react';
import './dropdown.scss';
import {appContext} from '../../context/context.js'
import DropdownCommon from '../dropdown-food-item/dropdown-common.js'
import DropdownBranded from '../dropdown-food-item/dropdown-branded.js'

const Dropdown = () => {

  const {data: {commonFoods, brandedFoods}} = useContext(appContext);

  return (
    <div class='dropdown-menu-container' >
    {
        commonFoods !== null
        ? (
          <>
          {commonFoods.filter((item, index) => index < 10).map(item => <DropdownCommon data={item} />)}
          </>
        ) : (
          <h1 className='search-food-desc'>Search for food above</h1>
        )
    }
    </div>
  )
}


export default Dropdown;

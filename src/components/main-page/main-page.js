import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './main-page.scss';
import Profile from '../profile/profile.js';
import Food from '../food/food.js';


const MainPage = () => {

  const {data} = useContext(appContext);

  return (

    <div className='main-page'>

      <div className='profile-section'>
        <Profile />
      </div>

      <div className='food-section'>
      {
        data.foods.length
        ? <Food />
        : <h1 className='no-food-desc'>Foods you add will be displayed here</h1>
      }
      </div>
    </div>
  )
}

export default MainPage;

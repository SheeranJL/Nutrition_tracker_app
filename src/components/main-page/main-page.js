import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './main-page.scss';
import Profile from '../profile/profile.js';
import Food from '../food/food.js';

import LogInUp from '../log-in-up/log-in-up.js';

const MainPage = () => {

  const {data, actions} = useContext(appContext);

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

      {
        data.closeModal
        ? (
          null
        ) : (
          <div className='sign-in-modal'>
            <LogInUp />
          </div>
        )

      }


    </div>
  )
}

export default MainPage;

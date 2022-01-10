import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {appContext} from '../../context/context.js';
import {auth} from '../../firebase/firebase.js'
import './profile.scss';

const Profile = () => {

  const {data, actions} = useContext(appContext);
  const [hover, setHover] = useState(false)
  const history = useHistory();


  //This function will return an integer representing the total amount of consumed calories for each item in their basket//
  const consumedCalories = data.foods.reduce((total, current) => {
    return total += Math.ceil(current.full_nutrients[4].value * current.serving_qty)
  }, 0)
  const percentageGoal = (consumedCalories / data.goal * 100).toFixed(0);


  //This function will calculate the total calories of each selected food item for a given meal type of the day and returns the value//
  const calculateCalories = (timePeriod) => {
    const total = data.foods
      .filter((item) => item.mealTime === timePeriod)
      .reduce((total, current) => {
        return total += Math.ceil(current.full_nutrients[4].value * current.serving_qty)
      }, 0)
    return total;
  }

  //This function will toggle the login modal open/close//
  const handleClick = () => {
    actions.setCloseModal(!data.closeModal);
    console.log('test')
  }

  //Handle signing out user - this function using the firebase auth .signOut() method and then we clear existing items from the 'foods' state in context.//
  const handleSignout = async() => {
    await auth.signOut();
    await actions.setFoods([])
  }


  return (
    <div className='profile-container'>
      <div className='person-and-info'>
        <div className='profile-pic-container'
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onClick={data.currentUser ? handleSignout : handleClick}
        >
          {
            data.currentUser
            ? (

              <>
              <img
                className='profile-picture'
                src='https://randomuser.me/api/portraits/women/80.jpg'
                style={hover ? {opacity: '0.3'} : {opacity: '1'}}
              />

              <div className='hover-picture'>
                <p>Logout</p>
              </div>
              </>

            ) : (

              <>
              <img
                className='profile-picture'
                src='https://randomuser.me/api/portraits/women/80.jpg'
                style={hover ? {opacity: '0.3'} : {opacity: '1'}}
              />

              <div className='hover-picture'>
                <p>Login</p>
              </div>

              </>

            )
          }
        </div>

      </div>

      <span className='person-name'>Fake User</span>

      <div className='stats-tracker-container'>
        <div className='consumed-and-goal'>
          <h2>{consumedCalories} cal</h2>
          <span>consumed</span>
        </div>

        <div className='daily-goal'>
          <h2>{data.goal} cal</h2>
          <span>daily goal</span>
        </div>
      </div>

      <div className='progress-bar-container'>
        <div
          className='progress-bar'
          style={{width: percentageGoal < 100 ? `calc(${percentageGoal}%)` : '100%'}}
        />
        <p className='percentage' style={{width: percentageGoal < 100 ? `calc(${percentageGoal}% + 20px)` : '100%'}} >{percentageGoal}%</p>
      </div>

      <div className='meal-time-breakdown-container'>
        <div className='meal-time'>
          <h3>{calculateCalories('breakfast')}</h3>
          <span>Breakfast</span>
        </div>

        <div className='meal-time'>
          <h3>{calculateCalories('lunch')}</h3>
          <span>Lunch</span>
        </div>

        <div className='meal-time'>
          <h3>{calculateCalories('dinner')}</h3>
          <span>Dinner</span>
        </div>

        <div className='meal-time'>
          <h3>{calculateCalories('snack')}</h3>
          <span>Snack</span>
        </div>
      </div>

    </div>
  )
}

export default Profile

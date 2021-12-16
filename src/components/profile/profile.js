import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './profile.scss';

const Profile = () => {

  const {data} = useContext(appContext);

  ///calculations///

  const consumedCalories = data.foods.reduce((total, current) => {
    return total += Math.ceil(current.full_nutrients[4].value * current.serving_qty)
  }, 0)

  const percentageGoal = (consumedCalories / data.goal * 100).toFixed(0);

  console.log(percentageGoal);


  const breakfastCalories = data.foods
    .filter((item) => item.mealTime === 'breakfast')
    .reduce((total, current) => {
      return total += Math.ceil(current.full_nutrients[4].value * current.serving_qty)
    }, 0)

  const lunchCalories = data.foods
    .filter((item) => item.mealTime === 'lunch')
    .reduce((total, current) => {
      return total += Math.ceil(current.full_nutrients[4].value * current.serving_qty)
    }, 0)

  const dinnerCalories = data.foods
    .filter((item) => item.mealTime === 'dinner')
    .reduce((total, current) => {
      return total += Math.ceil(current.full_nutrients[4].value * current.serving_qty)
    }, 0)

  const snackCalories = data.foods
    .filter((item) => item.mealTime === 'breakfast')
    .reduce((total, current) => {
      return total += Math.ceil(current.full_nutrients[4].value * current.serving_qty)
    }, 0)




  return (
    <div className='profile-container'>

      <div className='person-and-info'>
        <div className='person-info'>
          <p className='weight-height'>57</p>
          <p className='metric'>kg</p>
        </div>

        <img className='profile-picture' src='https://randomuser.me/api/portraits/women/80.jpg'/>

        <div className='person-info'>
          <p className='weight-height'>163</p>
          <p className='metric'>cm</p>
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
        <div className='progress-bar' style={{width: percentageGoal < 100 ? `calc(${percentageGoal}%)` : '100%'}} />
        <p className='percentage' style={{width: percentageGoal < 100 ? `calc(${percentageGoal * 2}%)` : '200%'}} >{percentageGoal}%</p>
      </div>

      <div className='meal-time-breakdown-container'>
        <div className='meal-time'>
          <h3>{breakfastCalories}</h3>
          <span>Breakfast</span>
        </div>

        <div className='meal-time'>
          <h3>{lunchCalories}</h3>
          <span>Lunch</span>
        </div>

        <div className='meal-time'>
          <h3>{dinnerCalories}</h3>
          <span>Dinner</span>
        </div>

        <div className='meal-time'>
          <h3>{snackCalories}</h3>
          <span>Snack</span>
        </div>
      </div>

    </div>
  )
}

export default Profile

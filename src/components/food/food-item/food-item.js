import React, {useContext} from 'react';
import {appContext} from '../../../context/context.js';
import './food-item.scss';

const FoodItem = ({food}) => {

  const calorieValue = Math.ceil(food.full_nutrients[4].value * food.serving_qty)

  const {actions, data} = useContext(appContext);

  console.log(food);


  return (
    <div className='main-food-item-container'>

    <div className='main-food-item-image'>
      <img src={food.photo.thumb} />
    </div>

    <div className='product-display-container'>

      <div className='food-item-info-container'>
        <span className='food-item-name'>{food.food_name}</span>
        <span className='food-info'>{`${food.serving_qty}x (${food.serving_weight_grams}g)`}</span>
      </div>

      <div className='toggle-options'>
      <button className='toggle-buttons' onClick={() => actions.deleteItem(food)}>&#10060;</button>
      </div>

      <div className='nutrition-info-container'>
        <span className='calories-info'>{calorieValue} cal</span>
        <span>{food.mealTime}</span>
      </div>

    </div>

    </div>
  )
}

export default FoodItem;

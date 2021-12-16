import React, {useContext, useState, useEffect} from 'react';
import {appContext} from '../../context/context.js';
import './food.scss';

import FoodItem from './food-item/food-item.js';

const Food = () => {

  const {data} = useContext(appContext);
  const [foods, setFoods] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFoods([
      ...data.foods
    ])
    setLoading(false);
  }, [data.foods])

  return (
    <div className='food-container'>
      {
        loading
        ? <h1>loading</h1>
        : data.foods.map(food => <FoodItem food={food}/>)
      }
    </div>
  )
}

export default Food;

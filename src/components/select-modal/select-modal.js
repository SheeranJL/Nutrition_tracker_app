import React, {useState, useEffect, useRef, useContext} from 'react';
import {appContext} from '../../context/context.js';
import './select-modal.scss';

const SelectModal = ({item, hidden, handleClick}) => {

  const [choice, setChoice] = useState(null);
  const {actions: {addToInventory}, data} = useContext(appContext);
  const selectElement = useRef();

  useEffect(() => {
    setChoice(item)
  })

  const increaseServings = () => {
    const item = choice;
    setChoice({...item}, item.serving_qty++);
  }

  const decreaseServings = () => {
    const item = choice;

    if (item.serving_qty > 0) {
      setChoice({...item}, item.serving_qty--)
    } else {
      return
    }
  }

  const addToMealTime = (e) => {
    e.preventDefault();
    const selectedIndex = selectElement.current.options.selectedIndex
    const selectedMealTime = selectElement.current.options[selectedIndex].innerHTML.toLowerCase();

    let newChoice = {...choice, mealTime: selectedMealTime}
    addToInventory(newChoice)
  }



  return (
    <>
        {
          (choice === null)
          ? (
            <h1>Loading...</h1>
          ) : (
            <div className='select-modal-container'>

              <div className='select-modal-image-and-close'>
                <div>
                  <img className='modal-image' src={choice.photo.thumb}/>
                  <p className='food-modal-name'>{choice.food_name}</p>
                </div>

                <span className='modal-close' onClick={handleClick}>&#10006;</span>
              </div>

              <div className='serving-info'>
                <div className='select-serving'>


                  <div className='servings-info-left'>
                    <span className='serving-text'>Servings</span>
                    <span className='serving-size-select'>{choice.serving_qty}</span>
                  </div>

                  <div className='arrows'>
                    <button className='arrow' onClick={increaseServings}>&#8963;</button>
                    <button className='arrow' onClick={decreaseServings}>&#8964;</button>
                  </div>


                  <div className='servings-info-right'>

                    <div className='measurements'>
                      <span className='unit-measurement'>{choice.serving_weight_grams}</span>
                      <span className='calories-desc'>grams</span>
                    </div>

                    <div className='nut-info'>
                      <span className='calories'>{Math.ceil(choice.full_nutrients[4].value) * choice.serving_qty}</span>
                      <span className='calories-desc'>calories</span>
                    </div>

                  </div>
              </div>

              </div>

              <form onSubmit={addToMealTime}>

              <div className='add-to-meal'>

                <select ref={selectElement} className='meal-time-dropdown' name='meal-type' id='meal-type'>
                  <option className='dropdown-value' value='breakfast'>Breakfast</option>
                  <option className='dropdown-value' value='lunch'>Lunch</option>
                  <option className='dropdown-value' value='dinner'>Dinner</option>
                  <option className='dropdown-value' value='snack'>Snack</option>
                </select>

                <div className='modal-add-button-container'>
                  <button className='modal-add-button' type='submit' >ADD</button>
                </div>
              </div>
            </form>

            </div>
          )
        }
      </>
      )
}

export default SelectModal;

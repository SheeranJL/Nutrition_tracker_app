import React, {createContext, useEffect, useState} from 'react';
import {saveDataToFirestore} from '../firebase/firebase.js';
export const appContext = createContext();


export const Provider = (props) => {

  const [search, setSearch] = useState(null);
  const [commonFoods, setCommonFoods] = useState(null);
  const [brandedFoods, setBrandedFoods] = useState(null);
  const [foods, setFoods] = useState([]);
  const [goal, setGoal] = useState(2000)
  const [modalFocus, setModalFocus] = useState(false);
  const [closeModal, setCloseModal] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);


  //When the app detects a new string in the 'search' state variable, it will query the nutrition API and return a list of foods//
  //Likewise, if the app detects a change in the 'foods' state (when a user add a food item to inventory), the app will save this data to firestore only if a user is logged in//
  useEffect(() => {
     fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${search}&detailed=true`, {
       headers: {
         'x-app-id': '39bb1e54',
         'x-app-key': '693f9705767c566e3ed889f725dd0d1c',
         'detailed': 'true'
        }}).then(res => res.json()).then(data => {
          if (data.common.length) {
            setCommonFoods(data.common)
          } else {
            return
          }
        });

      if (currentUser) {
        saveDataToFirestore(currentUser.id, foods)
      }

      console.log('test')

  }, [search, foods]);



  const addToInventory = (item) => {
    const existingItem = foods.find(food => (food.tag_id === item.tag_id && food.mealTime === item.mealTime));
    if (existingItem) {
      console.log('yes', existingItem)
        const filtered = foods.filter(food => food !== existingItem)
        const existingItemAdd = {
          ...existingItem,
          serving_qty : existingItem.serving_qty + item.serving_qty
        }
        setFoods([...filtered, existingItemAdd])
    } else {
      setFoods([...foods, item]);
    }
  }

  const deleteItem = (item) => {
    const existing = foods.find(food => food.mealTime === item.mealTime && food.tag_id === item.tag_id);
    const filterList = foods.filter(food => food !== existing);
    setFoods([...filterList])
  }



  const increaseItem = (item) => {

    const existing = foods.find(food => food.mealTime === item.mealTime && food.tag_id === item.tag_id);
    const filterList = foods.filter(food => food !== existing);

    const increaseItemQuantity = {
      ...existing,
      serving_qty: existing.serving_qty + 1
    }

      setFoods([
        increaseItemQuantity,
        ...filterList,

      ])
  }



  const decreaseItem = (item) => {
    const existing = foods.find(food => food.mealTime === item.mealTime && food.tag_id === item.tag_id);
    const filterList = foods.filter(food => food !== existing);

      const decreaseItemQuantity = {
        ...existing,
        serving_qty: existing.serving_qty - 1
      }

      if (decreaseItemQuantity.serving_qty > 0) {
        setFoods([
          decreaseItemQuantity,
          ...filterList

        ])
      } else {
        deleteItem(item)
      }
  }


  return (
    <appContext.Provider value={{
      actions: {
        setSearch,
        setFoods,
        addToInventory,
        deleteItem,
        increaseItem,
        decreaseItem,
        setGoal,
        setModalFocus,
        setCloseModal,
        setCurrentUser
      },
      data: {
        search,
        commonFoods,
        brandedFoods,
        foods,
        goal,
        modalFocus,
        closeModal,
        currentUser
      }
    }}>
    {props.children}
    </appContext.Provider>
  )

}

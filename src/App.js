import React, {useContext, useState, useEffect} from 'react';
import {appContext} from './context/context.js';
import logo from './logo.svg';
import {auth, createUserProfileDocument, fetchDataFromFirestore} from './firebase/firebase.js';
import './App.css';

//components//
import Header from './components/header/header.js';
import MainPage from './components/main-page/main-page.js';
import Dropdown from './components/dropdown/dropdown.js';
import NewFoodIcon from './components/new-food-icon/new-food-icon.js';
import LogInUp from './components/log-in-up/log-in-up.js';

const App = () => {

  const {data, actions} = useContext(appContext);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, data.foods)

        userRef.onSnapshot(snapShot => {
          actions.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data,
            userData: {
              displayName: userAuth.multiFactor.user.displayName,
              email: userAuth.multiFactor.user.email,
              photo: userAuth.multiFactor.user.photoURL,
              ...userAuth
            }
          })
        })
        actions.setCloseModal(true);

        const getDataFromFirestore = async() => {
          const firestoreData = await fetchDataFromFirestore(userAuth.uid);
          const mapDataToState = firestoreData.data.map(item => item)
          await actions.setFoods([...mapDataToState]);
        }
        getDataFromFirestore();
      }
      actions.setCurrentUser();
    })
  }, [])


  return (

    <div className='app-container'>
      <Header />
      <MainPage/>
    </div>

  );
}

export default App;

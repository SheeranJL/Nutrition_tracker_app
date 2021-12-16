import logo from './logo.svg';
import './App.css';

//components//
import Header from './components/header/header.js';
import MainPage from './components/main-page/main-page.js';
import Dropdown from './components/dropdown/dropdown.js';
import NewFoodIcon from './components/new-food-icon/new-food-icon.js';


const App = () => {

  return (

    <>
      <Header />
      <MainPage />
      <NewFoodIcon />
    </>
  );
}

export default App;

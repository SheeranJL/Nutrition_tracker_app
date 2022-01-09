import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

//components//
import Header from './components/header/header.js';
import MainPage from './components/main-page/main-page.js';
import Dropdown from './components/dropdown/dropdown.js';
import NewFoodIcon from './components/new-food-icon/new-food-icon.js';
import LogInUp from './components/log-in-up/log-in-up.js';

const App = () => {

  return (

    <div className='app-container'>

      <Header />

        <Router>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/login' component={LogInUp} />
          </Switch>
        </Router>

      <NewFoodIcon />

    </div>
  );
}

export default App;

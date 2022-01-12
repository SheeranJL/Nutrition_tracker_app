import './header.scss';
import React, {useState, useContext} from 'react';
import {appContext} from '../../context/context.js';

import Dropdown from '../dropdown/dropdown.js';



const Header = () => {

  const {actions: {setSearch, setModalFocus}, data: {search, modalFocus}} = useContext(appContext);
  const [focus, setFocus] = useState(false);

  const [query, setQuery] = useState(null)

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query)
  }

  const handleFocus = () => {
    setModalFocus(!modalFocus)
  }

  const test = () => {
    console.log('test')
  }

  return (
    <div className='header-component'>

      <form onSubmit={handleSubmit}>
        <div className='input-and-submit'>
          <button className='submit-button' type='submit'>&#128269;</button>
          <input className='input' type='text' placeholder='Search foods...' onChange={handleChange} value={query} onClick={handleFocus}/>
        </div>
      </form>

      <div >
      {
        modalFocus
        ? (
          <div className='dropdown-modal' onMouseDown={() => test}>
          <Dropdown />
          </div>

        ) : (
          null
        )
      }
      </div>
    </div>

  )
}

export default Header;

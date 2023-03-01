import React from 'react';


import './App.css';
import Navbar from './Navbar';
import SearchMovie from './SearchMovie';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <h1 className='title'>Welcome The Movie Search</h1>
      <SearchMovie/>
    </div>
  );
}

export default App;

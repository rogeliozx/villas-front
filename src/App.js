import React from 'react';
import './App.css';
import Login from './Views/Login';
import Visits from './Views/Visits';
import testFrame from './Views/Iframe';

function App() {
  return (
    <div className='App'>
      <iframe
        title='This is a unique title'
        src='http://localhost:3001/index'
      ></iframe>
      <Visits />
    </div>
  );
}

export default App;

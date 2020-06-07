import React, { useState } from 'react';
import './App.css';
import Login from './Views/Login';
import Visits from './Views/Visits';
import Pictures from './Views/Pictures';

function App() {
  const [viewImage, setViewImage] = useState(false);
  const [data, setData]= useState();
  return (
    <div className='App'>
      {viewImage ? <Pictures data={data} setViewImage={setViewImage} /> : <Visits setData={setData} setViewImage={setViewImage} />}
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyRouter from './Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      
      <MyRouter/>
      <ToastContainer/>

      {/* <Login/> */}
    </div>
  );
}

export default App;

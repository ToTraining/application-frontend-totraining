import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyRouter from './Routes';
import { ToastContainer } from 'react-toastify';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <div className="App">
      <NextUIProvider>
        <MyRouter/>
        <ToastContainer/>
      </NextUIProvider>

      {/* <Login/> */}
    </div>
  );
}

export default App;

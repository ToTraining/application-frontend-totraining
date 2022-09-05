import React from "react";
import logo from "./logo.svg";

import MyRouter from "./Routes";
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <div>
      <NextUIProvider>
        <MyRouter />
        <ToastContainer />
      </NextUIProvider>

      {/* <Login/> */}
    </div>
  );
}

export default App;

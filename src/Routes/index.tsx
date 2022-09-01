import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import RegisterProvider from "../Context/RegisterContext";
import LoginProvider from "../Context/LoginContext";
function RegisterComponent() {
  return (
    <RegisterProvider>
      <Register />
    </RegisterProvider>
  );
}

function LoginComponent() {
  return (
    <LoginProvider>
      <Login />
    </LoginProvider>
  );
}
function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />} />

      <Route path="/register" element={<RegisterComponent />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default MyRouter;

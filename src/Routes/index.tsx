import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import RegisterProvider from "../Context/RegisterContext";
import LoginProvider from "../Context/LoginContext"
import DashBProvider from "../Context/DashBContext";
import ProtectedRoutes from "../Components/ProtectRoutes";
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
function DashBComponent() {
  return (
    <DashBProvider>
      <Dashboard />
    </DashBProvider>
  );
}
function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />} />

      <Route path="/register" element={<RegisterComponent />} />

      <Route element={<ProtectedRoutes/>}>
      <Route path="/dashboard" element={<DashBComponent />} />

       </Route> 

      <Route path='*' element={<Navigate replace to='/login'/>} />  {/*Caso o usuário digite uma rota que não exista, ele será redirecionado para a página de login */}

    </Routes>
  );
}

export default MyRouter;

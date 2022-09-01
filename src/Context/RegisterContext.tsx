import { createContext, ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

interface RegisterContextProps {
  toRegister: (data: FieldValues) => void;
  navigate: NavigateFunction;
}

interface RegisterProviderProps {
  children: ReactNode;
}

export const RegisterContext = createContext<RegisterContextProps>(
  {} as RegisterContextProps
);

const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const notifyRegister = (message: string) =>
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const navigate = useNavigate();

  const toRegister = (data: FieldValues) => {
    api
      .post("/register", data)
      .then((response) => {
        console.log(response);
        notifyRegister("Cadastro efetuado com sucesso");
      })
      .catch((error) => {
        notifyRegister("Cadastro não foi bem sucedido");

        console.log(error);
      });
  };
  return (
    <RegisterContext.Provider value={{ toRegister, navigate }}>
      {children}
    </RegisterContext.Provider>
  );
};
export default RegisterProvider;

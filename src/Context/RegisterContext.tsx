import { createContext, ReactNode } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

interface RegisterContextProps {
  toRegister: Function;
  navigate: NavigateFunction;
}

interface IForm {
  name: string;
  email: string;
  cellphone: number;
  age: number;
  url: string;
  password: string;
  confirmPassword: string;
}

interface RegisterProviderProps {
  children: ReactNode;
}

interface IForm {
  name: string;
  email: string;
  cellphone: number;
  age: number;
  url: string;
  password: string;
  confirmPassword: string;
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

  const toRegister = (data: IForm) => {
    api
      .post("/register", data)
      .then((response) => {
        notifyRegister("Cadastro efetuado com sucesso");
        navigate("/");
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

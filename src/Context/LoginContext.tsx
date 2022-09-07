import { createContext, ReactNode } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

interface LoginContextProps {
  toLogin: (data: IForm) => void;
  navigate: NavigateFunction;
}

interface LoginProviderProps {
  children: ReactNode;
}
interface IForm {
  email: string;
  password: string;
}

export const LoginContext = createContext<LoginContextProps>(
  {} as LoginContextProps
);

const LoginProvider = ({ children }: LoginProviderProps) => {
  const notiFy = (message: string) =>
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

  const toLogin = (data: IForm) => {
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("userToken", response.data.accessToken);
        localStorage.setItem("userId", response.data.user.id);
        notiFy("Login efetuado com sucesso!");
        navigate("/dashboard");
      })
      .catch((err) => {
        notiFy("Erro ao efetuar login.");
        console.error(err);
      });
  };

  return (
    <LoginContext.Provider value={{ toLogin, navigate }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

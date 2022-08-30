import { FieldValues } from "react-hook-form";
import { createContext, ReactNode, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

interface LoginContextProps {
  toLogin: (data: FieldValues) => void;
  userToken: string | undefined;
  navigate: NavigateFunction;
}

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext<LoginContextProps>(
  {} as LoginContextProps
);

const LoginProvider = ({ children }: LoginProviderProps) => {
  const [userToken, setUserToken] = useState<string>();
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

  const toLogin = (data: FieldValues) => {
    api
      .post("/camiho", data)
      .then((response) => {
        localStorage.setItem("userToken", "response.datas.token");
        notiFy("Login efetuado com sucesso!");
        navigate("/dashboard");
        setUserToken("response.datas.token");
        console.log(response);
      })
      .catch((err) => {
        notiFy("O login não foi bem sucedido!");
        console.log(err);
      });
  };

  return (
    <LoginContext.Provider value={{ toLogin, navigate, userToken }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

import { createContext, ReactNode, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

interface LoginContextProps {
  toLogin: Function;
  navigate: NavigateFunction;
  user: IForm;
  loading: boolean;
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
  const [user, setUser] = useState<IForm>({} as IForm);
  const [loading, setLoading] = useState(true);

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
    console.log(data);

    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("userToken", response.data.accessToken);
        notiFy("Login efetuado com sucesso!");
        navigate("/dashboard");
        console.log(response);
      })
      .catch((err) => {
        notiFy("O login não foi bem sucedido!");
        console.log(err);
      });
  };
  const token = localStorage.getItem("@context-Login:token");
  const id = localStorage.getItem("@context-Login:id");

  // useEffect(() => {
  // async function autoLogin() {
  //   if (token) {
  //     try {

  //       const { data } = await api.get(`/users/${id}`);
  //       setUser(data);

  //     } catch (error) {
  //       localStorage.clear();
  //     }
  //   }
  //   setLoading(false);
  // }
  //     autoLogin()
  //   },[])

  return (
    <LoginContext.Provider value={{ toLogin, navigate, user, loading }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

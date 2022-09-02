import { createContext, ReactNode, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

interface DashBContextProps {
  getUserData: Function;
  userData: IUserData | undefined;
}

interface DashBProviderProps {
  children: ReactNode;
}

interface IUserData {
  acessToken: string;
  user: {
    email: "uzumaki@mail.com";
    password: "$2a$10$bZY2KGwiTIpaRXneTdY57.9USquQpaJ6kGoZhk0PIXfL1kUnhB3Z.";
    name: "Naruto Uzumaki";
    cellphone: "74 998741477";
    age: "41";
    url: "https://static.wikia.nocookie.net/naruto/images/3/33/Naruto_Uzumaki_%28Parte_I_-_HD%29.png/revision/latest?cb=20160316113315&path-prefix=pt-br";
    confirmPassword: "Senha123@";
    id: 4;
  };
}

export const DashBContext = createContext<DashBContextProps>(
  {} as DashBContextProps
);

const DashBProvider = ({ children }: DashBProviderProps) => {
  const [userData, setUserData] = useState<IUserData>();
  const userToken = localStorage.getItem("userToken")!;
  const userId = localStorage.getItem("userId")!;
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
  const getUserData = (id: string) => {
    if (userToken) {
      api
        .get("/users/" + id)
        .then((response) => {
          setUserData(response.data);

          navigate("/dashboard");
          console.log(response);
        })
        .catch((err) => {
          localStorage.clear();
        });
    } else {
      navigate("/");
    }
  };
  /// Requisição da Api
  useEffect(() => {
    getUserData(userId);
  }, []);

  return (
    <DashBContext.Provider value={{ getUserData, userData }}>
      {children}
    </DashBContext.Provider>
  );
};

export default DashBProvider;

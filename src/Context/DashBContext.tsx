import { createContext, ReactNode, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

interface DashBContextProps {
  getUserData: Function;
  userData: IUserData | undefined;
  modifyUser: Function;
  deleteUser: Function;
  deleteWorkout: Function;
  modifyWorkout: Function;
  addWorkout: Function;
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
interface IExercise {
  name: string;
  rep: string;
  day: string;
  userId?: string;
}

interface IExerciseModify {
  name?: string;
  rep?: string;
  day?: string;
  userId: string;
}

export const DashBContext = createContext<DashBContextProps>(
  {} as DashBContextProps
);

const DashBProvider = ({ children }: DashBProviderProps) => {
  const [userData, setUserData] = useState<IUserData>();
  const userToken = localStorage.getItem("userToken")!;
  const id = localStorage.getItem("userId")!;

  const [workouts, setWorkouts] = useState<IExercise[]>([]);

  const [domingo, setDomingo] = useState<IExercise[]>([]);
  const [segunda, setSegunda] = useState<IExercise[]>([]);
  const [terca, setTerca] = useState<IExercise[]>([]);
  const [quarta, setQuarta] = useState<IExercise[]>([]);
  const [quinta, setQuinta] = useState<IExercise[]>([]);
  const [sexta, setSexta] = useState<IExercise[]>([]);
  const [sabado, setSabado] = useState<IExercise[]>([]);

  useEffect(() => {
    setDomingo(workouts.filter((elemento) => elemento.day === "domingo"));
    setSegunda(workouts.filter((elemento) => elemento.day === "segunda"));
    setTerca(workouts.filter((elemento) => elemento.day === "terca"));
    setQuarta(workouts.filter((elemento) => elemento.day === "quarta"));
    setQuinta(workouts.filter((elemento) => elemento.day === "quinta"));
    setSexta(workouts.filter((elemento) => elemento.day === "sexta"));
    setSabado(workouts.filter((elemento) => elemento.day === "sabado"));
  }, [workouts]);

  const modifyUser = (id: string) => {
    api
      .patch(`user/${id}`)
      .then((resp) => {
        setUserData(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const deleteUser = (id: string) => {
    api.delete(`/users/${id}`).catch((err) => {
      console.error(err);
    });
  };

  const getWorkouts = (id: string) => {
    api
      .get(`/users/${id}?_embed=workouts`)
      .then((resp) => {
        setWorkouts(resp.data.workouts);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getWorkouts(id);
  }, []);

  const addWorkout = (data: IExercise) => {
    data.userId = id;
    api
      .post("/workouts", data)
      .then((resp) => {
        getWorkouts(id);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const modifyWorkout = (idWorkout: number, data: IExerciseModify) => {
    data.userId = id;
    api
      .patch(`/workouts/${idWorkout}`, data)
      .then((resp) => {
        getWorkouts(id);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteWorkout = (idWorkout: string) => {
    /* const filtered = workouts.filter((toRemove) => toRemove.id !== idToRemove)*/
    api
      .delete(`/workouts/${idWorkout}`)
      .then((resp) => getWorkouts(id))
      .catch((err) => {
        console.error(err);
      });
  };

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

  /// Auto Login aqui

  return (
    <DashBContext.Provider
      value={{
        getUserData,
        userData,
        modifyUser,
        deleteUser,
        deleteWorkout,
        modifyWorkout,
        addWorkout,
      }}
    >
      {children}
    </DashBContext.Provider>
  );
};

export default DashBProvider;

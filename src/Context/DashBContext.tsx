import { createContext, ReactNode, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { number } from "yup";
import { api } from "../service/api";

interface DashBContextProps {
  getUserData: (data: "Tipagem") => void;
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

    email: string;
    password: string;
    name: string;
    cellphone: number;
    age: number;
    url: string;
    confirmPassword: string;
    id: number;
  };
}

interface IExercise {
  name: string;
  rep: string;
  day: string;
  userId?: number;
}

interface IExerciseModify {
  name?: string;
  rep?: string;
  day?: string;
  userId: number;
}

export const DashBContext = createContext<DashBContextProps>(
  {} as DashBContextProps
);

const DashBProvider = ({ children }: DashBProviderProps) => {
  const [userData, setUserData] = useState<IUserData>();
  const userToken = localStorage.getItem("userToken")!;
  const id = Number(localStorage.getItem("userId"))!;

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

  const getWorkouts = (id: number) => {
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

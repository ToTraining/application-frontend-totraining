import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

interface DashBContextProps {
  userData: IUser;
  domingo: IWorkout[] | [];
  segunda: IWorkout[] | [];
  terca: IWorkout[] | [];
  quarta: IWorkout[] | [];
  quinta: IWorkout[] | [];
  sexta: IWorkout[] | [];
  sabado: IWorkout[] | [];
  addWorkout: (data: IWorkout) => void;
  modifyWorkout: (idWorkout: number, data: IExerciseModify) => void;
  deleteWorkout: (idWorkout: number) => void;
  modifyUser: () => void;
  deleteUser: () => void;
}

interface DashBProviderProps {
  children: ReactNode;
}

interface IUserData {
  acessToken: string;
  user: IUser;
}

interface IUser {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  age: number;
  url: string;
  confirmPassword: string;
  id: number;
}

export const DashBContext = createContext<DashBContextProps>(
  {} as DashBContextProps
);

interface IWorkout {
  title: string;
  rep: number;
  time: number;
  day: string;
  weigth: number;
  set: number;
  id: number;
  userId?: number;
}

interface IExerciseModify {
  title?: string;
  rep?: number;
  time?: number;
  day?: string;
  weigth?: number;
  set?: number;
  id?: number;
  userId: number;
}

const DashBProvider = ({ children }: DashBProviderProps) => {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const userToken = localStorage.getItem("userToken");
  const id = Number(localStorage.getItem("userId"));

  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  const [domingo, setDomingo] = useState<IWorkout[]>([]);
  const [segunda, setSegunda] = useState<IWorkout[]>([]);
  const [terca, setTerca] = useState<IWorkout[]>([]);
  const [quarta, setQuarta] = useState<IWorkout[]>([]);
  const [quinta, setQuinta] = useState<IWorkout[]>([]);
  const [sexta, setSexta] = useState<IWorkout[]>([]);
  const [sabado, setSabado] = useState<IWorkout[]>([]);

  useEffect(() => {
    setDomingo(workouts.filter((elemento) => elemento.day === "domingo"));
    setSegunda(workouts.filter((elemento) => elemento.day === "segunda"));
    setTerca(workouts.filter((elemento) => elemento.day === "terca"));
    setQuarta(workouts.filter((elemento) => elemento.day === "quarta"));
    setQuinta(workouts.filter((elemento) => elemento.day === "quinta"));
    setSexta(workouts.filter((elemento) => elemento.day === "sexta"));
    setSabado(workouts.filter((elemento) => elemento.day === "sabado"));
  }, [workouts]);

  const modifyUser = () => {
    api
      .patch(`user/${id}`)
      .then((resp) => {
        setUserData(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteUser = () => {
    api.delete(`/users/${id}`).catch((err) => {
      console.error(err);
    });
  };

  async function getWorkouts() {
    if (userToken) {
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        const { data } = await api.get(`/users/${id}?_embed=workouts`);
        setWorkouts(data.workouts);
        setUserData(data);
      } catch (error) {
        localStorage.clear();
      }
    } else {
      navigate("/", { replace: true });
    }
  }

  useEffect(() => {
    getWorkouts();
  }, [userToken]);

  const addWorkout = (data: IWorkout) => {
    data.userId = id;
    api
      .post("/workouts", data)
      .then((resp) => {
        getWorkouts();
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
        getWorkouts();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteWorkout = (idWorkout: number) => {
    /* const filtered = workouts.filter((toRemove) => toRemove.id !== idToRemove)*/
    api
      .delete(`/workouts/${idWorkout}`)
      .then((resp) => getWorkouts())
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

  return (
    <DashBContext.Provider
      value={{
        userData,
        domingo,
        segunda,
        terca,
        quarta,
        quinta,
        sexta,
        sabado,
        addWorkout,
        modifyWorkout,
        deleteWorkout,
        modifyUser,
        deleteUser,
      }}
    >
      {children}
    </DashBContext.Provider>
  );
};

export default DashBProvider;

import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

interface DashBContextProps {
  oneWorkout: IWorkoutModify;
  userData: IUser;
  domingo: IWorkout[] | [];
  segunda: IWorkout[] | [];
  terca: IWorkout[] | [];
  quarta: IWorkout[] | [];
  quinta: IWorkout[] | [];
  sexta: IWorkout[] | [];
  sabado: IWorkout[] | [];
  addWorkout: (data: IWorkout) => void;
  modifyWorkout: (data: IExerciseModify) => void;
  deleteWorkout: (idWorkout: number) => void;
  modifyUser: (data: dataEditProf) => void;
  deleteUser: () => void;
  getWork: (idWorkout: number) => void;
  visible: boolean;
  handler: () => void;
  closeHandler: () => void;
}

interface DashBProviderProps {
  children: ReactNode;
}

interface dataEditProf {
  name: string;
  email: string;
  age: number;
  password: string;
  cellphone: number;
  url: string;
}

interface IUser {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  age: string;
  url: string;
  confirmPassword: string;
  id: number;
}

export const DashBContext = createContext<DashBContextProps>(
  {} as DashBContextProps
);

interface IWorkout {
  title: string;
  rep?: number;
  time: number;
  day?: string;
  weigth: number;
  set: number;
  id: number;
  userId?: number;
}

interface IWorkoutModify {
  title: string;
  rep?: string;
  time: string;
  day?: string;
  weigth: string;
  set: string;
  id: number;
  userId?: number;
}

interface IExerciseModify {
  title: string;
  rep: number;
  time: number;
  day: string;
  weigth: number;
  set: number;
  id: number;
  userId?: number;
}

const DashBProvider = ({ children }: DashBProviderProps) => {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const userToken = localStorage.getItem("userToken");
  const id = Number(localStorage.getItem("userId"));

  const [oneWorkout, setOneWorkout] = useState<IWorkoutModify>(
    {} as IWorkoutModify
  );

  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  const [domingo, setDomingo] = useState<IWorkout[]>([]);
  const [segunda, setSegunda] = useState<IWorkout[]>([]);
  const [terca, setTerca] = useState<IWorkout[]>([]);
  const [quarta, setQuarta] = useState<IWorkout[]>([]);
  const [quinta, setQuinta] = useState<IWorkout[]>([]);
  const [sexta, setSexta] = useState<IWorkout[]>([]);
  const [sabado, setSabado] = useState<IWorkout[]>([]);

  //fechar o modal
  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)
  const closeHandler = () => {
      setVisible(false)
      console.log("fechou")
  }

  useEffect(() => {
    setDomingo(workouts.filter((elemento) => elemento.day === "domingo"));
    setSegunda(workouts.filter((elemento) => elemento.day === "segunda"));
    setTerca(workouts.filter((elemento) => elemento.day === "terca"));
    setQuarta(workouts.filter((elemento) => elemento.day === "quarta"));
    setQuinta(workouts.filter((elemento) => elemento.day === "quinta"));
    setSexta(workouts.filter((elemento) => elemento.day === "sexta"));
    setSabado(workouts.filter((elemento) => elemento.day === "sabado"));
  }, [workouts]);
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

  const modifyUser = (data: dataEditProf) => {
    api
      .patch(`users/${id}`, data)
      .then((resp) => {
        setUserData(resp.data);
        notiFy("Usu??rio atulizado com sucesso!");
        closeHandler()
      })
      .catch((err) => {
        notiFy("Erro ao atulizar usu??rio.");
        console.error(err);
      });
  };

  const deleteUser = () => {
    api
      .delete(`/users/${id}`)
      .then(() => {
        notiFy("Usu??rio deletado com sucesso!");
      })
      .catch((err) => {
        notiFy("Erro ao deletar usu??rio");
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
  }, []);

  const addWorkout = (data: IWorkout) => {
    data.userId = id;
    api
      .post("/workouts", data)
      .then((resp) => {
        getWorkouts();
        notiFy("Exerc??cio adicionado com sucesso!");
      })
      .catch((err) => {
        notiFy("Erro ao adicionar exerc??cio.");
        console.error(err);
      });
  };

  const getWork = (idWorkout: number) => {
    api
      .get(`/workouts/${idWorkout}`)
      .then((resp) => {
        setOneWorkout(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const modifyWorkout = (data: IExerciseModify) => {
    api
      .patch(`/workouts/${oneWorkout.id}`, data)
      .then((resp) => {
        getWorkouts();
        closeHandler()
        notiFy("Exerc??cio atualizado com sucesso!");
      })
      .catch((err) => {
        notiFy("Erro ao atualizar exerc??cio");
        console.error(err);
      });
  };

  const deleteWorkout = (idWorkout: number) => {
    api
      .delete(`/workouts/${idWorkout}`)
      .then((resp) => {
        getWorkouts();
        notiFy("Exerc??cio deletado com sucesso!");
      })
      .catch((err) => {
        notiFy("Erro ao deletar exerc??cio.");
        console.error(err);
      });
  };

  return (
    <DashBContext.Provider
      value={{
        oneWorkout,
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
        getWork,
        closeHandler,
        visible,
        handler
      }}
    >
      {children}
    </DashBContext.Provider>
  );
};

export default DashBProvider;

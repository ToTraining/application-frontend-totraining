import { Exercise } from "../Exercise";

interface ITitleCard {
  titulo: string;
  workoutDay: IWorkout[] | [];
}

interface IWorkout {
  title: string;
  rep: number;
  time: number;
  day: string;
  weigth: number;
  set: number;
  id: number;
}

export const CardDay = ({ titulo, workoutDay }: ITitleCard) => {
  return (
    <ul>
      <h3>{titulo}</h3>
      {workoutDay.map((elemento) => {
        return (
          <Exercise
            title={elemento.title}
            rep={elemento.rep}
            time={elemento.time}
            day={elemento.day}
            weigth={elemento.weigth}
            set={elemento.set}
            id={elemento.id}
            key={elemento.id}
          />
        );
      })}
    </ul>
  );
};

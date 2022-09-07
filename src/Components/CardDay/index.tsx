import { Exercise } from "../Exercise";
import { ContainerDay, ContainerOverFlow } from "./style";

interface ITitleCard {
  titulo: string;
  workoutDay: any;
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
    <ContainerDay>
      <h3>{titulo}</h3>
      <ContainerOverFlow>
        {workoutDay.map((elemento: any) => {
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
      </ContainerOverFlow>
    </ContainerDay>
  );
};

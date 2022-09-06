import { useContext } from "react";
import { DashBContext } from "../../Context/DashBContext";
import { ModalEditWorkout } from "../ModalEditWorkout";
import { BsFillTrashFill } from "react-icons/bs";

interface Iworkout {
  title: string;
  rep: number;
  time: number;
  day: string;
  set: number;
  weigth: number;
  id: number;
}

export const Exercise = ({
  title,
  rep,
  time,
  day,
  weigth,
  set,
  id,
}: Iworkout) => {
  const { deleteWorkout } = useContext(DashBContext);

  return (
    <li>
      <div>
        <h4>{title}</h4>
        <p>{rep} repetições</p>
        <p>Série: {set}</p>
        <p>Tempo de descanso: {time}</p>
        <p>Peso {weigth} Kg</p>
      </div>
      <ModalEditWorkout id={id} />
      <button onClick={() => deleteWorkout(id)}>
        <BsFillTrashFill />
      </button>
    </li>
  );
};

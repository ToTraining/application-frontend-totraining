import { useContext } from "react";
import { DashBContext } from "../../Context/DashBContext";
import  ModalEditWorkout  from "../ModalEditWorkout/index"
import { BsFillTrashFill } from "react-icons/bs";
import {
  ButtonDelet,
  ContainerButtons,
  ContainerInfoWorkout,
  ContainerWorkout,
} from "./style";

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
    <ContainerWorkout>
      <div>
        <h4>{title}</h4>
        <ContainerInfoWorkout>
          <p>{rep} reps</p>
          <p>{weigth} Kg</p>
          <p>{set} sets</p>
          <p>{time} min</p>
        </ContainerInfoWorkout>
      </div>
      <ContainerButtons>
        <ModalEditWorkout id={id}/>
        <ButtonDelet onClick={() => deleteWorkout(id)}>
          <BsFillTrashFill />
        </ButtonDelet>
      </ContainerButtons>
    </ContainerWorkout>
  );
};

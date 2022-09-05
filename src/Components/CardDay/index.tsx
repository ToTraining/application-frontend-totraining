import { ReactNode } from "react";
import { Exercise } from "../Exercise";

interface ITitleCard {
  titulo: string;
  workout: Iworkout;
}

interface Iworkout {
  title: string;
  rep: number;
}

export const CardDay = ({ titulo, workout }: ITitleCard) => {
  return (
    <ul>
      <h3>{titulo}</h3>
      <Exercise workout={workout} />
    </ul>
  );
};

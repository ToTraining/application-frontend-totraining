import { ReactNode } from "react";
import { Exercise } from "../Exercise";

interface ITitleCard {
  children: ReactNode
}

export const CardDay = ({children} : ITitleCard) => {

  return (
      <ul>
        <p>{children}</p>
        <Exercise/>
      </ul>
  );
}

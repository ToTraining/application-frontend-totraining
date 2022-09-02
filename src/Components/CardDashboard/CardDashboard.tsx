import { Card, Text } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { api } from "../../service/api";
import { CardExercises, CardsContainer } from "./style";

export default function CardDashboard() {
  const [exercises, setExercises] = useState([]);

  return (
    <CardsContainer>
      <CardExercises>
        <h3>Domingo</h3>
      </CardExercises>

      <CardExercises>
        <h3>Segunda-Feira</h3>

        {/* {exercises.map((exercise, index) => {
        return (
          <li>
            <img src={exercise.img} alt="" />
            <h3>{exercise.exercise}</h3>
            <p>{exercise.repetition}</p>
            <p>{exercise.series}</p>
            <p>{exercise.weight}</p>
            <p>{exercise.restTime}</p>
          </li>
        );
      })}  */}
      </CardExercises>

      <CardExercises>
        <h3>Terça-Feira</h3>
      </CardExercises>

      <CardExercises>
        <h3>Quarta-feira</h3>
      </CardExercises>

      <CardExercises>
        <h3>Quinta-feira</h3>
      </CardExercises>

      <CardExercises>
        <h3>Sexta-feira</h3>
      </CardExercises>

      <CardExercises>
        <h3>Sábado</h3>
      </CardExercises>
    </CardsContainer>
  );
}

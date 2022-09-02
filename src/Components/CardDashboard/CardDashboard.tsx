import { Card, Text } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { api } from "../../service/api";
import { CardsContainer } from "./style";

export default function CardDashboard() {
  const [exercises, setExercises] = useState([]);

  return (
    <CardsContainer>
      <ul>
        <h3>Domingo</h3>
      </ul>

      <ul>
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
      </ul>

      <ul>
        <h3>Terça-Feira</h3>
      </ul>

      <ul>
        <h3>Quarta-feira</h3>
      </ul>

      <ul>
        <h3>Quinta-feira</h3>
      </ul>

      <ul>
        <h3>Sexta-feira</h3>
      </ul>

      <ul>
        <h3>Sábado</h3>
      </ul>
    </CardsContainer>
  );
}

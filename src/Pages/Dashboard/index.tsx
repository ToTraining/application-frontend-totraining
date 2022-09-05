import React, { useContext } from "react";
import ModalExercises from "../Dashboard/Modal/ModalExercises";
import { Body } from "./style";
import logo from "../../assets/logo.png";
import { DashBContext } from "../../Context/DashBContext";
import { CardDay } from "../../Components/CardDay";

const Dashboard = () => {
  const { userData, domingo, segunda, terca, quarta, quinta, sexta, sabado } =
    useContext(DashBContext);
  console.log(userData);

  return (
    <Body>
      <header>
        <img src={logo} alt="ToTraining" />
        <figure>
          <img src={userData.url} alt="Foto do usuário" />
        </figure>
      </header>
      <div>
        <h2>{userData.name}</h2>
        <ModalExercises />
      </div>
      <main>
        <CardDay titulo="Domingo" workoutDay={domingo} />
        <CardDay titulo="Segunda-feira" workoutDay={segunda} />
        <CardDay titulo="Terça-feira" workoutDay={terca} />
        <CardDay titulo="Quarta-feira" workoutDay={quarta} />
        <CardDay titulo="Quinta-feira" workoutDay={quinta} />
        <CardDay titulo="Sexta-feira" workoutDay={sexta} />
        <CardDay titulo="Sábado" workoutDay={sabado} />
      </main>
    </Body>
  );
};

export default Dashboard;

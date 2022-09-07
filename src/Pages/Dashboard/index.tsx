import React, { useContext } from "react";
import CardDashboard from "../../Components/CardDashboardComponent/CardDashboard";
import ModalExercises from "../../Components/ModalComponent/ModalExercises";
import { Body, MainHeader } from "./style";
import logo from "../../assets/logo.png";
import { DashBContext } from "../../Context/DashBContext";
import ModalEdiProfile from "./ModalHeader";
import { CardDay } from "../../Components/CardDay";

interface IUserData {
  acessToken: string;
  user: {
    email: string;
    password: string;
    name: string;
    cellphone: number;
    age: number;
    url: string;
    confirmPassword: string;
    id: number;
  };
}

const Dashboard = () => {
  const { userData, domingo, segunda, terca, quarta, quinta, sexta, sabado } =
    useContext(DashBContext);

  return (
    <Body>
      <header>
        <img src={logo} alt="ToTraining" />

        <ModalEdiProfile />
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

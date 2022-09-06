import React, { useContext } from "react";
import CardDashboard from "../../Components/CardDashboard/CardDashboard";
import ModalExercises from "../Dashboard/Modal/ModalExercises";
import { Body, MainHeader } from "./style";
import logo from "../../assets/logo.png";
import { DashBContext } from "../../Context/DashBContext";
import ModalEdiProfile from "./ModalHeader";

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
  const { getUserData, userData } = useContext(DashBContext);
  console.log(userData);

  return (
    <Body>
      <header>
        <img src={logo} alt="ToTraining" />

        <ModalEdiProfile />
      </header>
      <main>
        <MainHeader>
          <h2>{"userData.user.name"}</h2>
          <ModalExercises />
        </MainHeader>

        <CardDashboard />
      </main>
    </Body>
  );
};

export default Dashboard;

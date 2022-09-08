import React, { useContext } from "react";
import ModalExercises from "../../Components/ModalComponent/ModalExercises";
import { Body, CardsContainer, MainHeader, UserContainer } from "./style";
import logo from "../../assets/logo.png";
import { DashBContext } from "../../Context/DashBContext";
import ModalEdiProfile from "./ModalHeader";
import { CardDay } from "../../Components/CardDay";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { userData, domingo, segunda, terca, quarta, quinta, sexta, sabado } =
    useContext(DashBContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Body>
        <header>
          <img src={logo} alt="ToTraining" />

          <ModalEdiProfile />
        </header>
        <MainHeader>
          <UserContainer>
           <p>Bora treinar hoje, {userData.name}?</p>
          <ModalExercises />
        </UserContainer>
        </MainHeader>
        <main>
          <CardsContainer>
            <CardDay titulo="Domingo" workoutDay={domingo} />
            <CardDay titulo="Segunda-feira" workoutDay={segunda} />
            <CardDay titulo="Terça-feira" workoutDay={terca} />
            <CardDay titulo="Quarta-feira" workoutDay={quarta} />
            <CardDay titulo="Quinta-feira" workoutDay={quinta} />
            <CardDay titulo="Sexta-feira" workoutDay={sexta} />
            <CardDay titulo="Sábado" workoutDay={sabado} />
          </CardsContainer>
        </main>
      </Body>
    </motion.div>
  );
};

export default Dashboard;

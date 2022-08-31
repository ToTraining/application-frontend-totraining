import React from "react";
import CardDashboard from "../../Components/CardDashboard/CardDashboard";
import Header from "../../Components/Header/Header";
import ModalExercises from "../../Components/Modal/ModalExercises";
import { Container, ModalContainer } from "./style";

const Dashboard = () => {
  return (
    
      <Container>

        <Header />
  
        <ModalContainer>
          <h2>Michael Scarn</h2>
          <ModalExercises />
        </ModalContainer>
  
        <CardDashboard/>

      </Container>

    
  );
};

export default Dashboard;

import React, { useContext } from "react";
import ModalExercises from "../Dashboard/Modal/ModalExercises";
import { Body } from "./style";
import logo from "../../assets/logo.png";
import { DashBContext } from "../../Context/DashBContext";
import { CardDay } from "../../Components/CardDay";

interface IUserData {
  acessToken: string;
  user: {
    email: "uzumaki@mail.com";
    password: "$2a$10$bZY2KGwiTIpaRXneTdY57.9USquQpaJ6kGoZhk0PIXfL1kUnhB3Z.";
    name: "Naruto Uzumaki";
    cellphone: "74 998741477";
    age: "41";
    url: "https://static.wikia.nocookie.net/naruto/images/3/33/Naruto_Uzumaki_%28Parte_I_-_HD%29.png/revision/latest?cb=20160316113315&path-prefix=pt-br";
    confirmPassword: "Senha123@";
    id: 4;
  };
}
const Dashboard = () => {
  const { getUserData, userData } = useContext(DashBContext);
  console.log(userData);

  return (
    <Body>
      <header>
        <img src={logo} alt="ToTraining" />
        <figure>
          <img
            src={""}
            alt="Foto do usuário"
          />
        </figure>
      </header>
      <div>
          <h2>{"userData.user.name"}</h2>
          <ModalExercises />
      </div>
      <main>
        <CardDay >
          Domingo
        </CardDay>
        <CardDay >
          Segunda
        </CardDay>
        <CardDay >
          Terça
        </CardDay>
        <CardDay >
          Quarta
        </CardDay>
        <CardDay >
          Quinta
        </CardDay>
        <CardDay >
          Sexta
        </CardDay>
        <CardDay >
          Sábado
        </CardDay>
      </main>
    </Body>
  );
};

export default Dashboard;

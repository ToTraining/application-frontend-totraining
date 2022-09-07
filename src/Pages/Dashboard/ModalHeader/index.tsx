import React, { useContext, useState, createContext } from "react";
import { Modal, Input } from "@nextui-org/react";
import {
  ButtonUserMenu,
  DivModal,
  SelectDay,
  SelectExercises,
  ButtonUserMenuLogout,
  MenuDropdown,
  DropdownItem,
  AvatarDrop,
  DropdownTrigger
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { DashBContext } from "../../../Context/DashBContext";
import axios from "axios";
import { api } from "../../../service/api";
import { Dropdown, Avatar, Text, Grid, User, Button } from "@nextui-org/react";

export default function ModalEdiProfile() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const { modifyUser, deleteUser } = useContext(DashBContext);

  const navigate = useNavigate();

  const closeHandler = () => {
    setVisible(false);
    // console.log("closed");
  };

  const schema = yup.object().shape({
    // exercise: yup.string().required(),
    // repetition: yup.number().required(),
    // series: yup.number().required(),
    // weigth: yup.number().required(),
    // restTime: yup.number().required(),
    // day: yup.string().required(),
  });

  const onSubmitEditModal = (data: any) => {
    const dataEditProfile = {
      name: data.name,
      email: data.email,
      age: data.age,
      password: data.password,
      cellphone: data.cellphone,
      url: data.url,
    };
    modifyUser(dataEditProfile);
    console.log(dataEditProfile);
  };

  function toDeleteUser() {
    deleteUser();
    navigate("/");
  }

  const toLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <Dropdown placement="bottom-left">
        <DropdownTrigger>
          <AvatarDrop
            bordered
            size="lg"
            color="secondary"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <MenuDropdown variant="light">
          <DropdownItem>
            <ButtonUserMenu onClick={handler}>Editar Perfil</ButtonUserMenu>
          </DropdownItem>

          <DropdownItem withDivider>
            <ButtonUserMenuLogout onClick={toLogout}>
              Logout
            </ButtonUserMenuLogout>
          </DropdownItem>
        </MenuDropdown>
      </Dropdown>

      {/* <Button auto shadow onClick={handler}>
        Editar Perfil
      </Button> */}
      {/* <Button color="gradient" onClick={toLogout} auto>
        Logout
      </Button> */}

      <Modal
        css={{ backgroundColor: "#00224e" }}
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} css={{ color: "white" }}>
            Editar Perfil
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmitEditModal)}>
            <DivModal>
              <Input
                css={{
                  backgroundColor: "#fff",
                  width: "49%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("name")}
                clearable
                color="primary"
                size="lg"
                aria-label="Nome"
                placeholder="Nome"
              />
              <Input
                css={{
                  backgroundColor: "#fff",
                  width: "49%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("email")}
                clearable
                color="primary"
                size="lg"
                aria-label="Email"
                placeholder="Email"
              />
            </DivModal>

            <DivModal>
              <Input
                css={{
                  backgroundColor: "#fff",
                  width: "49%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("age")}
                clearable
                color="primary"
                size="lg"
                aria-label="Idade"
                placeholder="Idade"
              />
              <Input
                css={{
                  backgroundColor: "#fff",
                  width: "49%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("password")}
                clearable
                color="primary"
                size="lg"
                aria-label="Senha"
                placeholder="Senha"
              />
            </DivModal>

            <DivModal>
              <Input
                css={{
                  backgroundColor: "#fff",
                  width: "49%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("cellphone")}
                clearable
                color="primary"
                size="lg"
                aria-label="Telefone"
                placeholder="Telefone"
              />

              <Input
                css={{
                  backgroundColor: "#fff",
                  width: "49%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("url")}
                clearable
                color="primary"
                size="lg"
                aria-label="Url"
                placeholder="Url"
              />
            </DivModal>

            <DivModal>
              <Button color="gradient" onClick={toDeleteUser} auto>
                Excluir perfil
              </Button>
              <Button color="gradient" type="submit" auto>
                Atualizar perfil
              </Button>
            </DivModal>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

// api.delete(`/user/${id}`)
// .then((response)=>{

// })

// axios.delete(`https://totraining.herokuapp.com/user/${id}`,{
//     headers:{
//         // Authorization: token
//     }
// }).catch((err)=>{
//     console.log(err)
// })
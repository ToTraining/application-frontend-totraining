import React, { useContext } from "react";
import { Modal, Input } from "@nextui-org/react";
import {
  ButtonUserMenu,
  DivModal,
  ButtonUserMenuLogout,
  MenuDropdown,
  DropdownItem,
  AvatarDrop,
  DropdownTrigger,
  DropdownContainer,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { DashBContext } from "../../../Context/DashBContext";
import { Text, Button } from "@nextui-org/react";

interface dataEditProf {
  name: string;
  email: string;
  age: number;
  password: string;
  cellphone: number;
  url: string;
}

export default function ModalEditProfile() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const { modifyUser, deleteUser, userData } = useContext(DashBContext);

  const navigate = useNavigate();

  const closeHandler = () => {
    setVisible(false);
  };

  type IUserDataEdit = Omit<dataEditProf, "">;

  const schema = yup.object().shape({
    /* password: yup.string().required("Senha obrigatória"), */
  });

  function toDeleteUser() {
    deleteUser();
    navigate("/");
  }

  const toLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const { register, handleSubmit } = useForm<IUserDataEdit>({
    resolver: yupResolver(schema),
  });
  const testeStyle = {
    content: {},
  };

  return (
    <div>
      <DropdownContainer placement="bottom-left">
        <DropdownTrigger>
          <AvatarDrop squared bordered size="xl" color="gradient" src={userData.url} />
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
      </DropdownContainer>

      <Modal
        css={{ backgroundColor: "#00224e", height: "21rem" }}
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" b size={19} css={{ color: "white" }}>
            Editar Perfil
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit((data) => {
              closeHandler();
              modifyUser(data);
            })}
          >
            <DivModal>
              <Input
                css={{
                  backgroundColor: "#fff",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                fullWidth
                {...register("name")}
                initialValue={userData.name}
                clearable
                color="primary"
                size="lg"
                aria-label="Nome"
                placeholder="Nome"
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
                {...register("email")}
                initialValue={userData.email}
                clearable
                color="primary"
                size="lg"
                aria-label="Email"
                placeholder="Email"
              />
              <Input
                css={{
                  backgroundColor: "#fff",
                  width: "49%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("age")}
                initialValue={userData.age}
                type="number"
                clearable
                color="primary"
                size="lg"
                aria-label="Idade"
                placeholder="Idade"
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
                initialValue={userData.cellphone}
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
                initialValue={userData.url}
                clearable
                color="primary"
                size="lg"
                aria-label="Url"
                placeholder="Imagem url"
              />
            </DivModal>

            <DivModal>
              <Button   
                css={{
                  width: "49%",
                }}
                auto
                 color="error" onClick={toDeleteUser} >

                Excluir perfil
              
              </Button>
              <Button 
                css={{
                  width: "49%",
                }}
                auto
                color="gradient" type="submit" >

                Atualizar perfil
              </Button>
            </DivModal>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

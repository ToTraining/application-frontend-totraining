import React from "react";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Dropdown,
} from "@nextui-org/react";
import { DivModal } from "./style";
// import { Mail } from "./Mail";
// import { Password } from "./Password";

export default function ModalExercises() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button auto shadow onClick={handler}>
        Adicionar Exercício +
      </Button>
      <Modal css={{backgroundColor:"#00224e"}}
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} css={{ color: "white"}}>
            Adicionar Exercícios
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Dropdown>
            <Dropdown.Button css={{backgroundColor: "#fff"}} flat>Exercícios</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item key="exercise1">Pular Corda</Dropdown.Item>
              <Dropdown.Item key="exercise2">Agachamento</Dropdown.Item>
              <Dropdown.Item key="exercise3">Flexão</Dropdown.Item>
              <Dropdown.Item key="exercise4"> Abdominal</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <DivModal>
            <Input css={{backgroundColor:"#fff", width: "49%"}}
              clearable
              color="primary"
              size="lg"
              placeholder="Repetições"
              // contentLeft={<Mail fill="currentColor" />}
            />
            <Input css={{backgroundColor:"#fff", width: "49%"}}
              clearable
              color="primary"
              size="lg"
              placeholder="Séries"
              // contentLeft={<Password fill="currentColor" />}
            />
          </DivModal>

          <DivModal>
            <Input css={{backgroundColor:"#fff", width: "49%"}}
              clearable
              color="primary"
              size="lg"
              placeholder="Peso"
              // contentLeft={<Password fill="currentColor" />}
            />
            <Input css={{backgroundColor:"#fff", width: "49%"}}
              clearable
              color="primary"
              size="lg"
              placeholder="Tempo de descanso"
              // contentLeft={<Password fill="currentColor" />}
            />
          </DivModal>

          <DivModal>


          <Dropdown>
            <Dropdown.Button css={{backgroundColor: "#fff"}} flat>Dia do Exercício</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item key="exercise1">Domingo</Dropdown.Item>
              <Dropdown.Item key="exercise2">Segunda-feira</Dropdown.Item>
              <Dropdown.Item key="exercise3">Terça-feira</Dropdown.Item>
              <Dropdown.Item key="exercise4">Quarta-feira </Dropdown.Item>
              <Dropdown.Item key="exercise4">Quinta-feira </Dropdown.Item>
              <Dropdown.Item key="exercise4">Sexta-feira </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button color="gradient" auto onClick={closeHandler}>
            Adicionar a lista
          </Button>

          </DivModal>

        </Modal.Body>
      </Modal>
    </div>
  );
}

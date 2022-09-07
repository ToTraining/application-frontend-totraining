import { useContext, useState } from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { DashBContext } from "../../Context/DashBContext";
import { HiPencilAlt } from "react-icons/hi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonEdit } from "./style";

interface IExerciseModify {
  title: string;
  rep: number;
  time: number;
  day: string;
  weigth: number;
  set: number;
  id: number;
  userId?: number;
}

interface IId {
  id: number;
}

export const ModalEditWorkout = ({ id }: IId) => {
  const { modifyWorkout, getWork, oneWorkout } = useContext(DashBContext);

  const [visible, setVisible] = useState(false);
  const handler = () => {
    getWork(id);
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
  };

  const schema = yup.object().shape({});

  const { register, handleSubmit } = useForm<IExerciseModify>({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <ButtonEdit onClick={handler}>
        <HiPencilAlt />
      </ButtonEdit>

      <Modal
        css={{ backgroundColor: "#00224e" }}
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} css={{ color: "white" }}>
            Adicionar Exercícios
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(modifyWorkout)}>
            <Input
              css={{
                backgroundColor: "#fff",
                width: "49%",
                marginTop: "8px",
                marginBottom: "8px",
              }}
              {...register("title")}
              initialValue={oneWorkout.title}
              clearable
              color="primary"
              size="lg"
              placeholder="Nome"
            />
            <Input
              css={{
                backgroundColor: "#fff",
                width: "49%",
                marginTop: "8px",
                marginBottom: "8px",
              }}
              {...register("rep")}
              initialValue={oneWorkout.rep}
              clearable
              color="primary"
              size="lg"
              placeholder="Repetições"
            />
            <Input
              css={{
                backgroundColor: "#fff",
                width: "49%",
                marginTop: "8px",
                marginBottom: "8px",
              }}
              {...register("set")}
              initialValue={oneWorkout.set}
              clearable
              color="primary"
              size="lg"
              placeholder="Séries"
            />
            <Input
              css={{
                backgroundColor: "#fff",
                width: "49%",
                marginTop: "8px",
                marginBottom: "8px",
              }}
              {...register("weigth")}
              initialValue={oneWorkout.weigth}
              clearable
              color="primary"
              size="lg"
              placeholder="Peso"
            />
            <Input
              css={{
                backgroundColor: "#fff",
                width: "49%",
                marginTop: "8px",
                marginBottom: "8px",
              }}
              {...register("time")}
              initialValue={oneWorkout.time}
              clearable
              color="primary"
              size="lg"
              placeholder="Tempo de descanso"
            />
            <Button type="submit" auto>
              Atualizar
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

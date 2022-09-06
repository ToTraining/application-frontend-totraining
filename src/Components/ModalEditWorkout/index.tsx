import { useContext, useState } from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { DashBContext } from "../../Context/DashBContext";
import { HiPencilAlt } from "react-icons/hi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

export const ModalEditWorkout = ({ id }: any) => {
  const { modifyWorkout, getWork, oneWorkout } = useContext(DashBContext);

  const [visible, setVisible] = useState(false);
  const handler = () => {
    getWork(id);
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
  };

  const schema = yup.object().shape({
    // exercise: yup.string().required(),
    // repetition: yup.number().required(),
    // series: yup.number().required(),
    // weigth: yup.number().required(),
    // restTime: yup.number().required(),
    // day: yup.string().required(),
  });

  const { register, handleSubmit } = useForm<IExerciseModify>({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <button onClick={handler}>
        <HiPencilAlt />
      </button>

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
              clearable
              color="primary"
              size="lg"
              placeholder="Nome"
              value={oneWorkout.title}
            />
            <Input
              css={{
                backgroundColor: "#fff",
                width: "49%",
                marginTop: "8px",
                marginBottom: "8px",
              }}
              {...register("rep")}
              clearable
              color="primary"
              size="lg"
              placeholder="Repetições"
              value={oneWorkout.rep}
            />
            <Input
              css={{
                backgroundColor: "#fff",
                width: "49%",
                marginTop: "8px",
                marginBottom: "8px",
              }}
              {...register("set")}
              clearable
              color="primary"
              size="lg"
              placeholder="Séries"
              value={oneWorkout.set}
            />
            <Input
              css={{
                backgroundColor: "#fff",
                width: "49%",
                marginTop: "8px",
                marginBottom: "8px",
              }}
              {...register("weigth")}
              clearable
              color="primary"
              size="lg"
              placeholder="Peso"
              value={oneWorkout.weigth}
            />
            <Input
              css={{
                backgroundColor: "#fff",
                width: "49%",
                marginTop: "8px",
                marginBottom: "8px",
              }}
              {...register("time")}
              clearable
              color="primary"
              size="lg"
              placeholder="Tempo de descanso"
              value={oneWorkout.time}
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

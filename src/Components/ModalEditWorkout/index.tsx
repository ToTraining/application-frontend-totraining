import { useContext, useState } from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { DashBContext } from "../../Context/DashBContext";
import { HiPencilAlt } from "react-icons/hi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonEdit, DivModal } from "./style";

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

interface dataEditProf {
  name: string;
  email: string;
  age: number;
  password: string;
  cellphone: number;
  url: string;
}

export default function ModalEditWorkout({ id }: IId) {
  const { getWork, modifyWorkout, oneWorkout } = useContext(DashBContext);
  
  const [visible, setVisible] = useState(false);
  const handler = () =>{ 
    getWork(id)
    setVisible(true)
  };
  const closeHandler = () => {
    setVisible(false);
  };

  const schema = yup.object().shape({
    /* password: yup.string().required("Senha obrigatória"), */
  });

  const { register, handleSubmit } = useForm<IExerciseModify>({
    resolver: yupResolver(schema),
  });
  const testeStyle = {
    content: {},
  };

  return (
    <div>
        <ButtonEdit onClick={handler}>
         <HiPencilAlt />
        </ButtonEdit>

      <Modal
        css={{ backgroundColor: "#00224e", height: "21rem" }}
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" b size={19} css={{ color: "white" }}>
          Editar Exercicio
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(modifyWorkout)}>
            <DivModal>
              <Input
                fullWidth
                css={{
                  backgroundColor: "#fff",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("title")}
                initialValue={oneWorkout.title}
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
                {...register("rep")}
                initialValue={oneWorkout.rep}
                clearable
                color="primary"
                size="lg"
                aria-label="Repetições"
                placeholder="Repetições"
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
                aria-label="Tempo"
                placeholder="Tempo"
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
                {...register("set")}
                initialValue={oneWorkout.set}
                clearable
                color="primary"
                size="lg"
                aria-label="Série"
                placeholder="Série"
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
                aria-label="Peso"
                placeholder="Peso"
              />
            </DivModal>

            <DivModal>
              <Button color="gradient" type="submit" 
              css={{width:"100%",
                marginTop: "8px",
                marginBottom: "8px"}}>
                Atualizar
              </Button>
            </DivModal>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
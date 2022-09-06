import { useContext, useState } from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { DashBContext } from "../../Context/DashBContext";
import {HiPencilAlt} from "react-icons/hi"
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

export const ModalEditWorkout = ({id} : IExerciseModify) => {
  
  const { modifyWorkout, getWork, test} = useContext(DashBContext);
  
  const [visible, setVisible] = useState(false);
  const handler = () => { 
    //getWork(id)
    setVisible(true)
  };


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
  /* 
  const onSubmitModal = (data: any) => {
    const newExercise = {
      exercise: data.exercise,
      repetition: data.repetition,
      series: data.series,
      weight: data.weight,
      restTime: data.restTime,
      day: data.day,
    };
    console.log(newExercise);
  }; */

  //type IWorkoutFunction = Omit<IExerciseModify, "">;

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
          <form onSubmit={handleSubmit((data) => modifyWorkout(data))}>
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
              //  value={test.title}
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
            //    value={test.rep}
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
             //   value={test.set}
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
              //  value={test.weigth}
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
          /*       value={test.time} */
              />
              <Button type="submit" auto >
                Atualizar
              </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

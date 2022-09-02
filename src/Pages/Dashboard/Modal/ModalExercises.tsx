import React, { useState } from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { DivModal, SelectDay, SelectExercises } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function ModalExercises() {
  const [visible, setVisible] = React.useState(false);
  const [exercise, setExercise] = useState([]);
  const handler = () => setVisible(true);

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
  };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <Button auto shadow onClick={handler}>
        Adicionar Exercício +
      </Button>

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
          <form onSubmit={handleSubmit(onSubmitModal)}>
            <SelectExercises {...register("exercise")} id="modalExercises">
              <option value="Flexão">Flexão</option>
              <option value="Pular Corda">Pular Corda</option>
              <option value="Agachamento">Agachamento</option>
              <option value="Abdominal">Abdominal</option>
            </SelectExercises>

            <DivModal>
              <Input
                css={{
                  backgroundColor: "#fff",
                  width: "49%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("repetition")}
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
                {...register("series")}
                clearable
                color="primary"
                size="lg"
                placeholder="Séries"
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
                {...register("weight")}
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
                {...register("restTime")}
                clearable
                color="primary"
                size="lg"
                placeholder="Tempo de descanso"
              />
            </DivModal>

            <DivModal>
              <SelectDay {...register("day")} id="modalDays">
                <option value="Domingo">Domingo</option>
                <option value="Segunda-feira">Segunda-feira</option>
                <option value="Terça-feira">Terça-feira</option>
                <option value="Quarta-feira">Quarta-feira</option>
                <option value="Quinta-feira">Quinta-feira</option>
                <option value="Sexta-feira">Sexta-feira</option>
                <option value="Sábado">Sábado</option>
              </SelectDay>

              <Button color="gradient" type="submit" auto>
                Adicionar a lista
              </Button>
            </DivModal>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

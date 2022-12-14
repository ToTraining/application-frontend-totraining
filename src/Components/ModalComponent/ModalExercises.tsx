import React, { useContext, useState } from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import {  DivModal, SelectDay } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DashBContext } from "../../Context/DashBContext";

export default function ModalExercises() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const { addWorkout } = useContext(DashBContext);

  const closeHandler = () => {
    setVisible(false);
  };

  const schema = yup.object().shape({});

  interface IWorkout {
    title: string;
    rep: number;
    time: number;
    day: string;
    weigth: number;
    set: number;
    id: number;
    userId?: number;
  }

  type IWorkoutFunction = Omit<IWorkout, "">;

  const { register, handleSubmit } = useForm<IWorkoutFunction>({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <Button color="gradient" size={"sm"} onClick={handler}>
        Adicionar Exercício 
      </Button>

      <Modal
        css={{ backgroundColor: "#00224e", height:"21rem" }}
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
          <form onSubmit={handleSubmit(addWorkout)}>
            <Input
              aria-label="name"
              css={{
                backgroundColor: "#fff",
                marginTop: "8px",
                marginBottom: "8px",
              }}
              {...register("title")}
              clearable
              fullWidth
              size="lg"
              placeholder="Nome"
            />
            <DivModal>
              <Input
                aria-label="repeticoes"
                css={{
                  backgroundColor: "#fff",
                  width: "49%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("rep")}
                clearable
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
                clearable
                size="lg"
                placeholder="Séries"
              />
            </DivModal>

            <DivModal>
              <Input
                aria-label="peso"
                css={{
                  backgroundColor: "#fff",
                  width: "49%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("weigth")}
                clearable
                size="lg"
                placeholder="Peso"
              />
              <Input
                aria-label="tempo"
                css={{
                  backgroundColor: "#fff",
                  width: "49%",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                {...register("time")}
                clearable
                size="lg"
                placeholder="Tempo de descanso"
              />
            </DivModal>

            <DivModal>
              <SelectDay {...register("day")} aria-label="dia" id="modalDays">
                <option value="domingo">Domingo</option>
                <option value="segunda">Segunda-feira</option>
                <option value="terca">Terça-feira</option>
                <option value="quarta">Quarta-feira</option>
                <option value="quinta">Quinta-feira</option>
                <option value="sexta">Sexta-feira</option>
                <option value="sabado">Sábado</option>
              </SelectDay>

              <Button
                color={"gradient"}
                css={{
                  width: "49%",
                  backgroundColor: "#C9CEFC"
                }}
                auto
                type="submit"
              >
                Adicionar a lista
              </Button>
            </DivModal>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

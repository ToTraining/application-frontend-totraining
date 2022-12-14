import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LogoTipo from "../../assets/LogoTipo.png";
import { motion } from "framer-motion";

import * as React from "react";
import { Input, Button } from "@nextui-org/react";
import { useContext } from "react";
import { RegisterContext } from "../../Context/RegisterContext";
import {
  DivImg,
  DivForm,
  Header,
  DivFormTitulo,
  BtnDiv,
  DivMain,
  Main,
  BtnCadastrar,
} from "./styled";
import Yoga from "../../assets/yoga.png";

import "react-toastify/dist/ReactToastify.css";

interface IForm {
  name: string;
  email: string;
  cellphone: number;
  age: number;
  url: string;
  password: string;
  confirmPassword: string;
}

interface IForm {
  name: string;
  email: string;
  cellphone: number;
  age: number;
  url: string;
  password: string;
  confirmPassword: string;
}
const Register = () => {
  const { navigate, toRegister } = useContext(RegisterContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    cellphone: yup
      .string()
      .typeError("Telefone inválido")
      // .matches(
      //   /^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}/,
      //   "Telefone Inválido"
      // )
      .min(8)
      .required("Telefone obrigatório"),
    age: yup.string().required("Idade obrigatório"),
    url: yup.string().required("Url obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "deve conter ao menos 1 número")
      .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não coincidem"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: yupResolver(formSchema) });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <>
           <Header>
        <h1>toTraining</h1>
        {/* <img src={LogoTipo} alt="Logotipo" /> */}
      </Header>
      <Main>
        <DivImg>
          <h1>toTraining</h1>
          <img src={Yoga} alt="imagemRegister" />
        </DivImg>

          <DivForm>
            <form
              onSubmit={handleSubmit(async (data) => {
                await toRegister(data);
              })}
            >
              <DivMain>
                <DivFormTitulo>
                  <h1>Registro</h1>
                </DivFormTitulo>

                <Input
                  css={{ width: "200px" }}
                  label=""
                  placeholder="Nome"
                  {...register("name")}
                />
                <span>{errors.name?.message}</span>

                <Input
                  css={{ width: "200px" }}
                  label=""
                  placeholder="E-mail"
                  {...register("email")}
                />
                <span>{errors.email?.message}</span>

                <Input
                  css={{ width: "200px" }}
                  label=""
                  placeholder="Telefone"
                  {...register("cellphone")}
                />
                <span>{errors.cellphone?.message}</span>

                <Input
                  css={{ width: "200px" }}
                  label=""
                  placeholder="Idade"
                  {...register("age")}
                />
                <span>{errors.age?.message}</span>

                <Input
                  css={{ width: "200px" }}
                  label=""
                  placeholder="Imagem Url"
                  {...register("url")}
                />
                <span>{errors.url?.message}</span>

                <Input.Password
                  css={{ width: "200px" }}
                  label=""
                  placeholder="Password"
                  initialValue=""
                  {...register("password")}
                />
                <span>{errors.password?.message}</span>

                <Input.Password
                  css={{ width: "200px" }}
                  label=""
                  placeholder="Confirmação de senha"
                  {...register("confirmPassword")}
                />
                <span>{errors.confirmPassword?.message}</span>

                <BtnDiv>
                  <BtnCadastrar css={{ width: "200px" }} auto type="submit">
                    Cadastrar
                  </BtnCadastrar>
                  <hr />
                  <Button
                    css={{
                      background: "transparent",
                      height: "1.5rem",
                      color: "white",
                      width: "250px",
                    }}
                    onClick={(event) => navigate("/")}
                  >
                    Já possui registro ? Faça o seu login.
                  </Button>
                </BtnDiv>
              </DivMain>
            </form>
          </DivForm>
        </Main>
      </>
    </motion.div>
  );
};

export default Register;

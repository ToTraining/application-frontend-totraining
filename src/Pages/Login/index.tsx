import {
  Main,
  DivImg,
  ContainerRegister,
  DivFormHeader,
  DivForm,
  DivFormTitulo,
  DivMain,
  BtnDiv,
  BtnLogin,
} from "../Login/style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Input, Button } from "@nextui-org/react";

import { LoginContext } from "../../Context/LoginContext";
import "react-toastify/dist/ReactToastify.css";
import Pilates from "../../assets/Pilates.png";

interface IForm {
  email: string;
  password: string;
}
const Login = () => {
  const { navigate, toLogin } = useContext(LoginContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatórios").email("E-mail Inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(formSchema),
  });
  return (
    <>
      <DivFormHeader>
        <p>toTraining</p>
      </DivFormHeader>
      <Main>
        <DivImg>
          <img src={Pilates} alt="imagemLogin" />
        </DivImg>

        <ContainerRegister>
          <DivForm>
            <form
              onSubmit={handleSubmit(async (data) => {
                await toLogin(data);
              })}
            >
              <DivMain>
                <DivFormTitulo>
                  <h1>Login</h1>
                </DivFormTitulo>
                <Input
                  css={{ width: "32vh" }}
                  placeholder="E-mail"
                  {...register("email")}
                />
                <p>{errors.email?.message}</p>

                <Input.Password
                  css={{ width: "32vh" }}
                  aria-label="Senha"
                  placeholder="Password"
                  initialValue=""
                  {...register("password")}
                />

                <p>{errors.password?.message}</p>
                <BtnDiv>
                  <BtnLogin  type="submit">
                    Login
                  </BtnLogin>
                  <hr />
                  <Button
                    css={{
                      background: "transparent",
                      height: "1.5rem",
                      color: "white",
                      fontSize: "10px",
                    }}
                    onClick={() => navigate("/register", { replace: true })}
                  >
                    Ainda não tem conta ? Registre-se aqui.
                  </Button>
                </BtnDiv>
              </DivMain>
            </form>
          </DivForm>
        </ContainerRegister>
      </Main>
    </>
  );
};

export default Login;

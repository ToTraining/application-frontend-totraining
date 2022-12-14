import {
  Main,
  DivImg,
  Header,
  DivForm,
  DivFormTitulo,
  DivMain,
  BtnDiv,
  BtnLogin,
} from "../Login/style";
import LogoTipo from "../../assets/LogoTipo.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Input, Button } from "@nextui-org/react";

import { LoginContext } from "../../Context/LoginContext";
import "react-toastify/dist/ReactToastify.css";
import Pilates from "../../assets/Pilates.png";
import { motion } from "framer-motion";

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
          <img src={Pilates} alt="imagemLogin" />
        </DivImg>

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
                  css={{ width: "195px" }}
                  aria-label="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
                <p>{errors.email?.message}</p>

                <Input.Password
                  css={{ width: "195px" }}
                  aria-label="Senha"
                  placeholder="Password"
                  initialValue=""
                  {...register("password")}
                />

                <p>{errors.password?.message}</p>
                <BtnDiv>
                  <BtnLogin type="submit">Login</BtnLogin>
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
        </Main>
      </>
    </motion.div>
  );
};

export default Login;

import { Main } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Input } from "@nextui-org/react";
import loginImg from "../../assets/loginImg.png";

import { LoginContext } from "../../Context/LoginContext";
export interface IForm {
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
      <Main>
        <img src={loginImg} alt="imagemLogin" />

        <div>
          <form
            onSubmit={handleSubmit(async (data) => {
              await toLogin(data);
            })}
          >
            <h3>Login</h3>
            <Input
              aria-label="E-mail"
              placeholder="E-mail"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <Input.Password
              aria-label="Senha"
              placeholder="Password"
              initialValue=""
              {...register("password")}
            />

            <p>{errors.password?.message}</p>

            <button type="submit">Login</button>

            <button onClick={() => navigate("/register", { replace: true })}>
              Ainda não tem conta ? Registre-se aqui.
            </button>
          </form>
        </div>
      </Main>
    </>
  );
};

export default Login;

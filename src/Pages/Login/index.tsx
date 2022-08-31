import { Main } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useContext } from "react";
import { Input } from "@nextui-org/react";

import { LoginContext } from "../../Context/LoginContext";

const Login = () => {
  const { navigate, toLogin } = useContext(LoginContext);
  interface ILoginData {
    email: string;
    password: string;
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatórios"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(formSchema),
  });
  return (
    <>
    <Main>
      <img
        src="https://saude.abril.com.br/wp-content/uploads/2019/11/atividade-fisica.png?quality=85&strip=info&resize=850,567"
        alt="imagemLogin"
      />

      <div>
        <form className="loginForm" onSubmit={handleSubmit(toLogin)}>
          <h3>Login</h3>
        <Input label="E-mail" placeholder="E-mail" {...register("email")} />
          <p>{errors.email?.message}</p>          
         
          <Input.Password
          labelPlaceholder="Password"
          initialValue="nextui123"
          {...register("password")} />
        
          <p>{errors.password?.message}</p>

          <button className="btnLogin" type="submit">
            Login
          </button>

          <button onClick={(event) => navigate("/dashboard")}>
            Ainda não tem conta ? Registre-se aqui.
          </button>
        </form>
      </div>
    </Main>
    </>
  );
};

export default Login;

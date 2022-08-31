import { Main } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

const Login = () => {
  const { navigate, toLogin } = useContext(LoginContext);
  const [showPassword, setShowPassword] = useState(false);

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };

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
    <Main>
      <img
        src="https://saude.abril.com.br/wp-content/uploads/2019/11/atividade-fisica.png?quality=85&strip=info&resize=850,567"
        alt="imagemLogin"
      />

      <div>
        <form className="loginForm" onSubmit={handleSubmit(toLogin)}>
          <h3>Login</h3>

          <label htmlFor="email">Email</label>
          <input id="email" type="text" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Password</label>
          <div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <button onClick={tooglePassword} type="button">
              Toogle
            </button>
          </div>
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
  );
};

export default Login;

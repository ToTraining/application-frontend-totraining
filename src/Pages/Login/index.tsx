import { Main } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
// import { ILogin } from "../../Interfaces/Interface";

export const Login = () => {

  const LoginSucess = () => {
    toast.success("Login efetuado com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const LoginFailed = () => {
    toast.error("O login não foi bem sucedido!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const navigate = useNavigate();

  const tooglePassword = ()=>{
    setShowPassword(!showPassword)
  }

  const goToRegister = ()=>{
    navigate("/register")
  }

  const [showPassword, setShowPassword] = useState(false)

    interface ILoginData{
        email: string
        password: string
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

 const toLogin = (data:any)=>{
  LoginSucess()
  console.log(data)
 }

  // const toLogin = (data: ILoginData ) => {

  //   axios
  //   .post("UrlAqui", data)
  //   .then((response) => {
  //     localStorage.setItem("token", "resposta da API");
  //     LoginSucess()
  //     navigate("/dashboard");
  //     return console.log(response);
  //   })
  //   .catch((err) => {
  //     LoginFailed()
  //     console.log(err);
  //   });
    
  // };
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

            <input id="password" type={showPassword? "text":"password" } {...register("password")} />
            <button onClick={tooglePassword} type="button">Toogle</button>

          </div>
          <p>{errors.password?.message}</p>

          <button className="btnLogin" type="submit">Login</button>

          <button onClick={goToRegister}>Ainda não tem conta ? Registre-se aqui :) </button>
        </form>
      </div>
    </Main>
  );
};

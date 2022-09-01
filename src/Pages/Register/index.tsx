import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import * as React from "react";
import { Input } from "@nextui-org/react";
import { useContext } from "react";
import { RegisterContext } from "../../Context/RegisterContext";

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
      .matches(
        /^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}/,
        "Telefone Inválido"
      )
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
    <>
      <div>
        <div>
          <h1>Registro</h1>
        </div>

        <form
          onSubmit={handleSubmit(async (data) => {
            await toRegister(data);
          })}
        >
          <Input label="Nome" placeholder="Nome" {...register("name")} />
          <span>{errors.name?.message}</span>

          <Input label="E-mail" placeholder="E-mail" {...register("email")} />
          <span>{errors.email?.message}</span>

          <Input
            label="Telefone"
            placeholder="Telefone"
            {...register("cellphone")}
          />
          <span>{errors.cellphone?.message}</span>

          <Input label="Idade" placeholder="Idade" {...register("age")} />
          <span>{errors.age?.message}</span>

          <Input label="URL" placeholder="URL" {...register("url")} />
          <span>{errors.url?.message}</span>

          <Input.Password
            labelPlaceholder="Password"
            initialValue="nextui123"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <Input
            label="Confirmação de senha"
            placeholder="Confirmação de senha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>

          <div>
            <button type="submit">Cadastrar</button>
            <button onClick={(event) => navigate("/login")}>
              Já possui registro ? Faça o seu login.
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import * as React from "react";
import { Input } from "@nextui-org/react";

const Register = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    cellphone: yup
      .string()
      .typeError("Telefone inválido")
      .positive("Um número de telefone não pode ser negativo")
      .integer("Um número de telefone não pode incluir um ponto decimal")
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
  } = useForm<>({ resolver: yupResolver(formSchema) });

  const user = (data: any) => {
    axios
      .post("api", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    return (
      <>
        <div>
          <div>
            <h1>Registro</h1>
          </div>
          {
            <form onSubmit={handleSubmit(user)}>
              <Input label="Nome" placeholder="Nome" {...register("name")} />
              <span>{errors.name?.message}</span>

              <Input
                label="E-mail"
                placeholder="E-mail"
                {...register("email")}
              />
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
              </div>
            </form>
          }
        </div>
      </>
    );
  };
};
export default Register;

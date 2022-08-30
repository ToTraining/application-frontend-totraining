import { useForm } from "react-hook-form";
 import{yupResolver} from "@hookform/resolvers/yup"
 import * as yup from "yup"
import axios from "axios";
import * as React from "react";
import InputPassword from "../Components/InputPassword";



 

 const Register =()=>{

    const formSchema=yup.object().shape({
        name:yup.string().required("Nome Obrigatório"),
        email: yup.string().required("Email obrigatório").email("E-mail inválido"),
        celfone:yup.string().typeError("Telefone inválido")
        .positive("Um número de telefone não pode ser negativo")
        .integer("Um número de telefone não pode incluir um ponto decimal")
        .min(8)
        .required("Telefone obrigatório"),
        age:yup.string().required("Idade obrigatório"),
        url:yup.string().required("Url obrigatório"),
        password:yup.string().required("Senha obrigatória").matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
        .matches(/(\d)/, "deve conter ao menos 1 número")
        .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
        .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
        confirmPassword:yup.string().oneOf([yup.ref('password')], "As senhas não coincidem")


    })
    const {register, handleSubmit, formState:{errors},}= useForm< > ({resolver:yupResolver(formSchema)}) 

const user =(data:any)=>{
    axios.post("api", data)
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)})

    interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function InputAdornments() {
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
}

return(
    <>
    <div>
        <div>
        <h1>Registro</h1>
        </div>
        {
            
<form onSubmit={handleSubmit(user)}>
<label htmlFor="name"/>
<input type="text" id="name" placeholder="Nome" {...register("name")}/>
<span>{errors.name?.message}</span>

<label htmlFor="email"/>
<input type="text" id="email" placeholder="E-mail" {...register("email")} />
<span>{errors.email?.message}</span>


<label htmlFor="celfone"/>
<input type="text" id="celfone" placeholder="Telefone"   {...register("celfone")}/>
<span>{errors.celfone?.message}</span>


<label htmlFor="age"/>
<input type="text" id="age" placeholder="Idade"  {...register("age")} />
<span>{errors.age?.message}</span>


<label htmlFor="url"/>
<input type="text" id="url" placeholder="Imagem de perfim(URL)"  {...register("url")} />
<span>{errors.url?.message}</span>



<label htmlFor="password"/>
<input type="text" id="password" placeholder="Senha"  {...register("password")} />

<InputPassword register={register} />
{/* Passar com contexto as funções e o register */}
<span>{errors.password?.message}</span>


<label htmlFor="confirmPassword"/>
<input type="text" id="confirmPassword" placeholder="Confirmação de senha"  {...register("confirmPassword")} />
<span>{errors.confirmPassword?.message}</span>


<div>
    <button type="submit" >Cadastrar</button>
</div>


</form>
        }
    </div>
    </>

)

 }
}
 export default Register
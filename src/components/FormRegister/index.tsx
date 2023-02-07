import { MainRegister } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../api";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  let navigate = useNavigate();

  const scheema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Formato inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigarória")
      .oneOf([yup.ref("password")], "Senhas devem coincidir"),

    phone: yup.string().required("Telefone Obrigatorio"),
  });

  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(scheema),
  });

  const onSubmitFunction = (data: any) => {
    api
      .post("/client", data)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainRegister>
      <></>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />

        <label htmlFor="confirmPassword">Confimar senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("confirmPassword")}
        />
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          placeholder="Digite aqui seu telefone"
          {...register("phone")}
        />

        <button type="submit" onClick={() => {}}>
          Cadastrar
        </button>
      </form>
    </MainRegister>
  );
};

export default FormRegister;

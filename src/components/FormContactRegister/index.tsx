import { MainRegister } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../api";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FormContactRegister = () => {
  let navigate = useNavigate();

  const scheema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Formato inválido"),
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
    const token = localStorage.getItem("clientToken");
    api
      .post("/contact", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        navigate("/home");
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

export default FormContactRegister;

import { useEffect } from "react";
import { MainLogin } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import api from "../../api";

const FormLogin = () => {
  let navigate = useNavigate();

  const scheema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Formato invalido"),
    password: yup.string().required("Senha obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scheema),
  });

  const onSubmitFunction = (data: FieldValues) => {
    api
      .post("/client/login", data)
      .then((res) => {
        localStorage.setItem("clientToken", res.data.token);
        toast.success("Sucesso", {
          className: "success-toast",
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
        });
        navigate("home");
      })
      .catch((err) => {
        if (err) {
          toast.error("Erro", {
            className: "error-toast",
            draggable: true,
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
          });
          console.log(err);
        }
      });
  };
  return (
    <MainLogin>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
          autoComplete="off"
        />
        {/* {<p>{errors.email?.message}</p>} */}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
          autoComplete="off"
        />
        {/* {<p>{errors.password?.message}</p>} */}
        <button>Enviar</button>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </form>
    </MainLogin>
  );
};

export default FormLogin;

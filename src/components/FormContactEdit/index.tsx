import { MainRegister } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../api";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FormContactEdit = () => {
  let navigate = useNavigate();

  const scheema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Formato inválido"),
    phone: yup.string(),
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
    const contactEmail = localStorage.getItem("contactEmail");

    api
      .get("/contact", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        let contact = res.data.find(function (obj: any) {
          return obj.email === contactEmail;
        });
        api
          .patch(`/contact/${contact.id}`, data, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            navigate("/home");
          })
          .catch((err) => {
            console.log(err);
          });
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
          Editar
        </button>
        <button
          onClick={() => {
            const token = localStorage.getItem("clientToken");
            const contactEmail = localStorage.getItem("contactEmail");
            api
              .get("/contact", {
                headers: { Authorization: `Bearer ${token}` },
              })
              .then((res) => {
                let contact = res.data.find(function (obj: any) {
                  return obj.email === contactEmail;
                });
                console.log(contact);
                api
                  .delete(`/contact/${contact.id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                  })
                  .then((res) => {
                    localStorage.removeItem("contactEmail");
                    navigate("/home");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Excluir
        </button>
      </form>
    </MainRegister>
  );
};

export default FormContactEdit;
